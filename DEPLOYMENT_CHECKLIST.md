# DEPLOYMENT & LAUNCH CHECKLIST

Complete this checklist before sharing your website with clients!

## Pre-Deployment Customization

### Business Information
- [ ] Updated company name (replacing "BuildCraft Studios")
- [ ] Updated footer contact email
- [ ] Updated footer contact phone
- [ ] Updated footer business description

### Computer Builds Section
- [ ] Updated at least 2 PC build examples
- [ ] Updated build names
- [ ] Updated pricing
- [ ] Updated component specifications
- [ ] Updated performance targets
- [ ] Changed gradient colors for each build card (if desired)

### Game Selection
- [ ] Updated game list to match your target audience
- [ ] Removed games you don't specialize in
- [ ] Added games specific to your focus

### Photography Section
- [ ] Updated photography service descriptions
- [ ] Updated service prices
- [ ] Verified all 4 services match your offerings

### Availability & Service Area
- [ ] Set correct service radius (default: 50 miles)
- [ ] Marked available service days
- [ ] Marked unavailable days
- [ ] Updated available hours
- [ ] Added your actual coordinates to Google Maps

### Google Maps Setup
- [ ] Created Google Cloud Project
- [ ] Generated Maps API key
- [ ] Added API key to HTML (line with `YOUR_GOOGLE_MAPS_API_KEY`)
- [ ] Updated latitude and longitude in `script.js`
- [ ] Tested map displays correctly

### Design & Branding (Optional)
- [ ] Chosen color scheme (or kept default)
- [ ] Updated color variables in `styles.css` if desired
- [ ] Added custom logo/image if desired
- [ ] Tested site on phone and tablet

## Deployment to Netlify

### Option 1: GitHub Method (Recommended)

#### GitHub Setup
- [ ] Created GitHub account (github.com)
- [ ] Created new repository for your site
- [ ] Uploaded all files to repository
- [ ] Committed changes with message

#### Netlify Connection
- [ ] Went to netlify.com
- [ ] Signed up/logged in with GitHub
- [ ] Connected your GitHub repository
- [ ] Selected correct branch (main)
- [ ] Site deployed successfully
- [ ] Netlify build shows "Published"

#### Post-Deploy
- [ ] Copied your Netlify URL
- [ ] Tested website on live URL
- [ ] Forms work and show in Netlify dashboard
- [ ] Map displays with your location

### Option 2: Direct Netlify Deploy

- [ ] Went to netlify.com/drop
- [ ] Dragged and dropped website folder
- [ ] Site deployed immediately
- [ ] Received live URL
- [ ] Tested website functionality

## Post-Deployment Testing

### Functionality Testing
- [ ] Navigation menu works
- [ ] Mobile menu (hamburger) works on phone
- [ ] All navigation links go to correct sections
- [ ] Smooth scrolling works
- [ ] Hero section displays correctly

### Form Testing
- [ ] Filled out computer build form
- [ ] Submission appeared in Netlify dashboard
- [ ] Received success message
- [ ] Filled out photo booking form
- [ ] Photo submission appeared in Netlify dashboard

### Content Verification
- [ ] All build cards display correctly
- [ ] Prices show properly
- [ ] Spec list is readable
- [ ] Photography services display
- [ ] Availability shows correct days
- [ ] Map shows at your location
- [ ] Service radius circle displays

### Mobile Testing
- [ ] Tested on iPhone
- [ ] Tested on Android
- [ ] Tested on tablet
- [ ] All forms work on mobile
- [ ] Mobile menu is functional
- [ ] Text is readable (not too small)
- [ ] Images scale properly
- [ ] No content is cut off

### Performance Testing
- [ ] Page loads in under 3 seconds
- [ ] No broken images
- [ ] No JavaScript errors (check F12 → Console)
- [ ] All external resources load (Maps, icons)

### Browser Compatibility
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge

## Email & Notifications Setup

### Netlify Forms Configuration
- [ ] Logged into Netlify
- [ ] Went to Forms in dashboard
- [ ] Found "computer_build_request" form
- [ ] Found "photo_booking_request" form
- [ ] Set up email notifications (if desired)
- [ ] Tested by submitting a form
- [ ] Received notification email

## Analytics Setup (Optional)

- [ ] Added Google Analytics ID (if using)
- [ ] Added tracking code to `script.js`
- [ ] Verified tracking works

## Custom Domain Setup (Optional)

- [ ] Registered domain name
- [ ] Connected custom domain to Netlify
- [ ] Updated DNS records
- [ ] Verified HTTPS is enabled
- [ ] Site accessible at custom URL
- [ ] Email forwarding configured (if needed)

## Legal & Privacy (Important)

- [ ] Created privacy policy (if collecting data)
- [ ] Added privacy policy link to footer
- [ ] Verified GDPR compliance
- [ ] Added terms of service (if needed)
- [ ] Included copyright notice

## Before Sharing URL

### Final Checks
- [ ] Website is live and responsive
- [ ] All forms collect data correctly
- [ ] Map shows your service area
- [ ] Contact information is correct
- [ ] Prices are accurate
- [ ] Build specs match your current offerings

### Sharing Preparation
- [ ] Wrote down your Netlify URL (or custom domain)
- [ ] Tested URL works from different network
- [ ] Created list of people to send to
- [ ] Wrote introduction message
- [ ] Ready to share!

## Post-Launch Tasks

### First Week
- [ ] Monitor form submissions daily
- [ ] Respond to all inquiries within 24 hours
- [ ] Check website analytics
- [ ] Verify map/location is correct
- [ ] Fix any typos noticed

### First Month
- [ ] Collect feedback from clients
- [ ] Update builds with new projects
- [ ] Add more build examples
- [ ] Optimize photography descriptions
- [ ] Consider adding team members' info

### Ongoing Maintenance
- [ ] Update PC builds monthly
- [ ] Add client testimonials
- [ ] Keep availability calendar current
- [ ] Back up form submissions
- [ ] Monitor analytics

## Troubleshooting Checklist

### Site Not Loading
- [ ] Check internet connection
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try different browser
- [ ] Check Netlify dashboard for build errors
- [ ] Verify domain DNS is correct

### Forms Not Submitting
- [ ] Check browser console for errors (F12)
- [ ] Verify website is deployed to Netlify
- [ ] Ensure form `name` attribute exists
- [ ] Test with different browser
- [ ] Check Netlify Forms settings

### Map Not Showing
- [ ] Verify Google Maps API key is correct
- [ ] Check API key has Maps API enabled
- [ ] Verify coordinates are valid
- [ ] Check browser console for errors
- [ ] Try different browser

### Mobile Menu Not Working
- [ ] Clear cache and refresh
- [ ] Check script.js is loading
- [ ] Test in different mobile browser
- [ ] Verify no JavaScript errors

## Support Resources

- **Netlify Help**: https://docs.netlify.com/
- **Troubleshooting**: https://support.netlify.com/
- **Google Maps API**: https://developers.google.com/maps/
- **HTML/CSS Help**: https://www.w3schools.com/

## Deployment Summary

**Website Files**: 10 files created
- index.html (main page)
- styles.css (styling)
- script.js (functionality)
- netlify.toml (Netlify config)
- package.json (project info)
- README.md (detailed guide)
- QUICKSTART.md (quick reference)
- FORMS_SETUP.md (form instructions)
- DESIGN_GUIDE.md (customization guide)
- .gitignore (git configuration)

**Deployment Options**:
1. GitHub + Netlify (recommended)
2. Direct upload to Netlify

**Estimated Setup Time**: 30-60 minutes
**Estimated Customization**: 1-2 hours
**Go Live Time**: Immediately after Netlify deployment

---

## You're Ready!

✅ Your website is complete, customizable, and ready to showcase your business.
✅ All features are included: builds, booking, forms, map, availability.
✅ No coding knowledge needed for updates.
✅ Netlify Forms handles customer inquiries automatically.
✅ Mobile responsive and professional looking.

**Next Step: Follow the QUICKSTART.md guide to customize and deploy!**

Questions? Check README.md for detailed documentation.
