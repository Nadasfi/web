'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Bot, 
  Zap, 
  BarChart3, 
  Settings,
  Wallet,
  ArrowLeft,
  Shield,
  Globe,
  Layers,
  Bell,
  CreditCard,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Activity,
  Menu,
  X
} from 'lucide-react'
import React from 'react'

const navigation = [
  { name: 'Dashboard', href: '/demo', icon: Home, category: 'core' },
  { name: 'Trading', href: '/demo/trading', icon: TrendingUp, category: 'core' },
  { name: 'Portfolio', href: '/demo/portfolio', icon: Wallet, category: 'core', badge: '$2.4M' },
  { name: 'Sub-Accounts', href: '/demo/sub-accounts', icon: CreditCard, category: 'core' },
  { name: 'Cross-Chain', href: '/demo/cross-chain', icon: Globe, category: 'advanced', badge: '5' },
  { name: 'Liquid Labs', href: '/demo/liquid-labs', icon: Layers, category: 'advanced', isNew: true },
  { name: 'Advanced Trading', href: '/demo/advanced-trading', icon: Shield, category: 'advanced' },
  { name: 'Simulation', href: '/demo/simulation', icon: BarChart3, category: 'advanced' },
  { name: 'AI Chat', href: '/demo/ai-chat', icon: Bot, category: 'tools', isNew: true },
  { name: 'Automation', href: '/demo/automation', icon: Zap, category: 'tools' },
  { name: 'Notifications', href: '/demo/notifications', icon: Bell, category: 'tools', badge: '3' },
  { name: 'Settings', href: '/demo/settings', icon: Settings, category: 'tools' },
]

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  const categoryGroups = React.useMemo(() => {
    const groups: Record<string, typeof navigation> = {}
    navigation.forEach(item => {
      const category = item.category || "core"
      if (!groups[category]) groups[category] = []
      groups[category].push(item)
    })
    return groups
  }, [])

  const portfolioValue = 2437892.45
  const dailyChange = 12.34

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50 text-white hover:bg-slate-700/80 transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={clsx(
        "flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800/50 transition-all duration-300",
        "lg:w-80 w-full lg:relative fixed inset-0 z-40",
        isSidebarOpen ? "translate-x-0" : "lg:translate-x-0 -translate-x-full"
      )}>
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Header Section */}
        <div className="relative z-10 p-3 border-b border-slate-800/30">
          <motion.div 
            className="flex items-center gap-3 mb-3" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="relative">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <img 
                  src="/images/logo-transp.png" 
                  alt="Nadas Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full border-2 border-slate-900 shadow-lg animate-pulse" />
            </div>
            
            <div>
              <h1 className="text-base font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                Nadas
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">
                Demo Mode
              </p>
            </div>
          </motion.div>

          {/* Portfolio Summary - Demo Mode */}
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-2xl p-2.5 border border-slate-700/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 rounded-2xl" />
            
            <div className="relative flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-300">Demo Portfolio</span>
              <div className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300">+{dailyChange}%</span>
              </div>
            </div>
            
            <div className="relative text-lg font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-1">
              ${portfolioValue.toLocaleString()}
            </div>
            
            <div className="relative flex items-center gap-2 text-xs text-slate-400">
              <Activity className="w-3 h-3 text-teal-400" />
              <span>Demo mode - No real trading</span>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex-1 px-2 py-2 overflow-y-auto scrollbar-thin scrollbar-track-slate-800/20 scrollbar-thumb-slate-700/50">
          <div className="space-y-2">
            {Object.entries(categoryGroups).map(([category, items], categoryIndex) => (
              <motion.div 
                key={category} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 + 0.3 }}
              >
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 px-2">
                  {category === "core" ? "Core Features" : category === "advanced" ? "Advanced Tools" : "Utilities"}
                </h3>
                
                <ul className="space-y-0.5">
                  {items.map(item => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link href={item.href}>
                          <motion.div
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={clsx(
                              "group relative flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer",
                              "hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-700/40",
                              "hover:border-teal-500/20 hover:shadow-lg hover:shadow-teal-500/10",
                              isActive 
                                ? "bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-emerald-500/20 text-white border border-teal-500/30 shadow-xl shadow-teal-500/20" 
                                : "text-slate-300 hover:text-white border border-transparent"
                            )}
                            whileHover={{ x: 4, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {/* Icon container */}
                            <div className={clsx(
                              "flex items-center justify-center w-6 h-6 rounded-lg transition-all duration-300",
                              isActive 
                                ? "bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30" 
                                : "bg-slate-800/60 text-slate-400 group-hover:bg-slate-700/80 group-hover:text-slate-200"
                            )}>
                              <item.icon className="w-3 h-3" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="truncate font-medium">{item.name}</span>
                                <div className="flex items-center gap-2">
                                  {item.badge && (
                                    <span className={clsx(
                                      "px-1 py-0.5 text-xs font-semibold rounded-full",
                                      isActive 
                                        ? "bg-teal-400/20 text-teal-200 border border-teal-400/30" 
                                        : "bg-slate-700/60 text-slate-300 border border-slate-600/40"
                                    )}>
                                      {item.badge}
                                    </span>
                                  )}
                                  {item.isNew && (
                                    <div className="flex items-center gap-1 px-1 py-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                      <Sparkles className="w-2.5 h-2.5" />
                                      <span>NEW</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Hover indicator */}
                            <AnimatePresence>
                              {hoveredItem === item.name && (
                                <motion.div 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  <ChevronRight className="w-4 h-4 text-teal-400" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Back to Home */}
        <div className="relative z-10 p-2.5 border-t border-slate-800/30">
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-2xl p-2.5 border border-slate-700/30 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/">
              <motion.button 
                className="relative w-full flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-slate-700/60 to-slate-600/60 hover:from-slate-600/80 hover:to-slate-500/80 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 border border-slate-600/30 hover:border-slate-500/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {children}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
