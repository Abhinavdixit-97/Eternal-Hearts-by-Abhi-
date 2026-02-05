import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoveLanguage = ({ onNext }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [petals, setPetals] = useState([]);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const senses = [
    {
      id: 'sight',
      title: 'Sight',
      description: 'The way you look at me when you\'re sleepy.',
      icon: '👁️',
      color: 'from-purple-500 via-pink-500 to-red-400'
    },
    {
      id: 'sound',
      title: 'Sound',
      description: 'Your voice saying my name.',
      icon: '🎵',
      color: 'from-indigo-500 via-purple-500 to-pink-400',
      hasAudio: true
    },
    {
      id: 'touch',
      title: 'Touch',
      description: 'Move your mouse here...',
      icon: '✋',
      color: 'from-pink-500 via-rose-400 to-red-400',
      interactive: true
    },
    {
      id: 'taste',
      title: 'Taste',
      description: 'The sweetness of your morning kisses.',
      icon: '💋',
      color: 'from-red-500 via-pink-500 to-rose-400'
    },
    {
      id: 'smell',
      title: 'Smell',
      description: 'Your perfume on my favorite shirt.',
      icon: '🌸',
      color: 'from-violet-500 via-purple-400 to-pink-400'
    }
  ];

  const playVoiceNote = () => {
    setIsPlaying(true);
    // Simulate voice note with beep sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
    
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleMouseMove = (e, cardId) => {
    if (cardId === 'touch') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newPetal = {
        id: Date.now() + Math.random(),
        x,
        y
      };
      
      setPetals(prev => [...prev.slice(-20), newPetal]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPetals(prev => prev.slice(1));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [petals]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-700"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-6xl font-signature text-rose-gold mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        How I Love You
      </motion.h2>

      <motion.p
        className="text-rose-gold-light text-lg mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Through all five senses, you fill my world with magic
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl px-4">
        {senses.map((sense, index) => (
          <motion.div
            key={sense.id}
            className={`relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${sense.color} cursor-pointer overflow-hidden group shadow-lg`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setActiveCard(sense.id)}
            onHoverEnd={() => setActiveCard(null)}
            onMouseMove={(e) => handleMouseMove(e, sense.id)}
            onClick={() => sense.hasAudio && playVoiceNote()}
          >
            <div className="text-center relative z-10">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{sense.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 drop-shadow-lg">{sense.title}</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed drop-shadow-md">{sense.description}</p>
              
              {sense.hasAudio && (
                <div className="mt-3 sm:mt-4">
                  <div className={`w-full h-2 bg-white/30 rounded-full overflow-hidden ${isPlaying ? 'animate-pulse' : ''}`}>
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: isPlaying ? '100%' : '0%' }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <p className="text-xs text-white/80 mt-2">Click to play voice note</p>
                </div>
              )}
            </div>

            {sense.interactive && petals.map(petal => (
              <div
                key={petal.id}
                className="petal-trail"
                style={{
                  left: petal.x - 4,
                  top: petal.y - 4
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: activeCard === sense.id ? 1 : 0,
                opacity: activeCard === sense.id ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-12 px-8 py-4 bg-transparent border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal transition-all duration-300 rounded-full font-medium tracking-wide glow-effect"
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue to Our Garden
      </motion.button>
    </motion.div>
  );
};

export default LoveLanguage;