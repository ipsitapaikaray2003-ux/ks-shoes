import sys
from rembg import remove
from PIL import Image
import os

input_path = "d:/Projects/ks shoes/public/frames/ezgif-frame-001.jpg"
output_path = "d:/Projects/ks shoes/public/assets/images/shoe-hero-transparent.png"

# Check if input exists
if not os.path.exists(input_path):
    print(f"Error: Input file {input_path} not found.")
    sys.exit(1)

print("Opening image...")
input_image = Image.open(input_path)

print("Removing background...")
# Use alpha matting for cleaner edges
output_image = remove(input_image)

print(f"Saving to {output_path}...")
output_image.save(output_path)
print("Done!")
