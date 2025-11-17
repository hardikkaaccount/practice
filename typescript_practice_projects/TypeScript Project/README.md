# TypeScript in Real Projects

This project demonstrates key concepts from Module 7 of TypeScript learning:

## 7.1 Building Projects with Project References

The project is structured with:
- `packages/shared` - Shared utilities and types
- `packages/app` - Main application that references shared code

Project References allow us to:
- Build projects in the correct dependency order
- Enable incremental builds
- Share code between projects with type safety

To build with project references:
```bash
npm run build
```

To clean previous builds:
```bash
npm run build:clean
```

To watch for changes:
```bash
npm run watch
```

## 7.2 Testing with Jest

Tests are located in `__tests__` directories within each package.

To run tests:
```bash
npm test
```

Jest is configured with ts-jest to provide full TypeScript support in tests.

## 7.3 Compilation and Bundling

### TypeScript Compiler (tsc)
Direct compilation with tsc for simple projects or libraries.

### Vite
Fast bundling and development server with Hot Module Replacement (HMR).

To start development server:
```bash
npm run dev
```

To build for production with Vite:
```bash
npm run build
```

### Webpack
Alternative bundler with extensive customization options.

To build with Webpack:
```bash
npm run build:webpack
```

## Key Benefits Demonstrated

1. **Scalable Structure**: Project references enable modular, maintainable code organization
2. **Type Safety**: Full typing across modules and in tests
3. **Efficient Builds**: Incremental compilation with project references
4. **Multiple Bundling Options**: Vite for fast development, Webpack for customization