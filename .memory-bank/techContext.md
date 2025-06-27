# Tech Context: Nash Festival Memories

## Technology Stack

### Core Framework

- **Next.js 15.3.4**: Latest version with App Router architecture
- **React 19**: Latest stable with enhanced server components
- **TypeScript 5**: Strict type checking for code reliability
- **Node.js**: Runtime environment (version not specified in package.json)

### Authentication & Security

- **NextAuth.js 5.0.0-beta.29**: Authentication solution
  - Credentials provider for password-based access
  - Built-in CSRF protection and session management
  - Custom authorization callbacks
- **Zod 3.25.67**: Runtime validation and type safety

### Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework (latest version)
- **DaisyUI 5.0.43**: Component library built on Tailwind
- **PostCSS**: CSS processing with Tailwind integration

### Development Tools

- **ESLint 9**: Code linting with Next.js and Prettier configs
- **Prettier 3.6.2**: Code formatting
- **TypeScript Compiler**: Type checking and compilation

## Project Configuration

### Package Manager

- **PNPM**: Lock file present (pnpm-lock.yaml)
- **NPM**: Alternative lock file present (package-lock.json)
- Both available - PNPM preferred for performance

### Build & Development Scripts

```json
{
  "dev": "next dev --turbopack", // Turbopack for faster development
  "build": "next build", // Production build
  "start": "next start", // Production server
  "lint": "next lint", // ESLint checking
  "lint:fix": "next lint --fix", // Auto-fix linting issues
  "format": "prettier --write .", // Format all files
  "format:check": "prettier --check .", // Check formatting
  "type-check": "tsc --noEmit" // TypeScript checking
}
```

### Development Environment

- **Turbopack**: Enabled for faster development builds
- **Hot Reload**: Automatic updates during development
- **TypeScript**: Full IntelliSense and error checking
- **Auto-formatting**: Prettier integration with ESLint

## File Structure & Organization

### App Router Structure

```
src/app/
├── api/auth/[...nextauth]/route.ts  # NextAuth API routes
├── components/                      # Reusable components
│   └── login-form/                 # Feature-based organization
├── login/page.tsx                  # Login page
├── layout.tsx                      # Root layout
├── page.tsx                        # Home page
├── globals.css                     # Global styles
└── favicon.ico                     # Site icon
```

### Configuration Files

- **next.config.ts**: Next.js configuration
- **tsconfig.json**: TypeScript configuration
- **eslint.config.mjs**: ESLint configuration
- **postcss.config.mjs**: PostCSS configuration
- **.prettierrc**: Prettier formatting rules
- **.prettierignore**: Files to exclude from formatting

## Environment & Deployment

### Environment Variables

- **PAGE_PASSWORD**: Access control password (required)
- **NEXTAUTH_SECRET**: Session encryption key (implied)
- **NEXTAUTH_URL**: Application URL for NextAuth (implied)

### Development Setup

1. Install dependencies: `pnpm install`
2. Set environment variables in `.env.local`
3. Run development server: `pnpm dev`
4. Access at `http://localhost:3000`

### Production Considerations

- **Build Process**: `next build` for optimized production bundle
- **Static Assets**: Located in `public/` directory
- **Server Requirements**: Node.js environment with Next.js server
- **Environment Variables**: Must be set in production environment

## Technical Constraints & Decisions

### Next.js 15 Beta Considerations

- **NextAuth Beta**: Using beta version for Next.js 15 compatibility
- **React 19**: Latest version may have breaking changes
- **Stability**: Monitor for updates and potential issues

### Performance Implications

- **Server Components**: Default rendering strategy for performance
- **Turbopack**: Development build optimization
- **Image Optimization**: Built-in Next.js image handling
- **Font Loading**: Optimized web font delivery

### Browser Support

- **Modern Browsers**: Targeting current browser versions
- **Mobile-First**: Responsive design for mobile devices
- **Progressive Enhancement**: Works without JavaScript for forms

## Dependencies & Updates

### Critical Dependencies

- Keep NextAuth and Next.js versions synchronized
- Monitor TypeScript compatibility with React 19
- Watch for DaisyUI updates affecting component behavior

### Security Updates

- Regular dependency updates for security patches
- Monitor NextAuth security advisories
- Keep Node.js runtime updated in production

### Development Dependencies

- ESLint/Prettier: Stable configurations
- TypeScript: Regular updates for new features
- Tailwind CSS: Monitor for breaking changes in v4

## Known Technical Debt

- **Database Layer**: Not yet implemented - needed for data persistence
- **Image Storage**: No solution for user-uploaded photos
- **Testing**: No test suite established
- **CI/CD**: No automated deployment pipeline
- **Error Monitoring**: No production error tracking
- **Analytics**: No user behavior tracking

## Planned Technical Additions

1. **Database**: Prisma/Drizzle ORM with PostgreSQL
2. **File Storage**: AWS S3 or Cloudinary for images
3. **Testing**: Jest/Vitest with React Testing Library
4. **Monitoring**: Sentry for error tracking
5. **Deployment**: Vercel or similar platform integration
