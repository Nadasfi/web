'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Key,
  Smartphone,
  Mail,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle,
  Monitor,
  Moon,
  Sun
} from 'lucide-react'

export default function SettingsDemoPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [notifications, setNotifications] = useState({
    trading: true,
    portfolio: true,
    automation: false,
    security: true
  })
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('en')

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette }
  ]

  const handleSave = () => {
    alert('Demo Mode: Settings would be saved in production.')
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
            Settings
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Demo Mode • Configure your preferences</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
            <div className="relative space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
            <div className="relative p-8">
              
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
                      General Settings
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        Language
                      </label>
                      <select 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      >
                        <option value="en">English</option>
                        <option value="tr">Türkçe</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        Time Zone
                      </label>
                      <select className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50">
                        <option>UTC (Coordinated Universal Time)</option>
                        <option>EST (Eastern Standard Time)</option>
                        <option>PST (Pacific Standard Time)</option>
                        <option>CET (Central European Time)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        Default Currency
                      </label>
                      <select className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50">
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>TRY - Turkish Lira</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
                      Security Settings
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="font-semibold text-emerald-300">2FA Enabled</span>
                      </div>
                      <p className="text-slate-300 text-sm">Two-factor authentication is active for your account</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Login Security</h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span className="text-slate-300">Require 2FA for login</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-slate-300">Email login notifications</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-slate-300">Remember device for 30 days</span>
                          <input type="checkbox" className="toggle" />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">API Keys</h3>
                      <div className="p-4 bg-slate-700/40 rounded-xl border border-slate-600/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-white">Trading API Key</p>
                            <p className="text-sm text-slate-400">Last used: 2 hours ago</p>
                          </div>
                          <button className="px-4 py-2 bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
                      Notification Preferences
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(notifications).map(([key, enabled]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-slate-700/40 rounded-xl border border-slate-600/30">
                        <div>
                          <h3 className="font-medium text-white capitalize">{key} Notifications</h3>
                          <p className="text-sm text-slate-400">
                            Get notified about {key} related activities
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={enabled}
                            onChange={(e) => setNotifications(prev => ({
                              ...prev,
                              [key]: e.target.checked
                            }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
                      Appearance Settings
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        Theme
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: 'light', name: 'Light', icon: Sun },
                          { id: 'dark', name: 'Dark', icon: Moon },
                          { id: 'auto', name: 'Auto', icon: Monitor }
                        ].map((themeOption) => (
                          <button
                            key={themeOption.id}
                            onClick={() => setTheme(themeOption.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                              theme === themeOption.id
                                ? 'border-teal-500 bg-teal-500/10'
                                : 'border-slate-600 bg-slate-700/40 hover:border-slate-500'
                            }`}
                          >
                            <themeOption.icon className={`w-6 h-6 mx-auto mb-2 ${
                              theme === themeOption.id ? 'text-teal-400' : 'text-slate-400'
                            }`} />
                            <span className={`text-sm font-medium ${
                              theme === themeOption.id ? 'text-teal-300' : 'text-slate-300'
                            }`}>
                              {themeOption.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        Color Scheme
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { name: 'Teal', color: 'from-teal-500 to-emerald-500' },
                          { name: 'Blue', color: 'from-blue-500 to-cyan-500' },
                          { name: 'Purple', color: 'from-purple-500 to-pink-500' },
                          { name: 'Orange', color: 'from-orange-500 to-red-500' }
                        ].map((colorScheme, index) => (
                          <button
                            key={colorScheme.name}
                            className={`h-12 rounded-xl bg-gradient-to-r ${colorScheme.color} hover:scale-105 transition-transform ${
                              index === 0 ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="flex justify-end pt-8 border-t border-slate-700/30 mt-8">
                <button 
                  onClick={handleSave}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-teal-500/25"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}