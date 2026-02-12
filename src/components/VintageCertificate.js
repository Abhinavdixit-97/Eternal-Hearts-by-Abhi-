import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VintageCertificate = ({ userName, onClose, onDownload }) => {
  const [showKissMessage, setShowKissMessage] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [particles, setParticles] = useState([]);
  const displayName = userName || 'My Beloved';
  const signerName = 'Abhinav';
  const signerTitle = 'Your Forever Person';
  const signerSignature = 'Forever Yours';
  const signerNote = 'With all my heart';

  useEffect(() => {
    // Create floating particles
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, []);

  const handleSealWithKiss = () => {
    // Create heart confetti
    const newConfetti = [];
    for (let i = 0; i < 30; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        rotation: Math.random() * 360,
        delay: Math.random() * 2
      });
    }
    setConfetti(newConfetti);
    setShowKissMessage(true);
    
    // Clear confetti after animation
    setTimeout(() => setConfetti([]), 4000);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}

      {/* Heart Confetti */}
      <AnimatePresence>
        {confetti.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-500 text-2xl pointer-events-none"
            style={{ left: heart.x }}
            initial={{ y: -20, rotation: 0, opacity: 1 }}
            animate={{ 
              y: window.innerHeight + 50, 
              rotation: heart.rotation + 720,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3, 
              ease: "easeOut",
              delay: heart.delay
            }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Certificate */}
      <motion.div
        className="relative w-full h-full max-w-6xl max-h-full mx-auto overflow-y-auto"
        initial={{ scale: 0.5, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          duration: 1.2
        }}
        whileHover={{ 
          rotateY: 5,
          rotateX: 2,
          scale: 1.02
        }}
        style={{ perspective: "1000px" }}
      >
        <div 
          className="bg-[#fdf5e6] rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden border-4 sm:border-6 md:border-8 min-h-full"
          style={{
            borderImage: "linear-gradient(45deg, #d4af37, #ffd700, #d4af37) 1",
            boxShadow: "0 0 50px rgba(212, 175, 55, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Animated Floral Border */}
          <div className="absolute inset-2 sm:inset-3 md:inset-4 border-2 border-yellow-600 rounded-lg">
            <motion.div
              className="absolute top-0 left-0 text-red-600 text-lg sm:text-xl md:text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >🌹</motion.div>
            <motion.div
              className="absolute top-0 right-0 text-white text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >🌸</motion.div>
            <motion.div
              className="absolute bottom-0 left-0 text-purple-400 text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >🌺</motion.div>
            <motion.div
              className="absolute bottom-0 right-0 text-red-600 text-lg sm:text-xl md:text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >🌹</motion.div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-yellow-700 hover:text-yellow-900 text-lg sm:text-xl md:text-2xl z-10"
          >
            ✕
          </button>

          {/* Main Content */}
          <div className="text-center relative z-10 min-h-full flex flex-col justify-between">
            {/* Title */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8"
              style={{
                fontFamily: "'Great Vibes', cursive",
                background: "linear-gradient(45deg, #d4af37, #ffd700, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
              }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Certificate of Infinite Love
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              className="w-32 sm:w-48 md:w-64 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />

            {/* Awarded To */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p className="text-xl md:text-2xl text-yellow-800 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Awarded to:
              </p>
              <motion.h2
                className="text-3xl md:text-5xl text-yellow-900 mb-6"
                style={{ fontFamily: "'Great Vibes', cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
              >
                {displayName}
              </motion.h2>
            </motion.div>

            {/* Main Message */}
            <motion.p
              className="text-lg md:text-xl text-yellow-800 leading-relaxed mb-12 max-w-3xl mx-auto"
              style={{ fontFamily: "'Cinzel', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1.5 }}
            >
              For being the light in my days, the calm in my storms,
              and the love I choose endlessly.
            </motion.p>

            {/* Seals */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6 md:px-8">
              {/* Wax Seal */}
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg"
                  style={{ boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)" }}
                >
                  <span className="text-white text-lg sm:text-xl md:text-2xl">💖</span>
                </div>
              </motion.div>

              {/* Infinity Seal */}
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.7, duration: 1 }}
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center shadow-lg"
                  style={{ boxShadow: "0 0 20px rgba(202, 138, 4, 0.5)" }}
                >
                  <span className="text-white text-xl sm:text-2xl md:text-3xl">∞</span>
                </div>
              </motion.div>
            </div>

            {/* Signature Lines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
              >
                <motion.div
                  className="border-b-2 border-yellow-700 pb-2 mb-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 3.5, duration: 1.5 }}
                >
                  <span 
                    className="text-2xl text-yellow-800"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    {signerName}
                  </span>
                </motion.div>
                <p className="text-sm text-yellow-700" style={{ fontFamily: "'Cinzel', serif" }}>
                  {signerTitle}
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 2 }}
              >
                <motion.div
                  className="border-b-2 border-yellow-700 pb-2 mb-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 4, duration: 1.5 }}
                >
                  <span 
                    className="text-2xl text-yellow-800"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    {signerSignature}
                  </span>
                </motion.div>
                <p className="text-sm text-yellow-700" style={{ fontFamily: "'Cinzel', serif" }}>
                  {signerNote}
                </p>
              </motion.div>
            </div>

            {/* Date */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-yellow-600 mb-4 sm:mb-6 md:mb-8 px-2"
              style={{ fontFamily: "'Cinzel', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
            >
              Sealed on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
              })}
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
              {/* Seal with Kiss Button */}
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: "'Cinzel', serif" }}
                onClick={handleSealWithKiss}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💋 Seal with a Kiss
              </motion.button>

              {/* Download Button */}
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: "'Cinzel', serif" }}
                onClick={onDownload}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.2, duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💾 Download Certificate
              </motion.button>
            </div>

            {/* Hidden Message */}
            <AnimatePresence>
              {showKissMessage && (
                <motion.div
                  className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-pink-100 rounded-lg border-2 border-pink-300 mx-2 sm:mx-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <p 
                    className="text-sm sm:text-base md:text-lg text-pink-800 italic leading-relaxed"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    "Every heartbeat whispers your name, every breath carries my love for you. 
                    You are not just my today, but my every tomorrow. Forever and always, 
                    you are my greatest blessing." 💕
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VintageCertificate;
