#!/bin/bash

# E-Government Portal Setup Script
# This script helps you set up the project quickly

echo "================================================"
echo "E-Government Portal - Setup Script"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current version: $(node -v)"
    echo "   Please upgrade Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.local.example .env.local
    echo "✅ .env.local created from template"
    echo ""
    echo "⚠️  IMPORTANT: You need to configure your AWS Cognito credentials in .env.local"
    echo "   Edit the file and add your:"
    echo "   - NEXT_PUBLIC_USER_POOL_ID"
    echo "   - NEXT_PUBLIC_USER_POOL_CLIENT_ID"
    echo "   - NEXT_PUBLIC_IDENTITY_POOL_ID"
    echo "   - NEXT_PUBLIC_AWS_REGION"
    echo ""
    
    # Ask if user wants to open the file
    read -p "   Would you like to edit .env.local now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v code &> /dev/null; then
            code .env.local
        elif command -v nano &> /dev/null; then
            nano .env.local
        elif command -v vi &> /dev/null; then
            vi .env.local
        else
            echo "   Please edit .env.local manually"
        fi
    fi
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "================================================"
echo "Setup Complete! 🎉"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Configure your AWS Cognito credentials in .env.local (if not done)"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
echo "For quick start guide, see QUICKSTART.md"
echo ""
echo "Need help? Contact: info@digitalgov.pg"
echo "================================================"
