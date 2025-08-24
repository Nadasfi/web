"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, AlertTriangle, TrendingUp, Wallet, Settings, Zap, DollarSign, Activity, Shield } from 'lucide-react';

// Demo data
const demoSummary = {
  activeAccounts: 3,
  totalAccounts: 3,
  totalAllocated: 8500,
  totalUsed: 6234.50
};

const demoWallets = [
  {
    id: '1',
    name: 'DCA Bot',
    address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    balance_usd: 2345.67,
    max_funding_usd: 3000,
    is_active: true,
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: 'Trading Bot',
    address: '0x8ba1f109551bA432bdf5c3c92bEa4eCef60214aE',
    balance_usd: 2898.83,
    max_funding_usd: 3000,
    is_active: true,
    created_at: '2024-01-20'
  },
  {
    id: '3',
    name: 'Arbitrage Bot',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    balance_usd: 990.00,
    max_funding_usd: 2500,
    is_active: false,
    created_at: '2024-01-25'
  }
];

export default function SubAccountsDemoPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWallet, setNewWallet] = useState({
    name: '',
    max_funding_usd: 1000
  });

  const handleCreateWallet = () => {
    alert('Demo Mode: Wallet creation would be processed in production. This is a simulation.');
    setShowCreateModal(false);
    setNewWallet({ name: '', max_funding_usd: 1000 });
  };

  const handleEmergencyStopAll = () => {
    alert('Demo Mode: Emergency stop would be executed in production. This is a simulation.');
  };

  const handleEmergencyStop = (walletId: string) => {
    alert(`Demo Mode: Emergency stop for wallet ${walletId} would be executed in production. This is a simulation.`);
  };

  const handleViewDetails = (walletId: string) => {
    alert(`Demo Mode: Opening detailed view for wallet ${walletId}...`);
  };

  const getFundingInstructions = (walletId: string) => {
    const wallet = demoWallets.find(w => w.id === walletId);
    if (wallet) {
      alert(`Demo Mode: Funding instructions for ${wallet.name}\n\nSend USDC to: ${wallet.address}\nMax capacity: $${(wallet.max_funding_usd - wallet.balance_usd).toFixed(2)}`);
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div 
        className="flex justify-between items-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-4">
            Automation Wallets
          </h1>
          <p className="text-slate-400 text-lg">
            Secure automation with dedicated wallets and risk limits
          </p>
          
          {/* Demo Mode Indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
            <span className="text-sm text-purple-400">
              Demo Mode - All data is simulated
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          {demoSummary.activeAccounts > 0 && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={handleEmergencyStopAll}
                className="flex items-center gap-2 px-4 py-2 text-red-400 border border-red-400/30 hover:bg-red-400/10 bg-red-400/5 rounded-lg transition-all duration-200"
              >
                <AlertTriangle className="w-4 h-4" />
                Emergency Stop All
              </button>
            </motion.div>
          )}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Create Sub-Account
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Summary Cards */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Active Accounts</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {demoSummary.activeAccounts}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              of {demoSummary.totalAccounts} total
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
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Allocated</p>
            <p className="text-3xl font-bold text-emerald-400">
              ${demoSummary.totalAllocated.toLocaleString()}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Across all accounts
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
                <Settings className="w-6 h-6 text-white" />
              </div>
              <Activity className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Total Used</p>
            <p className="text-3xl font-bold text-orange-400">
              ${demoSummary.totalUsed.toLocaleString()}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {demoSummary.totalAllocated > 0 ? ((demoSummary.totalUsed / demoSummary.totalAllocated) * 100).toFixed(1) : 0}% utilization
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
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">Remaining</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              ${(demoSummary.totalAllocated - demoSummary.totalUsed).toLocaleString()}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Available for trading
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Automation Wallet Manager */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="space-y-6">
          <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5" />
            
            <div className="relative p-6 border-b border-slate-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-400" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                    Automation Wallets
                  </h2>
                </div>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Create Wallet
                </button>
              </div>
            </div>

            <div className="relative p-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl border border-blue-500/30 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-300">Hybrid Security Model</h4>
                    <p className="text-sm text-blue-200 mt-1">
                      Create separate automation wallets with limited funding for automated trading. 
                      Your main wallet stays completely secure while automation runs with minimal risk.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {demoWallets.map((wallet) => (
                  <div key={wallet.id} className="relative bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-600/30 hover:border-teal-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Wallet className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{wallet.name}</h4>
                          <p className="text-sm text-slate-400 font-mono">
                            {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}
                          </p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        wallet.is_active ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                      }`}>
                        {wallet.is_active ? 'Active' : 'Inactive'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-emerald-400" />
                          <div>
                            <div className="text-xs text-slate-400">Current Balance</div>
                            <div className="font-semibold text-white">${wallet.balance_usd.toFixed(2)}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <div>
                            <div className="text-xs text-slate-400">Max Funding</div>
                            <div className="font-semibold text-white">${wallet.max_funding_usd.toFixed(2)}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => getFundingInstructions(wallet.id)}
                        className="px-3 py-2 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 rounded-lg text-sm transition-all duration-200"
                      >
                        Fund Wallet
                      </button>
                      <button
                        className="px-3 py-2 border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 rounded-lg text-sm transition-all duration-200"
                      >
                        Withdraw
                      </button>
                      <button
                        className="px-3 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg text-sm transition-all duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Create Wallet Modal */}
          {showCreateModal && (
            <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5" />
              
              <div className="relative p-6 border-b border-slate-700/30">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                  Create Automation Wallet
                </h2>
              </div>

              <div className="relative p-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-2xl border border-yellow-500/30">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-300">Security Guidelines</h4>
                        <ul className="text-sm text-yellow-200 mt-1 space-y-1">
                          <li>• Only fund with money you can afford to lose</li>
                          <li>• Start with small amounts ($100-500) for testing</li>
                          <li>• Maximum funding limit helps control risk</li>
                          <li>• You can withdraw funds at any time</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Wallet Name
                    </label>
                    <input
                      type="text"
                      value={newWallet.name}
                      onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
                      placeholder="e.g., DCA Bot, Trading Bot"
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Maximum Funding (USD)
                    </label>
                    <input
                      type="number"
                      value={newWallet.max_funding_usd}
                      onChange={(e) => setNewWallet({ ...newWallet, max_funding_usd: parseFloat(e.target.value) || 0 })}
                      min="100"
                      max="5000"
                      step="100"
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50"
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      Minimum: $100, Maximum: $5000. This limits automation risk.
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={handleCreateWallet}
                      disabled={!newWallet.name.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Create Wallet
                    </button>
                    <button
                      onClick={() => setShowCreateModal(false)}
                      className="px-4 py-2 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            This automation wallet interface demonstrates the platform's capabilities. All wallet operations, 
            funding, and automation features are simulated. Experience secure automation management without risk.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
