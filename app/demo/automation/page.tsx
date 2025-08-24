'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Bot, 
  TrendingUp, 
  AlertTriangle,
  Shield,
  DollarSign,
  BarChart3,
  Clock,
  Activity,
  Zap,
  CheckCircle,
  XCircle,
  Settings
} from 'lucide-react'

const demoRules = [
  {
    id: '1',
    name: 'ETH DCA Strategy',
    type: 'DCA',
    status: 'active',
    frequency: 'Weekly',
    amount: '$500',
    totalInvested: '$2,500',
    performance: '+12.4%',
    lastExecution: '2024-01-20'
  },
  {
    id: '2',
    name: 'Portfolio Rebalancing',
    type: 'Rebalancing',
    status: 'active',
    frequency: 'Monthly',
    amount: 'Dynamic',
    totalInvested: '$15,000',
    performance: '+8.7%',
    lastExecution: '2024-01-15'
  },
  {
    id: '3',
    name: 'Stop Loss Monitor',
    type: 'Risk Management',
    status: 'paused',
    frequency: 'Real-time',
    amount: 'Variable',
    totalInvested: '$0',
    performance: 'N/A',
    lastExecution: 'Never'
  }
]

const demoStats = {
  totalRules: 3,
  activeRules: 2,
  totalInvested: 17500,
  totalProfit: 1850,
  successRate: 89.5
}

export default function AutomationDemoPage() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null)

  const handleRuleAction = (ruleId: string, action: string) => {
    alert(`Demo Mode: ${action} action for rule ${ruleId} would be executed in production.`)
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
            Automation Engine
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Demo Mode • AI-powered trading automation</p>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
            <Bot className="w-4 h-4" />
            Create Demo Rule
          </button>
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
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
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Rules</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              {demoStats.totalRules}
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
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Active Rules</p>
            <p className="text-3xl font-bold text-emerald-400">
              {demoStats.activeRules}
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
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Invested</p>
            <p className="text-3xl font-bold text-cyan-400">
              ${demoStats.totalInvested.toLocaleString()}
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
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Profit</p>
            <p className="text-3xl font-bold text-purple-400">
              ${demoStats.totalProfit.toLocaleString()}
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
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Success Rate</p>
            <p className="text-3xl font-bold text-orange-400">
              {demoStats.successRate}%
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Rules Table */}
      <motion.div 
        className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5" />
        
        <div className="relative p-6 border-b border-slate-700/30">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
            Automation Rules
          </h2>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/30">
                <th className="text-left p-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">Rule</th>
                <th className="text-left p-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">Type</th>
                <th className="text-left p-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="text-left p-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">Performance</th>
                <th className="text-left p-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/30">
              {demoRules.map((rule, index) => (
                <motion.tr 
                  key={rule.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="hover:bg-slate-800/20 transition-colors duration-200"
                >
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        rule.type === 'DCA' ? 'bg-gradient-to-br from-teal-500 to-emerald-500' :
                        rule.type === 'Rebalancing' ? 'bg-gradient-to-br from-cyan-500 to-teal-500' :
                        'bg-gradient-to-br from-purple-500 to-pink-500'
                      }`}>
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{rule.name}</p>
                        <p className="text-sm text-slate-400">{rule.frequency} • {rule.amount}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      rule.type === 'DCA' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' :
                      rule.type === 'Rebalancing' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {rule.type}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      {rule.status === 'active' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Active</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 font-medium">Paused</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="text-emerald-400 font-semibold">{rule.performance}</div>
                    <div className="text-sm text-slate-400">{rule.totalInvested} invested</div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleRuleAction(rule.id, rule.status === 'active' ? 'pause' : 'resume')}
                        className="p-2 bg-slate-700/40 hover:bg-slate-600/60 rounded-lg text-slate-300 hover:text-white transition-colors"
                      >
                        {rule.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => handleRuleAction(rule.id, 'settings')}
                        className="p-2 bg-slate-700/40 hover:bg-slate-600/60 rounded-lg text-slate-300 hover:text-white transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}