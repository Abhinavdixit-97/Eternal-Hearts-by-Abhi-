import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import NameEntry from './pages/NameEntry';
import Portal from './pages/Portal';
import MemoryLane from './pages/MemoryLane';
import LoveLanguage from './pages/LoveLanguage';
import VirtualBouquet from './pages/VirtualBouquet';
import EternalPromise from './pages/EternalPromise';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentPage, setCurrentPage] = useState(-1);
  const [userName, setUserName] = useState('');

  const handleNameSubmit = (name) => {
    setUserName(name);
    setCurrentPage(0);
  };

  const pages = [
    <Portal key="portal" userName={userName} onNext={() => setCurrentPage(1)} />,
    <MemoryLane key="memory" userName={userName} onNext={() => setCurrentPage(2)} />,
    <LoveLanguage key="love" userName={userName} onNext={() => setCurrentPage(3)} />,
    <VirtualBouquet key="bouquet" userName={userName} onNext={() => setCurrentPage(4)} />,
    <EternalPromise key="promise" userName={userName} />
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white relative overflow-hidden">
      {currentPage >= 0 && <FloatingHearts />}
      <AnimatePresence mode="wait">
        {currentPage === -1 ? (
          <NameEntry onNameSubmit={handleNameSubmit} />
        ) : (
          pages[currentPage]
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;