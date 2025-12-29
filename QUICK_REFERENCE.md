# 🎯 QUICK REFERENCE CARD

## Essential Customizations (Copy & Paste)

### 1. Update Wedding Date (in main.js, line 21)

**FIND THIS:**
```javascript
weddingDate: new Date('2025-12-24T05:30:00').getTime(),
```

**REPLACE WITH YOUR DATE:**
```javascript
weddingDate: new Date('2025-06-15T18:00:00').getTime(), // June 15, 2025 at 6:00 PM
```

**Format:** `'YYYY-MM-DDTHH:MM:SS'`

---

### 2. Update Names (in index.html)

Find and replace these 4 times each:
- `Anh Chàng` → Groom's name
- `Em Yêu` → Bride's name

**Location:** Lines 67-71 (Hero), 99, 128, etc.

---

### 3. Update Date Display (in index.html, line 73)

**FIND:**
```html
<p class="hero__date">December 24, 2025</p>
```

**REPLACE:**
```html
<p class="hero__date">June 15, 2025</p>
```

---

### 4. Update Location (in index.html, line 77)

**FIND:**
```html
<p class="hero__location">Hà Nội, Việt Nam</p>
```

**REPLACE:**
```html
<p class="hero__location">New York, USA</p>
```

---

### 5. Update Images (in index.html)

**Groom photo (line ~189):**
```html
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Groom">
```

**Bride photo (line ~203):**
```html
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" alt="Bride">
```

---

### 6. Update Venue Info (in index.html)

**Ceremony (lines 220-237):**
```html
<p><strong>Time:</strong> 5:30 AM</p>
<p><strong>Venue:</strong> Ancient Pagoda</p>
<p class="info-card__address">123 Ancient Street, Hà Nội, Vietnam</p>
```

**Reception (lines 240-257):**
```html
<p><strong>Time:</strong> 6:30 PM</p>
<p><strong>Venue:</strong> Grand Ballroom</p>
<p class="info-card__address">456 Elegance Avenue, Hà Nội, Vietnam</p>
```

---

### 7. Update Colors (in style.css, lines 10-15)

```css
--color-primary: #8B4789;      /* Burgundy - main color */
--color-secondary: #D4AF37;    /* Gold - accent color */
```

**Popular combinations:**
- Blush & Gold: `#C56278` & `#F0D08B`
- Navy & Rose: `#1B4965` & `#E8B4B8`
- Sage & Cream: `#9CAF88` & `#F5F0E1`
- Plum & Champagne: `#663399` & `#F0E68C`

---

## File Editing Quick Links

| What to Edit | File | Line(s) |
|--------------|------|---------|
| Wedding date (countdown) | main.js | 21 |
| Couple names | index.html | 67-71, 99, 128, etc |
| Wedding date display | index.html | 73, 130 |
| Location | index.html | 77 |
| Groom photo | index.html | ~189 |
| Bride photo | index.html | ~203 |
| Ceremony details | index.html | 220-237 |
| Reception details | index.html | 240-257 |
| Map URL | index.html | 270-280 |
| Colors | style.css | 10-28 |

---

## Testing Checklist

```bash
# 1. Open in browser
open index.html  # Mac
# or double-click index.html on Windows

# 2. Check these:
- [ ] Names appear correctly
- [ ] Countdown shows correct date
- [ ] Images load
- [ ] Colors look right
- [ ] Mobile looks good (resize browser)
- [ ] Animations work
- [ ] No console errors (F12)

# 3. Deploy to GitHub Pages
# See DEPLOYMENT.md
```

---

## Free Image Resources

| Service | URL | Best For |
|---------|-----|----------|
| Unsplash | unsplash.com | High quality weddings |
| Pexels | pexels.com | Couple portraits |
| Pixabay | pixabay.com | Decorative elements |
| Imgur | imgur.com | Quick hosting |

---

## Keyboard Shortcuts (When Testing)

| Shortcut | Action |
|----------|--------|
| `F12` | Open DevTools (check for errors) |
| `Ctrl+Shift+R` | Hard refresh (clear cache) |
| `Tab` | Navigate with keyboard |
| `Enter` | Activate buttons/links |
| `Esc` | Close lightbox |
| `←` / `→` | Navigate lightbox |

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use HTTP instead of HTTPS for images
- Forget to update countdown date
- Use non-existent image URLs
- Edit before backing up
- Change file names (keep as is)
- Add spaces in file names

✅ **Do:**
- Use HTTPS URLs for images
- Test locally before deploying
- Keep backup copies
- Use high-quality images
- Read error messages in console (F12)

---

## Help! I Changed Something Wrong

**Solution:**
1. Go to GitHub.com
2. Find your repository
3. Click "Code" tab
4. Find the file you messed up
5. Click the pencil icon to edit
6. Restore from your working copy

**Or:**
- Delete the file
- Upload a fresh copy

---

## Mobile Testing

**Test responsively:**
1. Open browser (Chrome, Firefox, Safari)
2. Press `F12` (Developer Tools)
3. Click device toggle icon (top-left)
4. Select "iPhone" or other mobile
5. Resize and check layout

**Or:**
- Just view on your actual phone!

---

## Deployment URLs

After uploading to GitHub:

| Platform | URL Pattern |
|----------|-------------|
| GitHub Pages | `https://yourusername.github.io/wedding` |
| Custom Domain | `https://yourdomain.com` |
| Netlify | `https://your-site.netlify.app` |
| Vercel | `https://your-site.vercel.app` |

---

## Performance Check

Test speed at: https://pagespeed.web.dev

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

**To improve:**
1. Compress images (TinyPNG)
2. Use CDN for images (Cloudinary)
3. Minimize CSS/JS (optional)
4. Use modern image formats (WebP)

---

## SEO Basics

Add to `index.html` in `<head>`:

```html
<meta name="description" content="Wedding invitation for [Names]. Join us on [Date] in [Location].">
<meta name="keywords" content="wedding, invitation, [names], [location]">
<meta property="og:image" content="https://your-hero-image-url.jpg">
```

---

## Share with Guests

**Copy this URL:** `https://yourusername.github.io/wedding`

**Share via:**
- WhatsApp: Just paste the link
- Email: Include in wedding invitation email
- Facebook: Post as event page
- Instagram: Add to bio
- SMS: Text to family/friends
- QR Code: Generate at QR-Server.com

---

## Troubleshooting Map

**Map not showing?**
1. Get embed code from Google Maps
2. Copy entire `<iframe>` code
3. Find `<iframe` in index.html (around line 270)
4. Replace entire iframe element
5. Test in browser

---

## 30-Second Setup

```bash
# 1. Edit these 3 things:
- Line 73 in index.html: Date
- Line 77 in index.html: Location  
- Line 21 in main.js: Countdown date

# 2. Replace images with your own

# 3. Deploy to GitHub Pages
# (Follow DEPLOYMENT.md)
```

---

## Emergency Fixes

**Site won't load?**
- Check file names: `index.html` (not `INDEX.HTML`)
- Check GitHub Pages enabled
- Wait 2 minutes
- Hard refresh (Ctrl+Shift+R)

**Images missing?**
- Use HTTPS URLs
- Check URL is correct
- Try different image
- Use Imgur or Cloudinary

**Countdown wrong?**
- Check date format: `'YYYY-MM-DDTHH:MM:SS'`
- Use future date, not past
- Check timezone

---

## Support Files

📄 **README.md** - Full documentation
📄 **CUSTOMIZE.md** - Step-by-step guide  
📄 **DEPLOYMENT.md** - GitHub Pages setup
📄 **SUMMARY.md** - Project overview
📄 **THIS FILE** - Quick reference

---

## Browser Console (for debugging)

Press `F12`, go to "Console" tab:

```javascript
// Check if countdown is running
console.log('Wedding date set');

// Check errors
// Any red messages = problems
```

---

## Color Cheat Sheet

```css
/* Skin tones */
#C2A878  /* Light skin */
#8B6F47  /* Medium skin */

/* Rose/Pink */
#E8B4B8  /* Light rose */
#C56278  /* Blush pink */
#E75480  /* Coral pink */

/* Gold/Yellow */
#D4AF37  /* Gold (default) */
#F0D08B  /* Champagne */
#C9A961  /* Muted gold */

/* Blue */
#1B4965  /* Navy (default alt) */
#2F5233  /* Dark blue-green */
#4A90E2  /* Bright blue */

/* Purple */
#8B4789  /* Burgundy/purple (default) */
#663399  /* Plum */
#9932CC  /* Dark orchid */

/* Neutral */
#F9F7F4  /* Cream (light) */
#2C2C2C  /* Charcoal (dark) */
```

---

## Size Reference

```
Hero section:   100vh (full screen)
Sections:       ~1200px max width
Padding:        1rem (mobile) → 3rem (desktop)
Font sizes:     1rem (body) → 2.5rem (titles)
Gap spacing:    1rem (mobile) → 2rem (desktop)
```

---

## That's it!

You have everything you need. Now go customize and deploy! 🚀

Questions? Check README.md, CUSTOMIZE.md, or DEPLOYMENT.md

---

**Happy Wedding! 💍✨**
