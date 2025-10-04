# Modernize Vue 3 Admin Dashboard Template

<div align="center">

![Modernize Vue Admin Dashboard](https://img.shields.io/badge/Vue.js-3.5.7-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-3.7.1-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**🚀 A Modern, Responsive Vue 3 Admin Dashboard Template with Multiple Layout Variations**

[Live Demo](#) • [Documentation](./docs) • [Bug Reports](../../issues) • [Feature Requests](../../issues)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🎨 Available Layouts](#-available-layouts)
- [🔧 Configuration](#-configuration)
- [📖 Usage](#-usage)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [💡 Support](#-support)

## 🎯 Overview

**Modernize Vue 3 Admin Dashboard** is a powerful, feature-rich admin template built with the latest web technologies. It offers multiple layout variations, comprehensive UI components, and a modern design system perfect for building scalable web applications.

### 🎨 What Makes This Special?

- **🏗️ Multi-Layout Architecture**: 5 different layout variations in one package
- **🌙 Dark Mode Support**: Built-in dark theme with seamless switching
- **🌍 RTL Support**: Complete right-to-left language support
- **📱 Responsive Design**: Mobile-first approach with perfect responsiveness
- **🔒 Authentication System**: Complete auth flow with role-based access
- **📊 Dashboard Variations**: Multiple dashboard types (Modern, E-commerce, Analytics)
- **🧩 Rich Component Library**: 100+ pre-built components and widgets

## ✨ Features

### 🚀 Core Features
- **Vue 3 + Composition API**: Latest Vue.js features and best practices
- **TypeScript Support**: Full TypeScript integration for better development experience
- **Vuetify 3**: Material Design components with customization
- **Vite Build Tool**: Lightning-fast development and build process
- **Pinia State Management**: Modern state management solution
- **Vue Router 4**: Advanced routing with guards and navigation

### 🎨 UI/UX Features
- **Modern Design System**: Clean, contemporary interface design
- **Customizable Themes**: Light/Dark mode with theme customization
- **Responsive Layouts**: Perfect adaptation to all screen sizes
- **Animation Library**: Smooth animations and transitions (AOS)
- **Icon Libraries**: Vue Tabler Icons + Material Design Icons
- **Typography System**: Well-structured text hierarchy

### 📊 Dashboard Components
- **Analytics Widgets**: Revenue, sales, user metrics
- **Charts & Graphs**: ApexCharts integration with various chart types
- **Data Tables**: Advanced tables with sorting, filtering, pagination
- **Calendar Integration**: FullCalendar with event management
- **File Upload**: Drag & drop file upload components
- **Rich Text Editor**: TipTap WYSIWYG editor

### 🔧 Developer Experience
- **Hot Module Replacement**: Instant development feedback
- **ESLint + Prettier**: Code quality and formatting
- **Mock APIs**: Built-in mock data for development
- **Component Documentation**: Comprehensive component docs
- **Build Optimization**: Production-ready optimized builds

## 📂 Project Structure

```
vue.js-sample-site/
├── docs/                           # Documentation files
├── packages/                       # Multi-layout packages
│   ├── main/                      # Main layout (Default)
│   ├── dark/                      # Dark theme layout
│   ├── horizontal/                # Horizontal navigation layout
│   ├── minisidebar/              # Mini sidebar layout
│   ├── rtl/                      # Right-to-left layout
│   └── starterkit/               # Starter template
└── figma-file/                   # Design assets

Each package contains:
├── src/
│   ├── components/               # Reusable components
│   │   ├── shared/              # Shared components
│   │   ├── ui-components/       # UI components
│   │   ├── forms/               # Form components
│   │   └── widgets/             # Dashboard widgets
│   ├── views/                   # Page components
│   │   ├── dashboard/           # Dashboard pages
│   │   ├── ui-elements/         # UI element pages
│   │   ├── forms/               # Form pages
│   │   ├── pages/               # Static pages
│   │   └── authentication/     # Auth pages
│   ├── layouts/                 # Layout components
│   ├── router/                  # Vue Router configuration
│   ├── stores/                  # Pinia stores
│   ├── utils/                   # Utility functions
│   ├── assets/                  # Static assets
│   ├── scss/                    # Styling files
│   └── types/                   # TypeScript type definitions
├── public/                      # Public assets
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Tech Stack

### Frontend Framework
- **[Vue 3](https://vuejs.org/)** (v3.5.7) - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** (v5.5.4) - Type-safe JavaScript
- **[Vuetify 3](https://vuetifyjs.com/)** (v3.7.1) - Material Design component library

### Build & Development
- **[Vite](https://vitejs.dev/)** (v5.4.8) - Next generation build tool
- **[Vue CLI](https://cli.vuejs.org/)** - Standard tooling for Vue.js development

### State Management & Routing
- **[Pinia](https://pinia.vuejs.org/)** (v2.2.2) - Vue Store
- **[Vue Router](https://router.vuejs.org/)** (v4.2.5) - Official router for Vue.js

### UI & Styling
- **[SCSS/Sass](https://sass-lang.com/)** (v1.70.0) - CSS preprocessor
- **[Material Design Icons](https://materialdesignicons.com/)** - Icon library
- **[Vue Tabler Icons](https://github.com/tabler/tabler-icons)** (v2.21.0) - Additional icons
- **[AOS](https://michalsnik.github.io/aos/)** (v2.3.4) - Animate On Scroll library

### Charts & Data Visualization
- **[ApexCharts](https://apexcharts.com/)** (v3.45.2) - Modern charting library
- **[Vue3 ApexCharts](https://vue3-apexcharts.netlify.app/)** (v1.5.2) - Vue 3 wrapper

### Form Handling & Validation
- **[VeeValidate](https://vee-validate.logaretm.com/)** (v4.6.7) - Form validation
- **[Yup](https://github.com/jquense/yup)** (v1.4.0) - Schema validation

### Additional Libraries
- **[Axios](https://axios-http.com/)** (v1.7.6) - HTTP client
- **[Date-fns](https://date-fns.org/)** - Date utility library
- **[Lodash](https://lodash.com/)** - Utility library
- **[FullCalendar](https://fullcalendar.io/)** - Calendar component
- **[TipTap](https://tiptap.dev/)** - Rich text editor

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn** (v1.22 or higher)
- **Git**

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/sobhanaz/vue-modernize-admin.git
cd vue-modernize-admin

# Choose your preferred layout and navigate to it
cd packages/main  # or dark, horizontal, minisidebar, rtl, starterkit

# Install dependencies
npm install
# or
yarn install
```

### Development Server

```bash
# Start development server
npm run dev
# or
yarn dev

# Open your browser to http://localhost:3000
```

### Build for Production

```bash
# Build for production
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## 📦 Installation

### Option 1: Complete Installation (All Layouts)

```bash
# Clone the repository
git clone https://github.com/sobhanaz/vue-modernize-admin.git
cd vue-modernize-admin

# Install dependencies for all layouts
npm run install:all
```

### Option 2: Single Layout Installation

```bash
# Clone and navigate to specific layout
git clone https://github.com/sobhanaz/vue-modernize-admin.git
cd vue-modernize-admin/packages/main

# Install dependencies
npm install
npm run dev
```

### Environment Setup

Create a `.env` file in your chosen package root:

```env
# Development
VITE_API_URL=http://localhost:3001/api
VITE_APP_TITLE=Modernize Admin
VITE_APP_DESCRIPTION=Vue 3 Admin Dashboard

# Production
VITE_API_URL=https://your-api-domain.com/api
```

## 🎨 Available Layouts

### 1. 🏠 Main Layout (Default)
- **Path**: `packages/main/`
- **Description**: Classic admin layout with sidebar navigation
- **Features**: Full sidebar, breadcrumbs, customizable header
- **Best For**: Traditional admin dashboards

### 2. 🌙 Dark Layout
- **Path**: `packages/dark/`
- **Description**: Dark theme optimized layout
- **Features**: Dark color scheme, optimized contrast, eye-friendly design
- **Best For**: Night usage, modern applications

### 3. ↔️ Horizontal Layout
- **Path**: `packages/horizontal/`
- **Description**: Top navigation bar layout
- **Features**: Horizontal navigation, dropdown menus, clean design
- **Best For**: Content-heavy applications

### 4. 📱 Mini Sidebar Layout
- **Path**: `packages/minisidebar/`
- **Description**: Compact sidebar that expands on hover
- **Features**: Space-efficient, expandable sidebar, icon-based navigation
- **Best For**: Small screens, maximized content area

### 5. 🌍 RTL Layout
- **Path**: `packages/rtl/`
- **Description**: Right-to-left language support
- **Features**: RTL text flow, mirrored layouts, Arabic/Hebrew support
- **Best For**: Arabic, Hebrew, Persian applications

### 6. 🚀 Starter Kit
- **Path**: `packages/starterkit/`
- **Description**: Minimal template for custom development
- **Features**: Basic structure, essential components only
- **Best For**: Custom development, learning Vue 3

## 🔧 Configuration

### Theme Customization

```typescript
// src/theme/index.ts
import { createVuetify } from 'vuetify'

const theme = {
  themes: {
    light: {
      colors: {
        primary: '#5D87FF',
        secondary: '#49BEFF',
        success: '#13DEB9',
        info: '#539BFF',
        warning: '#FFAE1F',
        error: '#FA896B',
      }
    },
    dark: {
      colors: {
        primary: '#5D87FF',
        secondary: '#49BEFF',
        // ... dark theme colors
      }
    }
  }
}

export default createVuetify({ theme })
```

### Router Configuration

```typescript
// src/router/MainRoutes.ts
const MainRoutes = {
  path: '/main',
  meta: { requiresAuth: true },
  redirect: '/main/dashboard/modern',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Modern Dashboard',
      path: '/main/dashboard/modern',
      component: () => import('@/views/dashboard/modern/index.vue')
    }
    // ... more routes
  ]
}
```

### Environment Variables

```typescript
// vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
}
```

## 📖 Usage

### Basic Dashboard Setup

```vue
<template>
  <FullLayout>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8">
          <RevenueCard />
        </v-col>
        <v-col cols="12" md="4">
          <SalesOverview />
        </v-col>
      </v-row>
    </v-container>
  </FullLayout>
</template>

<script setup lang="ts">
import FullLayout from '@/layouts/full/FullLayout.vue'
import RevenueCard from '@/components/dashboard/RevenueCard.vue'
import SalesOverview from '@/components/dashboard/SalesOverview.vue'
</script>
```

### Creating Custom Components

```vue
<template>
  <UiParentCard title="Custom Widget">
    <UiChildCard title="Chart">
      <apexchart
        type="line"
        :options="chartOptions"
        :series="series"
        height="300"
      />
    </UiChildCard>
  </UiParentCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiParentCard from '@/components/shared/UiParentCard.vue'
import UiChildCard from '@/components/shared/UiChildCard.vue'

const chartOptions = ref({
  chart: { type: 'line' },
  xaxis: { categories: ['Jan', 'Feb', 'Mar'] }
})

const series = ref([{
  name: 'Sales',
  data: [30, 40, 35]
}])
</script>
```

### State Management with Pinia

```typescript
// stores/dashboard.ts
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    revenue: 0,
    users: 0,
    orders: 0
  }),
  
  actions: {
    async fetchDashboardData() {
      // API call to fetch data
      const response = await fetch('/api/dashboard')
      const data = await response.json()
      
      this.revenue = data.revenue
      this.users = data.users
      this.orders = data.orders
    }
  }
})
```

## 🌐 Deployment

### Netlify Deployment

```bash
# Build the project
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Manual Deployment

```bash
# Build for production
npm run build

# Upload the 'dist' folder to your web server
# Configure your server to serve index.html for all routes
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Use **TypeScript** for all new code
- Follow **Vue 3 Composition API** patterns
- Maintain **95%+ test coverage**
- Use **Conventional Commits** format
- Ensure **ESLint** and **Prettier** compliance

### Bug Reports

Please use the [issue tracker](../../issues) to report bugs:

- **Search existing issues** before creating new ones
- **Include reproduction steps** and environment details
- **Attach screenshots** when applicable

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Sobhan Azimzadeh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 💡 Support

### 📞 Contact Information

- **GitHub**: [@sobhanaz](https://github.com/sobhanaz)
- **Email**: [Contact via GitHub](https://github.com/sobhanaz)
- **Telegram**: [@sobhanazimzadeh](https://t.me/sobhanazimzadeh)
- **LinkedIn**: [Sobhan Azimzadeh](https://www.linkedin.com/in/sobhan-azimzadeh-b956aa234)
- **Company**: [TECSO Digital Agency](https://tecso.team/)

### 🆘 Getting Help

- 📚 **Documentation**: Check the [docs](./docs) folder
- 🐛 **Bug Reports**: Use [GitHub Issues](../../issues)
- 💬 **Discussions**: Use [GitHub Discussions](../../discussions)
- 🚀 **Feature Requests**: Use [GitHub Issues](../../issues) with enhancement label

### 💖 Show Your Support

If this project helped you, please:

- ⭐ **Star** this repository
- 🍴 **Fork** and contribute
- 📢 **Share** with others
- 💝 **Sponsor** the development

---

<div align="center">

**Built with ❤️ by [Sobhan Azimzadeh](https://github.com/sobhanaz) | CEO @ [TECSO](https://tecso.team/)**

**Ready to make your next project legendary? Let's build something amazing together!**

[🚀 Get Started](#-quick-start) • [📖 Documentation](./docs) • [💬 Support](../../discussions)

</div>