markdown# FibreFlow V2 - Project Context for Claude

## Project Overview
FibreFlow V2 is a complete rebuild of a fiber optic project management system using modern, performance-focused technologies. This is a FRESH BUILD, not a migration of existing code.

## Tech Stack

### Frontend
- **Framework**: Solid.js + SolidStart (NOT React)
- **UI Components**: Kobalte (headless) + Park UI or custom Tailwind
- **Styling**: Tailwind CSS
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

Core Features
1. Project Hierarchy
Projects → Phases → Steps → Tasks

Each level has status tracking
Drag-and-drop reordering
Real-time updates

2. Views

/projects - Project list with cards
/projects/[id] - Project detail with hierarchy
/kanban - Kanban board for tasks
/gantt - Gantt chart visualization

3. Offline Support

Use Deno KV for offline queue
Sync when connection restored
Optimistic UI updates

Component Patterns
Solid.js Component Example
typescript// ✅ CORRECT Solid pattern
import { Component, createSignal, For } from "solid-js";
import { Card } from "@kobalte/core";

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

Remember: This is a PERFORMANCE-FIRST rebuild showcasing modern web technologies!

This `claude.md` file will give Claude Code (and Claude Squad instances) clear context about your project, preventing React/Node patterns from creeping in and ensuring consistent, high-performance code! 🚀
