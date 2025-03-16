import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-red-600 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/Music" className="btn bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Music Portfolio
          </Link>
        </div>
        <div className="space-x-4">
          <a href="https://instagram.com/aakashgangji" target="_blank" rel="noopener noreferrer">
            <img src="src/images/instagram.svg" alt="Instagram" className="w-8 h-8 inline-block" />
          </a>
          <a href="https://snapchat.com/t/EhlZc8d2" target="_blank" rel="noopener noreferrer">
            <img src="src/images/snapchat.svg" alt="Snapchat" className="w-8 h-8 inline-block" />
          </a>
          <a href="https://www.linkedin.com/in/aakashgangji/" target="_blank" rel="noopener noreferrer">
            <img src="src/images/linkedin.svg" alt="LinkedIn" className="w-8 h-8 inline-block" />
          </a>
          <a href="https://github.com/aakashgangji" target="_blank" rel="noopener noreferrer">
            <img src="src/images/github.svg" alt="GitHub" className="w-8 h-8 inline-block" />
          </a>
          <a href="mailto:gangjiaakash@gmail.com">
            <img src="src/images/mail.svg" alt="Gmail" className="w-8 h-8 inline-block" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
