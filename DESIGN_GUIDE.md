# DESIGN & COLOR CUSTOMIZATION GUIDE

## Quick Color Change

All colors are defined at the top of `styles.css` in the `:root` section:

```css
:root {
    --primary-color: #667eea;      /* Blue-purple - main accent */
    --secondary-color: #764ba2;    /* Dark purple - gradients */
    --accent-color: #f5576c;       /* Pink-red - highlights */
    --dark-bg: #1a1a2e;           /* Dark background for hero */
    --light-bg: #f8f9fa;          /* Light background for sections */
    --text-dark: #2d3436;         /* Dark text */
    --text-light: #636e72;        /* Gray text */
    --border-color: #e0e0e0;      /* Light borders */
}
```

## Color Palette Ideas

### Gaming Builds Focus
```css
--primary-color: #FF6B00;       /* Orange */
--secondary-color: #000000;     /* Black */
--accent-color: #FFD700;        /* Gold */
```

### Professional Photography Focus
```css
--primary-color: #1a1a1a;       /* Dark gray */
--secondary-color: #333333;     /* Medium gray */
--accent-color: #D4AF37;        /* Gold */
```

### Tech/Modern Vibe
```css
--primary-color: #00D9FF;       /* Cyan */
--secondary-color: #0099FF;     /* Blue */
--accent-color: #FF00FF;        /* Magenta */
```

### Warm & Inviting
```css
--primary-color: #FF8C42;       /* Orange */
--secondary-color: #FF6B35;     /* Red-orange */
--accent-color: #F7931E;        /* Warm orange */
```

## Finding Color Codes

Use these free tools to generate color codes:

1. **Color Picker**: https://htmlcolorcodes.com/
2. **Palette Generator**: https://colorhexa.com/
3. **Gradient Generator**: https://www.gradientmagic.com/

## Changing Font

Currently using: `Segoe UI` and fallbacks

To change fonts, edit this line in `styles.css`:

```css
body {
    font-family: 'Arial', sans-serif;  /* Change to your font */
}
```

### Popular Font Pairings

**Classic & Professional:**
```css
font-family: 'Georgia', 'Times New Roman', serif;
```

**Modern & Clean:**
```css
font-family: 'Inter', 'Helvetica Neue', sans-serif;
```

**Gaming/Bold:**
```css
font-family: 'Arial Black', 'Arial', sans-serif;
```

### Add Google Fonts

1. Go to https://fonts.google.com/
2. Select a font
3. Copy the import code
4. Add to top of `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

## Changing Logo/Icon

The current logo is a Font Awesome icon `<i class="fas fa-laptop-code"></i>`

Change it to:
- `fa-computer` - Computer monitor
- `fa-camera` - Camera
- `fa-cog` - Settings/gear
- `fa-star` - Star
- `fa-rocket` - Rocket
- `fa-gaming` - Gaming console

See all icons: https://fontawesome.com/icons

To add an image logo instead:
1. Save your logo as `logo.png`
2. Replace the icon with: `<img src="logo.png" alt="Logo" class="logo-img">`
3. Add CSS: 
```css
.logo-img {
    width: 40px;
    height: 40px;
}
```

## Spacing & Size Changes

### Header Height
```css
.navbar {
    padding: 1rem 0;  /* Change this value */
}
```

### Section Padding
```css
.builds-section {
    padding: 80px 20px;  /* Change 80px for more/less space */
}
```

### Font Sizes
```css
h1 { font-size: 3.5rem; }     /* Headline */
h2 { font-size: 2.5rem; }     /* Section title */
h3 { font-size: 1.5rem; }     /* Subsection */
```

## Button Customization

### Change Button Style
```css
.btn-primary {
    background: #FF6B00;        /* New color */
    border-radius: 10px;        /* More rounded */
    padding: 15px 40px;         /* Larger padding */
}
```

### Add Button Shadow
```css
.btn-primary {
    box-shadow: 0 8px 20px rgba(255, 107, 0, 0.3);
}
```

## Build Card Colors

Each build card has a gradient background. Change them in `index.html`:

```html
<!-- Default gradient -->
<div class="build-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>

<!-- Change to your colors -->
<div class="build-image" style="background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);"></div>
```

### Gradient Ideas:
- **Red to Orange**: `#FF4757` to `#FFA502`
- **Blue to Purple**: `#0066FF` to `#9900FF`
- **Green to Teal**: `#00D084` to `#00D9FF`
- **Gray to Black**: `#808080` to `#000000`

## Dark Mode Support (Optional)

Add dark mode with CSS media query:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    
    .request-form {
        background-color: #2a2a2a;
    }
}
```

## Border Styling

Change all borders:
```css
:root {
    --border-color: #FF6B00;  /* New color */
}
```

For specific elements:
```css
.build-card {
    border: 2px solid #FF6B00;
    border-radius: 8px;  /* More/less rounded */
}
```

## Hover Effects

Change interaction effects:

```css
.build-card:hover {
    transform: translateY(-10px);  /* Change movement */
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);  /* Change shadow */
}
```

## Form Input Styling

Make forms match your brand:

```css
.form-group input:focus {
    border-color: #FF6B00;  /* Your color */
    box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
}
```

## Typography Styles

### Make Text Bold
```css
body {
    font-weight: 500;  /* 400=normal, 700=bold */
}
```

### Change Line Height (Spacing)
```css
body {
    line-height: 1.8;  /* More space between lines */
}
```

### Add Letter Spacing
```css
h1 {
    letter-spacing: 2px;  /* Space between letters */
}
```

## Box Shadows

Current shadow style:
```css
--box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
```

Make it stronger:
```css
--box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
```

Make it softer:
```css
--box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
```

## Mobile Responsive Adjustments

Change sizes for mobile (at bottom of `styles.css`):

```css
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;  /* Smaller on mobile */
    }
}
```

## Animation Speed

Change how fast things move:

```css
:root {
    --transition: all 0.3s ease;  /* 0.3s = speed */
}
```

Slower transitions (0.5s-1s):
```css
--transition: all 0.8s ease;
```

## Quick Customization Checklist

- [ ] Update color scheme in `:root` section
- [ ] Choose and apply Google Font if desired
- [ ] Customize button styles
- [ ] Update build card gradient colors
- [ ] Adjust spacing/padding as needed
- [ ] Test on mobile devices
- [ ] Check color contrast for readability
- [ ] Verify all text is readable

## Color Contrast Check

Make sure text is readable:
- Light text on dark background ✓
- Dark text on light background ✓
- Medium contrast ratio minimum 4.5:1

Check contrast: https://webaim.org/resources/contrastchecker/

## Save Your Changes

After editing `styles.css`:
1. Save the file (Ctrl+S)
2. Refresh your browser (Ctrl+R or Cmd+R)
3. Check changes are visible
4. When happy, deploy to Netlify

---

**Pro Tip**: Use your brand colors from your logo throughout the site for consistency!
