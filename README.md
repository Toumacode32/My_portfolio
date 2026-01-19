# Fatoumata Ndiaye - Software Engineering Portfolio

A modern, bilingual (English/French) portfolio website showcasing my journey as a Software Engineering student at African Leadership University, Kigali, Rwanda.

## 🎯 Overview

This portfolio is designed to highlight my technical skills, projects, and passion for creating impactful software solutions. It features a clean, minimalist design with smooth animations, full mobile responsiveness, and seamless language switching.

## ✨ Features

### 🌍 Bilingual Support
- **English ↔ French** language toggle
- Seamless switching without page reload
- Language preference saved in browser localStorage
- All content fully translated

### 📱 Fully Responsive
- Mobile-first design approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Hamburger menu for mobile navigation
- Touch-friendly interface

### 🎨 Modern Design
- Clean white, green, and dark gray color palette
- Smooth animations and transitions
- Hover effects on interactive elements
- Professional typography with Playfair Display and Inter fonts

### 🚀 Key Sections

1. **Navigation Bar**
   - Fixed sticky navigation
   - Language toggle button
   - Smooth scroll to sections
   - Mobile hamburger menu

2. **Hero Section**
   - Eye-catching gradient background
   - Social media links (GitHub, LinkedIn, Email, WhatsApp)
   - Call-to-action buttons
   - Animated scroll indicator

3. **About Me**
   - Professional bio highlighting ALU and internship experience
   - Technical skills showcase
   - Tech stack badges (HTML, CSS, JavaScript, Flutter, Django, etc.)
   - Interactive skill cards

4. **Featured Projects**
   - 8 major projects including:
     - Vitaro (Blood donation app)
     - Farm Connect (Agricultural platform)
     - DEXA (Cybersecurity automation)
     - SenePanda (In development)
     - And more!
   - Project tags and descriptions
   - Hover animations

5. **Services/What I Offer**
   - Web Development & Design
   - UI/UX & Prototyping
   - Frontend Development
   - Mobile App Development
   - Automation & Tech Support
   - Freelance Collaboration

6. **Certifications**
   - Grid layout with hover effects
   - Certificate cards with images
   - Easy to update via JavaScript

7. **Contact Section**
   - Multiple contact methods (Email, WhatsApp, LinkedIn, GitHub)
   - Interactive contact cards
   - Download resume button
   - QR code optimization note

## 🛠 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactivity and language switching
- **ScrollReveal.js** - Scroll animations
- **Google Fonts** - Playfair Display & Inter

## 📂 File Structure

```
My_portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── img/                # Images folder
│   ├── certificates/   # Certificate images
│   └── projects/       # Project screenshots
├── assets/             # Additional assets
│   └── FATOUMATA NDIAYE - RESUME.docx.pdf
└── README.md          # This file
```

## 🎨 Color Palette

```css
--color-primary: #2ECC71;      /* Vibrant Green */
--color-secondary: #27AE60;    /* Dark Green */
--color-accent: #1ABC9C;       /* Teal Accent */
--color-dark: #2C3E50;         /* Dark Gray */
--color-text: #34495E;         /* Text Gray */
--color-light-gray: #ECF0F1;   /* Background Gray */
```

## 📝 How to Update Content

### Adding New Certificates

Edit `script.js` and add to the `certifications` array:

```javascript
{
    title: "Your Certificate Name",
    organization: "Issuing Organization",
    year: "2025",
    imageUrl: "img/certificate-name.jpg"
}
```

### Updating Translations

Edit the `translations` object in `script.js`:

```javascript
const translations = {
    en: {
        key_name: "English text"
    },
    fr: {
        key_name: "Texte français"
    }
};
```

### Changing Colors

Edit the `:root` variables in `styles.css`:

```css
:root {
    --color-primary: #YourColor;
}
```

## 🚀 Deployment

This portfolio is ready for deployment on:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Custom hosting**

### GitHub Pages Deployment:
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Portfolio will be live at `username.github.io/repository-name`

## 📱 QR Code Integration

This portfolio is optimized for QR code sharing at networking events:

1. Deploy your portfolio online
2. Generate QR code using services like:
   - qr-code-generator.com
   - qr.io
   - canva.com
3. Print and share at professional events!

## 🔧 Customization Tips

### To Change Profile Information:
- Update the hero section text in `index.html`
- Modify the about section paragraphs
- Change social media links

### To Add New Sections:
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add translations in `script.js`
4. Add navigation link

### To Modify Animations:
- Edit ScrollReveal settings in `script.js`
- Adjust CSS transitions in `styles.css`
- Modify animation timings and delays

## 📞 Contact Information

- **Email:** fatoumata.nd01@gmail.com
- **WhatsApp:** +221 78 171 23 53
- **LinkedIn:** [Fatoumata Ndiaye](https://www.linkedin.com/in/fatoumata-ndiaye-23b9702ba/)
- **GitHub:** [@fatoumata-ndiyae](https://github.com/fatoumata-ndiyae)

## 📄 License

© 2024 Fatoumata Ndiaye. All rights reserved.

---

**Built with ❤️ by Fatoumata Ndiaye**
*Software Engineering Student @ African Leadership University*
*Kigali, Rwanda*
