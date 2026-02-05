import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VintageCertificate from '../components/VintageCertificate';

const EternalPromise = ({ userName }) => {
  const [showLetter, setShowLetter] = useState(false);
  const [showPromise, setShowPromise] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [showVintageCertificate, setShowVintageCertificate] = useState(false);
  const certificateRef = useRef(null);

  const downloadVintageCertificate = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 900;
    
    // Create parchment background
    const gradient = ctx.createRadialGradient(600, 450, 0, 600, 450, 700);
    gradient.addColorStop(0, '#fdf5e6');
    gradient.addColorStop(0.3, '#f5e6d3');
    gradient.addColorStop(0.6, '#e6d7c3');
    gradient.addColorStop(1, '#d4c5b0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 900);
    
    // Add ornate border
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 12;
    ctx.strokeRect(40, 40, 1120, 820);
    
    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 8;
    ctx.strokeRect(55, 55, 1090, 790);
    
    // Add decorative elements
    ctx.fillStyle = '#8B0000';
    ctx.font = '70px serif';
    ctx.textAlign = 'center';
    ctx.fillText('♥', 120, 140);
    ctx.fillText('♥', 1080, 140);
    ctx.fillText('♥', 120, 820);
    ctx.fillText('♥', 1080, 820);
    
    // Crown decoration
    ctx.fillStyle = '#FFD700';
    ctx.font = '90px serif';
    ctx.fillText('👑', 600, 170);
    
    // Title
    ctx.fillStyle = '#8B0000';
    ctx.font = 'bold 48px serif';
    ctx.fillText('Certificate of Infinite Love', 600, 250);
    
    // Decorative hearts
    ctx.fillStyle = '#DC143C';
    ctx.font = '50px serif';
    ctx.fillText('♥ ♥ ♥ ♥ ♥', 600, 320);
    
    // Main text
    ctx.fillStyle = '#2F4F4F';
    ctx.font = '30px serif';
    ctx.fillText('This magnificent certificate hereby declares that', 600, 400);
    
    // Name
    ctx.fillStyle = '#8B0000';
    ctx.font = 'italic bold 44px serif';
    ctx.fillText(userName || 'My Beloved Valentine', 600, 470);
    
    // Description
    ctx.fillStyle = '#2F4F4F';
    ctx.font = '26px serif';
    ctx.fillText('is cherished beyond measure, loved without limits,', 600, 530);
    ctx.fillText('and treasured for all eternity by a heart that beats', 600, 565);
    ctx.fillText('only for them, now and forevermore.', 600, 600);
    
    // Signature
    ctx.fillStyle = '#8B0000';
    ctx.font = 'italic 30px serif';
    ctx.fillText('Forever Yours with Infinite Love', 600, 670);
    ctx.font = 'italic bold 36px serif';
    ctx.fillText('~ Abhinav ♥', 600, 720);
    
    // Date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
    
    ctx.fillStyle = '#696969';
    ctx.font = '22px serif';
    ctx.fillText(`Sealed with Love on this ${formattedDate}`, 600, 780);
    
    // Download
    const link = document.createElement('a');
    link.download = `Vintage_Love_Certificate_${userName || 'Valentine'}_${currentDate.toISOString().split('T')[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };
  const displayName = userName || 'My Beloved';
  const signerName = 'Your Love';
  const signerTagline = 'With all my heart';

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 900;
    
    // Create magical gradient background
    const gradient = ctx.createRadialGradient(600, 450, 0, 600, 450, 700);
    gradient.addColorStop(0, '#FDF2F8');
    gradient.addColorStop(0.2, '#FCE7F3');
    gradient.addColorStop(0.4, '#FBCFE8');
    gradient.addColorStop(0.6, '#F9A8D4');
    gradient.addColorStop(0.8, '#F472B6');
    gradient.addColorStop(1, '#EC4899');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 900);
    
    // Add ornate border with multiple layers
    ctx.strokeStyle = '#BE185D';
    ctx.lineWidth = 15;
    ctx.strokeRect(40, 40, 1120, 820);
    
    ctx.strokeStyle = '#EC4899';
    ctx.lineWidth = 10;
    ctx.strokeRect(55, 55, 1090, 790);
    
    ctx.strokeStyle = '#F472B6';
    ctx.lineWidth = 6;
    ctx.strokeRect(70, 70, 1060, 760);
    
    // Add corner decorations
    ctx.fillStyle = '#BE185D';
    ctx.font = '80px serif';
    ctx.textAlign = 'center';
    ctx.fillText('♥', 120, 140);
    ctx.fillText('♥', 1080, 140);
    ctx.fillText('♥', 120, 820);
    ctx.fillText('♥', 1080, 820);
    
    // Add sparkle decorations
    ctx.fillStyle = '#F59E0B';
    ctx.font = '40px serif';
    ctx.fillText('✨', 220, 180);
    ctx.fillText('✨', 980, 180);
    ctx.fillText('✨', 220, 750);
    ctx.fillText('✨', 980, 750);
    ctx.fillText('✨', 180, 450);
    ctx.fillText('✨', 1020, 450);
    
    // Crown decoration
    ctx.fillStyle = '#F59E0B';
    ctx.font = '100px serif';
    ctx.fillText('👑', 600, 180);
    
    // Title with shadow effect
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.fillStyle = '#BE185D';
    ctx.font = 'bold 52px serif';
    ctx.fillText('Certificate of Eternal Love', 600, 260);
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // Decorative hearts
    ctx.fillStyle = '#EC4899';
    ctx.font = '60px serif';
    ctx.fillText('♥ ♥ ♥ ♥ ♥', 600, 330);
    
    // Elegant divider
    ctx.strokeStyle = '#BE185D';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 360);
    ctx.lineTo(850, 360);
    ctx.stroke();
    
    // Main certification text
    ctx.fillStyle = '#374151';
    ctx.font = '32px serif';
    ctx.fillText('This certificate is lovingly presented to', 600, 420);
    
    // Name with elegant styling
    ctx.fillStyle = '#BE185D';
    ctx.font = 'italic bold 48px serif';
    ctx.fillText(displayName, 600, 490);
    
    // Description with line breaks
    ctx.fillStyle = '#374151';
    ctx.font = '28px serif';
    ctx.fillText('for being the light that brightens every day,', 600, 550);
    ctx.fillText('the calm in every storm, and the love', 600, 585);
    ctx.fillText('that lasts forever.', 600, 620);
    
    // Elegant divider
    ctx.strokeStyle = '#BE185D';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 660);
    ctx.lineTo(850, 660);
    ctx.stroke();
    
    // Signature with flourish
    ctx.fillStyle = '#BE185D';
    ctx.font = 'italic 32px serif';
    ctx.fillText(signerTagline, 600, 710);
    ctx.font = 'italic bold 38px serif';
    ctx.fillText(`~ ${signerName} \u2665`, 600, 760);
    
    // Dynamic date with beautiful formatting
    const currentDate = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    ctx.fillStyle = '#6B7280';
    ctx.font = '24px serif';
    ctx.fillText(`Sealed with love on ${formattedDate}`, 600, 820);
    
    // Final decorative touch
    ctx.fillStyle = '#F472B6';
    ctx.font = '28px serif';
    ctx.fillText('♥ ♥ ♥ ♥ ♥ ♥ ♥', 600, 860);
    
    // Download
    const link = document.createElement('a');
    link.download = `Eternal_Love_Certificate_${userName || 'Valentine'}_${currentDate.toISOString().split('T')[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const loveLetterText = `My Dearest Love,

As I write these words, my heart overflows with emotions that no language could ever fully capture. You are not just my partner, but my soul's perfect match, my greatest adventure, and my safest harbor all at once.

Every morning I wake up grateful for the miracle of you. Your laugh is my favorite symphony, your smile my daily sunrise, and your love the foundation upon which I build all my dreams.

I promise to love you not just in the easy moments, but especially in the challenging ones. I promise to grow with you, to support your dreams as fiercely as my own, and to never stop choosing you, every single day.

You have transformed my world from black and white into the most vibrant spectrum of colors. With you, I am not just living – I am truly alive.

Forever and always yours,
With all my love \u2665

- ${signerName}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLetter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLetter) {
      const timer = setTimeout(() => {
        setShowPromise(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showLetter]);

  const createConfetti = () => {
    const newConfetti = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: ['#E8B4B8', '#F4D1D4', '#FFB6C1', '#FF69B4'][Math.floor(Math.random() * 4)]
      });
    }
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setShowCertificate(true);
    }, 2000);
  };

  const handlePinkyPromise = () => {
    createConfetti();
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 text-charcoal relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Confetti Animation */}
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute w-3 h-3 pointer-events-none"
            style={{
              backgroundColor: piece.color,
              left: piece.x,
              borderRadius: '50%'
            }}
            initial={{ y: -10, rotation: 0 }}
            animate={{ 
              y: window.innerHeight + 10, 
              rotation: piece.rotation + 720 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3, 
              ease: "easeOut",
              delay: Math.random() * 0.5
            }}
          >
            ♥
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-4xl md:text-6xl font-signature text-rose-gold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Eternal Promise
        </motion.h1>

        <AnimatePresence>
          {showLetter && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm border-2 border-rose-gold/30 rounded-2xl p-8 shadow-2xl max-w-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="font-serif text-lg leading-relaxed text-charcoal whitespace-pre-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ 
                  overflow: "hidden",
                  borderRight: "2px solid #E8B4B8"
                }}
              >
                {loveLetterText}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPromise && !showCertificate && (
            <motion.div
              className="mt-12 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-rose-gold mb-8 font-signature">
                Seal this promise with a digital pinky promise...
              </p>
              
              <motion.button
                className="relative px-12 py-6 bg-gradient-to-r from-rose-gold to-rose-gold-light text-white rounded-full text-xl font-medium shadow-2xl overflow-hidden group"
                onClick={handlePinkyPromise}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center gap-3">
                  🤝 Digital Pinky Promise
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCertificate && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
                <motion.div
                ref={certificateRef}
                className="w-full h-full max-w-6xl max-h-full mx-auto text-center shadow-2xl relative overflow-y-auto rounded-2xl"
                initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: 0.5 
                }}
                style={{
                  background: 'radial-gradient(circle at center, #FFE5F1 0%, #FFD1DC 30%, #FFC0CB 60%, #FFB6C1 80%, #FF91A4 100%)',
                  border: '6px solid #8B0000',
                  boxShadow: '0 0 50px rgba(255, 105, 180, 0.6), inset 0 0 50px rgba(255, 255, 255, 0.4), 0 0 100px rgba(255, 20, 147, 0.3)'
                }}
              >
                {/* Ornate corner decorations */}
                <motion.div 
                  className="absolute top-2 sm:top-4 left-2 sm:left-4 text-3xl sm:text-5xl text-red-800"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >♥</motion.div>
                <motion.div 
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-3xl sm:text-5xl text-pink-600"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >♥</motion.div>
                <motion.div 
                  className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-3xl sm:text-5xl text-purple-600"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >♥</motion.div>
                <motion.div 
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-3xl sm:text-5xl text-red-600"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >♥</motion.div>
                
                {/* Magical floating sparkles */}
                <motion.div 
                  className="absolute top-8 left-1/4 text-3xl text-yellow-400"
                  animate={{ 
                    rotate: 360, 
                    scale: [1, 1.3, 1], 
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >✨</motion.div>
                <motion.div 
                  className="absolute top-16 right-1/4 text-3xl text-pink-400"
                  animate={{ 
                    rotate: -360, 
                    scale: [1, 1.4, 1],
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >✨</motion.div>
                <motion.div 
                  className="absolute bottom-16 left-1/3 text-3xl text-purple-400"
                  animate={{ 
                    rotate: 360, 
                    scale: [1, 1.2, 1],
                    y: [0, -8, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                >✨</motion.div>
                <motion.div 
                  className="absolute top-1/2 left-8 text-2xl text-rose-400"
                  animate={{ 
                    rotate: 180, 
                    scale: [1, 1.1, 1],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >✨</motion.div>
                <motion.div 
                  className="absolute top-1/2 right-8 text-2xl text-fuchsia-400"
                  animate={{ 
                    rotate: -180, 
                    scale: [1, 1.1, 1],
                    x: [0, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 3 }}
                >✨</motion.div>
                
                {/* Main content */}
                <div className="relative z-10 min-h-full flex flex-col justify-between p-2 sm:p-4 md:p-6">
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >👑</motion.div>
                  
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-signature text-red-800 mb-2 sm:mb-3 drop-shadow-lg"
                    style={{ 
                      textShadow: '3px 3px 6px rgba(0,0,0,0.4), 0 0 20px rgba(255,20,147,0.3)'
                    }}
                    animate={{
                      textShadow: [
                        '3px 3px 6px rgba(0,0,0,0.4), 0 0 20px rgba(255,20,147,0.3)',
                        '3px 3px 6px rgba(0,0,0,0.4), 0 0 30px rgba(255,20,147,0.5)',
                        '3px 3px 6px rgba(0,0,0,0.4), 0 0 20px rgba(255,20,147,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Certificate of Eternal Love
                  </motion.h2>
                  
                  <motion.div 
                    className="text-2xl sm:text-3xl text-pink-600 mb-2 sm:mb-3"
                    animate={{
                      scale: [1, 1.1, 1],
                      color: ['#DB2777', '#EC4899', '#F472B6', '#EC4899', '#DB2777']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ♥ ♥ ♥ ♥ ♥
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3 border-3 shadow-inner relative overflow-hidden"
                    style={{
                      border: '3px solid #8B0000',
                      boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5), 0 0 20px rgba(255,20,147,0.2)'
                    }}
                    animate={{
                      boxShadow: [
                        'inset 0 0 20px rgba(255,255,255,0.5), 0 0 20px rgba(255,20,147,0.2)',
                        'inset 0 0 30px rgba(255,255,255,0.7), 0 0 30px rgba(255,20,147,0.4)',
                        'inset 0 0 20px rgba(255,255,255,0.5), 0 0 20px rgba(255,20,147,0.2)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 font-serif">
                      This magnificent certificate hereby declares that
                    </p>
                    <motion.p 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-signature text-red-700 mb-2 drop-shadow-md"
                      animate={{ 
                        textShadow: [
                          '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,0,0,0.2)', 
                          '4px 4px 8px rgba(0,0,0,0.4), 0 0 20px rgba(255,0,0,0.4)', 
                          '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,0,0,0.2)'
                        ],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {userName}
                    </motion.p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-serif">
                      is cherished beyond measure, loved without limits, <br className="hidden sm:block"/>
                      and treasured for all eternity by a heart that beats <br className="hidden sm:block"/>
                      only for them, now and forevermore.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between items-center text-sm text-gray-600 mb-3 font-serif bg-white/30 rounded-lg p-2 backdrop-blur-sm"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="flex items-center gap-2">
                      <motion.span 
                        className="text-red-500 text-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >♥</motion.span>
                      Sealed with love
                    </span>
                    <span className="font-semibold">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        weekday: 'long'
                      })}
                    </span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl sm:text-2xl font-signature text-red-600 mb-8 italic"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      textShadow: '1px 1px 3px rgba(0,0,0,0.2), 0 0 10px rgba(255,20,147,0.2)'
                    }}
                  >
                    {signerTagline}<br/>
                    <span className="text-2xl sm:text-3xl">~ {signerName}{' \u2665'}</span>
                  </motion.p>
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <motion.button
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-lg font-semibold text-xs sm:text-sm"
                        onClick={downloadCertificate}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        💾 Download
                      </motion.button>
                      
                      <motion.button
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg font-semibold text-xs sm:text-sm"
                        onClick={() => setShowVintageCertificate(true)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📜 Vintage
                      </motion.button>
                      
                      <motion.button
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-full hover:from-pink-500 hover:to-red-600 transition-all shadow-lg font-semibold text-xs sm:text-sm"
                        onClick={() => setShowCertificate(false)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Keep Forever ♥
                      </motion.button>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 font-serif bg-white/30 rounded-lg p-2 backdrop-blur-sm">
                      <span className="flex items-center gap-1">
                        <span className="text-red-500">♥</span>
                        Sealed with Love
                      </span>
                      <span className="font-semibold text-center text-xs sm:text-sm">
                        {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <p className="text-sm sm:text-base font-signature text-red-600 italic text-center">
                      Forever Yours with Infinite Love<br/>
                      <span className="text-base sm:text-lg">~ Abhinav ♥</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vintage Certificate Modal */}
      <AnimatePresence>
        {showVintageCertificate && (
          <VintageCertificate 
            userName={userName} 
            onClose={() => setShowVintageCertificate(false)}
            onDownload={downloadVintageCertificate}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EternalPromise;
