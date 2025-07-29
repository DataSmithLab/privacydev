#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p _assets/fonts/materialdesignicons

# Copy font files from node_modules to assets
cp -f node_modules/@mdi/font/fonts/* _assets/fonts/materialdesignicons/

echo "Material Design Icons fonts copied successfully!" 