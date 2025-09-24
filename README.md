# Portfolio Website - Parth Kathrotiya

A modern, responsive portfolio website built with React 19, featuring smooth animations, interactive particles background, and a professional design.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark theme and golden accents
- **Fully Responsive**: Optimized for all devices from desktop to mobile
- **Interactive Background**: Animated particles using tsparticles
- **Smooth Animations**: Framer Motion animations throughout the interface
- **Professional Sections**: Home, About, Resume, Portfolio, and Contact
- **Accessibility**: Designed with accessibility in mind
- **Performance**: Optimized for fast loading and smooth interactions

## 🚀 Technologies Used

- **React 19** - Latest React framework
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **TSParticles** - Interactive particle background effects
- **CSS3** - Modern styling with gradients and custom properties
- **React Router DOM** - Client-side routing

## 📱 Components

### Core Components
- **Home** - Landing page with hero section and animated elements
- **About** - Personal information and expertise showcase
- **Resume** - Education and experience timeline
- **Portfolio** - Project showcase with interactive cards
- **Contact** - Contact form and information
- **Sidebar** - Navigation and personal info
- **Navbar** - Main navigation menu

### Features
- **ParticlesBackground** - Interactive animated background
- **Responsive Design** - Mobile-first approach
- **Custom Scrollbars** - Beautiful gradient scrollbars
- **Hover Effects** - Interactive elements throughout

## 🎨 Design Features

- **Color Scheme**: Dark theme (#191923, #20202A) with golden accents (#FFD700, #FFA500)
- **Typography**: Modern, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Gradients**: Beautiful gradient backgrounds and borders
- **Shadows**: Subtle shadows for depth and modern feel

## 📱 Responsiveness

The website is fully responsive across all devices:
- **Desktop** (1200px+): Full layout with sidebar and main content
- **Tablet** (768px - 1199px): Adjusted layout for medium screens
- **Mobile** (320px - 767px): Stacked layout optimized for small screens
- **Extra Small** (320px and below): Compact layout for very small devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MyPortfolioSite/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── component/
│   ├── aboutme/          # About Me section
│   ├── contactme/        # Contact form and info
│   ├── home/            # Landing page
│   ├── main/            # Main layout wrapper
│   ├── navbar/          # Navigation menu
│   ├── portfolio/       # Project showcase
│   ├── resume/          # Education & experience
│   ├── sidebar/         # Side navigation
│   └── ParticlesBackground.jsx  # Animated background
├── assets/              # Images and static files
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Key Features Implementation

### Particles Background
- Interactive particle system using tsparticles
- Configurable particle behavior and appearance
- Performance optimized with proper cleanup

### Animations
- Staggered entrance animations for components
- Hover effects and micro-interactions
- Smooth page transitions

### Responsive Design
- CSS Grid and Flexbox layouts
- Mobile-first approach
- Custom breakpoints for optimal viewing

## 🔧 Customization

### Colors
Update the color scheme in CSS variables:
```css
:root {
  --primary-color: #FFD700;
  --secondary-color: #FFA500;
  --background-dark: #191923;
  --background-medium: #20202A;
}
```

### Particles
Modify particle behavior in `ParticlesBackground.jsx`:
```javascript
const particlesOptions = {
  particles: {
    color: { value: "#FFD700" },
    number: { value: 80 },
    // ... more options
  }
}
```

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect the Vite build
3. Deploy with default settings

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Parth Kathrotiya**
- **Email**: parth.kathrotiya.dev@gmail.com
- **Phone**: +91 9925413869
- **Location**: Surat, Gujarat, India
- **LinkedIn**: [Parth Kathrotiya](https://www.linkedin.com/in/parth-kathrotiya)

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced filtering for portfolio
- [ ] Contact form backend integration
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] PWA capabilities

## 📞 Support

For any questions or support, please contact:
- **Email**: parth.kathrotiya.dev@gmail.com
- **Phone**: +91 9925413869

---

**Built with ❤️ by Parth Kathrotiya**
