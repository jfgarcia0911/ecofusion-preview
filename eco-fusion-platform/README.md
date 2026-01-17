# EcoFusion Platform

**Next.js Web Application for Sustainable Agriculture Education**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Overview

This is the web application component of EcoFusion, a comprehensive Learning Management System (LMS) for sustainable agriculture and controlled environment agriculture (CEA) education.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
eco-fusion-platform/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (platform)/        # Main platform pages
│   │   ├── academy/       # Learning management
│   │   ├── business/      # Business operations
│   │   └── dashboard/     # Analytics & operations
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utilities and helpers
└── public/               # Static assets
```

## Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Authentication:** [NextAuth.js](https://next-auth.js.org)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs)
- **Charts:** [Recharts](https://recharts.org)
- **Animations:** [Framer Motion](https://www.framer.com/motion)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This application is configured for deployment on Render. See the `render.yaml` file in the project root for configuration.

## Ownership & License

**Copyright (c) 2024-2026 LLAYD LLC. All rights reserved.**

- **Owner:** LLAYD LLC
- **Author:** Bradford Phillips
- **License:** MIT License

See [LICENSE](../LICENSE) and [COPYRIGHT](../COPYRIGHT) in the project root for full details.

## Contact

- **GitHub:** [@twinn129](https://github.com/twinn129)
- **Email:** bradford@llayd.com
