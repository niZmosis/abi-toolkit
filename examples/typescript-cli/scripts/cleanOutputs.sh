#!/bin/bash

# Define the output directory
output_dir="$(dirname "$0")/../src/outputs"

echo "Cleaning output directory: $output_dir"

# Function to clean directory
clean_directory() {
    local directory="$1"
    echo "Cleaning directory: $directory"
    for file in "$directory"/*; do
        if [ -d "$file" ]; then
            clean_directory "$file" # Recursively clean subdirectories
        elif [ -f "$file" ]; then
            rm "$file"
            echo "Deleted file: $file"
        fi
    done
}

# Check if the output directory exists
if [ -d "$output_dir" ]; then
    # Call the function with the output directory
    clean_directory "$output_dir"
else
    echo "Directory $output_dir does not exist."
fi
