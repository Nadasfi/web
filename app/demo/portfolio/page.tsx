"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, Activity, Shield, BarChart3, PieChart, Clock, DollarSign } from 'lucide-react';

const portfolioData = {
  totalValue: 2437892.45,
  dailyChange: 12.34,
  weeklyChange: 8.76,
  monthlyChange: 23.45,
  assets: [
    { symbol: 'ETH', name: 'Ethereum', amount: 45.2, value: 146789.45, change: 5.67, allocation: 6.0 },
    { symbol: 'BTC', name: 'Bitcoin', amount: 2.1, value: 98765.32, change: -2.34, allocation: 4.1 },
    { symbol: 'USDC', name: 'USD Coin', amount: 500000, value: 500000, change: 0.00, allocation: 20.5 },
    { symbol: 'SOL', name: 'Solana', amount: 1250, value: 234567.89, change: 15.78, allocation: 9.6 },
    { symbol: 'MATIC', name: 'Polygon', amount: 50000, value: 45678.90, change: 8.92, allocation: 1.9 },
    { symbol: 'LINK', name: 'Chainlink', amount: 2500, value: 34567.89, change: -1.23, allocation: 1.4 },
    { symbol: 'UNI', name: 'Uniswap', amount: 1500, value: 23456.78, change: 12.45, allocation: 1.0 },
    { symbol: 'AAVE', name: 'Aave', amount: 800, value: 12345.67, change: 6.78, allocation: 0.5 }
  ],
  positions: [
    { symbol: 'ETH', side: 'long', size: 45.2, entryPrice: 3200, currentPrice: 3247.85, pnl: 2167.42, leverage: 2.0 },
    { symbol: 'BTC', side: 'short', size: 1.5, entryPrice: 47000, currentPrice: 47058.25, pnl: -87.38, leverage: 1.5 },
    { symbol: 'SOL', side: 'long', size: 800, entryPrice: 180, currentPrice: 187.65, pnl: 6120.00, leverage: 3.0 }
  ],
  performance: {
    totalPnl: 45678.90,
    winRate: 68.5,
    sharpeRatio: 1.85,
    maxDrawdown: -8.45,
    totalTrades: 156,
    profitableTrades: 107
  }
};

export default function PortfolioDemoPage() {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1D');

  const formatCurrency = (value: number) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);

  const formatPercentage = (value: number) => `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
          Portfolio Overview
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Monitor your assets and performance</p>
        
        {/* Demo Mode Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          <span className="text-sm text-purple-400">
            Demo Mode - All data is simulated
          </span>
        </div>
      </motion.div>

      {/* Portfolio Summary Cards */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-6 rounded-2xl border border-emerald-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-emerald-300 font-medium">Total Portfolio</span>
              <Wallet className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">{formatCurrency(portfolioData.totalValue)}</div>
            <div className="text-emerald-400 text-sm">{formatPercentage(portfolioData.dailyChange)} (24h)</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-300 font-medium">Total PnL</span>
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white">{formatCurrency(portfolioData.performance.totalPnl)}</div>
            <div className="text-blue-400 text-sm">{formatPercentage(portfolioData.performance.totalPnl / portfolioData.totalValue * 100)}</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-300 font-medium">Win Rate</span>
              <BarChart3 className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">{portfolioData.performance.winRate}%</div>
            <div className="text-purple-400 text-sm">{portfolioData.performance.profitableTrades}/{portfolioData.performance.totalTrades} trades</div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-orange-300 font-medium">Sharpe Ratio</span>
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white">{portfolioData.performance.sharpeRatio}</div>
            <div className="text-orange-400 text-sm">Risk-adjusted return</div>
          </div>
        </div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Portfolio Performance</h2>
            <div className="flex space-x-1 bg-slate-700/60 p-1 rounded-xl">
              {(['1D', '1W', '1M', '3M', '1Y'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    timeframe === tf
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mock Chart */}
          <div className="h-64 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-xl border border-slate-600/30 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">Interactive chart would be displayed here</p>
              <p className="text-slate-500 text-sm">Showing {timeframe} performance data</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Asset Allocation */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Asset Allocation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Distribution</h3>
            <div className="h-64 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-xl border border-slate-600/30 flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400">Interactive pie chart would be displayed here</p>
                <p className="text-slate-500 text-sm">Showing asset allocation percentages</p>
              </div>
            </div>
          </div>
          
          {/* Asset List */}
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Assets</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {portfolioData.assets.map((asset, index) => (
                <div key={asset.symbol} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-lg flex items-center justify-center border border-cyan-500/20">
                      <span className="text-xs font-bold text-cyan-300">{asset.symbol}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{asset.name}</div>
                      <div className="text-sm text-slate-400">{asset.amount.toLocaleString()} {asset.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{formatCurrency(asset.value)}</div>
                    <div className={`text-sm ${asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {formatPercentage(asset.change)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Active Positions */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Active Positions</h2>
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 overflow-hidden">
          <div className="grid grid-cols-7 text-xs text-slate-400 p-4 border-b border-slate-700/30 font-medium">
            <span>Asset</span>
            <span>Side</span>
            <span>Size</span>
            <span>Entry Price</span>
            <span>Current Price</span>
            <span>PnL</span>
            <span>Leverage</span>
          </div>
          <div className="divide-y divide-slate-700/30">
            {portfolioData.positions.map((position, index) => (
              <div key={index} className="grid grid-cols-7 p-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-lg flex items-center justify-center border border-cyan-500/20">
                    <span className="text-xs font-bold text-cyan-300">{position.symbol}</span>
                  </div>
                  <span className="font-medium text-white">{position.symbol}</span>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    position.side === 'long' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {position.side.toUpperCase()}
                  </span>
                </div>
                <span className="text-white">{position.size}</span>
                <span className="text-slate-300">${position.entryPrice.toLocaleString()}</span>
                <span className="text-slate-300">${position.currentPrice.toLocaleString()}</span>
                <span className={`font-medium ${position.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {formatCurrency(position.pnl)}
                </span>
                <span className="text-slate-300">{position.leverage}x</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Total Trades</div>
                <div className="text-xl font-bold text-white">{portfolioData.performance.totalTrades}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Activity className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Profitable</div>
                <div className="text-xl font-bold text-white">{portfolioData.performance.profitableTrades}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Max Drawdown</div>
                <div className="text-xl font-bold text-red-400">{portfolioData.performance.maxDrawdown}%</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                <DollarSign className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Avg Return</div>
                <div className="text-xl font-bold text-white">+2.34%</div>
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
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Demo Mode Active</span>
          </div>
          <p className="text-slate-300 text-sm">
            This portfolio overview demonstrates the platform's capabilities. All data, charts, and metrics are simulated. 
            Experience comprehensive portfolio management without connecting a wallet.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
