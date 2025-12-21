# EcoFusion Platform - Master TODO

## Project Overview
A sustainable agriculture and aquaponics learning management system with operational dashboards.

## Quick Links
- [App Routes TODO](./app/TODO.md)
- [Components TODO](./components/TODO.md)
- [Library TODO](./lib/TODO.md)
- [Types TODO](./types/TODO.md)
- [Public Assets TODO](./public/TODO.md)

---

## Project Status

### Completed Features
- [x] Authentication with NextAuth
- [x] Protected routes with middleware
- [x] LMS with 59 courses
- [x] Quiz system with scoring
- [x] XP and badge system
- [x] Course progress tracking
- [x] Certificate generation (UI only)
- [x] Operations dashboard
- [x] Zone configuration
- [x] Employee management
- [x] Task management

### In Progress
- [ ] PDF certificate download
- [ ] Real-time sensor data
- [ ] Search functionality

---

## Priority Tasks

### Critical (Before Production)
1. [ ] **Security**: Ensure .env.local is in .gitignore
2. [ ] **Auth**: Implement password hashing (currently plaintext comparison)
3. [ ] **API**: Create proper API routes for data operations
4. [ ] **Database**: Migrate from seed data to database

### High Priority
1. [ ] Split lms-seed.ts into manageable files
2. [ ] Implement toast notification system
3. [ ] Add proper error handling throughout
4. [ ] Create loading states for all pages

### Medium Priority
1. [ ] Generate missing course thumbnails (54 needed)
2. [ ] Implement forgot password flow
3. [ ] Add search functionality
4. [ ] Create proper type definitions

### Low Priority
1. [ ] Add unit tests
2. [ ] Add E2E tests
3. [ ] Implement PWA features
4. [ ] Add analytics

---

## Folder Structure

```
eco-fusion-platform/
├── app/                 # Next.js App Router
│   ├── (platform)/      # Protected platform pages
│   │   ├── academy/     # LMS courses
│   │   ├── business/    # Business operations
│   │   └── dashboard/   # Dashboards
│   ├── api/             # API routes
│   └── login/           # Auth pages
├── components/          # Reusable UI components
│   ├── business/        # Business-specific
│   ├── layout/          # Layout components
│   └── widgets/         # Dashboard widgets
├── lib/                 # Utilities & data
│   ├── contexts/        # React contexts
│   ├── data/            # Seed/static data
│   └── stores/          # Zustand stores
├── public/              # Static assets
│   └── thumbnails/      # Course images
└── types/               # TypeScript types
```

---

## Environment Variables

Required in `.env.local`:
```env
AUTH_SECRET=            # Strong secret (openssl rand -base64 32)
ADMIN_EMAIL=            # Admin user email
ADMIN_PASSWORD=         # Admin user password
OPS_EMAIL=              # Ops manager email
OPS_PASSWORD=           # Ops manager password
```

---

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Architecture Notes

### Authentication
- Using NextAuth v5 with Credentials provider
- Demo users defined in auth.ts (migrate to database)
- Middleware protects /dashboard, /business, /academy routes

### State Management
- Zustand for LMS state (progress, XP, badges)
- React Context for zone configuration
- No Redux or other state libraries

### Styling
- Tailwind CSS with custom config
- Glass morphism design system
- Custom scrollbar styles
- Dark theme only (currently)

---

## Known Issues

1. **Build Time**: Initial build takes 14+ minutes due to large lms-seed.ts
2. **Type Safety**: Several `as any` casts need proper types
3. **Middleware Warning**: "middleware" convention deprecated in Next.js 16
4. **Missing Features**: PDF download, search, real-time updates

---

## Contributing

1. Check the relevant TODO.md file for the area you're working on
2. Create a feature branch
3. Follow existing code patterns
4. Add TypeScript types for all new code
5. Test thoroughly before submitting PR

---

Last Updated: December 20, 2024
