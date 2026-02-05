# 💝 Ultimate Valentine's Experience

A stunning, emotional, multi-page Valentine's experience built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Visual Identity: "Ethereal Night"
- Deep charcoal backgrounds with rose-gold accents
- Soft glow effects and premium typography
- Mix of Inter (clean sans-serif) and Great Vibes (signature font)

### 5 Interactive Pages

1. **The Portal** - Glowing heart with heartbeat sound and haptic-like ripples
2. **Memory Lane** - Parallax scroll with flippable photo cards containing hidden notes
3. **Love Language** - Interactive 5 senses grid with voice note and petal trail
4. **Virtual Bouquet** - 3D garden where she can pick flowers, each adding love reasons to a basket
5. **Eternal Promise** - Typewriter effect letter with digital pinky promise and love certificate

### Technical Features
- Smooth page transitions with AnimatePresence
- Floating hearts background particles
- Mobile-responsive with desktop optimization
- Interactive sound effects and animations
- Staggered animations and micro-interactions

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Replace Placeholder Images
- Update image URLs in `src/pages/MemoryLane.js`
- Add your actual photos to the `public` folder and update paths

### Personalize Content
- **Memory Lane**: Edit the `memories` array with your photos and notes
- **Love Language**: Customize the `senses` descriptions
- **Virtual Bouquet**: Modify the `flowers` array with your own reasons
- **Eternal Promise**: Replace the love letter text with your personal message

### Add Voice Note
- Record your "I love you" message
- Add the audio file to `public` folder
- Update the audio playback in `LoveLanguage.js`

### Color Customization
- Modify colors in `tailwind.config.js`
- Update the rose-gold theme to your preferred palette

## 📱 Mobile Optimization

The experience is fully responsive but optimized for desktop viewing for the most magical experience.

## 🎵 Audio Features

- Heartbeat sound on hover (Portal page)
- Voice note playback (Love Language page)
- Generated using Web Audio API for compatibility

## 💡 Pro Tips

1. **Test on Desktop First** - The experience is designed for desktop magic
2. **Use High-Quality Images** - Replace placeholders with your best photos
3. **Personalize Everything** - Make every text element uniquely yours
4. **Test Interactions** - Ensure all hover effects and clicks work smoothly

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

## ❤️ Why This Works

- **Emotional Connection**: Starts with heartbeat interaction
- **Interactivity**: Engaging elements like flower picking and photo flipping
- **Personal Touch**: Voice notes and personalized messages
- **Progressive Revelation**: Each page builds emotional intensity
- **Memorable Finale**: Certificate creates lasting keepsake

Perfect for creating an unforgettable Valentine's experience! 💕