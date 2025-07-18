# IQVest - AI-Powered Crypto Trading Platform

## Overview

IQVest is a modern full-stack web application that provides AI-driven insights, risk metrics, and analytics for cryptocurrency trading. The platform features a landing page with sections for features, testimonials, pricing, and FAQ, built with a focus on user engagement and conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using deep purple dark theme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: Hot module replacement via Vite integration

### Key Design Decisions

1. **Monorepo Structure**: The application uses a structured monorepo with clear separation:
   - `client/` - Frontend React application
   - `server/` - Backend Express API
   - `shared/` - Shared schemas and types

2. **Design System**: Deep purple dark mode theme with glassmorphism effects:
   - Background gradient from navy-purple to deep violet
   - Primary accent: neon lilac (#8B42FF)
   - Secondary accent: hot magenta (#FF52E5)
   - Glass cards with backdrop blur effects

3. **Typography**: Inter font family with Source Code Pro for monospace text

## Key Components

### Frontend Components
- **Navigation**: Fixed glassmorphism navigation with smooth scrolling
- **Hero Section**: Animated landing section with gradient text and floating elements
- **Features Section**: Grid layout showcasing AI capabilities with icons from Lucide
- **Testimonials**: Carousel of user reviews with avatars and ratings
- **Pricing Section**: Tiered pricing plans with feature comparison
- **FAQ Section**: Accordion-style frequently asked questions
- **CTA Section**: Email capture form with toast notifications

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both memory and database storage
- **Route Registration**: Centralized route management system
- **Middleware**: Request logging with performance metrics
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Routes**: Express routes handle business logic and data operations
3. **Storage Layer**: Abstracted interface allows switching between memory and database storage
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions with type safety

## External Dependencies

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Embla Carousel for testimonial slider

### Development Tools
- TypeScript for type safety
- ESBuild for production bundling
- Drizzle Kit for database migrations
- Replit integration for development environment

### Database and Backend
- Neon Database for serverless PostgreSQL
- Drizzle ORM for type-safe database operations
- Express.js for HTTP server
- Connect-pg-simple for session storage

## Deployment Strategy

1. **Build Process**: 
   - Frontend: Vite builds React app to `dist/public`
   - Backend: ESBuild bundles server code to `dist/index.js`

2. **Production Setup**:
   - Single deployment artifact containing both frontend and backend
   - Express serves static files from build directory
   - Environment-based configuration for database connections

3. **Development**:
   - Vite dev server with HMR for frontend
   - TSX for backend development with auto-restart
   - Integrated development experience with Replit

4. **Database Management**:
   - Drizzle migrations in `migrations/` directory
   - Schema definitions in `shared/schema.ts`
   - Push-based deployment with `db:push` command

The application is designed as a high-converting landing page for a crypto trading platform, with emphasis on modern design, performance, and user experience. The architecture supports future expansion into a full trading platform while maintaining the current focus on lead generation and user acquisition.