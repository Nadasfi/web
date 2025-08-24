"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-4" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">N</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Nadas
              </span>
              <p className="text-sm text-slate-400 font-medium tracking-wide -mt-1">
                Premium DeFi Platform
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
              Features
            </a>
            <a href="#security" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
              Security
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }} 
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/early-access"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Early Access
              </a>
            </motion.div>
          </div>

          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-cyan-500/20" 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Features
              </a>
              <a href="#security" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Security
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                About
              </a>
              <a 
                href="#demo"
                className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black rounded-xl font-semibold text-left"
              >
                Early Access
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
