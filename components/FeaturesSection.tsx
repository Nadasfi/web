"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wallet, Zap, Lock, ArrowRight, CheckCircle, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    id: 'hybrid-wallet',
    icon: Wallet,
    title: 'Hybrid Wallet Architecture',
    description: 'Main wallet retains full control while sub-wallets enable limited-risk automated trading',
    benefits: ['Full asset control', 'Limited automation risk', 'Seamless integration']
  },
  {
    id: 'non-custodial',
    icon: Shield,
    title: 'Non-Custodial Security',
    description: 'Your private keys never leave your device. Complete ownership and control of your assets',
    benefits: ['Private key ownership', 'No counterparty risk', 'Transparent operations']
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Smart Automation',
    description: 'Advanced algorithms execute your trading strategies while you maintain ultimate control',
    benefits: ['24/7 execution', 'Strategy optimization', 'Risk management']
  },
  {
    id: 'hyperliquid',
    icon: BarChart3,
    title: 'Hyperliquid Integration',
    description: 'Built specifically for Hyperliquid testnet with deep protocol integration',
    benefits: ['Native integration', 'Optimized performance', 'Real-time data']
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-teal-400/8 to-cyan-400/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span>Maintain Control,</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Automate Safely
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our revolutionary hybrid wallet architecture gives you the best of both worlds: 
            complete asset control with the power of automated trading strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="group"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 h-full hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-400">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-3xl p-8 lg:p-12 text-center border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 rounded-3xl"></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/40 to-teal-500/40 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 border border-cyan-500/30">
                <Lock className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Your Assets, Your Control
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience the future of DeFi automation without sacrificing security. Our non-custodial platform 
              ensures you always maintain complete ownership of your assets while benefiting from sophisticated 
              automated trading strategies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">
                  Bank-Grade Security
                </h4>
                <p className="text-sm text-gray-400">
                  Military-grade encryption
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">
                  Community Driven
                </h4>
                <p className="text-sm text-gray-400">
                  Open source & transparent
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">
                  Lightning Fast
                </h4>
                <p className="text-sm text-gray-400">
                  Optimized for performance
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#demo"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-black rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
              >
                <span>Start Trading Safely</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
