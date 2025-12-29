# 🎨 QUICK CUSTOMIZATION GUIDE

## Fastest Way to Customize Your Wedding Invitation

### Step 1: Edit Basic Information (5 minutes)

**File: `index.html`**

Search and replace these placeholders:

#### Couple Names
```html
<!-- Line ~67-71 (Hero Section) -->
<p class="hero__name-groom">Anh Chàng</p>  <!-- Change to groom's name -->
<p class="hero__name-bride">Em Yêu</p>     <!-- Change to bride's name -->

<!-- Also appears in multiple other sections -->
```

#### Wedding Date
```html
<!-- Line ~73 -->
<p class="hero__date">December 24, 2025</p>
<!-- Also update in index.html around line ~130 -->
<time datetime="2025-12-24">Tuesday, December 24, 2025</time>
```

#### Wedding Time & Location
```html
<!-- Line ~77 -->
<p class="hero__location">Hà Nội, Việt Nam</p>

<!-- Lines ~224-232: Ceremony Details -->
<p><strong>Time:</strong> 5:30 AM</p>
<p><strong>Venue:</strong> Ancient Pagoda</p>
<p class="info-card__address">123 Ancient Street, Hà Nội, Vietnam</p>
```

### Step 2: Update Countdown Timer (2 minutes)

**File: `main.js` - Line ~21**

```javascript
// BEFORE:
weddingDate: new Date('2025-12-24T05:30:00').getTime(),

// AFTER:
weddingDate: new Date('2025-06-15T18:00:00').getTime(), // Your date & time
```

**Important:** Use format `'YYYY-MM-DDTHH:MM:SS'`
- `2025-12-24T05:30:00` = December 24, 2025 at 5:30 AM
- `2025-06-15T18:00:00` = June 15, 2025 at 6:00 PM

### Step 3: Replace Images (5 minutes)

**File: `index.html`**

1. **Hero Background** (Line ~64)
   ```html
   <div class="hero__background"></div>
   <!-- Update the background in style.css instead -->
   ```

2. **Groom Photo** (Line ~181)
   ```html
   <img src="https://your-image-url.jpg" alt="Groom" loading="lazy">
   ```

3. **Bride Photo** (Line ~195)
   ```html
   <img src="https://your-image-url.jpg" alt="Bride" loading="lazy">
   ```

4. **Gallery Images** (Lines ~380-450)
   ```html
   <img src="https://your-image-url-1.jpg" alt="Gallery photo 1" loading="lazy">
   <img src="https://your-image-url-2.jpg" alt="Gallery photo 2" loading="lazy">
   <!-- ... and so on -->
   ```

5. **Video Thumbnail** (Line ~362)
   ```html
   <img src="https://your-video-thumbnail.jpg" alt="Wedding Video Thumbnail" loading="lazy">
   ```

**Where to get free images:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

Or upload your own to an image hosting service like Imgur or Cloudinary.

### Step 4: Customize Colors (Optional, 3 minutes)

**File: `style.css` - Lines ~10-28**

```css
:root {
    --color-primary: #8B4789;      /* Burgundy - main color */
    --color-secondary: #D4AF37;    /* Gold - accent color */
    --color-light: #F9F7F4;        /* Light background */
    --color-dark: #2C2C2C;         /* Dark text */
    --color-text: #3D3D3D;         /* Regular text */
    --color-border: #E8D5C4;       /* Subtle borders */
}
```

**Popular wedding color combinations:**
- Burgundy & Gold (current) - Elegant, classic
- Blush & Gold - Romantic, delicate
- Navy & Rose - Sophisticated, modern
- Sage & Cream - Minimal, natural
- Plum & Champagne - Luxurious, formal

Example for Blush & Gold:
```css
--color-primary: #C56278;      /* Blush pink */
--color-secondary: #F0D08B;    /* Champagne gold */
```

### Step 5: Update Venue Information (3 minutes)

**Ceremony Details - `index.html` Lines ~219-237**
```html
<h3 class="info-card__title">Wedding Ceremony</h3>
<div class="info-card__details">
    <p><strong>Time:</strong> 5:30 AM</p>
    <p><strong>Guest Arrival:</strong> 5:00 AM</p>
</div>
<div class="info-card__location">
    <p><strong>Venue:</strong> Ancient Pagoda</p>
    <p class="info-card__address">123 Ancient Street, Hà Nội, Vietnam</p>
</div>
```

**Reception Details - `index.html` Lines ~239-256**
```html
<h3 class="info-card__title">Reception</h3>
<div class="info-card__details">
    <p><strong>Time:</strong> 6:30 PM</p>
    <p><strong>Dinner & Celebration</strong></p>
</div>
<div class="info-card__location">
    <p><strong>Venue:</strong> Grand Ballroom</p>
    <p class="info-card__address">456 Elegance Avenue, Hà Nội, Vietnam</p>
</div>
```

### Step 6: Update Google Map (3 minutes)

**File: `index.html` - Lines ~270-280**

Find and replace the iframe:
```html
<!-- Current: -->
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5761830850903!2d105.82745931533!3d21.028556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab46ca77c4e5%3A0x7d3e2e3e3e3e3e3e!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1640000000000" 
    ...
</iframe>

<!-- How to get your map embed code:
1. Go to Google Maps
2. Search for your venue
3. Click Share button
4. Click Embed a map tab
5. Copy the provided iframe code
6. Replace the src and paste into HTML
-->
```

### Step 7: Edit Love Story Timeline (5 minutes)

**File: `index.html` - Lines ~319-373**

```html
<!-- Milestone 1 -->
<div class="timeline__item scroll-animate" data-animation="fade-in-up">
    <div class="timeline__marker">
        <span class="timeline__icon">👀</span>
    </div>
    <div class="timeline__content">
        <h3 class="timeline__title">First Meeting</h3>
        <p class="timeline__date">2019</p>
        <p class="timeline__description">
            Two souls collided on a sunny autumn day. A glance, a smile, and fate sealed the moment forever.
        </p>
    </div>
</div>

<!-- Repeat for other milestones - edit:
- timeline__icon (emoji)
- timeline__title
- timeline__date
- timeline__description
-->
```

**Available emoji for milestones:**
- 👀 First meeting/seeing
- 💕 Love/falling in love
- 💍 Proposal/engagement
- 💒 Wedding
- ❤️ Heart
- ✨ Sparkle
- 🌹 Rose
- 💑 Couple

### Step 8: Update Thank You Message (2 minutes)

**File: `index.html` - Lines ~456-473**

```html
<h2 class="thank-you__title">Thank You</h2>

<p class="thank-you__message">
    Thank you for being a part of our special day and for blessing our union with your presence and love.
</p>

<p class="thank-you__names">
    <strong>Anh Chàng</strong> & <strong>Em Yêu</strong>
</p>

<p class="thank-you__date">
    December 24, 2025
</p>
```

### Step 9: Edit Invitation Message (5 minutes)

**File: `index.html` - Lines ~150-177**

```html
<h2 class="invitation__title">Together With Our Families</h2>

<p class="invitation__text">
    We request the honor of your presence at the marriage of
</p>

<p class="invitation__names">
    <strong>Anh Chàng</strong> and <strong>Em Yêu</strong>
</p>

<p class="invitation__text">
    on the twenty-fourth of December, twenty twenty-five
    <br>at half past five o'clock in the morning
    <br>Hà Nội, Việt Nam
</p>

<p class="invitation__text invitation__text--rsvp">
    <em>Reception to follow</em>
</p>
```

### Step 10: Add Your Video (Optional, 5 minutes)

**File: `main.js` - Lines ~183-186**

```javascript
handlePlayClick() {
    // Replace 'example-video-id' with your YouTube video ID
    const videoId = 'dQw4w9WgXcQ'; // Example: Rick Astley's video
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank');
}
```

**How to get YouTube video ID:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ` (part after `v=`)

---

## Testing Checklist

After customization, test these:

- [ ] All names appear correctly
- [ ] Countdown shows correct date/time
- [ ] All images load without errors
- [ ] Map shows correct location
- [ ] All links work (especially Map buttons)
- [ ] Page looks good on mobile (test with phone or browser DevTools)
- [ ] Animations work smoothly
- [ ] Lightbox opens when clicking gallery images
- [ ] Can navigate gallery with arrow keys
- [ ] Can close lightbox with Escape key
- [ ] No console errors (open DevTools > Console)

---

## Common Issues & Fixes

### Countdown shows negative numbers
**Fix:** Update the date in `main.js` to a future date

### Images show broken icon
**Fix:** 
1. Check image URL is correct
2. Use HTTPS URLs (not HTTP)
3. On GitHub Pages, images must be accessible from your repo

### Map doesn't show
**Fix:**
1. Copy new embed code from Google Maps
2. Replace the entire iframe in HTML
3. Check URL has correct venue coordinates

### Colors not changing
**Fix:**
1. Make sure CSS file is loaded (check browser DevTools)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check CSS variable syntax is correct

---

## File Quick Reference

| File | Purpose | Key Lines |
|------|---------|-----------|
| `index.html` | Structure & content | See section numbers in guide |
| `style.css` | Design & layout | Colors at top (lines 10-28) |
| `main.js` | Countdown & animations | Wedding date at line 21 |
| `README.md` | Full documentation | - |

---

## Deploy to GitHub Pages

1. Create GitHub account (if you don't have one)
2. Create new repository
3. Upload these 4 files
4. Go to Settings > Pages > Enable GitHub Pages
5. Your site is live! (URL shown in Pages section)

---

**That's it! Your wedding invitation is ready!** 🎉

Questions? Check the detailed README.md or refer to the code comments.
