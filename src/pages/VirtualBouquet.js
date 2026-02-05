import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VirtualBouquet = ({ onNext }) => {
  const [pickedFlowers, setPickedFlowers] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const flowers = [
    { id: 1, type: '🌹', reason: 'For your beautiful smile that lights up my world', color: 'text-red-400' },
    { id: 2, type: '🌸', reason: 'For the way you make ordinary moments magical', color: 'text-pink-400' },
    { id: 3, type: '🌺', reason: 'For your kindness that touches everyone around you', color: 'text-rose-400' },
    { id: 4, type: '🌻', reason: 'For bringing sunshine into my darkest days', color: 'text-yellow-400' },
    { id: 5, type: '🌷', reason: 'For your grace and elegance in everything you do', color: 'text-purple-400' },
    { id: 6, type: '🌼', reason: 'For your pure heart and gentle soul', color: 'text-white' },
    { id: 7, type: '🏵️', reason: 'For being my greatest adventure and my safest place', color: 'text-orange-400' },
    { id: 8, type: '🌿', reason: 'For growing with me through every season of life', color: 'text-green-400' }
  ];

  const pickFlower = (flower) => {
    if (!pickedFlowers.find(f => f.id === flower.id)) {
      setPickedFlowers(prev => [...prev, flower]);
      setShowBasket(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const flowerVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    picked: {
      scale: 0,
      rotate: 180,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="min-h-screen p-8 relative bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-signature text-pink-700 mb-4">
            Pick Flowers for Your Bouquet
          </h2>
          <p className="text-pink-600 text-lg max-w-2xl mx-auto">
            Each flower represents a reason why I love you. Click to add them to your basket.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {flowers.map((flower) => {
              const isPicked = pickedFlowers.find(f => f.id === flower.id);
              
              return (
                <motion.div
                  key={flower.id}
                  variants={flowerVariants}
                  animate={isPicked ? "picked" : "visible"}
                  className="relative"
                >
                  <motion.div
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl cursor-pointer select-none ${flower.color} filter drop-shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => pickFlower(flower)}
                    style={{
                      textShadow: '0 0 20px rgba(232, 180, 184, 0.5)'
                    }}
                  >
                    {flower.type}
                  </motion.div>
                  
                  {!isPicked && (
                    <motion.div
                      className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 md:w-4 h-4 sm:h-6 md:h-8 bg-green-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence>
          {showBasket && (
            <motion.div
              className="fixed inset-x-4 bottom-4 sm:right-8 sm:left-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 bg-white/95 backdrop-blur-sm border-2 border-pink-400 rounded-2xl p-4 sm:p-6 max-w-sm max-h-80 sm:max-h-96 overflow-y-auto z-50 shadow-xl"
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-signature text-pink-700 text-center flex-1">
                  Your Love Basket 🧺
                </h3>
                <button 
                  onClick={() => setShowBasket(false)}
                  className="text-pink-600 hover:text-pink-700 transition-colors sm:hidden"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {pickedFlowers.map((flower, index) => (
                  <motion.div
                    key={flower.id}
                    className="bg-pink-100 rounded-lg p-2 sm:p-3 border border-pink-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className={`text-xl sm:text-2xl ${flower.color} flex-shrink-0`}>{flower.type}</span>
                      <p className="text-pink-700 text-xs sm:text-sm leading-relaxed">
                        {flower.reason}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {pickedFlowers.length >= 3 && (
                <motion.button
                  className="w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors text-sm sm:text-base"
                  onClick={onNext}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Complete Your Bouquet ✨
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {pickedFlowers.length === 0 && (
          <motion.div
            className="text-center px-4 pb-20 sm:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-pink-600/70 text-base sm:text-lg">
              Click on the flowers to start building your bouquet...
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VirtualBouquet;