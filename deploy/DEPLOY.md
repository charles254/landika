# Deploying Landika on Contabo VPS (Coolify + Apache)

## Architecture

```
Internet --> Apache (:80/:443 + SSL) --> Docker container (:3000) --> Next.js
```

- **Apache**: SSL termination, reverse proxy, static asset caching
- **Coolify**: Docker container lifecycle, deployments from GitHub
- **Next.js**: Standalone mode with ISR for 2000+ pSEO pages

---

## Prerequisites

- Contabo VPS with Coolify running
- `landika.co.ke` DNS A record pointing to VPS IP
- GitHub repo with Landika code pushed
- Supabase project credentials

---

## Step 1: Push Code to GitHub

```bash
cd Landika
git remote add origin git@github.com:YOUR_USERNAME/landika.git
git push -u origin master
```

---

## Step 2: Configure Coolify

1. **Open Coolify dashboard** (typically `http://YOUR_VPS_IP:8000`)

2. **Add new Application**:
   - Source: GitHub
   - Repository: select your `landika` repo
   - Branch: `master`

3. **Build settings**:
   - Build Pack: **Dockerfile**
   - Dockerfile Location: `/Dockerfile`
   - Port Exposes: `3000`

4. **Environment Variables** (add in Coolify UI):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
   Mark both as "Build Time" since they're `NEXT_PUBLIC_` vars baked into the client bundle.

5. **Network settings**:
   - Set the published port to `3000` on `127.0.0.1` (localhost only — Apache will proxy)
   - If Coolify assigns a random port, note it for the Apache config

6. **Deploy** - click Deploy and wait for the build to complete

7. **Verify container is running**:
   ```bash
   docker ps | grep landika
   curl http://127.0.0.1:3000
   ```

---

## Step 3: Install Apache

```bash
# Install Apache
sudo apt update && sudo apt install -y apache2

# Enable required modules
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers ssl

# Restart Apache
sudo systemctl restart apache2
```

---

## Step 4: Configure Apache VirtualHost

```bash
# Copy the provided config
sudo cp deploy/apache-landika.conf /etc/apache2/sites-available/landika.conf

# If Coolify assigned a different port than 3000, edit the config:
# sudo nano /etc/apache2/sites-available/landika.conf
# Change 127.0.0.1:3000 to the actual port

# Disable default site, enable Landika
sudo a2dissite 000-default
sudo a2ensite landika

# Test and reload
sudo apache2ctl configtest
sudo systemctl reload apache2
```

---

## Step 5: SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-apache

# Obtain certificate (auto-configures Apache)
sudo certbot --apache -d landika.co.ke -d www.landika.co.ke

# Verify auto-renewal
sudo certbot renew --dry-run
```

---

## Step 6: Verify Deployment

```bash
# Check SSL and headers
curl -I https://landika.co.ke

# Check homepage loads
curl -s https://landika.co.ke | head -20

# Check a pSEO page with ISR
curl -I https://landika.co.ke/plots-for-sale/kiambu/ruiru

# Check sitemap
curl -s https://landika.co.ke/sitemap.xml | head -30

# Check robots.txt
curl https://landika.co.ke/robots.txt
```

Expected response headers:
- `x-nextjs-cache: HIT` or `STALE` (ISR working)
- `cache-control: s-maxage=3600, stale-while-revalidate`

---

## Adding Future PHP Apps

Apache can serve PHP apps alongside Landika:

```bash
# Install PHP
sudo apt install -y php libapache2-mod-php php-mysql

# Create a new VirtualHost for the PHP app
sudo nano /etc/apache2/sites-available/phpapp.conf
```

Example PHP VirtualHost:
```apache
<VirtualHost *:443>
    ServerName phpapp.yourdomain.com
    DocumentRoot /var/www/phpapp
    <Directory /var/www/phpapp>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 502 Bad Gateway | Container not running: `docker ps`, check Coolify logs |
| SSL not working | Re-run `sudo certbot --apache -d landika.co.ke` |
| ISR pages stale | Check Supabase env vars are set, rebuild in Coolify |
| Port conflict | Change Coolify published port, update Apache config |
| Apache won't start | `sudo apache2ctl configtest` to find config errors |

---

## Redeployment

Push to GitHub and Coolify auto-deploys (if webhooks are configured), or manually trigger deploy in Coolify dashboard.
