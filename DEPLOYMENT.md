# 🚀 GITHUB PAGES DEPLOYMENT GUIDE

## Quick Deploy (5 minutes)

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create GitHub Account** (if needed)
   - Go to https://github.com/signup
   - Sign up with email

2. **Create New Repository**
   - Click `+` → New repository
   - Repository name: `wedding` (or any name)
   - Make it **PUBLIC**
   - Click "Create repository"

3. **Upload Files**
   - Click "Add file" → Upload files
   - Select all 4 files:
     - `index.html`
     - `style.css`
     - `main.js`
     - `README.md` (optional)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings tab
   - Scroll down to "Pages" section
   - Source: Select "main" branch
   - Click Save
   - Wait 1-2 minutes...
   - Your site is live! 🎉

5. **Access Your Site**
   - URL: `https://yourusername.github.io/wedding`
   - Or check the green message in Pages section

---

### Option 2: Using Git Command Line

**Prerequisites:** Git installed, GitHub account

```bash
# 1. Create local repository
cd wedding
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial wedding invitation"

# 4. Create GitHub repository online first (via web interface)
# Then copy the repo URL

# 5. Add remote
git remote add origin https://github.com/yourusername/wedding.git

# 6. Push to GitHub
git push -u origin main

# 7. Enable Pages (via web interface)
# Settings > Pages > Select main branch > Save
```

---

### Option 3: Using GitHub Desktop (Most User-Friendly)

1. **Download & Install** GitHub Desktop
   - https://desktop.github.com

2. **Create Repository**
   - File → New Repository
   - Name: "wedding"
   - Local Path: Choose folder
   - Click "Create Repository"

3. **Add Files**
   - Copy your files into the repository folder
   - They should appear in GitHub Desktop

4. **Commit & Push**
   - Write summary: "Initial wedding invitation"
   - Click "Commit to main"
   - Click "Publish repository"

5. **Enable Pages**
   - Go to Repository on GitHub.com
   - Settings → Pages → Select main branch

---

## After Deployment

### Access Your Site
- **Public URL:** `https://yourusername.github.io/wedding`
- **Takes 1-2 minutes** to go live
- **Browser caching:** Clear cache (Ctrl+Shift+Del) if changes don't appear

### Update Content
1. Edit files locally
2. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update wedding details"
   git push
   ```
3. Changes live in 1-2 minutes

### Custom Domain (Optional)
1. Go to Settings → Pages
2. Add your domain (e.g., `ourfancywedding.com`)
3. Update DNS records as instructed
4. Verify & enable HTTPS

---

## Troubleshooting

### Site Not Loading
- **Wait 2-3 minutes** after enabling Pages
- **Check URL:** Should be `https://` not `http://`
- **Check branch:** Pages should show "Branch: main"
- **Repository must be PUBLIC**

### Images Not Showing
- Ensure image URLs use `https://`
- Or upload images to repository:
  - Create `images/` folder
  - Upload photos
  - Use relative paths: `images/photo.jpg`

### CSS/JS Not Working
- **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check file names are exactly: `index.html`, `style.css`, `main.js`

### Changes Not Appearing
- **Hard refresh:** Ctrl+Shift+R
- Clear cache
- Wait 2-3 minutes for GitHub to update

---

## Pro Tips

### Add .gitignore (Optional)
Create a file named `.gitignore`:
```
.DS_Store
*.swp
*.swo
node_modules/
.env
```

### Add GitHub Actions CI/CD
Create `.github/workflows/pages.yml` for automatic deployment:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### Make It More Shareable
Add to `index.html` head:
```html
<!-- Open Graph for social sharing -->
<meta property="og:title" content="Our Wedding">
<meta property="og:description" content="Join us as we celebrate our love">
<meta property="og:image" content="https://your-image-url.jpg">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Our Wedding">
<meta name="twitter:description" content="Join us to celebrate">
<meta name="twitter:image" content="https://your-image-url.jpg">
```

---

## Alternative Hosting Platforms

### Netlify (Very Easy)
1. Push to GitHub
2. Go to https://netlify.com
3. Connect your GitHub account
4. Select repository
5. Deploy automatically
6. Free custom domain available

### Vercel (Fast & Free)
1. Go to https://vercel.com
2. Import from GitHub
3. One-click deployment
4. Auto-deploys on push

### AWS Amplify (Scalable)
1. Go to AWS Amplify Console
2. Connect repository
3. Configure build settings
4. Deploy

### Firebase Hosting (Google's Service)
1. Create Firebase project
2. Install Firebase CLI
3. Deploy with: `firebase deploy`
4. Fast, secure, free tier available

---

## Analytics & Tracking (Optional)

### Add Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your tracking ID from Google Analytics.

### Track Guest Interactions
```javascript
// In main.js, add:
gtag('event', 'visit_section', {
    section_name: 'countdown'
});

gtag('event', 'gallery_opened', {
    photo_index: 1
});
```

---

## Security Notes

✅ **Safe to Use:**
- No backend needed
- No database
- No user data collected
- Static files only
- GitHub handles HTTPS automatically

⚠️ **Best Practices:**
- Don't share personal email in code (use form instead)
- Use HTTPS always
- Keep repo public only for wedding info
- Monitor GitHub for security alerts

---

## SEO Optimization

Improve search visibility:

```html
<!-- In index.html <head> -->
<meta name="description" content="Wedding invitation for [Couple Names]. Join us on [Date] in [Location].">
<meta name="keywords" content="wedding, invitation, [couple names], [location], [date]">
<meta name="author" content="[Couple Names]">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WeddingEvent",
  "name": "[Couple Names] Wedding",
  "startDate": "2025-12-24T05:30:00",
  "endDate": "2025-12-24T23:59:00",
  "location": {
    "@type": "Place",
    "name": "[Venue Name]",
    "address": "[Address]"
  }
}
</script>
```

---

## Performance Monitoring

Check your site's performance:
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Lighthouse:** Built into Chrome DevTools (F12)
- **WebPageTest:** https://www.webpagetest.org

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## Common Questions

**Q: Can I use a custom domain?**
A: Yes! Go to Settings → Pages, add your domain name, and update DNS records.

**Q: How many sites can I host?**
A: Unlimited static sites with GitHub Pages (free tier).

**Q: Is it really free?**
A: Yes! GitHub Pages is completely free for public repositories.

**Q: How many visitors can I have?**
A: No limit! GitHub Pages handles unlimited bandwidth.

**Q: Can I use PHP/databases?**
A: No. GitHub Pages only hosts static files. For forms, use third-party services like Formspree.

**Q: How long do deployments take?**
A: Usually 1-2 minutes, sometimes up to 5 minutes.

**Q: Can I remove the GitHub URL?**
A: Yes, use a custom domain or choose another platform.

---

## Next Steps

1. ✅ Deploy to GitHub Pages (follow steps above)
2. 📝 Customize content (see CUSTOMIZE.md)
3. 🖼️ Replace images with your photos
4. 🔗 Share the link with guests
5. 📊 Monitor with Google Analytics (optional)
6. 🎉 Celebrate your wedding!

---

## Support Resources

- GitHub Pages Docs: https://pages.github.com
- GitHub Help: https://docs.github.com
- Our README.md: Full documentation
- CUSTOMIZE.md: Customization guide

---

**Your wedding site is ready to go! 💍**

Deploy now and start sharing with your guests! 🎉
