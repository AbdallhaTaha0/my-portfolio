/* eslint-disable */
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a className="text-2xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2" href="#">
          <span className="text-primary">A.T.A</span>
        </a>
        <nav className="hidden md:flex space-x-10">
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#about">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#experience">Experience</a>
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#skills">Skills</a>
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#education">Education</a>
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#resume">Resume</a>
          <a className="text-sm font-medium hover:text-primary transition-colors py-2" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={toggleTheme}>
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded">{isDarkMode ? 'Dark' : 'Light'}</span>
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 shadow-lg">
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a className="block text-sm font-medium hover:text-primary transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
