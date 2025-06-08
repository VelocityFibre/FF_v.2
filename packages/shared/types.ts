// FibreFlow V2 Shared Types

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
}

export type UserRole = 
  | 'admin'
  | 'project_manager' 
  | 'team_lead'
  | 'design_engineer'
  | 'field_technician'
  | 'client'

export interface Project {
  id: string
  name: string
  description?: string
  status: ProjectStatus
  projectManagerId: string
  clientId?: string
  startDate?: Date
  targetCompletionDate?: Date
  currentPhase: ProjectPhase
  completionPercentage: number
  createdAt: Date
  updatedAt: Date
}

export type ProjectStatus = 'active' | 'completed' | 'cancelled' | 'on_hold'
export type ProjectPhase = 'planning' | 'design' | 'implementation' | 'testing' | 'deployment'

export interface Task {
  id: string
  projectId: string
  phaseId: string
  taskName: string
  description?: string
  sequenceOrder: number
  assigneeId?: string
  autoAssignRole?: string
  dueDate?: Date
  estimatedHours?: number
  actualHours?: number
  status: TaskStatus
  priority: TaskPriority
  completionPercentage: number
  isMilestone: boolean
  isBlocking: boolean
  parallelExecution: boolean
  dependencies: string[] // Array of task IDs
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
}

export type TaskStatus = 'not_started' | 'in_progress' | 'blocked' | 'completed' | 'cancelled'
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical'

export interface Phase {
  id: string
  projectId: string
  phaseName: ProjectPhase
  sequenceOrder: number
  status: PhaseStatus
  startDate?: Date
  targetEndDate?: Date
  actualEndDate?: Date
  completionPercentage: number
  parallelExecution: boolean
  createdAt: Date
  updatedAt: Date
}

export type PhaseStatus = 'locked' | 'active' | 'completed'

// UI-specific types for dashboards
export interface TaskWithProject extends Task {
  projectName: string
  phaseName: string
  urgencyStatus: 'overdue' | 'due_today' | 'due_soon' | 'on_track'
}

export interface ProjectProgress {
  project: Project
  phases: PhaseProgress[]
  overallProgress: number
  nextMilestone?: {
    name: string
    estimatedDate: Date
    description: string
  }
}

export interface PhaseProgress {
  phase: Phase
  progress: number
  tasksTotal: number
  tasksCompleted: number
  status: PhaseStatus
}

// Client-facing types (sanitized)
export interface ClientProjectView {
  projectName: string
  currentPhase: ProjectPhase
  overallProgress: number
  estimatedCompletion?: Date
  projectManager: {
    name: string
    contact: string
  }
  phaseProgress: {
    [K in ProjectPhase]: {
      status: PhaseStatus
      progress: number
      publicSummary?: string
      completedDate?: Date
      estimatedStart?: Date
    }
  }
  milestones: {
    name: string
    date: Date
    status: 'completed' | 'pending' | 'in_progress'
    description: string
  }[]
  publicUpdates: {
    date: Date
    title: string
    message: string
    author: string
  }[]
}

// API Response types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Role permissions
export interface RolePermissions {
  reassignTasks: 'none' | 'assigned' | 'team_tasks' | 'project_tasks' | 'any'
  viewTasks: 'assigned_only' | 'team_and_assigned' | 'project_tasks' | 'all'
  modifyWorkflow: boolean
  viewReports: 'personal_only' | 'team_reports' | 'project_reports' | 'all'
  manageUsers?: boolean
  createProjects?: boolean
  approveDesigns?: boolean
  updateTaskProgress?: boolean
  viewProgress?: boolean
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  admin: {
    reassignTasks: 'any',
    viewTasks: 'all',
    modifyWorkflow: true,
    viewReports: 'all',
    manageUsers: true,
    createProjects: true
  },
  project_manager: {
    reassignTasks: 'project_tasks',
    viewTasks: 'project_tasks', 
    modifyWorkflow: true,
    viewReports: 'project_reports',
    createProjects: true
  },
  team_lead: {
    reassignTasks: 'team_tasks',
    viewTasks: 'team_and_assigned',
    modifyWorkflow: false,
    viewReports: 'team_reports'
  },
  design_engineer: {
    reassignTasks: 'assigned',
    viewTasks: 'team_and_assigned',
    modifyWorkflow: false,
    viewReports: 'team_reports',
    approveDesigns: true
  },
  field_technician: {
    reassignTasks: 'none',
    viewTasks: 'assigned_only',
    modifyWorkflow: false,
    viewReports: 'personal_only',
    updateTaskProgress: true
  },
  client: {
    reassignTasks: 'none',
    viewTasks: 'assigned_only',
    modifyWorkflow: false,
    viewReports: 'personal_only',
    viewProgress: true
  }
}