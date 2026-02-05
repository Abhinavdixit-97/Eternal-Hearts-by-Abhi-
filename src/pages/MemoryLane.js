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
                className="relative w-full h-full cursor-pointer preserve-3d"
                animate={{ rotateY: flippedCards[memory.id] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onHoverStart={() => toggleFlip(memory.id)}
                onHoverEnd={() => toggleFlip(memory.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={memory.image}
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover filter blur-sm hover:blur-none transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-rose-gold to-rose-gold-light rounded-lg p-6 flex items-center justify-center shadow-2xl">
                  <p className="text-charcoal text-lg font-medium text-center font-signature leading-relaxed">
                    "{memory.note}"
                  </p>
                </div>
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