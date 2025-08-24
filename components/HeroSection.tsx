"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

export const HeroSection = () => {
  const floatingIcons = [
    { icon: Shield, delay: 0, x: 20, y: -30 },
    { icon: Zap, delay: 0.5, x: -40, y: 20 },
    { icon: Lock, delay: 1, x: 30, y: 40 }
  ];

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl transform rotate-12 blur-sm"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl transform -rotate-6 blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-6 border border-cyan-500/30 backdrop-blur-sm">
              <span>Now Live on Hyperliquid Testnet</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span>Secure DeFi Automation</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Without Compromise
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience non-custodial DeFi automation with our revolutionary hybrid wallet architecture. 
              Maintain full control while enabling safe, automated trading on Hyperliquid.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#demo"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-black rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
              >
                <span>Launch App</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            
            <motion.button 
              className="px-8 py-4 border-2 border-cyan-500/50 text-white rounded-xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 min-w-[200px]" 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.4 }} 
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 shadow-2xl shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 rounded-3xl"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Non-Custodial
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Your keys, your assets. Always.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Automated Trading
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Set strategies, let algorithms execute.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                    <Lock className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Hybrid Architecture
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Control meets automation safely.
                  </p>
                </div>
              </div>
            </div>

            {floatingIcons.map((item, index) => (
              <motion.div 
                key={index} 
                className="absolute hidden lg:block" 
                style={{
                  top: `${50 + item.y}%`,
                  left: `${20 + item.x}%`
                }} 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{
                  opacity: 0.8,
                  scale: 1,
                  y: [0, -10, 0]
                }} 
                transition={{
                  opacity: { delay: item.delay + 0.8, duration: 0.5 },
                  scale: { delay: item.delay + 0.8, duration: 0.5 },
                  y: {
                    delay: item.delay + 1.3,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/40 to-teal-500/40 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/30">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
