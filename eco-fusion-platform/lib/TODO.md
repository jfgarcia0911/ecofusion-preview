# Library TODO

## Overview
Utilities, data, contexts, and stores for the application.

## Structure
```
lib/
├── actions.ts           # Server actions (auth)
├── constants.ts         # App constants
├── contexts/            # React contexts
│   └── ZoneContext.tsx  # Zone management context
├── data/                # Static/seed data
│   └── lms-seed.ts      # LMS course content (50k+ lines)
├── stores/              # Zustand stores
│   └── use-lms-store.ts # LMS state management
└── utils/               # (Suggested) Utility functions
```

## Current Tasks

### High Priority
- [ ] Create API service layer for backend calls
- [ ] Implement proper error handling in actions.ts
- [ ] Add data validation utilities
- [ ] Split lms-seed.ts into separate course files (currently 50k+ lines)

### Medium Priority
- [ ] Create utility functions file (formatters, validators)
- [ ] Implement caching for API responses
- [ ] Add logging utility
- [ ] Create date/time formatting utilities

### Low Priority
- [ ] Add unit tests for utilities
- [ ] Create mock data generators for testing
- [ ] Document all utility functions

## Suggested New Files
1. `utils/formatters.ts` - Date, number, currency formatters
2. `utils/validators.ts` - Input validation functions
3. `utils/api.ts` - API client wrapper
4. `utils/storage.ts` - LocalStorage/SessionStorage helpers
5. `hooks/` - Custom React hooks directory

## Data Management Notes
- `lms-seed.ts` is very large (50k+ lines)
- Consider splitting into: `courses-foundational.ts`, `courses-intermediate.ts`, etc.
- Consider moving to database or CMS for production
