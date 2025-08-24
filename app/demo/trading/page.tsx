"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Activity, Shield, Zap } from 'lucide-react';

export default function TradingDemoPage() {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [size, setSize] = useState('0.1');
  const [price, setPrice] = useState('');

  const currentPrice = 3247.85;
  const position = {
    symbol: 'ETH',
    side: 'long' as const,
    size: 0.5,
    entryPrice: 3200.00,
    unrealizedPnl: 23.93
  };

  const handlePlaceOrder = () => {
    // Demo mode - just show success message
    alert('Demo Mode: Order would be placed in production. This is a simulation.');
  };

  const calculateNotional = () => {
    const orderSize = parseFloat(size) || 0;
    const orderPrice = parseFloat(price) || currentPrice || 0;
    return orderSize * orderPrice;
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
            Hyperliquid Trading
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Demo Mode • Advanced trading interface</p>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 px-6 py-3 rounded-xl font-semibold">
            Demo Trading
          </button>
        </motion.div>
      </motion.div>

      {/* Connection Status */}
      <motion.div 
        className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5" />
        <div className="relative p-6">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse"></div>
            <div>
              <div className="font-semibold text-white">
                Demo Mode Active
              </div>
              <div className="text-sm text-slate-400">
                All trading data is simulated
              </div>
            </div>
            <div className="ml-auto">
              <div className="text-purple-400 font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Safe Demo
              </div>
              <div className="text-xs text-slate-400">No real trading</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Market Data */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-emerald-400 text-sm font-medium">+2.34%</span>
              </div>
              <p className="text-sm font-medium text-slate-400 mb-2">Current Price</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                ${currentPrice.toFixed(2)}
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
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 text-sm font-medium">+12.5%</span>
              </div>
              <p className="text-sm font-medium text-slate-400 mb-2">24h Volume</p>
              <p className="text-3xl font-bold text-cyan-400">
                $847.2M
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
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-400 text-sm font-medium">+5.2%</span>
              </div>
              <p className="text-sm font-medium text-slate-400 mb-2">Open Interest</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                $2.1B
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Position Overview */}
      {position && (
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Current Position</h2>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-blue-300 mb-2">Symbol</div>
                <div className="text-xl font-bold text-white">{position.symbol}</div>
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-2">Side</div>
                <div className="text-xl font-bold text-emerald-400">{position.side.toUpperCase()}</div>
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-2">Size</div>
                <div className="text-xl font-bold text-white">{position.size} {position.symbol}</div>
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-2">Unrealized PnL</div>
                <div className="text-xl font-bold text-emerald-400">${position.unrealizedPnl.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Trading Interface */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Place Order</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            {/* Order Type Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Order Type</label>
              <div className="flex space-x-1 bg-slate-700/60 p-1 rounded-xl">
                <button
                  onClick={() => setOrderType('market')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    orderType === 'market'
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  Market
                </button>
                <button
                  onClick={() => setOrderType('limit')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    orderType === 'limit'
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  Limit
                </button>
              </div>
            </div>

            {/* Side Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Side</label>
              <div className="flex space-x-1 bg-slate-700/60 p-1 rounded-xl">
                <button
                  onClick={() => setSide('buy')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    side === 'buy'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setSide('sell')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    side === 'sell'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  Sell
                </button>
              </div>
            </div>

            {/* Size Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Size
              </label>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="0.1"
                step="0.001"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50"
              />
            </div>

            {/* Price Input for Limit Orders */}
            {orderType === 'limit' && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={currentPrice.toString()}
                  step="0.01"
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50"
                />
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400">Order Value:</span>
                <span className="font-semibold text-slate-200">${calculateNotional().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-slate-400">Order Type:</span>
                <span className="font-semibold text-slate-200 capitalize">{orderType}</span>
              </div>
              {orderType === 'market' && (
                <div className="text-orange-400 text-xs bg-orange-500/10 p-2 rounded-lg border border-orange-500/20">
                  Market orders execute at current market price
                </div>
              )}
              {orderType === 'limit' && (
                <div className="text-blue-400 text-xs bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                  Limit orders wait for your target price
                </div>
              )}
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className={`w-full py-4 text-lg font-semibold transition-all duration-200 ${
                side === 'buy' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25' 
                  : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg shadow-red-500/25'
              } text-white border-0 rounded-xl`}
            >
              {side.toUpperCase()} {position.symbol}
            </button>
          </div>

          {/* Order Book & Recent Trades */}
          <div className="space-y-6">
            {/* Order Book */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Order Book</h3>
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 overflow-hidden">
                <div className="grid grid-cols-3 text-xs text-slate-400 p-3 border-b border-slate-700/30">
                  <span>Price</span>
                  <span>Size</span>
                  <span>Total</span>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="grid grid-cols-3 text-sm p-2 hover:bg-slate-700/30 transition-colors">
                      <span className={i < 5 ? 'text-red-400' : 'text-emerald-400'}>
                        ${(currentPrice + (i < 5 ? -i * 0.5 : i * 0.5)).toFixed(2)}
                      </span>
                      <span className="text-slate-300">{(Math.random() * 2).toFixed(3)}</span>
                      <span className="text-slate-400">{(Math.random() * 5000).toFixed(0)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Trades */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Recent Trades</h3>
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 overflow-hidden">
                <div className="grid grid-cols-3 text-xs text-slate-400 p-3 border-b border-slate-700/30">
                  <span>Price</span>
                  <span>Size</span>
                  <span>Time</span>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="grid grid-cols-3 text-sm p-2 hover:bg-slate-700/30 transition-colors">
                      <span className={Math.random() > 0.5 ? 'text-emerald-400' : 'text-red-400'}>
                        ${(currentPrice + (Math.random() - 0.5) * 10).toFixed(2)}
                      </span>
                      <span className="text-slate-300">{(Math.random() * 1.5).toFixed(3)}</span>
                      <span className="text-slate-400">{`${Math.floor(Math.random() * 60)}s ago`}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            This is a demonstration of the trading interface. All orders, prices, and data are simulated. 
            No real transactions will occur. Experience the full trading functionality without risk.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
