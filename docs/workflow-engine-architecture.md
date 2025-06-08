# FibreFlow V2 Workflow Engine Architecture

## Overview

The FibreFlow V2 workflow engine supports the fixed 5-phase structure (Planning → Design → Implementation → Testing → Deployment) with flexible parallel/sequential execution and complex dependency management.

## Core Components

### 1. Workflow State Machine

```typescript
interface WorkflowEngine {
  // Phase Management
  initializeProject(projectId: string): Promise<void>
  advancePhase(projectId: string, phaseId: string): Promise<boolean>
  checkPhaseUnlockConditions(phaseId: string): Promise<boolean>
  
  // Task Management  
  unlockTasks(phaseId: string): Promise<string[]>
  assignTask(taskId: string, userId: string): Promise<void>
  completeTask(taskId: string, completionData: TaskCompletion): Promise<void>
  
  // Dependency Resolution
  resolveDependencies(taskId: string): Promise<DependencyStatus>
  calculateCriticalPath(projectId: string): Promise<CriticalPath>
}
```

### 2. Phase Progression Logic

#### Fixed 5-Phase Structure
```typescript
const PHASES = [
  { name: 'planning', order: 1, canRunParallel: false },
  { name: 'design', order: 2, canRunParallel: true },
  { name: 'implementation', order: 3, canRunParallel: true },
  { name: 'testing', order: 4, canRunParallel: true },
  { name: 'deployment', order: 5, canRunParallel: false }
] as const;
```

#### Phase Unlock Conditions
1. **Sequential Requirement**: Previous phase must be at least 80% complete
2. **Dependency Check**: All blocking tasks in prerequisite phases completed
3. **Parallel Execution**: Design, Implementation, and Testing can overlap based on task dependencies
4. **Manual Override**: Project managers can force-unlock phases with audit trail

### 3. Task Dependency System

#### Dependency Types
```typescript
type DependencyType = 
  | 'completion'     // Task must be 100% complete
  | 'start'         // Task must be started (>0% complete)  
  | 'percentage'    // Task must reach X% completion
  | 'milestone'     // Specific milestone must be reached

interface TaskDependency {
  taskId: string
  dependsOnTaskId: string
  dependencyType: DependencyType
  requiredPercentage?: number
  lagDays?: number // Delay after dependency is met
}
```

#### Dependency Resolution Algorithm
```typescript
class DependencyResolver {
  async canUnlockTask(taskId: string): Promise<boolean> {
    const dependencies = await this.getTaskDependencies(taskId)
    
    for (const dep of dependencies) {
      const dependentTask = await this.getTask(dep.dependsOnTaskId)
      
      switch (dep.dependencyType) {
        case 'completion':
          if (dependentTask.status !== 'completed') return false
          break
        case 'start':
          if (dependentTask.status === 'not_started') return false
          break
        case 'percentage':
          if (dependentTask.completionPercentage < dep.requiredPercentage) return false
          break
      }
      
      // Check lag days
      if (dep.lagDays > 0) {
        const lagEndDate = addDays(dependentTask.completedAt, dep.lagDays)
        if (new Date() < lagEndDate) return false
      }
    }
    
    return true
  }
}
```

## 4. Parallel Execution Framework

### Parallel Phase Rules
```typescript
interface PhaseExecutionRules {
  planning: {
    mustCompleteFirst: true,
    canRunParallel: []
  },
  design: {
    prerequisite: 'planning at 80%',
    canRunParallel: ['implementation'] // Some impl tasks can start
  },
  implementation: {
    prerequisite: 'design at 60%',
    canRunParallel: ['testing'] // Some testing can start early
  },
  testing: {
    prerequisite: 'implementation at 40%',
    canRunParallel: ['deployment'] // Deployment prep can start
  },
  deployment: {
    prerequisite: 'testing at 90%',
    canRunParallel: []
  }
}
```

### Task-Level Parallelism
```typescript
class ParallelExecutionManager {
  async getUnlockableTasksInPhase(phaseId: string): Promise<Task[]> {
    const phase = await this.getPhase(phaseId)
    const allTasks = await this.getPhaseTasks(phaseId)
    const unlockableTasks = []
    
    for (const task of allTasks) {
      if (task.status !== 'not_started') continue
      
      // Check if all dependencies are met
      const canUnlock = await this.dependencyResolver.canUnlockTask(task.id)
      if (canUnlock) {
        unlockableTasks.push(task)
      }
    }
    
    return unlockableTasks
  }
}
```

## 5. Auto-Assignment System

### Assignment Rules Engine
```typescript
interface AssignmentRule {
  projectId?: string
  phaseName?: string  
  taskPattern: string // Regex pattern for task names
  autoAssignToRole?: string
  autoAssignToUserId?: string
  priorityOrder: number
}

class AutoAssignmentEngine {
  async assignNewTask(task: Task): Promise<string | null> {
    const rules = await this.getAssignmentRules(task.projectId, task.phaseName)
    
    for (const rule of rules.sort(r => r.priorityOrder)) {
      if (this.matchesPattern(task.taskName, rule.taskPattern)) {
        if (rule.autoAssignToUserId) {
          return rule.autoAssignToUserId
        }
        if (rule.autoAssignToRole) {
          return await this.findUserByRole(rule.autoAssignToRole, task.projectId)
        }
      }
    }
    
    // Fallback to project manager
    const project = await this.getProject(task.projectId)
    return project.projectManagerId
  }
}
```

## 6. Progress Tracking & Metrics

### Real-time Progress Calculation
```typescript
class ProgressTracker {
  async calculateProjectProgress(projectId: string): Promise<ProjectProgress> {
    const phases = await this.getProjectPhases(projectId)
    const totalWeight = phases.reduce((sum, p) => sum + p.weight, 0)
    
    let weightedProgress = 0
    for (const phase of phases) {
      const phaseProgress = await this.calculatePhaseProgress(phase.id)
      weightedProgress += (phaseProgress * phase.weight) / totalWeight
    }
    
    return {
      overallProgress: Math.round(weightedProgress),
      phases: phases.map(p => ({
        name: p.phaseName,
        progress: this.calculatePhaseProgress(p.id),
        status: p.status
      }))
    }
  }
  
  async calculatePhaseProgress(phaseId: string): Promise<number> {
    const tasks = await this.getPhaseTasks(phaseId)
    if (tasks.length === 0) return 0
    
    const totalWeight = tasks.reduce((sum, t) => sum + (t.weight || 1), 0)
    const completedWeight = tasks
      .filter(t => t.status === 'completed')
      .reduce((sum, t) => sum + (t.weight || 1), 0)
    
    return Math.round((completedWeight / totalWeight) * 100)
  }
}
```

## 7. Critical Path Analysis

```typescript
class CriticalPathAnalyzer {
  async calculateCriticalPath(projectId: string): Promise<CriticalPath> {
    const tasks = await this.getAllProjectTasks(projectId)
    const dependencies = await this.getAllTaskDependencies(projectId)
    
    // Build dependency graph
    const graph = this.buildDependencyGraph(tasks, dependencies)
    
    // Calculate earliest and latest start times
    const schedule = this.calculateSchedule(graph)
    
    // Find critical path (tasks with zero float)
    const criticalTasks = schedule.filter(task => task.float === 0)
    
    return {
      criticalTasks: criticalTasks.map(t => t.id),
      projectDuration: Math.max(...schedule.map(t => t.latestFinish)),
      bottlenecks: this.identifyBottlenecks(schedule)
    }
  }
}
```

## 8. Event-Driven Architecture

### Workflow Events
```typescript
interface WorkflowEvent {
  type: 'task_completed' | 'phase_advanced' | 'task_assigned' | 'dependency_met'
  payload: any
  timestamp: Date
  userId: string
  projectId: string
}

class WorkflowEventHandler {
  async handleTaskCompleted(event: TaskCompletedEvent): Promise<void> {
    // 1. Update task audit log
    await this.auditLogger.logTaskAction(event)
    
    // 2. Check and unlock dependent tasks
    const dependentTasks = await this.getDependentTasks(event.taskId)
    for (const task of dependentTasks) {
      if (await this.dependencyResolver.canUnlockTask(task.id)) {
        await this.unlockAndAssignTask(task.id)
      }
    }
    
    // 3. Check phase progression
    const phase = await this.getTaskPhase(event.taskId)
    if (await this.canAdvancePhase(phase.id)) {
      await this.advancePhase(phase.projectId, phase.id)
    }
    
    // 4. Trigger notifications
    await this.notificationService.sendTaskCompletionNotifications(event)
  }
}
```

## 9. Integration Points

### API Endpoints
```typescript
// Phase Management
POST /api/projects/:id/initialize-workflow
GET  /api/projects/:id/workflow-status
POST /api/projects/:id/phases/:phaseId/advance

// Task Management  
GET  /api/tasks/my-tasks
POST /api/tasks/:id/assign
POST /api/tasks/:id/complete
GET  /api/tasks/:id/dependencies

// Progress & Reporting
GET  /api/projects/:id/progress
GET  /api/projects/:id/critical-path
GET  /api/reports/daily-tasks
GET  /api/reports/team-progress
```

### Real-time Updates
```typescript
// WebSocket events for live updates
interface WorkflowWebSocketEvents {
  'task:assigned': TaskAssignedEvent
  'task:completed': TaskCompletedEvent  
  'phase:advanced': PhaseAdvancedEvent
  'progress:updated': ProgressUpdatedEvent
}
```

## 10. Performance Considerations

### Optimization Strategies
1. **Dependency Graph Caching**: Cache dependency calculations
2. **Progress Calculation**: Use materialized views for heavy calculations
3. **Event Batching**: Batch workflow events to prevent cascade spam
4. **Async Processing**: Use background jobs for complex operations

### Monitoring & Observability
```typescript
interface WorkflowMetrics {
  avgTaskCompletionTime: number
  phaseProgressionRate: number
  dependencyResolutionTime: number
  autoAssignmentSuccessRate: number
}
```

This architecture provides the flexible, scalable workflow engine needed for FibreFlow V2's sophisticated project management requirements.