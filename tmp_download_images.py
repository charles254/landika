import os
from duckduckgo_search import DDGS
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

os.makedirs('public/assets/mock-plots', exist_ok=True)
try:
    results = DDGS().images('vacant land empty plot for sale with soil and fence', max_results=30)
    count = 1
    for r in results:
        try:
            req = urllib.request.Request(r['image'], headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(req, timeout=5, context=ctx).read()
            with open(f'public/assets/mock-plots/plot-{count}.jpg', 'wb') as f:
                f.write(img_data)
            count += 1
            if count > 25: break
        except Exception:
            pass
    print(f'Downloaded {count-1} images')
except Exception as e:
    print('Error:', e)
