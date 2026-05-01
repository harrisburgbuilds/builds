# BuildCraft Studios - Custom PC & Photography Website

A professional website for showcasing custom PC builds and photography services with booking functionality.

## Features

- **PC Builds Showcase**: Display your featured computer builds with specifications and pricing
- **Build Request System**: Customers can request custom builds by selecting games, budget, and FPS targets
- **Photography Services**: Showcase photography services with pricing
- **Booking System**: Customers can book photography sessions with date/time selection
- **Service Area Map**: MapTiler integration showing your service coverage area
- **Availability Calendar**: Display which days you're available for services
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Form Submissions**: Integrated with Netlify Forms for handling customer requests

## Customization Guide

### 1. Update Your Contact Information

Edit `index.html` and update the footer section with your actual contact details:

```html
<div class="footer-section">
    <h4>Contact</h4>
    <p>Email: your-email@example.com</p>
    <p>Phone: (555) 123-4567</p>
</div>
```

### 2. Customize Company Name & Logo

Replace "BuildCraft Studios" with your business name throughout the site:
- Navigation bar logo in `index.html`
- Footer section in `index.html`
- Page title in `index.html` `<title>` tag

### 3. Update Featured PC Builds

Edit the builds section in `index.html`. Each build card includes:
- Gradient background color
- Build name (e.g., "Streaming Beast")
- Price
- Component specifications
- Performance metrics

Example structure:
```html
<div class="build-card">
    <div class="build-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <h3>Your Build Name</h3>
    <p class="price">$X,XXX</p>
    <ul class="specs">
        <li><strong>CPU:</strong> Component name</li>
        <!-- Add your specs -->
    </ul>
</div>
```

### 4. Customize Game List

Edit the games list in the computer request form. Modify the checkboxes to match your target audience:

```html
<label class="game-checkbox">
    <input type="checkbox" name="games" value="Your Game Name">
    <span>Your Game Name</span>
</label>
```

### 5. Set Up MapTiler Map

1. **MapTiler API Key** is already configured: `080iEI6i5hfaGaI2PiOT`
2. In `script.js`, update your location coordinates in the `initializeMap()` function:
```javascript
const myLocation = {
    lat: YOUR_LATITUDE,    // e.g., 40.2732 for Harrisburg, PA
    lng: YOUR_LONGITUDE    // e.g., -76.8867 for Harrisburg, PA
};
```

To find your coordinates, use [MapTiler Maps](https://maptiler.com/maps/) and click on your location to get the exact lat/lng.

### 6. Update Service Area & Availability

In `index.html`, modify the availability section:

```html
<div class="availability-box">
    <h3>Service Radius</h3>
    <p class="radius-info">I provide services within a <strong>XX miles</strong> radius of my location</p>
</div>
```

Update available days by changing the `day-badge` classes:
```html
<div class="day-badge available">Monday</div>  <!-- Available -->
<div class="day-badge unavailable">Sunday</div>  <!-- Unavailable -->
```

### 7. Update Photography Services

Add or modify photography services in the photography section:
- Service name
- Description
- Starting price

### 8. Customize Photography Time Slots

Edit the available time slots in the booking form:

```html
<option value="9:00 AM">9:00 AM</option>
<option value="10:00 AM">10:00 AM</option>
<!-- Add or modify time slots -->
```

## Deployment on Netlify

### Step 1: Prepare Your Repository

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `website` or `buildcraft`
3. Push your files to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Select GitHub and authorize
5. Choose your repository
6. Accept default build settings and click "Deploy"

Your site will be live at a URL like: `https://your-site-name.netlify.app`

### Step 3: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

## Form Handling

The website uses **Netlify Forms** to handle customer submissions. No backend setup required!

### How It Works

1. Forms automatically POST to Netlify when submitted
2. Submissions are stored in your Netlify dashboard
3. You can receive email notifications for new submissions

### Enable Email Notifications

1. Log in to Netlify
2. Go to your site > Forms
3. Click on a form to see submissions
4. Set up email notifications (optional)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: If you add images, compress them using tools like TinyPNG
2. **Cache Busting**: Netlify automatically handles cache busting for CSS/JS files
3. **Mobile Testing**: Test on real devices before launching

## SEO Optimization

To improve search engine rankings:

1. Update the meta description in `index.html`
2. Add relevant keywords naturally throughout your content
3. Create unique build titles and descriptions
4. Use header tags (H1, H2, H3) properly

## Troubleshooting

### Forms Not Submitting
- Make sure the form `name` attribute matches the Netlify form name
- Check browser console for errors (F12 → Console tab)
- Verify Netlify has detected the form (should appear in site settings)

### Map Not Showing
- Verify MapTiler API key is correctly set in `script.js`
- Check that coordinates are in valid lat/lng format
- Ensure the map container has proper height (400px)
- Make sure you're accessing the site from a domain (won't work with file:// protocol)

### Mobile Menu Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `script.js` is loading correctly
- Verify no JavaScript errors in console

## Security Notes

- All sensitive information (API keys, email) should be kept private
- Use environment variables on Netlify for sensitive data
- Never commit API keys to GitHub

## Contact & Support

For questions about customization or deployment, refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [MapTiler Documentation](https://docs.maptiler.com/)
- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [CSS Tricks](https://css-tricks.com/)

---

**Last Updated**: May 2024
