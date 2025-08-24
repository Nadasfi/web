'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Coins, 
  TrendingUp, 
  Layers, 
  Rocket,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  DollarSign,
  BarChart3,
  Users,
  Timer,
  ArrowUpDown,
  Plus,
  Activity,
  Beaker
} from 'lucide-react'

const demoTokens = [
  {
    symbol: 'WHYPE',
    name: 'Hyperliquid Ecosystem Token',
    price: 0.245,
    change24h: 15.67,
    volume24h: 1250000,
    liquidity: 890000,
    holders: 1250
  },
  {
    symbol: 'PURR',
    name: 'Hypurr Finance',
    price: 0.089,
    change24h: -3.45,
    volume24h: 450000,
    liquidity: 320000,
    holders: 980
  },
  {
    symbol: 'HYPE',
    name: 'Hyperliquid Native',
    price: 1.45,
    change24h: 8.92,
    volume24h: 2100000,
    liquidity: 1500000,
    holders: 2100
  }
]

const demoStats = {
  totalVolume24h: 4800000,
  totalLiquidity: 15600000,
  activeTokens: 24,
  totalHolders: 8900,
  launchedToday: 3,
  successfulLaunches: 89
}

export default function LiquidLabsDemoPage() {
  const [selectedTab, setSelectedTab] = useState<'swap' | 'launch' | 'stats'>('swap')
  const [swapTokenIn, setSwapTokenIn] = useState('WHYPE')
  const [swapTokenOut, setSwapTokenOut] = useState('USDT')
  const [swapAmount, setSwapAmount] = useState('1.0')
  
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')

  const handleSwap = () => {
    alert(`Demo Mode: Swap ${swapAmount} ${swapTokenIn} for ${swapTokenOut} would be executed in production.`)
  }

  const handleLaunchToken = () => {
    alert(`Demo Mode: Token launch for ${tokenSymbol} (${tokenName}) would be processed in production.`)
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
            Liquid Labs
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Demo Mode • Token launching and DEX aggregation</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
            <CheckCircle className="w-4 h-4" />
            <span>Demo Active</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
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
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">24h Volume</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              ${(demoStats.totalVolume24h / 1000000).toFixed(1)}M
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
                <Layers className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Liquidity</p>
            <p className="text-2xl font-bold text-emerald-400">
              ${(demoStats.totalLiquidity / 1000000).toFixed(1)}M
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
                <Coins className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Active Tokens</p>
            <p className="text-2xl font-bold text-cyan-400">
              {demoStats.activeTokens}
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
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Holders</p>
            <p className="text-2xl font-bold text-purple-400">
              {demoStats.totalHolders.toLocaleString()}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Launched Today</p>
            <p className="text-2xl font-bold text-orange-400">
              {demoStats.launchedToday}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Success Rate</p>
            <p className="text-2xl font-bold text-green-400">
              {demoStats.successfulLaunches}%
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        className="flex items-center gap-2 bg-slate-800/60 p-1 rounded-xl w-fit"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[
          { id: 'swap', name: 'DEX Swap', icon: ArrowUpDown },
          { id: 'launch', name: 'Token Launch', icon: Rocket },
          { id: 'stats', name: 'Analytics', icon: BarChart3 }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedTab === tab.id
                ? 'bg-slate-700 text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div 
        className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
        <div className="relative p-8">
          
          {/* Swap Tab */}
          {selectedTab === 'swap' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                DEX Aggregator
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">From</label>
                    <div className="grid grid-cols-2 gap-4">
                      <select 
                        value={swapTokenIn}
                        onChange={(e) => setSwapTokenIn(e.target.value)}
                        className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      >
                        <option value="WHYPE">WHYPE</option>
                        <option value="PURR">PURR</option>
                        <option value="HYPE">HYPE</option>
                      </select>
                      <input
                        type="number"
                        value={swapAmount}
                        onChange={(e) => setSwapAmount(e.target.value)}
                        placeholder="Amount"
                        className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center border border-teal-500/20">
                      <ArrowUpDown className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">To</label>
                    <div className="grid grid-cols-2 gap-4">
                      <select 
                        value={swapTokenOut}
                        onChange={(e) => setSwapTokenOut(e.target.value)}
                        className="px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      >
                        <option value="USDT">USDT</option>
                        <option value="USDC">USDC</option>
                        <option value="ETH">ETH</option>
                      </select>
                      <input
                        type="text"
                        value="~0.245"
                        readOnly
                        className="px-4 py-3 bg-slate-700/40 border border-slate-600/30 rounded-xl text-slate-400"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSwap}
                    className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
                  >
                    Demo Swap
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Swap Details</h3>
                  <div className="space-y-3 p-4 bg-slate-700/40 rounded-xl border border-slate-600/30">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Rate:</span>
                      <span className="text-white">1 {swapTokenIn} = 0.245 {swapTokenOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Price Impact:</span>
                      <span className="text-emerald-400">0.12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Fees:</span>
                      <span className="text-white">0.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Route:</span>
                      <span className="text-white">Direct</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Launch Tab */}
          {selectedTab === 'launch' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                Token Launcher
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Token Name</label>
                    <input
                      type="text"
                      value={tokenName}
                      onChange={(e) => setTokenName(e.target.value)}
                      placeholder="e.g., My Awesome Token"
                      className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Token Symbol</label>
                    <input
                      type="text"
                      value={tokenSymbol}
                      onChange={(e) => setTokenSymbol(e.target.value)}
                      placeholder="e.g., MAT"
                      className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Initial Supply</label>
                    <input
                      type="number"
                      placeholder="1000000"
                      className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    />
                  </div>

                  <button
                    onClick={handleLaunchToken}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-purple-500/25"
                  >
                    <Rocket className="w-5 h-5 inline mr-2" />
                    Demo Launch Token
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Launch Details</h3>
                  <div className="space-y-3 p-4 bg-slate-700/40 rounded-xl border border-slate-600/30">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Launch Fee:</span>
                      <span className="text-white">0.1 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bonding Curve:</span>
                      <span className="text-emerald-400">Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Initial Liquidity:</span>
                      <span className="text-white">Auto-generated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Success Rate:</span>
                      <span className="text-green-400">{demoStats.successfulLaunches}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats Tab */}
          {selectedTab === 'stats' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                Token Analytics
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/30">
                      <th className="text-left p-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Token</th>
                      <th className="text-left p-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Price</th>
                      <th className="text-left p-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">24h Change</th>
                      <th className="text-left p-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Volume</th>
                      <th className="text-left p-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Holders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/30">
                    {demoTokens.map((token, index) => (
                      <tr key={token.symbol} className="hover:bg-slate-800/20 transition-colors duration-200">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                              <Beaker className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-white">{token.symbol}</p>
                              <p className="text-sm text-slate-400">{token.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-white">${token.price.toFixed(3)}</p>
                        </td>
                        <td className="p-4">
                          <div className={`flex items-center space-x-1 ${token.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {token.change24h >= 0 ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingUp className="w-4 h-4 rotate-180" />
                            )}
                            <span className="font-semibold">{Math.abs(token.change24h).toFixed(2)}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-slate-300">${(token.volume24h / 1000).toFixed(0)}K</p>
                        </td>
                        <td className="p-4">
                          <p className="text-slate-300">{token.holders.toLocaleString()}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}