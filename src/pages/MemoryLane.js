import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MemoryLane = ({ onNext }) => {
  const { scrollYProgress } = useScroll();
  const [flippedCards, setFlippedCards] = useState({});

  const memories = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x400/E8B4B8/FFFFFF?text=Memory+1",
      note: "This was the moment I realized it was always you."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x400/F4D1D4/FFFFFF?text=Memory+2",
      note: "Your laugh became my favorite sound in the universe."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Memory+3",
      note: "The way you looked at me changed everything."
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x400/E8B4B8/FFFFFF?text=Memory+4",
      note: "In this moment, I knew I wanted forever with you."
    }
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 2) {
        onNext();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onNext]);

  return (
    <motion.div
      className="min-h-[300vh] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.h2
          className="text-4xl md:text-6xl font-signature text-rose-gold mb-12 text-center"
          style={{ y: y1 }}
        >
          Our Beautiful Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="relative w-72 h-96 mx-auto perspective-1000"
              style={{ 
                y: index % 2 === 0 ? y2 : y3,
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                onClick={() => toggleFlip(memory.id)}
                whileTap={{ scale: 0.95 }}
              >
                {/* Card container with mobile-friendly animation */}
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl"
                  animate={{
                    rotateY: flippedCards[memory.id] ? 180 : 0,
                    scale: flippedCards[memory.id] ? 0.95 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Front of card */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: flippedCards[memory.id] ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={memory.image}
                      alt={`Memory ${memory.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    
                    {/* Mobile tap indicator */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white text-lg">👆</span>
                    </motion.div>
                    
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white text-sm opacity-80">Tap to reveal memory ✨</p>
                    </div>
                  </motion.div>

                  {/* Back of card */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rose-gold to-rose-gold-light rounded-lg p-6 flex items-center justify-center"
                    animate={{ opacity: flippedCards[memory.id] ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: flippedCards[memory.id] ? 0.3 : 0 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-4"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💕
                      </motion.div>
                      <p className="text-charcoal text-lg font-medium font-signature leading-relaxed">
                        "{memory.note}"
                      </p>
                      <motion.div
                        className="mt-4 text-charcoal/70 text-sm"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Tap again to flip back ↩️
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-rose-gold-light text-center"
          style={{ y: y1 }}
        >
          <p className="text-lg opacity-70">Scroll to continue our story...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemoryLane;