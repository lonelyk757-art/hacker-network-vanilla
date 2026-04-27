# HACKER NETWORK - Cybersecurity News Website

A professional cybersecurity and hacking news website built with vanilla HTML, CSS, and JavaScript. No frameworks or dependencies required!

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
├── index.html          # Main HTML file with structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## ✨ Features

### 1. **Navigation Bar**
- Sticky header with HACKER NETWORK branding
- Navigation buttons (Latest, Categories, Subscribe)
- Responsive menu for mobile devices

### 2. **Hero Section**
- Eye-catching cyberpunk banner with animated background
- Large headline with neon text effects
- Category badges (Breaches, Vulnerabilities, Malware, Privacy)

### 3. **Breaking News Alert**
- Prominent breaking news section with pulse animation
- Critical threat indicator
- Quick access to full article

### 4. **News Feed**
- Grid layout with responsive columns
- 6 sample cybersecurity news articles
- Threat level indicators (Critical/High/Medium/Low)
- Category icons and badges
- Hover effects and animations

### 5. **Article Modal**
- Click any article to view full content
- Detailed article information with metadata
- Critical threat alerts
- Close with button, Escape key, or outside click

### 6. **Footer**
- Multiple columns with links
- Categories, Resources, and Legal sections
- Professional copyright information

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

### Deployment

#### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"
5. Your site will be live in seconds!

#### Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"

#### Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Your site will be live at `https://yourusername.github.io/hacker-network-vanilla`

## 📝 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-cyan: #00ff88;
    --primary-magenta: #ff006e;
    --dark-bg: #0a0e27;
    /* ... more variables ... */
}
```

### Add More Articles
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

## 🎯 Key JavaScript Functions

- `renderNewsFeed()` - Generates news cards from data
- `viewArticle(articleId)` - Opens article modal
- `closeArticle()` - Closes article modal
- `formatDate(dateString)` - Formats dates nicely
- `getThreatClass(threat)` - Returns CSS class for threat level
- `getCategoryIcon(category)` - Returns emoji icon for category

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
- All data stored locally in JavaScript
- Safe to use offline

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

## 🐛 Troubleshooting

### Articles not showing?
- Check browser console for errors (F12)
- Ensure `script.js` is loaded after HTML

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `styles.css` is in the same directory

### Modal not opening?
- Check JavaScript console for errors
- Ensure article ID exists in `newsArticles` array

## 📧 Support

For issues or questions, please open an issue on GitHub or contact the maintainers.

## 🌟 Features Coming Soon

- Search functionality
- Article filtering by category
- Newsletter signup
- Dark/Light theme toggle
- Comment section
- Social sharing buttons
- Related articles suggestions

---

**Stay informed. Stay secure. 🛡️**

Built with ❤️ for the cybersecurity community
