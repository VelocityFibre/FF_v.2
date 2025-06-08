-- FibreFlow V2 Enhanced Workflow Database Schema
-- Supports fixed 5-phase structure with flexible parallel/sequential task execution

-- Core project table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'active', -- active, completed, cancelled, on_hold
    project_manager_id UUID REFERENCES auth.users(id),
    client_id UUID, -- Reference to client/customer
    start_date DATE,
    target_completion_date DATE,
    current_phase VARCHAR(50) DEFAULT 'planning', -- planning, design, implementation, testing, deployment
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id)
);

-- Fixed 5-phase structure for all projects
CREATE TABLE project_phases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    phase_name VARCHAR(50) NOT NULL, -- planning, design, implementation, testing, deployment
    sequence_order INTEGER NOT NULL, -- 1, 2, 3, 4, 5
    status VARCHAR(50) DEFAULT 'locked', -- locked, active, completed
    start_date DATE,
    target_end_date DATE,
    actual_end_date DATE,
    completion_percentage DECIMAL(5,2) DEFAULT 0,
    auto_unlock BOOLEAN DEFAULT true, -- Auto-advance when prerequisites met
    parallel_execution BOOLEAN DEFAULT false, -- Can run parallel with previous phase
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(project_id, phase_name),
    UNIQUE(project_id, sequence_order)
);

-- Phase dependencies (for complex prerequisite relationships)
CREATE TABLE phase_dependencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phase_id UUID REFERENCES project_phases(id) ON DELETE CASCADE,
    depends_on_phase_id UUID REFERENCES project_phases(id) ON DELETE CASCADE,
    dependency_type VARCHAR(50) DEFAULT 'completion', -- completion, percentage, specific_tasks
    required_percentage DECIMAL(5,2), -- For percentage-based dependencies
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Prevent circular dependencies
    CONSTRAINT no_self_dependency CHECK (phase_id != depends_on_phase_id)
);

-- Enhanced tasks table with dependency support
CREATE TABLE project_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phase_id UUID REFERENCES project_phases(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE, -- Denormalized for performance
    task_name VARCHAR(255) NOT NULL,
    description TEXT,
    sequence_order INTEGER NOT NULL,
    
    -- Assignment & Scheduling
    assignee_id UUID REFERENCES auth.users(id),
    auto_assign_role VARCHAR(50), -- Role to auto-assign when task unlocks
    due_date DATE,
    estimated_hours DECIMAL(8,2),
    actual_hours DECIMAL(8,2),
    
    -- Status & Progress
    status VARCHAR(50) DEFAULT 'not_started', -- not_started, in_progress, blocked, completed, cancelled
    priority VARCHAR(20) DEFAULT 'medium', -- low, medium, high, critical
    completion_percentage DECIMAL(5,2) DEFAULT 0,
    
    -- Workflow Control
    is_milestone BOOLEAN DEFAULT false,
    is_blocking BOOLEAN DEFAULT false, -- If true, blocks phase progression
    auto_unlock BOOLEAN DEFAULT true,
    parallel_execution BOOLEAN DEFAULT true, -- Can run parallel with other tasks
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    created_by UUID REFERENCES auth.users(id),
    
    UNIQUE(phase_id, sequence_order)
);

-- Task dependencies (flexible prerequisite system)
CREATE TABLE task_dependencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID REFERENCES project_tasks(id) ON DELETE CASCADE,
    depends_on_task_id UUID REFERENCES project_tasks(id) ON DELETE CASCADE,
    dependency_type VARCHAR(50) DEFAULT 'completion', -- completion, start, percentage
    required_percentage DECIMAL(5,2), -- For percentage-based dependencies
    lag_days INTEGER DEFAULT 0, -- Delay after dependency is met
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Prevent circular dependencies
    CONSTRAINT no_self_dependency CHECK (task_id != depends_on_task_id)
);

-- Comprehensive audit trail
CREATE TABLE task_audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID REFERENCES project_tasks(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    action VARCHAR(100) NOT NULL, -- created, assigned, started, completed, reassigned, etc.
    old_value JSONB,
    new_value JSONB,
    user_id UUID REFERENCES auth.users(id),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    notes TEXT,
    ip_address INET,
    user_agent TEXT
);

-- Phase template system (for future project types)
CREATE TABLE phase_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_name VARCHAR(255) NOT NULL,
    project_type VARCHAR(100), -- residential, commercial, enterprise
    phase_config JSONB NOT NULL, -- Full phase and task configuration
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id)
);

-- Task assignment rules and auto-assignment logic
CREATE TABLE assignment_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    phase_name VARCHAR(50),
    task_pattern VARCHAR(255), -- Regex or pattern for task names
    auto_assign_to_role VARCHAR(50),
    auto_assign_to_user_id UUID REFERENCES auth.users(id),
    priority_order INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notification preferences and delivery tracking
CREATE TABLE notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) UNIQUE,
    email_daily_tasks BOOLEAN DEFAULT true,
    email_weekly_summary BOOLEAN DEFAULT true,
    email_task_assigned BOOLEAN DEFAULT true,
    email_task_overdue BOOLEAN DEFAULT true,
    in_app_notifications BOOLEAN DEFAULT true,
    sms_critical_only BOOLEAN DEFAULT false,
    notification_hours_start INTEGER DEFAULT 8, -- 24-hour format
    notification_hours_end INTEGER DEFAULT 18,
    timezone VARCHAR(50) DEFAULT 'UTC',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notification delivery log
CREATE TABLE notification_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    notification_type VARCHAR(100), -- daily_tasks, weekly_summary, task_assigned, etc.
    delivery_method VARCHAR(50), -- email, sms, in_app
    status VARCHAR(50), -- sent, delivered, failed, bounced
    content_summary TEXT,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    delivered_at TIMESTAMP WITH TIME ZONE,
    error_message TEXT
);

-- Indexes for performance
CREATE INDEX idx_projects_manager ON projects(project_manager_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_project_phases_project ON project_phases(project_id);
CREATE INDEX idx_project_phases_status ON project_phases(status);
CREATE INDEX idx_project_tasks_assignee ON project_tasks(assignee_id);
CREATE INDEX idx_project_tasks_status ON project_tasks(status);
CREATE INDEX idx_project_tasks_due_date ON project_tasks(due_date);
CREATE INDEX idx_task_audit_log_task ON task_audit_log(task_id);
CREATE INDEX idx_task_audit_log_timestamp ON task_audit_log(timestamp);

-- Views for common queries
CREATE VIEW active_projects AS
SELECT 
    p.*,
    u.email as project_manager_email,
    COUNT(pt.id) as total_tasks,
    COUNT(pt.id) FILTER (WHERE pt.status = 'completed') as completed_tasks,
    ROUND(
        (COUNT(pt.id) FILTER (WHERE pt.status = 'completed')::decimal / 
         NULLIF(COUNT(pt.id), 0) * 100), 2
    ) as completion_percentage
FROM projects p
LEFT JOIN auth.users u ON p.project_manager_id = u.id
LEFT JOIN project_tasks pt ON p.id = pt.project_id
WHERE p.status = 'active'
GROUP BY p.id, u.email;

CREATE VIEW my_tasks AS
SELECT 
    pt.*,
    p.name as project_name,
    ph.phase_name,
    p.project_manager_id,
    CASE 
        WHEN pt.due_date < CURRENT_DATE THEN 'overdue'
        WHEN pt.due_date = CURRENT_DATE THEN 'due_today'
        WHEN pt.due_date <= CURRENT_DATE + INTERVAL '3 days' THEN 'due_soon'
        ELSE 'on_track'
    END as urgency_status
FROM project_tasks pt
JOIN project_phases ph ON pt.phase_id = ph.id
JOIN projects p ON pt.project_id = p.id
WHERE pt.status IN ('not_started', 'in_progress');

-- Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_audit_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies (basic - can be expanded based on actual auth structure)
CREATE POLICY "Users can view projects they're involved in" ON projects
    FOR SELECT USING (
        project_manager_id = auth.uid() OR
        id IN (SELECT project_id FROM project_tasks WHERE assignee_id = auth.uid())
    );

CREATE POLICY "Users can view tasks assigned to them or in their projects" ON project_tasks
    FOR SELECT USING (
        assignee_id = auth.uid() OR
        project_id IN (SELECT id FROM projects WHERE project_manager_id = auth.uid())
    );