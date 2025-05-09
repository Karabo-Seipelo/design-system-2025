[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Karabo-Seipelo_design-system-2025&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Karabo-Seipelo_design-system-2025)

# Design System

This project is a design system for the year 2025. It includes a collection of reusable components, styles, and guidelines to ensure consistency and efficiency in design and development.

## Features

- Reusable UI components
- Consistent styling and theming
- Design guidelines and best practices
- Accessibility support
- Responsive design

## Getting Started

To get started with the design system, follow these steps:

1. Clone the repository:
   ```bash
   git clone /Users/karabo.seipelo/Work/Personal/2025/desgin-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## TODO:

- [ ] Look into adding accessibility unit tests via [jest-axe](https://www.npmjs.com/package/jest-axe)
- [ ] Look into adding visual regression testing via [chromatic](https://www.chromatic.com/)
- [ ] refactor the ICONS component to work like the ICON component in FooterMultiColumn
