#!/bin/bash
# Release Script for Modernize Vue 3 Admin Dashboard

echo "🚀 Creating Release for Modernize Vue 3 Admin Dashboard"
echo "====================================================="

# Get current version from package.json
VERSION=$(grep '"version"' package.json | cut -d '"' -f 4)
echo "📦 Current version: $VERSION"

# Create git tag
echo "🏷️  Creating git tag v$VERSION..."
git tag -a "v$VERSION" -m "Release v$VERSION - Modernize Vue 3 Admin Dashboard

🎯 Features:
- Vue 3.5.7 with Composition API
- Vuetify 3.7.1 with Material Design 3
- TypeScript 5.5.4 support
- Multiple layout variations (5 layouts)
- Dark mode support
- RTL language support
- GitHub Pages deployment
- 100+ pre-built components

🚀 Layout Packages:
- @modernize/main - Main layout
- @modernize/dark - Dark theme layout
- @modernize/horizontal - Horizontal navigation
- @modernize/minisidebar - Mini sidebar layout
- @modernize/rtl - RTL language support
- @modernize/starterkit - Starter template

📊 Tech Stack:
- Vue 3, TypeScript, Vuetify 3
- Vite, Pinia, Vue Router 4
- ApexCharts, FullCalendar, TipTap
- Complete admin dashboard solution"

echo "✅ Git tag created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Push the tag: git push origin v$VERSION"
echo "2. Go to GitHub → Releases → Create a new release"
echo "3. Select the tag v$VERSION"
echo "4. GitHub will auto-generate release notes"
echo ""