import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NameEntry = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setShowInput(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-signature text-rose-gold mb-6 px-4"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(232, 180, 184, 0.5)",
              "0 0 40px rgba(232, 180, 184, 0.8)",
              "0 0 20px rgba(232, 180, 184, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Something Special Awaits...
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-rose-gold-light font-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          A surprise crafted just for you ✨
        </motion.p>
      </motion.div>

      <motion.div
        className="text-6xl sm:text-7xl md:text-8xl mb-8 sm:mb-12"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 200 }}
      >
        💝
      </motion.div>

      {showInput && (
        <motion.form
          onSubmit={handleSubmit}
          className="text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-rose-gold-light text-lg mb-6 font-signature"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Before we begin this magical journey...
          </motion.p>
          
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/90 border-2 border-rose-gold text-charcoal text-lg sm:text-xl px-4 sm:px-6 py-3 sm:py-4 rounded-full text-center font-sans placeholder-gray-500 focus:outline-none focus:border-rose-gold-light focus:bg-white transition-all duration-300 w-72 sm:w-80 relative z-20"
              placeholder="Enter your beautiful name..."
              autoFocus
            />
          </motion.div>

          <motion.button
            type="submit"
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal transition-all duration-500 rounded-full font-medium tracking-wide glow-effect disabled:opacity-50 text-sm sm:text-base"
            disabled={!name.trim()}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Begin the Surprise ✨
          </motion.button>
        </motion.form>
      )}

      <motion.div
        className="absolute bottom-8 text-rose-gold/30 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        Made with love & surprises 💕 - From Your Love
      </motion.div>
    </motion.div>
  );
};

export default NameEntry;
