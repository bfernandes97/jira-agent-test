# Project Guidelines for Claude

## Project Structure

```
src/
  index.ts      - Main entry point
  calculator.ts - Calculator class with math operations
  utils.ts      - Utility functions
```

## Development Standards

### TypeScript

- Use strict mode
- Always define types for function parameters and return values
- Use interfaces for object shapes
- Avoid `any` type

### Code Style

- Use meaningful variable and function names
- Keep functions small and focused
- Add error handling where appropriate
- Use ES6+ features (arrow functions, destructuring, etc.)

### File Organization

- One class per file
- Group related utility functions together
- Keep the main entry point (`index.ts`) clean and minimal

## Adding New Features

When implementing new features:

1. Create new files in the `src/` directory
2. Export functions/classes for use in other modules
3. Import and use them in `index.ts` or other relevant files
4. Follow existing patterns in the codebase

## Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled application
- `npm run dev` - Run with ts-node (development)
