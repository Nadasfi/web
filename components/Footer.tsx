"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, FileText, Mail, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Security', href: '#security' },
      { name: 'Early Access', href: '/early-access' },
      { name: 'About', href: '#about' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#', icon: FileText },
      { name: 'API Reference', href: '#', icon: FileText },
      { name: 'Tutorials', href: '#', icon: FileText },
      { name: 'Support', href: 'mailto:contact@nadas.fi' }
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Twitter', href: 'https://twitter.com/nadasfi', icon: Twitter },
      { name: 'GitHub', href: 'https://github.com/nadasfi', icon: Github },
      { name: 'Discord', href: '#', icon: ExternalLink },
      { name: 'Blog', href: '#' }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-cyan-500/20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/logo-transp.png" 
                  alt="Nadas Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Nadas
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Secure, non-custodial DeFi automation platform for Hyperliquid testnet. 
              Experience the future of automated trading without compromising control.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com/Nadas_fi" 
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 border border-cyan-500/20" 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/nadasfi" 
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 border border-cyan-500/20" 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:contact@nadas.fi" 
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 border border-cyan-500/20" 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                      <a 
                        href={link.href} 
                        target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                        rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                        className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                        {!link.href.startsWith('mailto:') && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </a>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true }} 
          className="pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© 2025 Nadas. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Built for</span>
              <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full text-cyan-400 font-semibold border border-cyan-500/30">
                <span>Hyperliquid</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
