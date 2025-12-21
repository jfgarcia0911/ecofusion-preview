# App Routes TODO

## Overview
This folder contains all Next.js App Router pages and API routes.

## Structure
```
app/
├── (platform)/          # Protected platform pages
│   ├── academy/         # LMS & Course pages
│   ├── business/        # Employee & Task management
│   └── dashboard/       # Operations dashboards
├── api/                 # API routes
├── login/               # Authentication pages
├── layout.tsx           # Root layout
└── page.tsx             # Landing page
```

## Current Tasks

### High Priority
- [ ] Implement forgot password flow (login page)
- [ ] Add proper error boundaries to all pages
- [ ] Implement PDF certificate download functionality
- [ ] Add real-time data updates to operations dashboard

### Medium Priority
- [ ] Replace `alert()` calls with toast notifications in admin pages
- [ ] Implement search functionality in header
- [ ] Add loading states to all async operations
- [ ] Implement camera feed integration for operations

### Low Priority
- [ ] Add page transition animations
- [ ] Implement keyboard navigation for accessibility
- [ ] Add breadcrumb navigation to nested pages

## Suggested Improvements
1. Create shared error page component
2. Add meta tags and SEO optimization
3. Implement progressive web app (PWA) features
4. Add analytics tracking

## Dependencies
- `components/` - UI components
- `lib/` - Utilities and data
- `types/` - TypeScript definitions
