# Portfolio Website - Carlos Eduardo Ferreira

## Overview

This is a personal portfolio website for Carlos Eduardo Ferreira, a Software Engineer. The site showcases professional experience, technologies, projects, and contact information with a modern, GitHub-inspired design aesthetic. Built as a full-stack application with a React frontend and Express backend, featuring smooth animations, theme switching (light/dark mode), and a collapsible sidebar navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll-based and interactive animations
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Development**: tsx for hot reloading during development
- **Production Build**: esbuild bundles server code to CommonJS

### Design Patterns
- **Component-based UI**: Modular React components with clear separation
- **Theme Provider**: Context-based theme management with localStorage persistence
- **Form Handling**: React Hook Form with Zod validation schemas
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

### Key Features
- Collapsible sidebar navigation with smooth scroll to sections
- Light/dark theme toggle with system preference detection
- Progressive image reveal animations on scroll
- Contact form with validation
- Responsive design for mobile and desktop

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (Shadcn + custom)
│   │   ├── pages/        # Page components (home, not-found)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle ORM schemas and Zod types
└── attached_assets/  # Images and design reference files
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe database queries and migrations
- **drizzle-kit**: Database schema push and migration tooling

### Key Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for scroll reveals and transitions
- **react-hook-form**: Form state management
- **zod**: Schema validation for forms and API data
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)
- **connect-pg-simple**: PostgreSQL session storage (available but not currently used)

### UI Framework
- **Radix UI**: Headless UI primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for database features)