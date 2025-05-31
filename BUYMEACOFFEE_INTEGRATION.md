# Buy Me a Coffee Integration

This project includes a comprehensive Buy Me a Coffee integration for username "blvke" with multiple touchpoints across the site.

## Implementation Overview

### 1. Floating Widget (Global)
- **Location**: Appears on all pages via `app/layout.tsx`
- **Component**: `components/buy-me-coffee-widget.tsx`
- **Behavior**: Persistent floating button in bottom-right corner
- **Features**: 
  - Auto-loads Buy Me a Coffee's official widget script
  - Customizable positioning and colors
  - Clean cleanup on component unmount

### 2. Contact Page Button
- **Location**: `app/contact/page.tsx`
- **Component**: `components/buy-me-coffee-button.tsx` (CustomBuyMeCoffeeButton)
- **Behavior**: Styled button that opens Buy Me a Coffee in new tab
- **Features**:
  - Custom styling to match site design
  - Coffee icon from Lucide React
  - Responsive design

### 3. Footer Link
- **Location**: `components/site-footer.tsx`
- **Behavior**: Simple text link to Buy Me a Coffee profile
- **Features**: Hover effects and consistent styling

## Components

### BuyMeCoffeeWidget
```tsx
<BuyMeCoffeeWidget 
  username="blvke"
  color="#FFDD00"
  emoji="☕"
  text="Buy me a coffee"
/>
```

**Props:**
- `username`: Buy Me a Coffee username (default: "blvke")
- `color`: Widget background color (default: "#FFDD00")
- `emoji`: Button emoji (default: "☕")
- `text`: Button text (default: "Buy me a coffee")

### CustomBuyMeCoffeeButton
```tsx
<CustomBuyMeCoffeeButton 
  username="blvke"
  text="☕ Buy me a coffee"
  className="w-full justify-center"
/>
```

**Props:**
- `username`: Buy Me a Coffee username (default: "blvke")
- `text`: Button text (default: "Buy me a coffee")
- `className`: Additional CSS classes

## Customization

### Changing Username
Update the username prop in:
1. `app/layout.tsx` - Global widget
2. `app/contact/page.tsx` - Contact page button
3. `components/site-footer.tsx` - Footer link

### Styling
- Widget colors can be customized via props
- Custom button styling in `buy-me-coffee-button.tsx`
- Footer link styling in `site-footer.tsx`

### Positioning
The floating widget position can be adjusted in `buy-me-coffee-widget.tsx`:
- `data-position`: "Right" | "Left"
- `data-x_margin`: Horizontal margin
- `data-y_margin`: Vertical margin

## Technical Details

### Script Loading
- Uses Buy Me a Coffee's official CDN scripts
- Widget script: `https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js`
- Button script: `https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js`

### Performance
- Scripts load asynchronously
- Proper cleanup prevents memory leaks
- No impact on initial page load

### Browser Compatibility
- Works in all modern browsers
- Graceful fallback for script loading failures
- Mobile responsive design

## URLs
- Profile: https://www.buymeacoffee.com/blvke
- Widget appears as floating button on all pages
- Contact page has dedicated support section
- Footer includes direct link 