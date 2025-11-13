# Prerequisites

* Node.js (v16+) and npm installed
* Git installed
* A terminal and a code editor (VS Code recommended)

---

# Common setup (used by all projects)

Run these once to create a repo skeleton you can reuse:

```bash
# create project folder
mkdir ts-js-interop && cd ts-js-interop

# init git and npm
git init
npm init -y

# install TypeScript and helpful dev tools
npm install --save-dev typescript ts-node @types/node
npx tsc --init   # generates a tsconfig.json (we'll replace with exact config)
```

Create `.gitignore`:

```
node_modules/
dist/
.env
```

Replace `tsconfig.json` with this baseline (works for Node projects and incremental JS interop):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowJs": false,
    "checkJs": false,
    "declaration": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "types": ["node"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

Add helpful npm scripts to `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts",
  "type-check": "tsc --noEmit"
}
```

Make initial commit:

```bash
git add .
git commit -m "chore: project skeleton + typescript config"
```

---

# Project 1 — Using a JS library that already has types (e.g., `lodash`)

Goal: show how to install a library + types and use it from TypeScript.

1. Install the library and types:

```bash
npm install lodash
npm install --save-dev @types/lodash
```

2. Project layout:

```
src/
  project1/
    index.ts
```

3. `src/project1/index.ts`:

```ts
import _ from "lodash";

const nums = [3, 1, 2];
const sorted = _.sortBy(nums);
console.log("sorted:", sorted);
```

4. Add an entrypoint `src/index.ts` to run the project (or run file directly):

```ts
// src/index.ts
import "./project1/index";
```

5. Build + run:

```bash
npm run build
npm start
# or for quick run
npm run dev
```

**What you learned**

* TypeScript automatically used `@types/lodash` for type checking & IntelliSense.
* No need to create declarations.

**Exercise**

* Add `lodash` `_.groupBy` usage and type the result with an interface.

---

# Project 2 — Using an untyped third-party library (create `.d.ts`)

Goal: simulate using a legacy JS library with no types and create a declaration file.

We'll create a fake untyped library `legacy-lib` inside the project to simulate a real npm package that lacks types.

1. Create the JS module `src/legacy/legacy-lib.js`:

```js
// src/legacy/legacy-lib.js
function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = { greet };
```

2. Tell TypeScript how to find types. Create `src/types/legacy-lib.d.ts`:

```ts
// src/types/legacy-lib.d.ts
declare module "legacy-lib" {
  export function greet(name: string): string;
}
```

3. Update `tsconfig.json` to include your type root (optional; TypeScript will pick up files in src by default). If explicit:

```json
"compilerOptions": {
  "typeRoots": ["src/types", "node_modules/@types"],
  /* ...the rest... */
}
```

4. Use the module in TypeScript: `src/project2/index.ts`:

```ts
// import the CommonJS module - using esModuleInterop
import { greet } from "legacy-lib";

const msg = greet("TypeScript");
console.log(msg);
```

5. Build + run:

```bash
npm run build
npm start   # entrypoint should import project2 or run ts-node
# or: npx ts-node src/project2/index.ts
```

**Notes**

* The `.d.ts` file describes the module's public surface.
* If the real module attaches things globally or to `window`, you'd use `declare global` in the `.d.ts`.

**Exercise**

* Expand the `.d.ts` to add an optional second parameter `options?: { exclaim?: boolean }` that toggles an exclamation.

---

# Project 3 — Typing and migrating an existing JavaScript codebase (allowJs / checkJs / JSDoc)

Goal: show incremental migration of `.js` files to TypeScript and how to add types with JSDoc.

We'll enable `allowJs` and `checkJs` temporarily to show type-checking on JS:

1. Update `tsconfig.json` for migration:

```json
"compilerOptions": {
  "allowJs": true,
  "checkJs": true,
  "outDir": "dist",
  "declaration": false,
  "noEmit": false,
  /* rest unchanged */
},
"include": ["src/**/*"]
```

2. Example JS file with JSDoc `src/project3/calculator.js`:

```js
// @ts-check

/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function mul(a, b) {
  return a * b;
}

module.exports = { add, mul };
```

3. Use it in TypeScript without rewriting yet: `src/project3/index.ts`:

```ts
import { add, mul } from "../project3/calculator";
console.log(add(2, 3));
console.log(mul(4, 5));
```

Because `checkJs` is on and JSDoc is present, TS gives feedback and types.

4. Next: convert `calculator.js` → `calculator.ts`:

```ts
// src/project3/calculator.ts
export function add(a: number, b: number): number {
  return a + b;
}
export function mul(a: number, b: number): number {
  return a * b;
}
```

Update imports (they stay the same for TS module resolution).

5. After converting, set `allowJs`/`checkJs` back to `false` if you want stricter TS-only build.

**Exercise**

* Introduce a subtle bug in JS (e.g., `return a + b + ""`) and see how `checkJs` with JSDoc flags it. Then fix by converting to `.ts`.

---

# Extra tips & real-world concerns

## Git workflow (suggested)

* `main` or `master` branch for release-ready code.
* Create small feature branches:

  * `feature/project1-lodash`
  * `feature/project2-declarations`
  * `feature/project3-migrate-js`
* Commit messages: `feat: add legacy-lib declaration` / `chore: enable checkJs for migration`.
* Open PR for each project/step so you can review incremental progress.

## Editor config

* Use VS Code with the built-in TypeScript server for best DX.
* Install TypeScript, ESLint, Prettier extensions.

## Linting & Formatting

* Add ESLint + `@typescript-eslint`:

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

* Create `.eslintrc.js` and enable TypeScript parser (optional but recommended).

## Publishing or consuming real untyped npm packages

* If you create types for a published package, either contribute them to DefinitelyTyped or include types in your own project under `types/` and reference them in `package.json` via `"types": "dist/index.d.ts"` (if you publish).

---

# Quick checklist you can copy-paste

```bash
# clone this workflow (locally)
mkdir ts-js-interop && cd ts-js-interop
git init
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
# update tsconfig as given above
# then for each project: create src/project1, src/project2, etc
```

---
