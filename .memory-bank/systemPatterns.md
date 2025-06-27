# System Patterns: Nash Festival Memories

## Architecture Overview

### Next.js App Router Pattern

```
src/app/
├── (authenticated)/          # Route groups for protected pages
├── api/                     # API routes
├── components/              # Reusable UI components
├── login/                   # Public login page
├── layout.tsx              # Root layout
├── page.tsx                # Landing page
└── globals.css             # Global styles
```

### Component Organization

- **Co-located Files**: Components include index.tsx, actions.ts, and types.ts
- **Server Components Default**: Leverage React Server Components for performance
- **Client Components**: Marked with 'use client' only when needed for interactivity

## Authentication Architecture

### NextAuth v5 Pattern

```typescript
// Centralized auth configuration
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials],
  callbacks: { authorized },
  pages: { signIn: '/login' },
});
```

### Key Patterns

- **Middleware Protection**: Route-level authentication via middleware.ts
- **Server Actions**: Form handling through server actions (login/actions.ts)
- **Credential Validation**: Environment variable password comparison
- **Session Management**: NextAuth handles session state automatically

## Styling Architecture

### Tailwind + DaisyUI Pattern

- **Utility-First**: Tailwind classes for custom styling
- **Component Library**: DaisyUI for consistent UI components
- **Design System**: Primary/secondary/accent color theming
- **Responsive Design**: Mobile-first breakpoint strategy

### Component Styling Patterns

```tsx
// Semantic component classes
<div className="card bg-base-200 shadow-xl">
  <div className="card-body">
    <h3 className="card-title text-primary">
```

## Form Handling Patterns

### Server Actions Pattern

```typescript
// actions.ts - Server-side form processing
export async function login(prevState: any, formData: FormData) {
  // Validation with Zod
  // Server-side processing
  // Return state for client
}

// Component - useActionState hook
const [state, action, pending] = useActionState(login, undefined);
```

### Key Benefits

- **Progressive Enhancement**: Works without JavaScript
- **Type Safety**: Full TypeScript integration
- **Validation**: Server-side validation with client feedback
- **Loading States**: Built-in pending state management

## Data Flow Patterns

### Current Implementation

1. **Static Data**: Hard-coded content in components
2. **Form State**: Server actions with useActionState
3. **Authentication**: NextAuth session management
4. **Client State**: Minimal - mostly server-driven

### Planned Evolution

1. **Database Layer**: Add Prisma/Drizzle ORM
2. **File Upload**: Implement media storage solution
3. **Real-time Features**: Consider WebSocket integration for community features
4. **Caching**: Implement Next.js caching strategies

## Error Handling Patterns

### Form Validation

```typescript
// Consistent error structure
type ActionState = {
  message?: string;
  errors?: Record<string, string[]>;
};
```

### Authentication Errors

- **Credentials Provider**: Custom error messages in Polish
- **Middleware**: Automatic redirection for unauthorized access
- **UI Feedback**: Alert components for error display

## Security Patterns

### Current Implementation

- **Environment Variables**: Secure credential storage
- **Server-Side Validation**: All form processing on server
- **CSRF Protection**: NextAuth built-in protection
- **Route Protection**: Middleware-based authentication

### Future Considerations

- **Rate Limiting**: Prevent abuse of upload endpoints
- **File Validation**: Secure image upload processing
- **Content Moderation**: Automated or manual review system
- **User Permissions**: Role-based access control

## Performance Patterns

### Next.js Optimizations

- **Server Components**: Default server rendering
- **Image Optimization**: next/image for automatic optimization
- **Font Optimization**: next/font for web font loading
- **Bundle Splitting**: Automatic code splitting

### Planned Optimizations

- **Image Lazy Loading**: For photo-heavy content
- **Infinite Scroll**: For large memory collections
- **CDN Integration**: For media file delivery
- **Database Indexing**: For search functionality

## Development Patterns

### Code Quality

- **TypeScript Strict**: Full type checking enabled
- **ESLint + Prettier**: Consistent code formatting
- **Component Props**: Proper TypeScript interfaces
- **Error Boundaries**: Graceful error handling

### File Organization

```
components/
└── feature-name/
    ├── index.tsx      # Main component
    ├── actions.ts     # Server actions
    ├── types.ts       # TypeScript interfaces
    └── utils.ts       # Helper functions
```

This architecture provides a solid foundation for scaling while maintaining developer experience and application performance.
