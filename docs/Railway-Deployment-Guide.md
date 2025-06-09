# Railway Deployment Guide

## Overview
This guide covers deploying FibreFlow V2 to Railway, including troubleshooting common monorepo deployment issues.

## Project Structure
FibreFlow V2 uses a monorepo structure with the main application in `apps/web/`:

```
fibreflow-v2/
├── package.json          # Root workspace configuration
├── railway.json          # Railway deployment config
├── apps/
│   └── web/              # Main SolidStart application
│       ├── package.json  # App-specific dependencies
│       └── src/          # Application source code
└── packages/
    └── shared/           # Shared types and utilities
```

## Configuration Files

### Root package.json
Required for Nixpacks to recognize the monorepo structure:

```json
{
  "name": "fibreflow-v2",
  "private": true,
  "type": "module",
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "build": "cd apps/web && npm run build",
    "start": "cd apps/web && npm run start"
  }
}
```

### railway.json
Explicit deployment instructions for Railway:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "cd apps/web && npm ci && npm run build",
    "watchPatterns": ["apps/web/**"]
  },
  "deploy": {
    "startCommand": "cd apps/web && npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100
  }
}
```

## Deployment Process

### Initial Setup
1. Connect your GitHub repository to Railway
2. Ensure `package.json` and `railway.json` exist at root level
3. Railway will automatically detect the Node.js project

### Build Process
Railway's Nixpacks will:
1. Detect Node.js from root `package.json`
2. Install dependencies in `apps/web/`
3. Run the build command
4. Start the application

### Environment Variables
Set these in Railway dashboard:
- `NODE_ENV=production`
- Any other app-specific variables

## Troubleshooting

### Common Issues

#### 1. "Nixpacks was unable to generate a build plan"
**Cause**: Missing root `package.json`
**Solution**: Ensure `package.json` exists at repository root with workspace configuration

#### 2. Build failures with "npm: command not found"
**Cause**: Incorrect build command paths
**Solution**: Verify `buildCommand` navigates to correct directory: `cd apps/web && npm ci && npm run build`

#### 3. Application fails to start
**Cause**: Wrong start command directory
**Solution**: Ensure `startCommand` runs from app directory: `cd apps/web && npm start`

#### 4. Changes not triggering new deployments
**Cause**: Watch patterns not configured
**Solution**: Add `"watchPatterns": ["apps/web/**"]` to railway.json

### Deployment Logs
Monitor Railway logs for:
- Build command execution
- Dependency installation
- Application startup
- Health check status

### Force Deployment
If Railway doesn't detect changes:
1. Make a small commit (e.g., update comment)
2. Push to trigger new deployment
3. Check Railway dashboard for build progress

## Authentication System
The deployed application includes:
- Login/logout functionality
- Role-based access control
- Test accounts with password "password"
- Session persistence via localStorage

### Test Accounts
- **Admin**: admin@velocityfibre.co.za
- **Project Manager**: pm@velocityfibre.co.za  
- **Field Technician**: tech@velocityfibre.co.za
- **Client**: client@example.com

All test accounts use password: `password`

## Monitoring
- Health checks on `/` endpoint
- Automatic restarts on failure
- Build and runtime logs in Railway dashboard

## Best Practices
1. Always test locally before deploying
2. Use proper workspace structure
3. Monitor deployment logs
4. Keep dependencies updated
5. Use environment variables for configuration

## Related Documentation
- [SolidStart Deployment](https://start.solidjs.com/getting-started/deployment)
- [Railway Nixpacks](https://docs.railway.app/deploy/builds)
- [Monorepo Deployment Patterns](https://docs.railway.app/deploy/monorepo)