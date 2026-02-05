import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portal = ({ userName, onNext }) => {
  const [isHovered, setIsHovered] = useState(false);

  const playHeartbeat = () => {
    // Create audio context for heartbeat sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0.1, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-light text-rose-gold-light mb-4 max-w-2xl">
          To {userName}, the only person who knows the rhythm of my heart...
        </h1>
      </motion.div>

      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => {
          setIsHovered(true);
          playHeartbeat();
        }}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
      >
        <motion.div
          className="text-8xl md:text-9xl text-rose-gold heart-glow"
          animate={{
            filter: isHovered 
              ? ["drop-shadow(0 0 10px #FFB6C1)", "drop-shadow(0 0 30px #FFB6C1)", "drop-shadow(0 0 10px #FFB6C1)"]
              : "drop-shadow(0 0 10px #FFB6C1)"
          }}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
        >
          ♥
        </motion.div>
        
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-rose-gold opacity-50"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>

      <motion.button
        className="mt-12 px-8 py-4 bg-transparent border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal transition-all duration-300 rounded-full font-medium tracking-wide glow-effect"
        onClick={onNext}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enter Our World
      </motion.button>
    </motion.div>
  );
};

export default Portal;