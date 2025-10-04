@echo off
REM Release Script for Modernize Vue 3 Admin Dashboard

echo 🚀 Creating Release for Modernize Vue 3 Admin Dashboard
echo =====================================================

REM Get current version from package.json
for /f "tokens=2 delims=:" %%a in ('findstr "version" package.json') do (
    for /f "tokens=1 delims=," %%b in ("%%a") do (
        set VERSION=%%b
    )
)

REM Remove quotes and spaces
set VERSION=%VERSION:"=%
set VERSION=%VERSION: =%

echo 📦 Current version: %VERSION%

REM Create git tag
echo 🏷️  Creating git tag v%VERSION%...
git tag -a "v%VERSION%" -m "Release v%VERSION% - Modernize Vue 3 Admin Dashboard"

echo ✅ Git tag created successfully!
echo.
echo 📋 Next steps:
echo 1. Push the tag: git push origin v%VERSION%
echo 2. Go to GitHub → Releases → Create a new release
echo 3. Select the tag v%VERSION%
echo 4. GitHub will auto-generate release notes
echo.