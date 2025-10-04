@echo off
REM GitHub Pages Deployment Script for Modernize Vue 3 Admin Dashboard
REM This script helps deploy the main package to GitHub Pages

echo 🚀 Modernize Vue 3 Admin Dashboard - GitHub Pages Deployment
echo ============================================================

REM Check if we're in the right directory
if not exist "packages\main\package.json" (
    echo ❌ Error: Please run this script from the root directory of the project
    exit /b 1
)

REM Navigate to main package
cd packages\main

echo 📦 Installing dependencies...
call npm install

echo 🧹 Cleaning previous builds...
if exist dist rmdir /s /q dist

echo 🔍 Running type check...
call npm run typecheck

echo 🏗️  Building for GitHub Pages...
call npm run build:github

echo ✅ Build completed successfully!
echo.
echo 📋 Next steps:
echo 1. Commit and push your changes to the main branch
echo 2. The GitHub Action will automatically deploy to GitHub Pages
echo 3. Your demo will be available at: https://sobhanaz.github.io/vue-modernize-admin-dashboard/
echo.
echo 🔗 Local preview:
echo Run 'npm run preview:github' from packages\main to preview locally

cd ..\..