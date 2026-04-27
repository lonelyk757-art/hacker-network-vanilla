# HACKER NETWORK - Cybersecurity News Website

A professional cybersecurity and hacking news website built with vanilla HTML, CSS, and JavaScript. No frameworks or dependencies required! Includes a complete admin panel for managing articles.

## 🎨 Design Features

- **Cyberpunk Noir Aesthetic**: Dark charcoal background with neon cyan (#00ff88) and hot magenta (#ff006e) accents
- **Terminal-Style Typography**: IBM Plex Mono for headlines, Fira Sans for body text
- **Neon Glow Effects**: Interactive glowing borders and text effects
- **Scanline Animations**: Retro digital scanline overlays
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Animations**: Fade-in, slide-in, and hover effects

## 📁 Project Structure

```
hacker-network-vanilla/
├── index.html          # Main website HTML
├── styles.css          # Website styling
├── script.js           # Website functionality
├── admin.html          # Admin panel interface
├── admin-styles.css    # Admin panel styling
├── admin-script.js     # Admin panel functionality
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## ✨ Features

### Public Website Features

1. **Navigation Bar**
   - Sticky header with HACKER NETWORK branding
   - Navigation buttons (Latest, Categories, Subscribe)
   - Responsive menu for mobile devices

2. **Hero Section**
   - Eye-catching cyberpunk banner with animated background
   - Large headline with neon text effects
   - Category badges (Breaches, Vulnerabilities, Malware, Privacy)

3. **Breaking News Alert**
   - Prominent breaking news section with pulse animation
   - Critical threat indicator
   - Quick access to full article

4. **News Feed**
   - Grid layout with responsive columns
   - 6+ sample cybersecurity news articles
   - Threat level indicators (Critical/High/Medium/Low)
   - Category icons and badges
   - Hover effects and animations

5. **Article Modal**
   - Click any article to view full content
   - Detailed article information with metadata
   - Critical threat alerts
   - Close with button, Escape key, or outside click

6. **Footer**
   - Multiple columns with links
   - Categories, Resources, and Legal sections
   - Professional copyright information

### Admin Panel Features

1. **Secure Login**
   - Password-protected admin access
   - Default password: `admin123`
   - Change password anytime in settings
   - Session-based authentication

2. **Manage Articles**
   - View all articles in a sortable table
   - Search and filter articles
   - Edit article details
   - Delete articles
   - Real-time updates

3. **Create Articles**
   - Easy-to-use form for creating new articles
   - Support for all article fields:
     - Title, Category, Threat Level
     - Author, Date, Icon/Emoji
     - Excerpt and Full Content (HTML supported)
   - Form validation
   - Success notifications

4. **Statistics Dashboard**
   - Total articles count
   - Threat level breakdown (Critical/High/Medium/Low)
   - Articles by category
   - Visual stat cards with icons

5. **Data Management**
   - **Export Data**: Download all articles as JSON
   - **Import Data**: Upload previously exported JSON
   - **Reset to Default**: Restore original 6 articles
   - All data stored locally in browser

6. **Settings**
   - Change admin password
   - Data import/export functionality
   - Storage information
   - Security options

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/hacker-network-vanilla.git
cd hacker-network-vanilla
```

2. **Open in browser**
Simply open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or drag and drop `index.html` into your browser window.

### Access Admin Panel

1. Open `admin.html` in your browser
2. Enter password: `admin123`
3. Start managing articles!

## 🔐 Admin Panel Security

### Default Credentials
- **URL**: `admin.html`
- **Password**: `admin123`

### Security Features
- Password-protected access
- Session-based authentication (clears on browser close)
- Changeable password stored in browser
- No server required (all data local)

### Important Notes
- Data is stored in browser's LocalStorage
- Export data regularly for backup
- Change default password immediately in production
- Clear browser data to reset everything

## 📝 Customization

### Change Colors
Edit the CSS variables in `styles.css` and `admin-styles.css`:
```css
:root {
    --primary-cyan: #00ff88;
    --primary-magenta: #ff006e;
    --dark-bg: #0a0e27;
    /* ... more variables ... */
}
```

### Add More Articles via Admin Panel
1. Go to `admin.html`
2. Login with password
3. Click "Create Article"
4. Fill in the form
5. Click "Create Article"

### Add Articles Programmatically
Edit the `newsArticles` array in `script.js`:
```javascript
const newsArticles = [
    {
        id: 7,
        title: "Your Article Title",
        category: "Category",
        threat: "high",
        date: "2024-04-20",
        author: "Your Name",
        excerpt: "Article excerpt...",
        icon: "🔒",
        content: `<h3>Article Content</h3><p>Full article text...</p>`
    },
    // ... more articles ...
];
```

### Customize Typography
Change fonts in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Your Heading Font', monospace;
}
```

## 🎯 Admin Panel Key Functions

- `handleLogin()` - Authenticate user
- `loadArticles()` - Load articles from storage
- `handleCreateArticle()` - Create new article
- `handleEditArticle()` - Update existing article
- `deleteArticle()` - Remove article
- `updateStatistics()` - Update dashboard stats
- `exportData()` - Export articles as JSON
- `importData()` - Import articles from JSON
- `handleChangePassword()` - Update admin password

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast compliance
- ARIA labels where needed

## 🔐 Security Notes

- No external dependencies to update
- No API calls or backend required
- All data stored locally in browser
- Safe to use offline
- Password stored in browser only
- No data sent to servers

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🎓 Learning Resources

This project is great for learning:
- Vanilla HTML/CSS/JavaScript
- CSS Grid and Flexbox
- CSS Animations and Transitions
- DOM Manipulation
- Event Handling
- Responsive Design
- LocalStorage API
- Form Handling
- Admin Panel Development

## 🐛 Troubleshooting

### Admin panel not loading?
- Check browser console for errors (F12)
- Ensure `admin.html`, `admin-styles.css`, and `admin-script.js` are in the same directory

### Articles not showing?
- Check browser console for errors (F12)
- Ensure `script.js` is loaded after HTML

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check that CSS files are in the same directory

### Can't login to admin?
- Default password is: `admin123`
- Check if you've changed the password previously
- Try clearing browser data and try again

### Data lost after closing browser?
- Data is stored in LocalStorage
- Check browser settings - some browsers clear LocalStorage on close
- Use Export function to backup data regularly

## 📧 Support

For issues or questions, please open an issue on GitHub or contact the maintainers.

## 🌟 Features Coming Soon

- Search functionality on public site
- Article filtering by category
- Newsletter signup
- Dark/Light theme toggle
- Comment section
- Social sharing buttons
- Related articles suggestions
- Article scheduling
- Draft articles
- User roles (Admin, Editor, Viewer)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"
5. Your site will be live in seconds!

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"

### Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Your site will be live at `https://yourusername.github.io/hacker-network-vanilla`

### Important: Protect Admin Panel
When deploying, consider:
- Changing default password immediately
- Using authentication service for production
- Implementing server-side password protection
- Using environment variables for sensitive data

---

**Stay informed. Stay secure. 🛡️**

Built with ❤️ for the cybersecurity community

**Version**: 2.0 (with Admin Panel)
**Last Updated**: 2024-04-27
