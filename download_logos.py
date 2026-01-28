#!/usr/bin/env python3
import urllib.request
import ssl
import os

ssl._create_default_https_context = ssl._create_unverified_context

os.chdir('/Users/digo/Documents/referals/assets/logos')

# Create placeholder logos if downloads fail
logos_to_create = ["uphold.png", "kraken.png", "bybit.png", "cointiply.png", "zonda.png", "airtm.png", "altify.png", "joko.png", "speed-wallet.png"]

for filename in logos_to_create:
    if os.path.exists(filename):
        print(f"✓ {filename} already exists")
        continue
    # Create a minimal valid PNG file (1x1 transparent pixel)
    # PNG header for 1x1 transparent pixel
    png_data = b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82'
    try:
        with open(filename, 'wb') as f:
            f.write(png_data)
        print(f"✓ Created placeholder {filename}")
    except Exception as e:
        print(f"✗ Failed to create {filename}: {str(e)}")

print("\nPlaceholder logos created!")
