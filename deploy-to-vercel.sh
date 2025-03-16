#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null
then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete! Check the URL provided by Vercel." 