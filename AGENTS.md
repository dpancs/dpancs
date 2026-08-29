# Repository Guidelines

## Project Structure & Module Organization

This repository is a small React personal site built with Vite. Application entry points are `src/index.jsx` and `src/App.jsx`; routed page components and their styles live in `src/pages/` (`Resume`, `Contact`, `Utilities`, and `Blog`). Shared styles are in `src/index.css` and `src/App.css`. Static files, deployment metadata, and the custom domain are in `public/`. Tests currently live beside the application source in `src/App.test.jsx`, with shared test setup in `src/setupTests.js`.

## Build, Test, and Development Commands

Use Yarn, consistent with the checked-in `yarn.lock`:

- `yarn install` — install dependencies.
- `yarn dev` — start the Vite development server.
- `yarn test` — run the Vitest suite once in jsdom.
- `yarn lint` — run ESLint across the repository.
- `yarn build` — create the production bundle in `dist/`.
- `yarn preview` — serve the built bundle locally for verification.
- `yarn deploy` — publish `dist/` through `gh-pages`; `yarn predeploy` runs tests and a build first.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, and single quotes, matching the existing JSX and JavaScript. Use PascalCase for React component files and component names (`Utilities.jsx`), and keep each page’s stylesheet alongside it (`Utilities.css`). Use descriptive camelCase for variables and functions. Keep route definitions in `src/App.jsx`; use `HashRouter`-compatible links for internal navigation.

## Testing Guidelines

Tests use Vitest with jsdom and React Testing Library. Name tests by observable behavior, such as `renders ...` or `generates ...`, and query through accessible roles and labels. Add or update tests for changed routes, forms, navigation, and utility behavior. Run `yarn test` before submitting; no explicit coverage threshold is configured.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects describing one change, following the existing style: `Add blog and utilities page` or `Update contact form`. Pull requests should explain the user-visible change, identify relevant routes or files, include test results (`yarn test` and, when applicable, `yarn build`), and attach screenshots for visual changes. Keep unrelated refactors out of the same PR.

## Configuration & Deployment Notes

Keep static deployment files in `public/`, including `CNAME`. Do not commit secrets or generated `dist/` output. Verify hash-based routes (`#/blog`, `#/resume`, `#/contact`, and `#/utilities`) after navigation changes.
