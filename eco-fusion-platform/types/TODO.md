# Types TODO

## Overview
TypeScript type definitions for the EcoFusion platform.

## Structure
```
types/
├── lms.ts               # LMS course types
├── user.ts              # (Suggested) User types
├── api.ts               # (Suggested) API response types
└── index.ts             # (Suggested) Central exports
```

## Current Tasks

### High Priority
- [ ] Create User type interface (currently using `any`)
- [ ] Add API response types
- [ ] Create form validation types
- [ ] Add sensor/zone types for operations

### Medium Priority
- [ ] Create enum types for status values
- [ ] Add authentication types
- [ ] Create dashboard widget types
- [ ] Document all type interfaces

### Low Priority
- [ ] Add JSDoc comments to all types
- [ ] Create type guards for runtime validation
- [ ] Generate types from API schema (if available)

## Suggested New Types

### user.ts
```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: 'admin' | 'manager' | 'employee';
}

export interface Session {
  user: User;
  expires: string;
}
```

### api.ts
```typescript
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
```

### operations.ts
```typescript
export type SensorType = 'pH' | 'DO' | 'temp' | 'ammonia' | 'nitrate' | 'flow' | 'tds';
export type SensorProtocol = 'modbus' | 'analog' | 'digital' | 'mqtt';

export interface Sensor {
  id: string;
  name: string;
  type: SensorType;
  protocol: SensorProtocol;
  unit: string;
  min: number;
  max: number;
}

export interface Zone {
  id: string;
  name: string;
  sensors: Sensor[];
}
```

## Type Guidelines
- Use interfaces for object shapes
- Use type aliases for unions/intersections
- Export all types from index.ts
- Add JSDoc comments for documentation
