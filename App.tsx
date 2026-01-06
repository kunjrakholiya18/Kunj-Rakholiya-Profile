
import React from 'react';
// Fix for react-router-dom exports issue
import * as ReactRouterDOM from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';

const { Routes, Route, useLocation } = ReactRouterDOM as any;

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Hide common header on contact page if needed, or keep for consistency */}
      {location.pathname !== '/contact' && <Header />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;