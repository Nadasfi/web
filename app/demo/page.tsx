'use client'

import { motion } from 'framer-motion'
import { 
  Wallet, 
  TrendingUp, 
  Shield, 
  Bot, 
  DollarSign, 
  Activity, 
  Zap, 
  Globe, 
  ArrowUpRight, 
  ArrowDownRight,
  Users,
  Settings,
  BarChart3,
  Bell
} from 'lucide-react'

export default function DemoPage() {
  const mockPortfolio = {
    total_equity: 2437892,
    unrealized_pnl: 12847,
    margin_ratio: 0.32,
    buying_power: 1850000
  }

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
          Welcome to Nadas Demo
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Experience our AI-powered DeFi automation dashboard</p>
        
        {/* Demo Status Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-500">
            Demo Mode Active - No real trading
          </span>
        </div>
        
        {/* Demo Mode Notice */}
        <motion.div 
          className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium">Interactive Demo</span>
              <span className="text-slate-400 text-sm">
                All data simulated - No wallet required
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Portfolio Overview */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Portfolio Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-sm font-medium text-slate-400 mb-2">Total Equity</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                  ${mockPortfolio.total_equity.toLocaleString()}
                </p>
                <p className="text-xs text-emerald-400 mt-2">
                  🟢 Demo Data
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
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm font-medium text-slate-400 mb-2">Unrealized PnL</p>
                <p className="text-3xl font-bold text-emerald-400">
                  ${mockPortfolio.unrealized_pnl.toLocaleString()}
                </p>
                <p className="text-xs text-emerald-400 mt-2">
                  Demo positions
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
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-sm font-medium text-slate-400 mb-2">Margin Ratio</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                  {(mockPortfolio.margin_ratio * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-cyan-400 mt-2">
                  Risk level: {mockPortfolio.margin_ratio > 0.8 ? 'High' : mockPortfolio.margin_ratio > 0.5 ? 'Medium' : 'Low'}
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
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-sm font-medium text-slate-400 mb-2">Buying Power</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                  ${mockPortfolio.buying_power.toLocaleString()}
                </p>
                <p className="text-xs text-purple-400 mt-2">
                  Demo balances
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/demo/cross-chain'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cross-Chain Bridge</h3>
                <p className="text-slate-400 text-sm">Bridge assets between chains</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/demo/ai-chat'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Assistant</h3>
                <p className="text-slate-400 text-sm">AI-powered strategies</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/demo/trading'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5 rounded-3xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Trading</h3>
                <p className="text-slate-400 text-sm">Advanced trading tools</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/demo/automation'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Automation</h3>
                <p className="text-slate-400 text-sm">DCA & trading bots</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
