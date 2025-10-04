# Contributing to Modernize Vue 3 Admin Dashboard

First off, thank you for considering contributing to Modernize Vue 3 Admin Dashboard! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Pledge

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js (v16.0 or higher)
- npm (v7.0 or higher) or yarn
- Git
- Basic knowledge of Vue 3, TypeScript, and Vuetify

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/vue-modernize-admin.git
   cd vue-modernize-admin
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/sobhanaz/vue-modernize-admin.git
   ```

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues as you might find that the issue has already been reported.

**When creating a bug report, please include:**

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)
- **Additional context**

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear title and description**
- **Detailed explanation** of the suggested enhancement
- **Use cases** and benefits
- **Possible implementation** approach

### 🔧 Code Contributions

#### Good First Issues

Look for issues labeled `good first issue` or `help wanted`. These are great for newcomers!

#### Areas We Need Help With

- 🐛 Bug fixes
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage improvements
- 🌐 Internationalization
- ♿ Accessibility improvements

## Development Setup

### Installation

```bash
# Navigate to your preferred layout
cd packages/main  # or any other layout

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
packages/[layout]/
├── src/
│   ├── components/     # Reusable components
│   ├── views/         # Page components
│   ├── layouts/       # Layout components
│   ├── router/        # Routing configuration
│   ├── stores/        # State management
│   ├── utils/         # Utility functions
│   └── types/         # TypeScript definitions
├── public/            # Static assets
└── tests/            # Test files
```

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript checks
npm run test        # Run tests
```

## Pull Request Process

### Before Submitting

1. **Update your fork:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Updating build tasks, package manager configs, etc.

**Examples:**
```bash
feat(dashboard): add revenue analytics widget
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
style(forms): improve form validation styling
```

### Pull Request Checklist

- [ ] **Fork** the repo and create your branch from `main`
- [ ] **Update** documentation if you changed APIs
- [ ] **Add tests** if you added code that should be tested
- [ ] **Ensure** test suite passes (`npm test`)
- [ ] **Run** linter and fix any issues (`npm run lint`)
- [ ] **Check** TypeScript compilation (`npm run type-check`)
- [ ] **Test** your changes in multiple layouts
- [ ] **Add** screenshots for UI changes

### Pull Request Template

```markdown
## 📋 Description
Brief description of changes made.

## 🧪 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## ✅ Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## 📸 Screenshots (if applicable)
Add screenshots here

## 📝 Additional Notes
Any additional information or context
```

## Style Guidelines

### TypeScript

- Use **TypeScript** for all new code
- Define **interfaces** for props and data structures
- Use **type assertions** sparingly
- Prefer **const assertions** for literal types

```typescript
// ✅ Good
interface UserProps {
  name: string
  email: string
  isActive: boolean
}

const user: UserProps = {
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
}

// ❌ Avoid
const user: any = {
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
}
```

### Vue 3 Composition API

- Use **Composition API** for all new components
- Group **reactive references** logically
- Use **computed** for derived state
- Extract **reusable logic** into composables

```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// ✅ Good - Grouped by functionality
const user = ref<User | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const isUserActive = computed(() => 
  user.value?.status === 'active'
)

const fetchUser = async (id: string) => {
  loading.value = true
  try {
    user.value = await api.getUser(id)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUser('123')
})
</script>
```

### CSS/SCSS

- Use **SCSS** for styling
- Follow **BEM methodology** for class naming
- Use **Vuetify classes** when possible
- Keep **component styles scoped**

```scss
<style lang="scss" scoped>
.dashboard-card {
  &__header {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &--highlighted {
      background-color: var(--v-primary-base);
    }
  }
  
  &__content {
    padding: 1.5rem;
  }
}
</style>
```

### Component Structure

```vue
<template>
  <!-- Template content -->
</template>

<script setup lang="ts">
// 1. Imports
import { ref, computed, onMounted } from 'vue'
import type { ComponentProps } from './types'

// 2. Props & Emits
interface Props {
  title: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const emit = defineEmits<{
  click: [id: string]
}>()

// 3. Reactive state
const isVisible = ref(false)

// 4. Computed properties
const classes = computed(() => ({
  'component--primary': props.variant === 'primary',
  'component--secondary': props.variant === 'secondary'
}))

// 5. Methods
const handleClick = () => {
  emit('click', 'some-id')
}

// 6. Lifecycle hooks
onMounted(() => {
  isVisible.value = true
})
</script>

<style lang="scss" scoped>
/* Component styles */
</style>
```

### Testing

- Write **unit tests** for utilities and composables
- Write **component tests** for complex components
- Use **Vue Testing Library** patterns
- Mock **external dependencies**

```typescript
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardCard from '@/components/DashboardCard.vue'

describe('DashboardCard', () => {
  it('renders title correctly', () => {
    const wrapper = mount(DashboardCard, {
      props: { title: 'Test Title' }
    })
    
    expect(wrapper.text()).toContain('Test Title')
  })
  
  it('emits click event', async () => {
    const wrapper = mount(DashboardCard, {
      props: { title: 'Test' }
    })
    
    await wrapper.find('.card-button').trigger('click')
    
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
```

## Documentation

### Code Comments

- Use **JSDoc** for functions and methods
- Write **clear, concise** comments
- Explain **complex business logic**
- Update **comments** when code changes

```typescript
/**
 * Calculates the total revenue for a given period
 * @param startDate - The start date of the period
 * @param endDate - The end date of the period
 * @param includeRefunds - Whether to include refunded amounts
 * @returns The total revenue amount
 */
const calculateRevenue = (
  startDate: Date,
  endDate: Date,
  includeRefunds = false
): number => {
  // Implementation here
}
```

### README Updates

When adding new features, update:
- Feature list
- Usage examples
- Configuration options
- API documentation

## Community

### Getting Help

- 💬 **GitHub Discussions** for questions and ideas
- 🐛 **GitHub Issues** for bugs and feature requests
- 📧 **Direct contact** via GitHub profile

### Recognition

Contributors are recognized in:
- Project README
- Release notes
- Hall of fame (coming soon!)

## Release Process

### Versioning

We use [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Schedule

- **Patch releases**: As needed for bug fixes
- **Minor releases**: Monthly for new features
- **Major releases**: Quarterly for breaking changes

## Questions?

Don't hesitate to ask! We're here to help:

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Contact**: Via [GitHub profile](https://github.com/sobhanaz)

Thank you for contributing! 🚀