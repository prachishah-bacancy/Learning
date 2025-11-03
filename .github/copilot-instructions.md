# AI Agent Instructions for Vue Learning Project

## Project Overview
This is a Vue 3 project using Vite for build tooling, Pinia for state management, and Vue Router for navigation. The project demonstrates modern Vue.js development practices.

## Key Technologies & Dependencies
- Vue 3.5+ with Composition API
- Vite 7+ for build tooling
- Pinia 3+ for state management
- Vue Router 4+ for routing
- Vitest + Vue Test Utils for testing

## Project Architecture

### State Management Pattern
The project uses Pinia stores with the Composition API setup style. Example from `src/stores/counter.js`:
```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  // ... methods
})
```

### Component Testing Pattern
Tests use Vitest and Vue Test Utils. Component tests live in `src/__tests__/` with `.spec.js` extension. Example:
```js
import { mount } from '@vue/test-utils'
describe('Component', () => {
  it('test case', () => {
    const wrapper = mount(Component)
    // assertions...
  })
})
```

## Development Workflow

### Essential Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run test:unit` - Run unit tests
- `npm run preview` - Preview production build locally

### IDE Setup
- Use VS Code with the official Vue extension
- Disable Vetur if installed
- Install Vue DevTools browser extension

## Best Practices
1. Use Composition API with `<script setup>` syntax for components
2. Store state in Pinia stores using composition style setup
3. Co-locate component tests with implementation in `__tests__` directory
4. Use Vue Router for navigation between views

## Common Patterns
- Store modules use composition-style `defineStore` with refs and computed
- Component tests use `mount` from Vue Test Utils
- Routes are defined in `src/router/index.js`

## Configuration Files
- `vite.config.js` - Vite build configuration
- `vitest.config.js` - Vitest test configuration
- `jsconfig.json` - JavaScript configuration and path aliases