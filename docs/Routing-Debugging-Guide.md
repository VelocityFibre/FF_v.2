# SolidJS/Vinxi File-Based Routing - Debugging Guide

## The Problem We Solved
Spent hours debugging why `/projects` route wasn't working, when the issue was simply a file vs folder naming conflict.

## File-Based Routing Rules

### 1. Folder Takes Precedence Over File
If you have both:
- `routes/projects.tsx` (file)
- `routes/projects/` (folder)

**The folder wins!** The file will be ignored completely.

### 2. Index Files Are Required for Folder Routes
For a route like `/projects` to work when you have a `routes/projects/` folder, you MUST have:
- `routes/projects/index.tsx`

### 3. Nested Route Structure
```
/projects                    → routes/projects/index.tsx
/projects/123               → routes/projects/[id]/index.tsx  
/projects/123/timeline      → routes/projects/[id]/timeline.tsx
/projects/123/workflow      → routes/projects/[id]/workflow.tsx
```

## Debugging Process (Follow This Order!)

### ✅ Step 1: Verify File Structure
```bash
# Check if your route file exists and is in the right place
ls -la src/routes/
ls -la src/routes/projects/
```

**Questions to ask:**
- Does the file exist?
- Is it in the right folder?
- Are there naming conflicts?

### ✅ Step 2: Check for File vs Folder Conflicts
```bash
# This is a conflict - folder wins!
src/routes/projects.tsx        ❌ (ignored)
src/routes/projects/           ✅ (active)
```

**Fix:** Either delete the file or move content to `projects/index.tsx`

### ✅ Step 3: Console Check
Open browser dev tools and look for:
- Route mounting messages
- Component loading logs
- Any 404 or routing errors

### ❌ Step 4: Only Then Debug Complex Issues
- Data loading problems
- Component rendering issues
- CSS/styling problems
- Import/export errors

## Common Mistakes & Solutions

### Mistake 1: Creating File When Folder Exists
```bash
# Wrong - creates conflict
src/routes/projects.tsx        
src/routes/projects/[id]/

# Right - use index file in folder  
src/routes/projects/index.tsx
src/routes/projects/[id]/
```

### Mistake 2: Missing Index File
```bash
# Wrong - /projects won't work
src/routes/projects/
  └── [id]/
      └── index.tsx

# Right - /projects works now
src/routes/projects/
  ├── index.tsx              ← This file needed!
  └── [id]/
      └── index.tsx
```

### Mistake 3: Over-Engineering Debug Process
```typescript
// Wrong approach - complex debugging first
const ProjectsPage = () => {
  console.log('Component loading...')
  console.log('Data:', mockAPI.getAllProjects())
  console.log('Length:', projects?.length)
  // ... 50 lines of debug code
}

// Right approach - check file location first!
// Is this file in routes/projects/index.tsx?
// Are there any naming conflicts?
```

## Prevention Checklist

Before creating new routes:

1. ✅ Check if a folder with the same name exists
2. ✅ Decide: file route OR folder route (not both)
3. ✅ If using folder, create `index.tsx` for base route
4. ✅ Test the route immediately after creation
5. ✅ Only add complex logic after basic routing works

## Quick Commands for Route Debugging

```bash
# Check route structure
find src/routes -name "*.tsx" | sort

# Look for conflicts
ls -la src/routes/ | grep projects

# Check server logs
# Look for "No route matched" warnings
```

## The Golden Rule

**Occam's Razor for Routing:**
> The simplest explanation (wrong file location) is usually correct.

Always check file structure FIRST, complex debugging LAST.

---

*This guide was created after spending hours debugging a simple file vs folder naming conflict. Don't repeat this mistake!*