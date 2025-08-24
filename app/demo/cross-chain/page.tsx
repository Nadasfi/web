"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Shield, Zap, Clock, DollarSign, TrendingUp, Activity, CheckCircle } from 'lucide-react';

const supportedChains = [
  { id: 'ethereum', name: 'Ethereum', icon: '🔵', nativeToken: 'ETH', gasPrice: 25, bridgeFee: 0.1 },
  { id: 'arbitrum', name: 'Arbitrum', icon: '🔷', nativeToken: 'ETH', gasPrice: 0.1, bridgeFee: 0.05 },
  { id: 'polygon', name: 'Polygon', icon: '🟣', nativeToken: 'MATIC', gasPrice: 0.01, bridgeFee: 0.02 },
  { id: 'optimism', name: 'Optimism', icon: '🔴', nativeToken: 'ETH', gasPrice: 0.001, bridgeFee: 0.03 },
  { id: 'base', name: 'Base', icon: '🔵', nativeToken: 'ETH', gasPrice: 0.001, bridgeFee: 0.02 },
  { id: 'bsc', name: 'BSC', icon: '🟡', nativeToken: 'BNB', gasPrice: 0.005, bridgeFee: 0.01 }
];

const bridgeProviders = [
  { name: 'Stargate', fee: 0.15, time: '2-5 min', security: 'High', rating: 4.8 },
  { name: 'Multichain', fee: 0.12, time: '3-7 min', security: 'High', rating: 4.6 },
  { name: 'Hop Protocol', fee: 0.18, time: '1-3 min', security: 'Very High', rating: 4.9 },
  { name: 'Across', fee: 0.20, time: '1-2 min', security: 'Very High', rating: 4.7 },
  { name: 'Synapse', fee: 0.14, time: '2-6 min', security: 'High', rating: 4.5 }
];

export default function CrossChainDemoPage() {
  const [sourceChain, setSourceChain] = useState('ethereum');
  const [targetChain, setTargetChain] = useState('arbitrum');
  const [token, setToken] = useState('ETH');
  const [amount, setAmount] = useState('1.0');
  const [selectedProvider, setSelectedProvider] = useState('stargate');

  const handleBridge = () => {
    alert('Demo Mode: Bridge transaction would be initiated in production. This is a simulation.');
  };

  const getChainData = (chainId: string) => supportedChains.find(chain => chain.id === chainId);

  const calculateTotalFee = () => {
    const source = getChainData(sourceChain);
    const target = getChainData(targetChain);
    const provider = bridgeProviders.find(p => p.name.toLowerCase() === selectedProvider);
    
    if (!source || !target || !provider) return 0;
    
    const gasCost = (source.gasPrice + target.gasPrice) * 0.001; // Convert to USD
    const bridgeFee = parseFloat(amount) * (provider.fee / 100);
    
    return gasCost + bridgeFee;
  };

  const getEstimatedTime = () => {
    const provider = bridgeProviders.find(p => p.name.toLowerCase() === selectedProvider);
    return provider?.time || '2-5 min';
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-4">
            Cross-Chain Portfolio
          </h1>
          <p className="text-slate-400 text-lg">Demo Mode • Powered by GlueX and Li.fi</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
            <CheckCircle className="w-4 h-4" />
            <span>Demo Active</span>
          </div>
        </div>
      </motion.div>

      {/* Bridge Interface */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6 text-center">Cross-Chain Operations</h2>
            
            <div className="space-y-6">
              {/* Source Chain */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">From</label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={sourceChain}
                    onChange={(e) => setSourceChain(e.target.value)}
                    className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  >
                    {supportedChains.map(chain => (
                      <option key={chain.id} value={chain.id}>
                        {chain.icon} {chain.name}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  >
                    <option value="ETH">ETH</option>
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                    <option value="WBTC">WBTC</option>
                  </select>
                </div>
              </div>

              {/* Bridge Arrow */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                  <ArrowRight className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              {/* Target Chain */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">To</label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={targetChain}
                    onChange={(e) => setTargetChain(e.target.value)}
                    className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  >
                    {supportedChains.filter(chain => chain.id !== sourceChain).map(chain => (
                      <option key={chain.id} value={chain.id}>
                        {chain.icon} {chain.name}
                      </option>
                    ))}
                  </select>
                  
                  <div className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 flex items-center">
                    <span>{token}</span>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="1.0"
                  step="0.01"
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Bridge Provider Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Bridge Provider</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {bridgeProviders.map(provider => (
                    <div
                      key={provider.name}
                      onClick={() => setSelectedProvider(provider.name.toLowerCase())}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        selectedProvider === provider.name.toLowerCase()
                          ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/30'
                          : 'bg-slate-700/40 border-slate-600/30 hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">{provider.name}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-slate-400">★</span>
                          <span className="text-sm text-slate-300">{provider.rating}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-slate-400">Fee:</span>
                          <div className="text-slate-200">{provider.fee}%</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Time:</span>
                          <div className="text-slate-200">{provider.time}</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Security:</span>
                          <div className="text-slate-200">{provider.security}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bridge Summary */}
              <div className="bg-slate-700/40 p-6 rounded-2xl border border-slate-600/30">
                <h3 className="text-lg font-semibold text-white mb-4">Transaction Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Amount:</span>
                    <span className="text-white">{amount} {token}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bridge Fee:</span>
                    <span className="text-white">${calculateTotalFee().toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Estimated Time:</span>
                    <span className="text-white">{getEstimatedTime()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Provider:</span>
                    <span className="text-white capitalize">{selectedProvider}</span>
                  </div>
                </div>
              </div>

              {/* Bridge Button */}
              <button
                onClick={handleBridge}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
              >
                Bridge {amount} {token} to {getChainData(targetChain)?.name}
              </button>
            </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Status Overview - Demo Mode */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Portfolio Value</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              $2,847,392.45
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Demo across 6 chains
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Supported Chains</p>
            <p className="text-3xl font-bold text-emerald-400">
              6
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Multi-chain enabled
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Bridge Status</p>
            <p className="text-3xl font-bold text-cyan-400">
              Active
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Demo mode bridges ready
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <Activity className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Success Rate</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              99.8%
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Reliable demo data
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Supported Chains */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Supported Networks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportedChains.map((chain, index) => (
            <motion.div 
              key={chain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{chain.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{chain.name}</h3>
                    <p className="text-slate-400 text-sm">Native: {chain.nativeToken}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gas Price:</span>
                    <span className="text-slate-200">${chain.gasPrice} Gwei</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bridge Fee:</span>
                    <span className="text-slate-200">{chain.bridgeFee}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bridge Statistics */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Bridge Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-6 rounded-2xl border border-emerald-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-emerald-300 font-medium">Total Volume</span>
              <Globe className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">$847.2M</div>
            <div className="text-emerald-400 text-sm">+12.5% (24h)</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-300 font-medium">Active Routes</span>
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white">156</div>
            <div className="text-blue-400 text-sm">Across 6 chains</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-300 font-medium">Avg Time</span>
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">3.2 min</div>
            <div className="text-purple-400 text-sm">Fastest: 1 min</div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-orange-300 font-medium">Success Rate</span>
              <CheckCircle className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white">99.8%</div>
            <div className="text-orange-400 text-sm">Reliable bridges</div>
          </div>
        </div>
      </motion.div>

      {/* Demo Notice */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Demo Mode Active</span>
          </div>
          <p className="text-slate-300 text-sm">
            This cross-chain bridge interface demonstrates the platform's capabilities. All bridge operations, 
            fees, and statistics are simulated. Experience seamless cross-chain transfers without risk.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
