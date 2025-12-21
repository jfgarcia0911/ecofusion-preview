# Components TODO

## Overview
Reusable UI components for the EcoFusion platform.

## Structure
```
components/
├── business/            # Business-specific components
│   └── TaskManager.tsx  # Task list management
├── layout/              # Layout components
│   ├── Header.tsx       # Top navigation bar
│   └── Sidebar.tsx      # Side navigation
├── widgets/             # Dashboard widgets
│   ├── KpiCard.tsx      # KPI display cards
│   ├── RevenueChart.tsx # Revenue charts
│   └── SensorWidget.tsx # Sensor data display
└── ui/                  # (Suggested) Base UI components
```

## Current Tasks

### High Priority
- [ ] Create toast notification component
- [ ] Add proper TypeScript types to all components (remove `any`)
- [ ] Implement image fallback in Sidebar user avatar
- [ ] Add ARIA labels for accessibility

### Medium Priority
- [ ] Create reusable Button component with variants
- [ ] Create reusable Input component
- [ ] Create reusable Modal component
- [ ] Add loading skeleton components

### Low Priority
- [ ] Add Storybook documentation
- [ ] Create component unit tests
- [ ] Add dark/light theme toggle

## Suggested New Components
1. `ui/Button.tsx` - Standardized button with variants
2. `ui/Input.tsx` - Form input with validation states
3. `ui/Modal.tsx` - Reusable modal dialog
4. `ui/Toast.tsx` - Toast notification system
5. `ui/Card.tsx` - Consistent card component
6. `ui/Badge.tsx` - Status badges
7. `ui/Skeleton.tsx` - Loading skeletons

## Component Guidelines
- All components should be typed with TypeScript
- Use `clsx` for conditional classes
- Follow naming convention: PascalCase
- Export from index files for clean imports
