'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Activity,
  Plus,
  Play,
  Pause,
  Square,
  Brain,
  TestTube,
  LineChart
} from 'lucide-react'

const mockSimulationData = {
  status: {
    isRunning: false,
    status: 'ready'
  },
  activeScenarios: [
    {
      id: '1',
      name: 'Market Crash Simulation',
      description: 'Testing portfolio performance during extreme market downturn',
      status: 'completed',
      duration: 30
    },
    {
      id: '2', 
      name: 'Bull Market Scenario',
      description: 'Portfolio optimization during sustained market growth',
      status: 'running',
      duration: 60
    },
    {
      id: '3',
      name: 'High Volatility Test',
      description: 'Risk management under extreme market volatility conditions',
      status: 'paused',
      duration: 45
    }
  ],
  metrics: {
    completedTests: 127,
    overallRiskScore: 7.3,
    successRate: 84.2,
    totalReturn: 32.45,
    maxDrawdown: 12.8,
    sharpeRatio: 1.67,
    totalTests: 150,
    passedTests: 126,
    failedTests: 24,
    averageDuration: 45,
    marketCrash: -42.5,
    interestRateSpike: -18.7,
    currencyCrisis: -23.1,
    liquidityCrisis: -31.2,
    valueAtRisk99: 8.9,
    expectedShortfall: 12.3,
    stressTestScore: 6.8,
    volatility: 22.4,
    beta: 1.15,
    correlation: 0.73,
    sentiment: 'Bullish',
    trendStrength: 76.5,
    volatilityForecast: 18.3
  }
}

export default function SimulationDemoPage() {
  const [selectedTab, setSelectedTab] = useState<'scenarios' | 'results' | 'stress-testing' | 'analysis'>('scenarios')
  const [scenarioName, setScenarioName] = useState('')
  const [scenarioDescription, setScenarioDescription] = useState('')
  const [simulationDuration, setSimulationDuration] = useState(30)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30'
      case 'paused': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'completed': return 'text-blue-400 bg-blue-400/20 border-blue-400/30'
      case 'failed': return 'text-red-400 bg-red-400/20 border-red-400/30'
      default: return 'text-slate-400 bg-slate-400/20 border-slate-400/30'
    }
  }

  const formatPercentage = (num: string | number) => {
    return `${Number(num).toFixed(2)}%`
  }

  const handleCreateScenario = () => {
    alert('Demo Mode: Scenario would be created in production.')
  }

  const handleRunSimulation = (scenarioId: string) => {
    alert('Demo Mode: Simulation would be executed in production.')
  }

  const handlePauseSimulation = (scenarioId: string) => {
    alert('Demo Mode: Simulation would be paused in production.')
  }

  const handleStopSimulation = (scenarioId: string) => {
    alert('Demo Mode: Simulation would be stopped in production.')
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
            Portfolio Simulation
          </h1>
          <p className="text-slate-400 text-lg">Demo Mode • Advanced scenario testing and risk analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
            getStatusColor(mockSimulationData.status.status)
          }`}>
            {mockSimulationData.status.isRunning ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{mockSimulationData.status.status}</span>
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
                <Brain className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Active Scenarios</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              {mockSimulationData.activeScenarios.filter(s => s.status === 'running').length}
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
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Completed Tests</p>
            <p className="text-3xl font-bold text-emerald-400">
              {mockSimulationData.metrics.completedTests}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Successfully executed
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
            <p className="text-sm font-medium text-slate-400 mb-2">Risk Score</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
              {mockSimulationData.metrics.overallRiskScore.toFixed(1)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Portfolio risk level
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
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Success Rate</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              {formatPercentage(mockSimulationData.metrics.successRate)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Passed scenarios
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
          { id: 'scenarios' as const, label: 'Scenarios', icon: Brain },
          { id: 'results' as const, label: 'Results', icon: BarChart3 },
          { id: 'stress-testing' as const, label: 'Stress Testing', icon: TestTube },
          { id: 'analysis' as const, label: 'Analysis', icon: LineChart }
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
        {selectedTab === 'scenarios' && (
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
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                      Simulation Scenarios
                    </h2>
                    <p className="text-slate-400 text-sm">Create and manage testing scenarios</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Scenario
                </motion.button>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Create Scenario</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Scenario Name</label>
                      <input
                        type="text"
                        value={scenarioName}
                        onChange={(e) => setScenarioName(e.target.value)}
                        className="w-full p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        placeholder="Market Crash Scenario"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                      <textarea
                        value={scenarioDescription}
                        onChange={(e) => setScenarioDescription(e.target.value)}
                        className="w-full p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        rows={3}
                        placeholder="Describe the scenario..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Duration (days)</label>
                      <input
                        type="number"
                        value={simulationDuration}
                        onChange={(e) => setSimulationDuration(Number(e.target.value))}
                        className="w-full p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        min="1"
                        max="365"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCreateScenario}
                      disabled={!scenarioName || !scenarioDescription}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Plus className="w-4 h-4" />
                      Create Scenario
                    </motion.button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Active Scenarios</h3>
                  <div className="space-y-3">
                    {mockSimulationData.activeScenarios.map((scenario, index) => (
                      <div key={index} className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{scenario.name}</h4>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleRunSimulation(scenario.id)}
                              className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30"
                            >
                              <Play className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handlePauseSimulation(scenario.id)}
                              className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
                            >
                              <Pause className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleStopSimulation(scenario.id)}
                              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                            >
                              <Square className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                        <p className="text-sm text-slate-400">{scenario.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                          <span>Status: {scenario.status}</span>
                          <span>Duration: {scenario.duration} days</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'results' && (
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
                    Simulation Results
                  </h2>
                  <p className="text-slate-400 text-sm">Comprehensive test results and analysis</p>
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
                      <span className="text-emerald-400">{formatPercentage(mockSimulationData.metrics.totalReturn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Max Drawdown</span>
                      <span className="text-red-400">-{formatPercentage(mockSimulationData.metrics.maxDrawdown)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Sharpe Ratio</span>
                      <span className="text-cyan-400">{mockSimulationData.metrics.sharpeRatio.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Success Rate</span>
                      <span className="text-purple-400">{formatPercentage(mockSimulationData.metrics.successRate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Test Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Tests</span>
                      <span className="text-white">{mockSimulationData.metrics.totalTests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Passed Tests</span>
                      <span className="text-emerald-400">{mockSimulationData.metrics.passedTests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Failed Tests</span>
                      <span className="text-red-400">{mockSimulationData.metrics.failedTests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Average Duration</span>
                      <span className="text-blue-400">{mockSimulationData.metrics.averageDuration}s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'stress-testing' && (
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
                  <TestTube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                    Stress Testing
                  </h2>
                  <p className="text-slate-400 text-sm">Extreme market condition testing</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Stress Scenarios</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Market Crash (-50%)</span>
                      <span className="text-red-400">{formatPercentage(Math.abs(mockSimulationData.metrics.marketCrash))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Interest Rate Spike</span>
                      <span className="text-orange-400">-{formatPercentage(mockSimulationData.metrics.interestRateSpike)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Currency Crisis</span>
                      <span className="text-yellow-400">-{formatPercentage(mockSimulationData.metrics.currencyCrisis)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Liquidity Crisis</span>
                      <span className="text-purple-400">-{formatPercentage(mockSimulationData.metrics.liquidityCrisis)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Risk Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">VaR (99%)</span>
                      <span className="text-red-400">-{formatPercentage(mockSimulationData.metrics.valueAtRisk99)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Expected Shortfall</span>
                      <span className="text-orange-400">-{formatPercentage(mockSimulationData.metrics.expectedShortfall)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Stress Test Score</span>
                      <span className="text-yellow-400">{mockSimulationData.metrics.stressTestScore.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'analysis' && (
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
                  <LineChart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                    Risk Analysis
                  </h2>
                  <p className="text-slate-400 text-sm">Comprehensive risk assessment</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Portfolio Risk</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Overall Risk Score</span>
                      <span className="text-red-400">{mockSimulationData.metrics.overallRiskScore.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Volatility</span>
                      <span className="text-orange-400">{formatPercentage(mockSimulationData.metrics.volatility)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Beta</span>
                      <span className="text-yellow-400">{mockSimulationData.metrics.beta.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Correlation</span>
                      <span className="text-blue-400">{mockSimulationData.metrics.correlation.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Market Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Market Sentiment</span>
                      <span className="text-emerald-400">{mockSimulationData.metrics.sentiment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Trend Strength</span>
                      <span className="text-cyan-400">{formatPercentage(mockSimulationData.metrics.trendStrength)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Volatility Forecast</span>
                      <span className="text-purple-400">{formatPercentage(mockSimulationData.metrics.volatilityForecast)}</span>
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