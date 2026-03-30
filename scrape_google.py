import urllib.request
import re
import os
import base64
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://www.google.com/search?q=land+for+sale+in+ngong+kenya+vacant&tbm=isch"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'})

try:
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8', errors='ignore')

    matches = re.findall(r"data:image/(?:jpeg|png|jpg);base64,([A-Za-z0-9+/=]+)", html)
    print(f"Found {len(matches)} base64 images")

    os.makedirs('public/assets/mock-plots', exist_ok=True)
    count = 1
    for b64 in matches:
        if count > 25: break
        try:
            img_data = base64.b64decode(b64)
            # Avoid tiny icons
            if len(img_data) < 2000: continue
            with open(f'public/assets/mock-plots/plot-{count}.jpg', 'wb') as f:
                f.write(img_data)
            count += 1
        except Exception as e:
            print(e)
            pass
    print(f"Successfully saved {count - 1} images")
except Exception as e:
    print(f"Failed to fetch or parse: {e}")
