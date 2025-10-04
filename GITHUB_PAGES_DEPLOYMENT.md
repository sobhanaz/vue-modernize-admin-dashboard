# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the Modernize Vue 3 Admin Dashboard to GitHub Pages for live preview.

## 📋 Prerequisites

- GitHub repository with the project
- GitHub Pages enabled in repository settings
- Node.js 16+ installed locally

## ⚙️ Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository Settings

Ensure your repository has the correct settings:

- **Repository name**: `vue-modernize-admin-dashboard`
- **Visibility**: Public (required for GitHub Pages on free plan)
- **Actions**: Enabled in Settings → Actions

### 3. Verify Configuration Files

The following files should be present in your repository:

```
.github/workflows/deploy-github-pages.yml  ✅ Created
packages/main/vite.config.ts              ✅ Updated
packages/main/.env.production              ✅ Created
packages/main/public/_redirects            ✅ Exists
packages/main/index.html                   ✅ Updated
```

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "feat: setup GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor deployment**:
   - Go to **Actions** tab in your GitHub repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Deployment typically takes 2-5 minutes

3. **Access your demo**:
   - Your live demo will be available at:
   - `https://sobhanaz.github.io/vue-modernize-admin-dashboard/`

### Manual Deployment (Alternative)

If you prefer to build locally first:

**Windows:**
```bash
./deploy-github-pages.bat
```

**Linux/Mac:**
```bash
chmod +x deploy-github-pages.sh
./deploy-github-pages.sh
```

## 🔧 Local Testing

Before deploying, test the GitHub Pages build locally:

```bash
# Navigate to main package
cd packages/main

# Install dependencies
npm install

# Build for GitHub Pages
npm run build:github

# Preview the build
npm run preview:github
```

Visit `http://localhost:5050/vue-modernize-admin-dashboard/` to preview.

## 📁 Project Structure for GitHub Pages

```
vue-modernize-admin-dashboard/
├── .github/workflows/
│   └── deploy-github-pages.yml    # GitHub Actions workflow
├── packages/main/
│   ├── dist/                      # Built files (auto-generated)
│   ├── public/
│   │   └── _redirects             # SPA routing for Netlify/Pages
│   ├── src/                       # Source code
│   ├── .env.production            # Production environment
│   ├── index.html                 # Entry HTML file
│   ├── package.json               # Dependencies & scripts
│   └── vite.config.ts            # Vite configuration
└── README.md                      # Project documentation
```

## ⚡ GitHub Actions Workflow

The deployment workflow:

1. **Trigger**: Runs on push to `main` branch
2. **Build**: 
   - Installs Node.js 18
   - Installs npm dependencies
   - Runs TypeScript compilation
   - Builds the Vue app with Vite
3. **Deploy**: 
   - Uploads build artifacts
   - Deploys to GitHub Pages
   - Updates live demo URL

## 🎯 Environment Configuration

### Production Environment (`.env.production`)

```env
VITE_APP_TITLE=Modernize Vue 3 Admin Dashboard - Demo
VITE_APP_DESCRIPTION=Live demo of Modernize Vue 3 Admin Dashboard Template
VITE_API_URL=https://jsonplaceholder.typicode.com
VITE_APP_VERSION=6.1.0
```

### Vite Configuration

Key settings for GitHub Pages:

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/vue-modernize-admin-dashboard/' 
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
```

## 🔍 Troubleshooting

### Common Issues

**1. 404 Error on Page Refresh**
- **Cause**: SPA routing not configured
- **Solution**: Ensure `_redirects` file exists in `public/`

**2. Assets Not Loading**
- **Cause**: Incorrect base URL
- **Solution**: Verify `base` setting in `vite.config.ts`

**3. Build Fails**
- **Cause**: TypeScript errors or missing dependencies
- **Solution**: Run `npm run typecheck` locally first

**4. Blank Page**
- **Cause**: JavaScript errors or incorrect routing
- **Solution**: Check browser console and router configuration

### Debug Steps

1. **Check GitHub Actions logs**:
   - Go to Actions tab → Latest workflow run
   - Review build and deploy steps

2. **Local testing**:
   ```bash
   cd packages/main
   npm run build:github
   npm run preview:github
   ```

3. **Verify build output**:
   ```bash
   cd packages/main/dist
   ls -la  # Check if files exist
   ```

## 📊 Performance Optimization

The GitHub Pages build includes:

- **Code splitting**: Vendor, Vuetify, and chart libraries
- **Asset optimization**: Minified CSS/JS
- **Tree shaking**: Unused code removal
- **Gzip compression**: Automatic by GitHub Pages

## 🔄 Updating the Demo

To update the live demo:

1. Make changes to your code
2. Commit and push to `main` branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes appear in 2-5 minutes

## 📱 Mobile Testing

Test your GitHub Pages demo on mobile:

- Use browser dev tools
- Test on actual devices
- Check responsive breakpoints
- Verify touch interactions

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `packages/main/public/`
2. Configure DNS settings
3. Update GitHub Pages settings
4. Update `base` URL in `vite.config.ts`

## 📈 Analytics

Consider adding analytics to track demo usage:

- Google Analytics
- Plausible Analytics
- Simple Analytics

Add the tracking code to `index.html`.

## 🔒 Security Notes

- Demo runs on GitHub's infrastructure
- No sensitive data should be included
- Use mock APIs for demonstrations
- HTTPS is automatically enabled

## 🆘 Getting Help

If you encounter issues:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review GitHub Actions logs
3. Open an issue with deployment logs
4. Contact via [GitHub](https://github.com/sobhanaz)

---

## ✅ Checklist

Before deploying, ensure:

- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] All configuration files are present
- [ ] Local build works (`npm run build:github`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] Environment variables are set
- [ ] Base URL is correct in `vite.config.ts`

---

<div align="center">

**🚀 Ready to Deploy!**

Your Vue 3 admin dashboard will be live at:
`https://sobhanaz.github.io/vue-modernize-admin-dashboard/`

[🔙 Back to README](../README.md) • [📖 Documentation](../WIKI.md) • [💬 Get Support](../../discussions)

</div>