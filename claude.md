markdown# FibreFlow V2 - Project Context for Claude

## Project Overview
FibreFlow V2 is a complete rebuild of a fiber optic project management system using modern, performance-focused technologies. This is a FRESH BUILD, not a migration of existing code.

## Tech Stack

### Frontend
- **Framework**: Solid.js + SolidStart (NOT React)
- **UI Components**: Park UI (built on Kobalte) - MUST USE PARK UI COMPONENTS
- **Styling**: Tailwind CSS via Park UI design tokens
- **State Management**: @tanstack/solid-query, solid-js/store
- **Build Tool**: Vite

### Backend  
- **Runtime**: Deno 2.3 (NOT Node.js)
- **Framework**: Hono
- **Cache/Queue**: Deno KV
- **Database**: Supabase (existing instance - DO NOT create new)
- **Real-time**: Supabase Realtime subscriptions

## Project Structure
fibreflow-v2/
├── apps/
│   ├── web/                 # SolidStart frontend (port 3000)
│   │   ├── src/
│   │   │   ├── components/  # Solid components
│   │   │   ├── routes/      # SolidStart routes
│   │   │   ├── lib/         # Utilities
│   │   │   └── styles/      # Global styles
│   │   └── package.json
│   │
│   └── api/                 # Deno backend (port 8000)
│       ├── server.ts        # Main Hono server
│       ├── routes/          # API routes
│       ├── lib/             # Utilities
│       └── deno.json
│
├── packages/
│   └── shared/              # Shared types
│       └── types.ts
│
├── claude.md                # This file
└── README.md

## Critical Rules (NEVER VIOLATE)

### Performance
- ✅ Response times MUST be < 50ms
- ✅ UI MUST handle 10,000+ tasks smoothly
- ✅ Use virtualization for lists > 100 items
- ✅ Memory usage must stay < 100MB

### Solid.js Patterns (NOT React!)
```typescript
// ✅ CORRECT - Solid.js
import { createSignal, createResource, For } from "solid-js";
const [count, setCount] = createSignal(0);
const [data] = createResource(fetchData);

// ❌ WRONG - React patterns
import { useState, useEffect } from "react"; // NO!
const [count, setCount] = useState(0); // NO!
Deno Patterns
typescript// ✅ CORRECT - Deno imports
import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "npm:hono@4";

// ❌ WRONG - Node patterns
const express = require('express'); // NO!
import express from 'express'; // NO!
Database Rules

✅ Connect to EXISTING Supabase instance
✅ Use existing schema (projects, tasks, etc.)
✅ Implement soft delete (archived_at timestamps)
❌ NEVER create new Supabase project
❌ NEVER delete records permanently

### Park UI Requirements
✅ MUST use Park UI components from https://park-ui.com/docs
✅ Install Park UI for Solid: `npm install @park-ui/solid`
✅ Use Park UI components: Card, Button, Input, etc.
✅ Follow Park UI examples and patterns
❌ NEVER create custom Kobalte components when Park UI exists
❌ NEVER use raw @kobalte/core imports

Core Features
1. Enhanced Workflow System
Fixed 5-Phase Structure: Planning → Design → Implementation → Testing → Deployment
- Parallel execution support (Design/Implementation/Testing can overlap)
- Complex task dependencies with percentage and milestone triggers
- Auto-assignment based on roles and rules
- Critical path analysis and bottleneck identification

2. Project Hierarchy
Projects → Phases → Tasks (with flexible dependencies)
- Each level has status tracking and progress calculation
- Drag-and-drop reordering with dependency validation
- Real-time updates via WebSocket events
- Comprehensive audit trail for all actions

3. Enhanced Views & Dashboards

/projects - Project list with workflow status and progress
/projects/[id] - Project detail with phase timeline and task dependencies  
/projects/[id]/workflow - Workflow management and phase progression
/tasks/my-tasks - Personal task dashboard with urgency indicators
/kanban - Drag-and-drop Kanban board with dependency validation
/gantt - Gantt chart with critical path highlighting
/admin/workflow - Admin interface for phase/task template management

4. Offline Support

Use Deno KV for offline queue
Sync when connection restored
Optimistic UI updates

Component Patterns
Solid.js Component Example
typescript// ✅ CORRECT Solid pattern
import { Component, createSignal, For } from "solid-js";
import { Card } from "~/components/ui/card";

export const ProjectList: Component = () => {
  const [projects] = createResource(fetchProjects);
  
  return (
    <div class="grid grid-cols-3 gap-4">
      <For each={projects()}>
        {project => <ProjectCard project={project} />}
      </For>
    </div>
  );
};
API Route Example
typescript// ✅ CORRECT Deno/Hono pattern
import { Hono } from "npm:hono";
import { supabase } from "../lib/supabase.ts";

const app = new Hono();

app.get("/api/projects", async (c) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .is("archived_at", null);
    
  return c.json(data);
});
Performance Optimizations
Frontend

Use createMemo for computed values
Implement virtual scrolling for large lists
Lazy load routes with lazy()
Use Solid's fine-grained reactivity

Backend

Cache with Deno KV
Use connection pooling
Implement pagination
Stream large responses

Common Pitfalls to Avoid
❌ DON'T Do This:
typescript// React patterns in Solid
useEffect(() => {}, []); // NO!
useState(); // NO!

// Node patterns in Deno
require(); // NO!
process.env; // NO! Use Deno.env.get()

// Creating new Supabase instance
createClient(); // NO! Use existing
✅ DO This Instead:
typescript// Solid patterns
createEffect(() => {});
createSignal();

// Deno patterns  
import from "npm:";
Deno.env.get();

// Connect to existing Supabase
// Use provided credentials
Development Workflow
Start Commands
bash# Frontend (in apps/web/)
npm run dev

# Backend (in apps/api/)
deno run --allow-all --watch server.ts
Git Workflow

Feature branches for new work
Commit messages: "feat: ", "fix: ", "chore: "
PR before merging to main

Testing Requirements

Frontend: Vitest for Solid components
Backend: Deno's built-in test runner
E2E: Playwright

Questions?
If unclear about any patterns or approaches, default to:

Solid.js documentation (not React)
Deno documentation (not Node)
Performance over features
Simplicity over complexity

## Frontend-First Implementation Priority

### Phase 1: Core Workflow UI (Frontend + UI-Components) - START HERE
1. Build role-aware MyTasksDashboard component (field techs see assigned only)
2. Create ClientProgressPortal with high-level project progress
3. Implement WorkflowManagement interface for PMs (task assignment/dependencies)
4. Build ProjectOverview with role-based information filtering
5. Add phase timeline visualization with Park UI components

### Phase 2: Workflow Logic Integration (Backend)
1. Create role-based API endpoints (/api/tasks/my-tasks, /api/projects/client-view)
2. Implement task assignment logic with role fallbacks
3. Build dependency resolution system (linear + complex dependencies)
4. Add progress calculation adapted to user roles
5. Create audit logging for task actions

### Phase 3: Schema Adaptation (Backend)
1. Adapt existing Projects → Phases → Steps → Tasks to new workflow
2. Add role permissions and assignment rules tables
3. Create client visibility controls
4. Implement notification system with Supabase Edge Functions

### Key Files to Reference:
- docs/refined-workflow-requirements.md - USER-APPROVED requirements and role permissions
- docs/workflow-engine-architecture.md - Implementation patterns  
- docs/workflow-database-schema.sql - Database schema (for Phase 3)

### Role-Based Implementation Rules:
- Field Technicians: Can ONLY view assigned tasks, cannot reassign
- Clients: See high-level progress only, no individual task details
- Project Managers: Can reassign within their projects
- Admins: Can reassign any task
- Mixed task progression: Some linear, some dependency-based, all role-aware

Remember: This is a PERFORMANCE-FIRST rebuild showcasing modern web technologies with sophisticated workflow management!

This `claude.md` file will give Claude Code (and Claude Squad instances) clear context about your project, preventing React/Node patterns from creeping in and ensuring consistent, high-performance code! 🚀
