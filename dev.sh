#!/bin/bash

# Start Strapi in the background
echo "Starting Strapi CMS..."
cd strapi-cms
source ~/.nvm/nvm.sh && nvm use 18 && npm run develop &
STRAPI_PID=$!

# Wait for Strapi to start
echo "Waiting for Strapi to start..."
sleep 10

# Go back to the main directory
cd ..

# Start Next.js
echo "Starting Next.js..."
npm run dev

# When Next.js is stopped, also stop Strapi
echo "Stopping Strapi..."
kill $STRAPI_PID
