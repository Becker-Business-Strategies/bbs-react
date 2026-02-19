# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# BBS React — Development README

Small guide to run the frontend and Netlify Functions locally, configure environments, and test the contact API.

## Prerequisites

- Node.js (>=16)
- npm
- (optional) Netlify CLI: `npm i -g netlify-cli` for running functions together with the frontend

## Install

```bash
npm install
```

## Scripts

- `npm run dev` — start the frontend (Vite) on port 3000
- `npm run netlify:dev` — start Netlify Dev (frontend + functions per `netlify.toml`)
- `npm run build` — build frontend

## Local Dev (recommended)

1. Start Netlify Dev (runs frontend and functions, using ports configured in `netlify.toml`):

   ```bash
   npm run netlify:dev
   ```

   - Frontend: http://localhost:3000
   - Functions: port is configured in `netlify.toml` (targetPort / functionsPort). In this project the functions target port is 8000 by default.

2. The dev environment sends CORS header `Access-Control-Allow-Origin` using the `CORS_ORIGIN` environment variable from `netlify.toml` (defaults to `http://localhost:5715` in your current config). Adjust `netlify.toml` or set `CORS_ORIGIN` when running.

## Environment variables

- `MONGODB_URI` (optional) — if set the app will persist contacts to MongoDB via mongoose. If unset the app stores contacts in `data/contacts.json` (file fallback for development).
- `MONGODB_DB_NAME` (optional) — DB name used when connecting to MongoDB
- `CORS_ORIGIN` — allowed origin for CORS responses

## Endpoints

- `POST /.netlify/functions/contact` (redirected from `/api/contact`)
  - Accepts JSON: `{ name, last, email, phone, message }`
  - Returns `201` with `{ id, success: true }` on success
  - Validation errors return `422` with `fieldErrors`
  - Invalid JSON returns `400`
- `GET /.netlify/functions/contact` — lists contacts
- `GET /.netlify/functions/contact?id=<id>` — fetch single contact
- `DELETE /.netlify/functions/contact?id=<id>` — delete a contact (`204` on success)

## Notes about paths

Netlify Dev exposes functions at `/.netlify/functions/<name>`. A redirect is configured in `netlify.toml` so calling `/api/contact` should proxy to the function in deployed environments.

## Quick curl tests (replace host/port if needed)

Valid POST

```bash
curl -i -X POST http://localhost:8000/.netlify/functions/contact \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{"name":"John","last":"Doe","email":"john@example.com","phone":"(555) 555-0123","message":"Hello from test"}'
```

- Expect: HTTP 201 and JSON body with id

Invalid payload (validation error)

```bash
curl -i -X POST http://localhost:8000/.netlify/functions/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","last":"Doe","phone":"123"}'
```

- Expect: HTTP 422 with `fieldErrors` detailing missing/invalid fields

Invalid JSON

```bash
curl -i -X POST http://localhost:8000/.netlify/functions/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "John"'
```

- Expect: HTTP 400 with `Invalid JSON` message

## File fallback

- When `MONGODB_URI` is not provided the contact repository persists to `data/contacts.json`. The file is created automatically on first write.

## Logging and errors

- Server logs include informational messages like `Saved contact to file <id>` or `Saved contact to DB <id>` and error details on failures.
- HTTP response codes used: 201, 204, 400, 422, 404, 500

## Troubleshooting

- If functions are not reachable at expected port, verify `netlify.toml` `targetPort` / `functionsPort` and run `npm run netlify:dev`.
- For DB mode ensure `MONGODB_URI` and `MONGODB_DB_NAME` are set in Netlify UI or local environment.

If you want, I can add a small test script that runs the curl checks and asserts responses automatically.
