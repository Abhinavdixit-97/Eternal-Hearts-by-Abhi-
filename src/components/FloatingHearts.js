import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    window.addEventListener('resize', generateHearts);
    return () => window.removeEventListener('resize', generateHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-gold opacity-20"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut"
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;