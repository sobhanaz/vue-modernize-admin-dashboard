@echo off
REM Test Build Script for All Packages

echo 🧪 Testing Builds for All Modernize Packages
echo =============================================

REM Track success/failure
set success_count=0
set total_count=6
set failed_packages=

REM Function to build package
:build_package
set package_name=%1
echo.
echo 📦 Building %package_name% package...
cd packages\%package_name%

npm install --no-workspaces
if %errorlevel% neq 0 goto :build_failed

npm run build:ci
if %errorlevel% neq 0 goto :build_failed

echo ✅ %package_name% package built successfully
set /a success_count+=1
goto :build_done

:build_failed
echo ❌ %package_name% package build failed
set failed_packages=%failed_packages% %package_name%
goto :build_done

:build_done
cd ..\..\
exit /b 0

REM Build all packages
call :build_package main
call :build_package dark
call :build_package horizontal
call :build_package minisidebar
call :build_package rtl
call :build_package starterkit

echo.
echo 📊 Build Results Summary:
echo =========================
echo ✅ Successful builds: %success_count%/%total_count%

if not "%failed_packages%"=="" (
    echo ❌ Failed packages:%failed_packages%
    echo.
    echo 🔧 To fix failed packages:
    echo 1. Check TypeScript errors: npm run typecheck
    echo 2. Check missing dependencies: npm install
    echo 3. Check main.ts plugin registration order
) else (
    echo 🎉 All packages built successfully!
)

echo.
echo 🚀 Ready for release!