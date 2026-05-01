# NETLIFY FORMS SETUP GUIDE

## How Form Submission Works

This website uses **Netlify Forms** - a simple, free form handler that requires NO backend code or payment.

### The Two Forms Included:

1. **Computer Build Request Form** - Customers request custom PC builds
2. **Photography Booking Form** - Customers book photography sessions

## How to Enable Forms

### Step 1: Deploy to Netlify (REQUIRED)
Forms only work when deployed to Netlify. They won't work on localhost.

### Step 2: Forms Auto-Detection
When you deploy, Netlify automatically scans your HTML for forms with `name` attributes:
- `computer_build_request` (in `index.html`)
- `photo_booking_request` (in `index.html`)

### Step 3: View Submissions
1. Log in to netlify.com
2. Select your site
3. Click **"Forms"** in the top navigation
4. You'll see all form submissions with:
   - Customer names and emails
   - Game preferences
   - Budget and FPS targets
   - All details they submitted

## Email Notifications

### Setup Email Alerts (Optional)
1. In Netlify dashboard
2. Go to **Forms** tab
3. Click the form name (e.g., "computer_build_request")
4. Click **"Notifications"**
5. Add your email address
6. You'll get notified of each submission

## Spam Prevention

Netlify provides spam filtering. To customize:

1. Go to Forms in Netlify
2. Click form name
3. Look for **"Spam filtering"** options
4. Enable Akismet (paid) for advanced spam detection

## Testing Forms (Before Launch)

1. Fill out a test form on your live site
2. Check Netlify Forms dashboard
3. Verify your submission appears

## Form Field Breakdown

### Computer Build Request
- **name** - Customer full name
- **email** - Customer email
- **phone** - Customer phone (optional)
- **budget** - Budget in dollars
- **fps_target** - Desired FPS (60/120/144/240+)
- **games** - Selected games (comma-separated)
- **additional_games** - Other games
- **special_requests** - Special notes

### Photography Booking
- **name** - Customer name
- **email** - Customer email
- **phone** - Customer phone
- **service** - Service type (Portrait/Event/Product/Video)
- **date** - Preferred date
- **time** - Preferred time
- **location** - Session location
- **details** - Additional details

## Advanced: Export Submissions

You can export submissions as CSV:

1. Forms → Select form
2. Click the three dots (⋮) menu
3. Select "Download"
4. Saves as spreadsheet you can open in Excel

## Integration with External Services

If you want to send form data to email, Zapier, etc., use Netlify's webhook feature:

1. Dashboard → Integrations
2. Search for integration (Gmail, Slack, etc.)
3. Follow setup steps
4. Form submissions auto-forward to service

## Troubleshooting Forms

### Form Not Submitting
**Check:**
- Form name matches in HTML: `name="computer_build_request"`
- Website is deployed to Netlify (not localhost)
- Browser console for errors (F12)
- Netlify build was successful

### Submissions Not Appearing in Dashboard
1. Clear browser cache
2. Refresh Netlify dashboard
3. Check if form name is correct in HTML
4. Verify deploy completed successfully

### Email Notifications Not Working
- Check spam/promotions folder
- Verify email address in notifications
- Resend test submission
- Ensure form was submitted after notifications enabled

## Custom Thank You Page

After form submission, you can redirect to a custom page:

Add to `index.html` form:
```html
<form id="computerForm" name="computer_build_request" method="POST" action="/thank-you.html">
```

Create `thank-you.html`:
```html
<h1>Thank You!</h1>
<p>I've received your request and will contact you within 24 hours.</p>
<a href="/">Back to Home</a>
```

## Webhook Configuration

For advanced users, you can set up webhooks to process form data:

1. Netlify Dashboard → Site settings
2. Scroll to "Form detection"
3. Find webhook section
4. Add your endpoint URL
5. Netlify will POST form data there

## Data Storage & Privacy

**Important:**
- Netlify stores submissions for 90 days by default
- Consider downloading/backing up important submissions
- GDPR compliant
- No personally identifiable data shared with third parties

## Cost

- **Free Plan:** Up to 100 submissions/month
- **Pro Features:** $29-99/month for advanced analytics
- **Enterprise:** Custom pricing

For most small businesses, the free plan is sufficient.

## Need More Help?

- Netlify Forms Docs: https://docs.netlify.com/forms/overview/
- Form Configuration: https://docs.netlify.com/forms/setup/
- Spam Filtering: https://docs.netlify.com/forms/spam-filtering/

---

**That's it! Your forms are working. Focus on getting customers, and Netlify handles the rest.**
