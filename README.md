# EcoFusion

**Sustainable Agriculture Education Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Owner](https://img.shields.io/badge/Owner-LLAYD%20LLC-blue.svg)](https://github.com/twinn129)

## Overview

EcoFusion is a comprehensive sustainable agriculture education platform designed to train the next generation of controlled environment agriculture (CEA) professionals. The platform combines a modern Learning Management System (LMS) with extensive curriculum covering everything from foundational concepts to executive-level strategic planning.

## Features

- **Learning Management System (LMS)** - Full-featured educational platform built with Next.js
- **74 Comprehensive Courses** - Spanning 5 certification levels (100-500 series)
- **Interactive Dashboards** - Operations, intelligence, and analytics
- **Employee Management** - Team administration and tracking
- **Progress Tracking** - Course completion and certification management

## Project Structure

```
EcoFusion/
├── eco-fusion-platform/     # Next.js web application
│   ├── app/                 # App router pages and components
│   ├── components/          # Reusable UI components
│   └── lib/                 # Utilities and helpers
├── education/               # Course curriculum and materials
│   ├── courses/             # 74 courses across 5 series
│   └── *.md                 # Educational frameworks
└── Business Strategy/       # Strategic planning documents
```

## Course Catalog

| Series | Level | Courses | Focus Area |
|--------|-------|---------|------------|
| 100 | Foundational | 14 | Introduction to CEA, basic concepts |
| 200 | Intermediate | 15 | Technical skills, system operations |
| 300 | Advanced | 15 | Specialized techniques, optimization |
| 400 | Expert/Specialist | 15 | Engineering, facility design |
| 500 | Master/Executive | 15 | Leadership, strategic planning |

## Technology Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Charts:** Recharts
- **Animations:** Framer Motion

## Getting Started

```bash
# Clone the repository
git clone https://github.com/twinn129/EcoFusion.git

# Navigate to the platform directory
cd EcoFusion/eco-fusion-platform

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

The platform is configured for deployment on Render. See `render.yaml` for configuration details.

## Ownership & License

**Copyright (c) 2024-2026 LLAYD LLC. All rights reserved.**

- **Owner:** LLAYD LLC
- **Author:** Bradford Phillips
- **License:** MIT License

See [LICENSE](LICENSE) for full license terms and [COPYRIGHT](COPYRIGHT) for detailed ownership information.

## Contact

- **GitHub:** [@twinn129](https://github.com/twinn129)
- **Email:** bradford@llayd.com

---

*Built with passion for sustainable agriculture and education.*
