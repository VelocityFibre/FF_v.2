# Refined Workflow Requirements - FibreFlow V2

## Task Progression Strategy

### Mixed Progression Model
```typescript
interface TaskProgressionRules {
  // Some tasks are strictly linear within phases
  linearTasks: {
    "site_survey" → "permits_application" → "design_approval"
  },
  
  // Some tasks have complex dependencies 
  dependencyBasedTasks: {
    "cable_installation": {
      dependsOn: ["trenching_complete", "permits_approved"],
      canStartAt: 80% // Can start when dependencies are 80% done
    }
  },
  
  // All tasks use role-based auto-assignment
  roleAssignment: {
    "site_survey": { role: "field_technician", fallback: "team_lead" },
    "design_review": { role: "design_engineer", fallback: "project_manager" }
  }
}
```

## Enhanced Role-Based Permissions

### User Roles & Capabilities
```typescript
interface UserRoles {
  'admin': {
    permissions: {
      reassignTasks: 'any',
      viewTasks: 'all', 
      modifyWorkflow: true,
      manageUsers: true,
      viewReports: 'all'
    }
  },
  
  'project_manager': {
    permissions: {
      reassignTasks: 'project_tasks', // Only within their projects
      viewTasks: 'project_tasks',
      modifyWorkflow: true,
      createProjects: true,
      viewReports: 'project_reports'
    }
  },
  
  'team_lead': {
    permissions: {
      reassignTasks: 'team_tasks', // Only tasks assigned to their team
      viewTasks: 'team_and_assigned',
      modifyWorkflow: false,
      viewReports: 'team_reports'
    }
  },
  
  'field_technician': {
    permissions: {
      reassignTasks: false, // Cannot reassign any tasks
      viewTasks: 'assigned_only', // Only see their assigned tasks
      modifyWorkflow: false,
      updateTaskProgress: true, // Can update progress on assigned tasks
      viewReports: 'personal_only'
    }
  },
  
  'design_engineer': {
    permissions: {
      reassignTasks: 'design_tasks', // Only design-related tasks
      viewTasks: 'design_and_assigned',
      modifyWorkflow: false,
      approveDesigns: true,
      viewReports: 'design_reports'
    }
  },
  
  'client': {
    permissions: {
      reassignTasks: false,
      viewTasks: 'public_milestones', // Only see major milestones
      modifyWorkflow: false,
      viewProgress: true, // See overall project progress
      viewReports: 'client_reports' // Sanitized progress reports
    }
  }
}
```

## Client Progress Visibility

### Client Dashboard Features
```typescript
interface ClientDashboard {
  projectOverview: {
    projectName: string
    currentPhase: 'planning' | 'design' | 'implementation' | 'testing' | 'deployment'
    overallProgress: number // 0-100%
    estimatedCompletion: Date
    projectManager: { name: string, contact: string }
  },
  
  phaseProgress: {
    planning: { 
      status: 'completed', 
      completedDate: Date,
      publicSummary: "Site survey and permits completed" 
    },
    design: { 
      status: 'in_progress', 
      progress: 65,
      publicSummary: "Network design 65% complete"
    },
    implementation: { 
      status: 'locked',
      estimatedStart: Date 
    }
    // etc...
  },
  
  milestones: [
    {
      name: "Site Survey Complete",
      date: Date,
      status: 'completed',
      description: "Initial site assessment finished"
    },
    {
      name: "Design Approval",
      date: Date,
      status: 'pending',
      description: "Awaiting final design approval"
    }
  ],
  
  publicUpdates: [
    {
      date: Date,
      title: "Installation Begin",
      message: "Fiber installation has commenced as scheduled",
      author: "Project Manager"
    }
  ],
  
  nextMilestone: {
    name: "Installation Complete",
    estimatedDate: Date,
    description: "Physical fiber installation finished"
  }
}
```

### Public vs Private Task Information
```typescript
interface TaskVisibility {
  // What field technicians see (assigned tasks only)
  fieldTechView: {
    taskName: string
    description: string
    dueDate: Date
    status: 'not_started' | 'in_progress' | 'completed'
    canUpdateProgress: boolean
    instructions: string[]
    attachments: File[]
  },
  
  // What clients see (high-level only)
  clientView: {
    phaseName: string
    phaseProgress: number
    publicDescription: string
    estimatedCompletion: Date
    // No individual task details
  },
  
  // What project managers see (everything)
  managerView: {
    // Full task details + workflow management
    // Reassignment capabilities
    // Dependency management
    // Resource allocation
  }
}
```

## Simplified Implementation Priority

### Phase 1: Frontend Workflow UI (Focus First)
```typescript
// Priority components to build first
interface Phase1Components {
  // Role-aware task dashboards
  "MyTasksDashboard": {
    shows: "tasks assigned to current user",
    features: ["progress updates", "task details", "due date tracking"]
  },
  
  // Client progress portal  
  "ClientProgressPortal": {
    shows: "high-level project progress",
    features: ["phase timeline", "milestone tracking", "public updates"]
  },
  
  // Manager workflow interface
  "WorkflowManagement": {
    shows: "project workflow control",
    features: ["task assignment", "dependency management", "phase progression"]
  },
  
  // Universal project overview
  "ProjectOverview": {
    shows: "project status adapted to user role",
    features: ["progress visualization", "role-appropriate task lists"]
  }
}
```

### Phase 2: Workflow Logic (Backend Integration)
- Implement role-based task filtering
- Build auto-assignment engine with role fallbacks
- Create dependency resolution system
- Add progress calculation for client views

### Phase 3: Schema Adaptation
- Adapt existing Projects → Phases → Steps → Tasks to new workflow
- Add role permissions table
- Create client visibility controls

## Key Implementation Questions Resolved

### ✅ Task Sequence: 
Mixed approach - some linear, some dependency-based, all role-aware

### ✅ Reassignment Rules:
- **Admins**: Can reassign any task
- **Project Managers**: Can reassign within their projects  
- **Team Leads**: Can reassign within their team
- **Field Techs**: Cannot reassign (view-only)

### ✅ Field Technician Access:
View assigned tasks only, can update progress, cannot reassign

### ✅ Client Visibility:
High-level progress, milestones, public updates - no detailed task information

### ✅ Implementation Focus:
Frontend/workflow first, schema adaptation later

This refined approach balances sophisticated workflow management with clear role boundaries and appropriate information visibility for each user type.