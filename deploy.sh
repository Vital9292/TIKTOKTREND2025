#!/bin/bash

# Deployment script for TikTok Shop Integration Platform
# This script automates the deployment process to Render.com

echo "Starting deployment process for TikTok Shop Integration Platform..."

# Step 1: Install Render CLI if not already installed
if ! command -v render &> /dev/null
then
    echo "Installing Render CLI..."
    curl -s https://render.com/download-cli.sh | bash
fi

# Step 2: Login to Render (requires manual input)
echo "Please login to your Render account when prompted..."
render login

# Step 3: Deploy using the render.yaml configuration
echo "Deploying to Render using configuration file..."
render blueprint apply

echo "Deployment initiated! Your application will be available at the URLs provided by Render once deployment is complete."
echo "This typically takes 5-10 minutes for the initial deployment."
echo "You will receive an email notification when the deployment is complete."

# Output expected URLs
echo "Expected URLs after deployment:"
echo "Backend API: https://tiktok-shop-integration-backend.onrender.com"
echo "Frontend: https://tiktok-shop-integration.onrender.com"
