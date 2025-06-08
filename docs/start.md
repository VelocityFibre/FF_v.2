Here's a comprehensive prompt for Claude Code to start FibreFlow V2:

```markdown
# FibreFlow V2 - Fresh Build with Solid.js + Deno

## Project Overview
Build a modern fiber optic project management system from scratch using cutting-edge technology. This is a complete rebuild - NOT a conversion of existing code.

## Tech Stack
Frontend:
- Solid.js + SolidStart (with TypeScript)
- Kobalte (headless accessible components)
- Park UI or custom Tailwind components
- Tailwind CSS
- Vite (dev server)

Backend:
- Deno 2.3 runtime
- Hono web framework
- Deno KV (for caching/offline queue)
- Supabase (existing PostgreSQL database)

## Core Requirements
1. Hierarchical project management: Projects → Phases → Steps → Tasks
2. Real-time collaboration with live updates
3. Offline-first for field workers
4. Drag-and-drop task management
5. Visual project tracking (Gantt charts, Kanban boards)
6. Role-based access (Admin, Project Manager, Field Tech)

## Project Structure
```
fibreflow-v2/
├── apps/
│   ├── web/                 # SolidStart frontend
│   │   ├── src/
│   │   │   ├── components/  # UI components
│   │   │   ├── routes/      # SolidStart routes
│   │   │   ├── lib/         # Utilities
│   │   │   └── styles/      # Global styles
│   │   └── package.json
│   │
│   └── api/                 # Deno backend
│       ├── server.ts        # Main Hono server
│       ├── routes/          # API routes
│       ├── lib/             # Shared utilities
│       └── deno.json
│
└── packages/
    └── shared/              # Shared types
        └── types.ts
```

## Start with Phase 1: Core Foundation

### 1. Backend API Setup (Deno + Hono)
Create a Deno backend with:
- Basic Hono server setup
- Supabase client configuration
- CORS enabled
- Environment variables handling
- Health check endpoint

### 2. Frontend Foundation (SolidStart)
Create a SolidStart app with:
- TypeScript configuration
- Tailwind CSS setup
- Kobalte installation
- Basic routing structure
- Environment variables

### 3. First Feature: Project List
Build end-to-end:
- GET /api/projects endpoint
- Projects list page
- Project card component (using Kobalte + Tailwind)
- Loading and error states
- Real-time updates via Supabase

## Design Principles
1. **Performance First**: Leverage Solid's fine-grained reactivity
2. **Offline First**: Use Deno KV for queueing operations
3. **Type Safe**: Share types between frontend and backend
4. **Accessible**: Use Kobalte for WCAG compliance
5. **Beautiful**: Custom Tailwind design system

## Initial Tasks
1. Set up the monorepo structure
2. Create Deno backend with Hono
3. Create SolidStart frontend
4. Implement basic project CRUD
5. Add real-time subscriptions

## Example Code Structure

### Backend Route Example:
```typescript
// apps/api/routes/projects.ts
import { Hono } from "npm:hono";
import { supabase } from "../lib/supabase.ts";

export const projectRoutes = new Hono();

projectRoutes.get("/", async (c) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
    
  if (error) return c.json({ error: error.message }, 400);
  return c.json(data);
});
```

### Frontend Component Example:
```typescript
// apps/web/src/components/ProjectCard.tsx
import { Component } from "solid-js";
import { Card } from "@kobalte/core";

export const ProjectCard: Component<{ project: Project }> = (props) => {
  return (
    <Card.Root class="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <Card.Title class="text-xl font-semibold">
        {props.project.name}
      </Card.Title>
      <Card.Description class="text-gray-600">
        Status: {props.project.status}
      </Card.Description>
    </Card.Root>
  );
};
```

## Success Metrics
- Sub-50ms response times
- 60 FPS UI interactions
- Instant offline-to-online sync
- Zero accessibility warnings
- Beautiful, modern UI

## Start Now
Begin by creating the project structure and setting up the basic Deno backend. Focus on getting a "Hello World" running with both frontend and backend, then iterate from there.

Remember: This is a fresh start. Don't look at old React patterns. Build the best possible Solid.js + Deno application from scratch.
```

This prompt gives Claude Code clear direction to start building FibreFlow V2 with your chosen stack, emphasizing a fresh approach rather than conversion! 🚀
