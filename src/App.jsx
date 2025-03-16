import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Music from './components/Music';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/Music';

  return (
    <div className="min-h-screen bg-dark-space text-white">
      {showNavbar && <Navbar />}
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Contact/>
            </>
          } />
          <Route path="/Music" element={<Music />} />
        </Routes>
       
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
