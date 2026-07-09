# PulseNet - Social App Frontend

A premium, friend-first social network built with React + TypeScript following RDL v2.0 Design System. A Dynamic Inc. project.

## Features

- Friend-First Experience: Prioritizes real connections over algorithms
- User Control: Full control over your feed with PulseNet Tags
- Premium Design: Enterprise-grade design system (RDL v2.0)
- Fully Responsive: Mobile, tablet, desktop, and foldable device support
- Theme Support: Dark and light themes with seamless switching
- Accessibility: WCAG 2.1 AA/AAA compliant
- Offline Support: Graceful degradation when offline
- Performance Optimized: Lazy loading, code splitting, and efficient rendering

## Project Structure

pulsenet-frontend/
- public/
  - favicon.svg
- src/
  - components/
    - layout/ (TopNav, BottomTabBar)
    - ui/ (Button, Avatar, Badge, Card, Input, Skeleton)
    - PostCard.tsx
    - OfflineIndicator.tsx
  - data/
    - sample-data.ts
  - pages/
    - HomeFeed.tsx
  - styles/
    - tokens.css
    - index.css
  - types/
    - design-tokens.d.ts
  - lib/
    - utils.ts
  - App.tsx
  - main.tsx
- package.json
- tsconfig.json
- vite.config.ts
- index.html

## Design System (RDL v2.0)

### Color Tokens
- Background: Primary, Secondary, Tertiary, Elevated, Overlay
- Surface: Primary, Secondary, Tertiary, Glass
- Text: Primary, Secondary, Tertiary, Disabled, Inverse
- Accent: Ember, Glacier, Jade, Amethyst, Amber
- Semantic: Success, Warning, Error, Info

### Typography
- Font Family: Inter (primary), SF Pro (fallback)
- Sizes: xs (12px), sm (14px), base (16px), lg (18px), xl (20px), 2xl (24px)
- Weights: Light (300), Normal (400), Medium (500), Semibold (600), Bold (700)

### Breakpoints
- xs: 0-359px (small phones)
- sm: 360-427px (standard phones)
- md: 428-767px (large phones)
- lg: 768-1023px (tablets)
- xl: 1024-1279px (small desktops)
- 2xl: 1280-1535px (desktops)
- 3xl: 1536-1919px (large desktops)
- 4xl: 1920px+ (ultra-wide monitors)

## Tech Stack

- Framework: React 18 + TypeScript
- Router: React Router 6
- Bundler: Vite
- Icons: Lucide React
- Styling: CSS Custom Properties (RDL v2.0)
- Type Checking: TypeScript
- Linting: ESLint

## Development

### Installation
npm install

### Development
npm run dev

### Build
npm run build

### Preview
npm run preview

### Lint
npm run lint

## Contact

- Author: David Caleb
- Email: david.caleb.vl@gmail.com
- GitHub: @davidcalebvl-del
- Portfolio: davidfixdigital.xyz
- Company: Dynamic Inc.

Copyright (c) Dynamic Inc. All rights reserved.

Built with React, TypeScript, and RDL v2.0 Design System

Last Updated: July 3, 2026
Version: 1.0.0
