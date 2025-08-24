'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Shield, 
  Zap,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Activity,
  Timer,
  Plus,
  Play,
  Pause,
  Square
} from 'lucide-react'

const mockAdvancedTradingData = {
  status: {
    isActive: true,
    status: 'active'
  },
  activeStrategies: [
    {
      id: '1',
      name: 'Mean Reversion Strategy',
      description: 'Automated mean reversion based on RSI and Bollinger Bands',
      status: 'active',
      pnl: 8.45
    },
    {
      id: '2', 
      name: 'Momentum Trading',
      description: 'Trend following strategy using MACD and moving averages',
      status: 'paused',
      pnl: -2.15
    },
    {
      id: '3',
      name: 'Grid Trading Bot',
      description: 'Grid-based trading with dynamic range adjustment',
      status: 'active', 
      pnl: 15.23
    }
  ],
  metrics: {
    totalPnL: 21.53,
    sharpeRatio: 1.89,
    winRate: 73.5,
    totalTrades: 247,
    portfolioBeta: 1.12,
    correlation: 0.78,
    diversification: 68.4,
    maxPositionSize: 25.0,
    stopLoss: 5.0,
    takeProfit: 15.0,
    dailyReturn: 0.89,
    weeklyReturn: 6.21,
    monthlyReturn: 18.76,
    annualReturn: 225.12,
    averageTrade: 0.87,
    bestTrade: 12.45,
    worstTrade: -3.67,
    totalReturn: 45.67,
    maxDrawdown: 8.23,
    volatility: 18.45,
    valueAtRisk: 4.23,
    calmarRatio: 5.55
  }
}

export default function AdvancedTradingDemoPage() {
  const [selectedTab, setSelectedTab] = useState<'strategies' | 'backtesting' | 'risk' | 'performance'>('strategies')
  const [strategyName, setStrategyName] = useState('')
  const [strategyDescription, setStrategyDescription] = useState('')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30'
      case 'paused': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'stopped': return 'text-red-400 bg-red-400/20 border-red-400/30'
      default: return 'text-slate-400 bg-slate-400/20 border-slate-400/30'
    }
  }

  const formatNumber = (num: string | number) => {
    return Number(num).toLocaleString()
  }

  const formatPercentage = (num: string | number) => {
    return `${Number(num).toFixed(2)}%`
  }

  const handleCreateStrategy = () => {
    alert('Demo Mode: Strategy would be created in production.')
  }

  const handleExecuteStrategy = (strategyId: string) => {
    alert('Demo Mode: Strategy would be executed in production.')
  }

  const handlePauseStrategy = (strategyId: string) => {
    alert('Demo Mode: Strategy would be paused in production.')
  }

  const handleStopStrategy = (strategyId: string) => {
    alert('Demo Mode: Strategy would be stopped in production.')
  }

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
            Advanced Trading
          </h1>
          <p className="text-slate-400 text-lg">Demo Mode • Algorithmic strategies and risk management</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
            getStatusColor(mockAdvancedTradingData.status.status)
          }`}>
            {mockAdvancedTradingData.status.isActive ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{mockAdvancedTradingData.status.status}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold border-0 shadow-lg shadow-teal-500/25 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </motion.button>
        </div>
      </motion.div>

      {/* Status Overview */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
                <Target className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Active Strategies</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              {mockAdvancedTradingData.activeStrategies.filter(s => s.status === 'active').length}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Currently running
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
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total P&L</p>
            <p className="text-3xl font-bold text-emerald-400">
              {formatPercentage(mockAdvancedTradingData.metrics.totalPnL)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              All time performance
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
              <BarChart3 className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Sharpe Ratio</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
              {mockAdvancedTradingData.metrics.sharpeRatio.toFixed(2)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Risk-adjusted returns
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
                <Timer className="w-6 h-6 text-white" />
              </div>
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Win Rate</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              {formatPercentage(mockAdvancedTradingData.metrics.winRate)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Successful trades
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div 
        className="flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { id: 'strategies' as const, label: 'Strategies', icon: Target },
          { id: 'backtesting' as const, label: 'Backtesting', icon: BarChart3 },
          { id: 'risk' as const, label: 'Risk Management', icon: Shield },
          { id: 'performance' as const, label: 'Performance', icon: TrendingUp }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              selectedTab === tab.id
                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {selectedTab === 'strategies' && (
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
            
            <div className="relative p-6 border-b border-slate-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                      Trading Strategies
                    </h2>
                    <p className="text-slate-400 text-sm">Manage and execute algorithmic strategies</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Strategy
                </motion.button>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Create Strategy</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Strategy Name</label>
                      <input
                        type="text"
                        value={strategyName}
                        onChange={(e) => setStrategyName(e.target.value)}
                        className="w-full p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        placeholder="Mean Reversion Strategy"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                      <textarea
                        value={strategyDescription}
                        onChange={(e) => setStrategyDescription(e.target.value)}
                        className="w-full p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        rows={3}
                        placeholder="Describe your strategy..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCreateStrategy}
                      disabled={!strategyName || !strategyDescription}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Plus className="w-4 h-4" />
                      Create Strategy
                    </motion.button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Active Strategies</h3>
                  <div className="space-y-3">
                    {mockAdvancedTradingData.activeStrategies.map((strategy, index) => (
                      <div key={index} className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{strategy.name}</h4>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleExecuteStrategy(strategy.id)}
                              className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30"
                            >
                              <Play className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handlePauseStrategy(strategy.id)}
                              className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
                            >
                              <Pause className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleStopStrategy(strategy.id)}
                              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                            >
                              <Square className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                        <p className="text-sm text-slate-400">{strategy.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                          <span>Status: {strategy.status}</span>
                          <span className={strategy.pnl > 0 ? 'text-emerald-400' : 'text-red-400'}>
                            P&L: {formatPercentage(strategy.pnl)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'backtesting' && (
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl" />
            
            <div className="relative p-6 border-b border-slate-700/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                    Backtesting Results
                  </h2>
                  <p className="text-slate-400 text-sm">Historical performance analysis</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Return</span>
                      <span className="text-emerald-400">{formatPercentage(mockAdvancedTradingData.metrics.totalReturn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Max Drawdown</span>
                      <span className="text-red-400">-{formatPercentage(mockAdvancedTradingData.metrics.maxDrawdown)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Sharpe Ratio</span>
                      <span className="text-cyan-400">{mockAdvancedTradingData.metrics.sharpeRatio.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Win Rate</span>
                      <span className="text-purple-400">{formatPercentage(mockAdvancedTradingData.metrics.winRate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Risk Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Volatility</span>
                      <span className="text-yellow-400">{formatPercentage(mockAdvancedTradingData.metrics.volatility)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">VaR (95%)</span>
                      <span className="text-orange-400">-{formatPercentage(mockAdvancedTradingData.metrics.valueAtRisk)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Calmar Ratio</span>
                      <span className="text-green-400">{mockAdvancedTradingData.metrics.calmarRatio.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'risk' && (
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5 rounded-3xl" />
            
            <div className="relative p-6 border-b border-slate-700/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                    Risk Management
                  </h2>
                  <p className="text-slate-400 text-sm">Portfolio risk monitoring and controls</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Risk Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Portfolio Beta</span>
                      <span className="text-blue-400">{mockAdvancedTradingData.metrics.portfolioBeta.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Correlation</span>
                      <span className="text-green-400">{mockAdvancedTradingData.metrics.correlation.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Diversification</span>
                      <span className="text-purple-400">{formatPercentage(mockAdvancedTradingData.metrics.diversification)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Position Limits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Max Position Size</span>
                      <span className="text-yellow-400">{formatPercentage(mockAdvancedTradingData.metrics.maxPositionSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Stop Loss</span>
                      <span className="text-red-400">-{formatPercentage(mockAdvancedTradingData.metrics.stopLoss)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Take Profit</span>
                      <span className="text-emerald-400">{formatPercentage(mockAdvancedTradingData.metrics.takeProfit)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'performance' && (
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl" />
            
            <div className="relative p-6 border-b border-slate-700/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                    Performance Analytics
                  </h2>
                  <p className="text-slate-400 text-sm">Comprehensive performance tracking</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Returns Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Daily Return</span>
                      <span className="text-emerald-400">{formatPercentage(mockAdvancedTradingData.metrics.dailyReturn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Weekly Return</span>
                      <span className="text-blue-400">{formatPercentage(mockAdvancedTradingData.metrics.weeklyReturn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Monthly Return</span>
                      <span className="text-purple-400">{formatPercentage(mockAdvancedTradingData.metrics.monthlyReturn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Annual Return</span>
                      <span className="text-cyan-400">{formatPercentage(mockAdvancedTradingData.metrics.annualReturn)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Trading Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Trades</span>
                      <span className="text-white">{mockAdvancedTradingData.metrics.totalTrades}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Average Trade</span>
                      <span className="text-emerald-400">{formatPercentage(mockAdvancedTradingData.metrics.averageTrade)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Best Trade</span>
                      <span className="text-green-400">{formatPercentage(mockAdvancedTradingData.metrics.bestTrade)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Worst Trade</span>
                      <span className="text-red-400">-{formatPercentage(Math.abs(mockAdvancedTradingData.metrics.worstTrade))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}