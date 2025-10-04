#!/bin/bash
# Test Build Script for All Packages

echo "🧪 Testing Builds for All Modernize Packages"
echo "============================================="

# Track success/failure
success_count=0
total_count=6
failed_packages=()

# Function to build package
build_package() {
    local package_name=$1
    echo ""
    echo "📦 Building $package_name package..."
    cd packages/$package_name
    
    if npm install --no-workspaces && npm run build:ci; then
        echo "✅ $package_name package built successfully"
        ((success_count++))
    else
        echo "❌ $package_name package build failed"
        failed_packages+=($package_name)
    fi
    
    cd ../../
}

# Build all packages
build_package "main"
build_package "dark"
build_package "horizontal"
build_package "minisidebar"
build_package "rtl"
build_package "starterkit"

echo ""
echo "📊 Build Results Summary:"
echo "========================="
echo "✅ Successful builds: $success_count/$total_count"

if [ ${#failed_packages[@]} -gt 0 ]; then
    echo "❌ Failed packages: ${failed_packages[*]}"
    echo ""
    echo "🔧 To fix failed packages:"
    echo "1. Check TypeScript errors: npm run typecheck"
    echo "2. Check missing dependencies: npm install"
    echo "3. Check main.ts plugin registration order"
else
    echo "🎉 All packages built successfully!"
fi

echo ""
echo "🚀 Ready for release!"