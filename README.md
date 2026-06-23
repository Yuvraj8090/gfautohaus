# G&F Autohaus AG - Professional Car Dealership Website

A complete, professional car dealership website for **G&F Autohaus AG**, featuring a modern responsive design, advanced vehicle inventory management system, image carousel, and a comprehensive admin panel.

## 🎯 Project Overview

This website is a full-featured platform for premium vehicle brokerage in Switzerland, built with vanilla HTML, CSS, and JavaScript. It includes public-facing pages, an interactive vehicle inventory with image galleries, and a secure admin panel for managing the dealership operations.

## 📋 Features

### **Public Website Pages**

1. **Home (index.html)** - Hero landing page with featured vehicles and quick actions
2. **About Us (about.html)** - Company history, mission, team, and values
3. **Services (services.html)** - Detailed service offerings including trade-in, financing, repairs
4. **Contact (contact.html)** - Contact form, business hours, and communication channels
5. **Inventory (inventory.html)** - Advanced vehicle browsing with filters and modal details

### **Advanced Vehicle Management**

- **Image Carousel/Slider**
  - Smooth transitions between multiple vehicle images
  - Navigation arrows for manual control
  - Dot indicators showing current position
  - Touch/swipe gesture support for mobile devices
  - Automatic aspect ratio maintenance

- **Vehicle Filtering**
  - Search by make, model, or keyword
  - Filter by body type (Sedan, SUV, Hatchback, Estate, Convertible)
  - Filter by fuel type (Petrol, Diesel, Electric, Hybrid options)
  - Filter by drive type (FWD, RWD, AWD)
  - Budget range slider (CHF 4,000 - 80,000)
  - Real-time filter updates

### **Admin Panel**

- **Secure Authentication**
  - Login system with demo credentials
  - Session-based authentication
  - "Remember Me" functionality
  - Automatic redirect for unauthorized access

- **Dashboard**
  - Key metrics: Total vehicles, total inventory value, average price, most common brand
  - Recent vehicle activity
  - Quick-access buttons for common tasks

- **Vehicle Management**
  - Add new vehicles with complete specifications
  - Edit existing vehicle details
  - Delete vehicles from inventory
  - Bulk view of all vehicles with sorting
  - Multiple image upload support

- **Inventory Statistics**
  - Real-time count of available vehicles
  - Estimated total inventory value
  - Average vehicle price
  - Brand frequency analysis

- **Inquiry Management**
  - View customer contact form submissions
  - Mark inquiries as read
  - Delete old inquiries
  - Track customer interests

### **Design & User Experience**

- **Professional Styling**
  - Roboto font family from Google Fonts for consistency
  - Premium color scheme (Gold, Dark Ink, Soft whites)
  - Smooth animations and transitions
  - Clean, modern CRM-like interface

- **Responsive Design**
  - Fully responsive for mobile, tablet, and desktop
  - Adaptive layouts for all screen sizes
  - Mobile-optimized navigation
  - Touch-friendly interactive elements

- **Accessibility**
  - Semantic HTML structure
  - ARIA labels and roles for screen readers
  - High contrast colors for readability
  - Keyboard navigation support

## 🔐 Admin Credentials (Demo)

**For testing purposes only:**
- **Username:** `admin`
- **Password:** `password123`

## 📁 File Structure

```
gfautohaus/
├── index.html           # Main landing page
├── about.html           # About company page
├── services.html        # Services page
├── contact.html         # Contact page
├── inventory.html       # Vehicle inventory with carousel
├── admin-login.html     # Admin authentication
├── admin-panel.html     # Admin dashboard
├── data.js              # Shared vehicle data & storage
├── README.md            # This file
└── .git/                # Version control
```

## 🚀 Getting Started

### Quick Start

1. **Open the main page:**
   ```
   Open index.html in any modern web browser
   ```

2. **Browse vehicles:**
   - Click "Browse Vehicles" on homepage
   - Use filters to narrow down options
   - Click any vehicle card to view details and image carousel

3. **Access admin panel:**
   - Click "Admin" button in top right corner
   - Enter demo credentials (admin / password123)
   - Manage inventory from the admin dashboard

### Local Development

No build tools or dependencies required! The website uses:
- Vanilla JavaScript (ES6+)
- CSS3 with CSS variables
- HTML5 semantic markup
- Font Awesome 6.5.2 icons
- Google Fonts (Roboto)

## 💾 Data Storage

**Vehicle Data:**
- Stored in browser's LocalStorage
- Persists across browser sessions
- Initialized with sample data on first load
- Shared between public and admin sections via `data.js`

**Inquiries:**
- Stored in browser's LocalStorage
- Managed through admin panel
- JSON format for easy export

## 🎨 Customization

### Colors
Edit the CSS variables in any HTML file:
```css
:root {
  --gold: #c49a25;
  --gold-dark: #9a7313;
  --ink: #111827;
  /* ... more variables */
}
```

### Branding
- Update company name in navigation bars
- Replace car images with actual dealership photos
- Modify contact information in footers
- Update social media links

### Vehicle Data
Edit `data.js` to change the default vehicle inventory or add new vehicles manually through the admin panel.

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🔄 Image Carousel Features

The vehicle detail modal includes an advanced image carousel:
- **Smooth transitions** with CSS transforms
- **Navigation controls** (previous/next arrows)
- **Dot indicators** showing current image
- **Keyboard support** for arrow keys
- **Mobile gestures** ready for enhancement
- **Automatic aspect ratio** maintenance (4:3)
- **Image preloading** for performance

Usage example:
```javascript
// Open vehicle modal with carousel
openVehicleModal(vehicleId);

// Navigate carousel
nextSlide();  // Go to next image
prevSlide();  // Go to previous image
goToSlide(n); // Go to specific slide
```

## 🔍 SEO & Metadata

Each page includes:
- Unique title tags
- Meta viewport for mobile optimization
- Semantic HTML structure
- Schema markup ready for implementation

## ⚡ Performance Optimizations

- Lazy loading for images
- CSS optimized with variables
- Minimal JavaScript dependencies
- Efficient DOM manipulation
- LocalStorage caching
- No external build requirements

## 🛡️ Security Notes

This is a **client-side demo implementation**. For production use:

1. **Backend Authentication Required**
   - Never store credentials client-side
   - Implement proper server-side authentication
   - Use HTTPS for all communications
   - Implement JWT or session tokens

2. **Data Security**
   - Move LocalStorage data to secure database
   - Implement server-side validation
   - Add CSRF protection
   - Sanitize all user inputs

3. **Image Handling**
   - Use CDN for image delivery
   - Implement server-side image optimization
   - Add image compression
   - Verify image URLs

4. **Production Checklist**
   - [ ] Setup backend server
   - [ ] Implement proper authentication
   - [ ] Setup database (MySQL, PostgreSQL, etc.)
   - [ ] Add HTTPS/SSL certificates
   - [ ] Implement rate limiting
   - [ ] Add logging and monitoring
   - [ ] Setup backups
   - [ ] Test security vulnerabilities

## 📞 Contact Information

**G&F Autohaus AG**
- **Location:** Oberfeld 4, 6037 Root, Switzerland
- **Phone:** 079 722 70 70
- **Email:** gfautohaus@outlook.com
- **Hours:** Mon-Fri 08:00-18:30 | Sat 09:00-16:00

## 📄 License

This website template is provided as-is for G&F Autohaus AG. All content and branding are property of G&F Autohaus AG.

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

- [ ] Integration with backend API
- [ ] Payment gateway integration
- [ ] Email notification system
- [ ] Document/contract management
- [ ] Test drive scheduling system
- [ ] Customer portal
- [ ] Multi-language support (currently UI-ready)
- [ ] Video support for vehicles
- [ ] AR vehicle preview
- [ ] Live chat support
- [ ] Analytics dashboard

## 🐛 Known Limitations

1. **Data Storage:** Using browser LocalStorage (not suitable for production)
2. **Authentication:** Demo login only (needs server-side implementation)
3. **Email:** Contact form doesn't send actual emails (requires backend)
4. **Images:** Using placeholder URLs (should use actual dealership photos)
5. **Payments:** No payment processing (requires third-party service)

## 📞 Support

For questions or issues related to this website template, please contact the development team or review the inline code comments for detailed implementation notes.

---

**Built with ❤️ for G&F Autohaus AG**  
Professional vehicle brokerage platform - Root, Switzerland
