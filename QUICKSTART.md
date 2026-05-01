# BUILDCRAFT STUDIOS - QUICK START GUIDE

## What's Included

This website has everything you need:
- ✅ Professional homepage with hero section
- ✅ PC builds showcase (update with your builds)
- ✅ Computer request form with game selection
- ✅ Photography services showcase
- ✅ Photography booking system
- ✅ Service area map with availability
- ✅ Mobile responsive design
- ✅ Form handling (Netlify Forms)

## Before Deploying - IMPORTANT CUSTOMIZATIONS

### 1. Update Your Business Info (REQUIRED)
Edit `index.html` and find these sections to update:

**Footer Contact Info (near bottom)**
```html
<p>Email: harrisburgbuilds@outlook.com</p>
<p>Phone: 717 773 6489</p>
```

**Harrisburg Photo and PC** - Search for "BuildCraft Studios" and replace with your name

### 2. Update Map Location (REQUIRED for map to work)
- **MapTiler API Key** is already configured: `080iEI6i5hfaGaI2PiOT`
- Update coordinates in `script.js` in `initializeMap()` function with your actual location
  - Default is Harrisburg, PA (40.2732, -76.8867)
  - Find the line `const myLocation = { lat: 40.2732, lng: -76.8867 };` and update with your coordinates
- To find your coordinates: Go to https://maptiler.com/maps/ and click on your location

### 3. Customize Your Computer Builds (RECOMMENDED)
Edit the builds section in `index.html` - update:
- Build names
- Prices
- Components/specs
- Games they're optimized for

### 4. Update Available Games
Edit the games checkboxes in the form to match your target audience
fortnite
2k
madden 
r6
fh5
beamng
xplane 11
other enter other below
### 5. Update Service Days & Hours
In the availability section, mark which days you work

## Deployment Steps

### Option A: Deploy with GitHub (Recommended)

1. **Create GitHub Account** (if needed): https://github.com
https://github.com/harrisburgbuilds/builds.git
2. **Create New Repository**
   - Go to github.com/new
   - Name it (e.g., "buildcraft-website")
   - Choose "Public"
   - Create repository

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop your files
   - Add commit message
   - Click "Commit changes"

4. **Connect to Netlify**
   - Go to netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Click "Deploy site"

5. **Your site is LIVE!**
   - Netlify generates a random URL (you can change it)
   - Share the link with people you want to see your builds

### Option B: Deploy Directly to Netlify

1. Go to netlify.com/drop (drag & drop)
2. Drag your website folder into the drop zone
3. Done! Your site is live with a temporary URL
4. Later you can add a custom domain

## Testing Your Website

### Before Sharing
1. Test on phone and computer
2. Click all navigation links
3. Fill out forms (check Netlify dashboard for submissions)
4. Test mobile menu (hamburger)

## Managing Form Submissions

**View Form Submissions:**
1. Log in to Netlify
2. Go to your site
3. Click "Forms" tab
4. See all customer requests and bookings

**Email Notifications (Optional):**
1. In Forms section
2. Click on a form
3. Set up email alerts for new submissions

## After Launch - Update Tips

### Adding New PC Builds
1. Open `index.html`
2. Find "Featured PC Builds" section
3. Copy a build-card block
4. Paste and edit with new specs/price

### Changing Your Service Days
1. Open `index.html`
2. Find availability section
3. Change class from `available` to `unavailable` for days you don't work

### Updating Service Area
1. Open `script.js`
2. Find `initializeMap()` function
3. Update the service radius (80467 = 50 miles in meters)

## Support Resources

- **Netlify Issues?** → https://docs.netlify.com/
- **Map Not Showing?** → https://console.cloud.google.com/ (check API key)
- **Design Help?** → Edit `styles.css` for colors/fonts
- **JavaScript Help?** → Edit `script.js` for functionality

## Quick Reference - File Purposes

| File | Purpose |
|------|---------|
| `index.html` | Main page structure and content |
| `styles.css` | Colors, fonts, layout, responsiveness |
| `script.js` | Forms, navigation, map, interactive features |
| `netlify.toml` | Netlify configuration (leave as is) |
| `README.md` | Detailed documentation |

## Customization Checklist

- [ ] Update business name and contact info
- [ ] Add Google Maps API key
- [ ] Set map location to your coordinates
- [ ] Update computer builds showcase
- [ ] Update games list
- [ ] Set available service days
- [ ] Test all forms
- [ ] Test on mobile
- [ ] Deploy to Netlify
- [ ] Test live website
- [ ] Share with clients!

## Color Scheme (Can Be Changed)

Current colors in `styles.css`:
- Primary: `#667eea` (Blue-purple)
- Secondary: `#764ba2` (Dark purple)
- Accent: `#f5576c` (Pink-red)
- Background: White with light gray sections

To change all colors at once, update the CSS variables at the top of `styles.css`

---

**You're all set! The website is fully functional and ready to customize. Good luck with your business! 🚀**
