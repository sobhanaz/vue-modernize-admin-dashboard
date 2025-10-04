# 🚀 Release and Package Publishing Guide

This guide explains how to create releases and publish packages for the Modernize Vue 3 Admin Dashboard.

## 📋 Table of Contents

- [Creating Releases](#-creating-releases)
- [Publishing Packages](#-publishing-packages)
- [Release Automation](#-release-automation)
- [Manual Release Process](#-manual-release-process)
- [Package Management](#-package-management)

---

## 🏷️ Creating Releases

### Automated Release Process (Recommended)

1. **Create and push a git tag**:
   ```bash
   # Method 1: Use the provided scripts
   ./create-release.sh        # Linux/Mac
   ./create-release.bat       # Windows
   
   # Method 2: Manual tag creation
   git tag -a v6.1.0 -m "Release v6.1.0 - Complete Vue 3 admin dashboard"
   git push origin v6.1.0
   ```

2. **Automatic release creation**:
   - GitHub Actions will automatically create a release
   - Release notes will be auto-generated
   - Downloadable assets will be created for each layout
   - Packages will be published to GitHub Packages

### Manual Release Process

If you prefer manual control:

1. **Go to GitHub repository**
2. **Click "Releases"** in the right sidebar
3. **Click "Create a new release"**
4. **Choose or create a tag**: `v6.1.0`
5. **Fill in release details**:

```markdown
# Release Title
Modernize Vue 3 Admin Dashboard v6.1.0

# Release Description
🚀 A powerful Vue 3 admin dashboard with multiple layout variations

## ✨ Features
- Vue 3.5.7 with Composition API
- Vuetify 3.7.1 with Material Design 3
- Multiple layout packages
- Dark mode support
- RTL language support
- 100+ components

## 📦 Downloads
- Complete package with all layouts
- Individual layout packages
- Source code
```

6. **Attach files** (optional):
   - Built distributions
   - Documentation
   - Additional assets

7. **Publish release**

---

## 📦 Publishing Packages

### GitHub Packages (Automatic)

Packages are automatically published when you create a release:

- `@sobhanaz/modernize-main`
- `@sobhanaz/modernize-dark`
- `@sobhanaz/modernize-horizontal`
- `@sobhanaz/modernize-minisidebar`
- `@sobhanaz/modernize-rtl`
- `@sobhanaz/modernize-starterkit`

### Manual Package Publishing

1. **Configure npm for GitHub Packages**:
   ```bash
   npm config set @sobhanaz:registry https://npm.pkg.github.com
   npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN
   ```

2. **Publish individual package**:
   ```bash
   cd packages/main
   npm publish
   ```

### Using Published Packages

Users can install your packages:

```bash
# Configure npm to use GitHub Packages
npm config set @sobhanaz:registry https://npm.pkg.github.com

# Install a specific layout
npm install @sobhanaz/modernize-main
npm install @sobhanaz/modernize-dark
```

---

## 🤖 Release Automation

### GitHub Actions Workflows

**1. Create Release Workflow** (`.github/workflows/create-release.yml`)
- Triggers on git tag push
- Builds all packages
- Creates release archives
- Generates comprehensive release notes
- Uploads assets to release

**2. Publish Packages Workflow** (`.github/workflows/publish-packages.yml`)
- Triggers on release publication
- Publishes each layout as a separate package
- Updates package metadata for GitHub Packages

### Workflow Features

- **Multi-package build**: Builds all layouts simultaneously
- **Asset generation**: Creates downloadable ZIP files
- **Automated release notes**: Rich markdown with features and instructions
- **Package publishing**: Publishes to GitHub Packages registry

---

## 📋 Manual Release Process

### Step-by-Step Manual Release

1. **Prepare for release**:
   ```bash
   # Ensure all changes are committed
   git status
   
   # Update version in package.json if needed
   npm version patch  # or minor, major
   ```

2. **Create git tag**:
   ```bash
   git tag -a v6.1.0 -m "Release v6.1.0"
   git push origin v6.1.0
   ```

3. **Build all packages**:
   ```bash
   cd packages/main && npm install && npm run build
   cd ../dark && npm install && npm run build
   cd ../horizontal && npm install && npm run build
   cd ../minisidebar && npm install && npm run build
   cd ../rtl && npm install && npm run build
   cd ../starterkit && npm install && npm run build
   ```

4. **Create release archives**:
   ```bash
   # Create release directory
   mkdir release-v6.1.0
   
   # Archive each package
   zip -r release-v6.1.0/modernize-main-v6.1.0.zip packages/main -x "*/node_modules/*"
   zip -r release-v6.1.0/modernize-dark-v6.1.0.zip packages/dark -x "*/node_modules/*"
   # ... repeat for other packages
   ```

5. **Create GitHub release**:
   - Go to GitHub → Releases → New release
   - Select tag `v6.1.0`
   - Add title and description
   - Upload ZIP files
   - Publish release

---

## 📊 Package Management

### Package Structure

```
@sobhanaz/modernize-main      # Main layout package
@sobhanaz/modernize-dark      # Dark theme package
@sobhanaz/modernize-horizontal # Horizontal layout
@sobhanaz/modernize-minisidebar # Mini sidebar
@sobhanaz/modernize-rtl       # RTL support
@sobhanaz/modernize-starterkit # Starter template
```

### Package Metadata

Each package includes:
- **Source code**: Complete Vue 3 application
- **Built assets**: Production-ready build
- **Documentation**: Usage instructions
- **License**: MIT license
- **Dependencies**: All required packages

### Version Management

- **Semantic versioning**: MAJOR.MINOR.PATCH
- **Synchronized versions**: All packages use same version
- **Release tags**: Match package versions

---

## 🔧 Advanced Configuration

### Custom Release Notes

Create `.github/release-template.md`:

```markdown
## 🚀 Features
- New feature 1
- New feature 2

## 🐛 Bug Fixes
- Fixed issue 1
- Fixed issue 2

## 📦 Package Changes
- Updated dependencies
- Improved build process
```

### Custom Package Configuration

Update `package.json` for specific publishing needs:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com",
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/sobhanaz/vue-modernize-admin-dashboard.git"
  }
}
```

---

## 🎯 Quick Commands

### Release Commands
```bash
# Create release (automated)
./create-release.sh

# Manual tag and push
git tag v6.1.0 && git push origin v6.1.0

# Check release status
git tag -l
```

### Package Commands
```bash
# Build all packages
npm run build:all

# Publish specific package
cd packages/main && npm publish

# Check published packages
npm view @sobhanaz/modernize-main
```

---

## 🆘 Troubleshooting

### Common Issues

**1. Permission Denied for Publishing**
```bash
# Ensure GitHub token has packages:write permission
# Update .npmrc with correct token
```

**2. Build Failures**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

**3. Tag Already Exists**
```bash
# Delete and recreate tag
git tag -d v6.1.0
git push origin :refs/tags/v6.1.0
git tag v6.1.0
git push origin v6.1.0
```

### Getting Help

- 📖 [GitHub Packages Documentation](https://docs.github.com/en/packages)
- 🏷️ [GitHub Releases Documentation](https://docs.github.com/en/repositories/releasing-projects-on-github)
- 💬 [Project Discussions](../../discussions)

---

<div align="center">

**🚀 Ready to Release!**

Your Vue 3 admin dashboard packages will be available for download and installation.

[🏷️ Create Release](../../releases/new) • [📦 View Packages](../../packages) • [📖 Documentation](../README.md)

</div>