import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const MemoryLane = ({ onNext }) => {
  const { scrollYProgress } = useScroll();
  const [flippedCards, setFlippedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const endRef = useRef(null);
  const hasAdvancedRef = useRef(false);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const advancePage = useCallback(() => {
    if (hasAdvancedRef.current) return;
    hasAdvancedRef.current = true;
    onNext();
  }, [onNext]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.98) {
      advancePage();
    }
  });

  useEffect(() => {
    if (!endRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          advancePage();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(endRef.current);
    return () => observer.disconnect();
  }, [advancePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAdvancedRef.current) return;
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 60;
      if (nearBottom) {
        advancePage();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [advancePage]);

  return (
    <motion.div
      className="min-h-[200vh] md:min-h-[220vh] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative md:sticky md:top-0 md:h-screen flex flex-col items-center justify-center py-12 md:py-0 md:overflow-hidden">
        <motion.h2
          className="text-4xl md:text-6xl font-signature text-rose-gold mb-12 text-center"
          style={{ y: isMobile ? 0 : y1 }}
        >
          Our Beautiful Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="relative w-72 h-96 mx-auto"
              style={{ 
                y: isMobile ? 0 : (index % 2 === 0 ? y2 : y3),
                perspective: '1200px'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.button
                type="button"
                className="group relative w-full h-full rounded-2xl bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-100"
                onClick={() => toggleFlip(memory.id)}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={!!flippedCards[memory.id]}
                aria-label={`Toggle memory ${memory.id}`}
              >
                <motion.div
                  className="relative w-full h-full rounded-2xl shadow-2xl transition-shadow duration-300 group-hover:shadow-[0_25px_50px_rgba(232,180,184,0.45)]"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCards[memory.id] ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={memory.image}
                      alt={`Memory ${memory.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                    
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
                      <p className="text-white text-base opacity-90">Tap to reveal memory ✨</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-gold to-rose-gold-light p-6 flex items-center justify-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
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
                      <p className="text-charcoal text-xl md:text-2xl font-medium font-signature leading-snug">
                        "{memory.note}"
                      </p>
                      <motion.div
                        className="mt-4 text-charcoal/70 text-base"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Tap again to flip back ↩️
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/60 transition" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-start md:justify-center pt-8 md:pt-20 pb-16 text-center">
        <motion.div
          className="text-rose-gold-light"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg opacity-80">Cards ke baad niche scroll karein to continue.</p>
          <p className="text-sm opacity-60 mt-2">Scroll down to go to the next page.</p>
          <motion.div
            className="mt-3 text-2xl"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
        <motion.button
          type="button"
          onClick={advancePage}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-gold px-6 py-3 text-white text-base font-medium shadow-lg shadow-rose-gold/30 hover:bg-rose-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-100 md:hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Next page
        </motion.button>
        <div ref={endRef} className="mt-10 h-24 w-full" aria-hidden="true" />
      </div>

      <motion.button
        type="button"
        onClick={advancePage}
        className="hidden md:inline-flex fixed bottom-6 right-6 items-center justify-center rounded-full bg-rose-gold px-5 py-3 text-white text-sm font-medium shadow-lg shadow-rose-gold/30 hover:bg-rose-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Next page
      </motion.button>
    </motion.div>
  );
};

export default MemoryLane;
