'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  X,
  Settings,
  Filter,
  Search,
  MoreVertical
} from 'lucide-react'

const demoNotifications = [
  {
    id: '1',
    type: 'success',
    title: 'DCA Order Executed',
    message: 'Successfully purchased 0.5 ETH for $1,623.45',
    time: '2 minutes ago',
    read: false
  },
  {
    id: '2',
    type: 'warning',
    title: 'Price Alert Triggered',
    message: 'BTC price dropped below $67,000 threshold',
    time: '15 minutes ago',
    read: false
  },
  {
    id: '3',
    type: 'info',
    title: 'Portfolio Rebalanced',
    message: 'Monthly rebalancing completed successfully',
    time: '1 hour ago',
    read: true
  },
  {
    id: '4',
    type: 'success',
    title: 'Cross-Chain Bridge Complete',
    message: '1.2 ETH bridged from Ethereum to Arbitrum',
    time: '2 hours ago',
    read: true
  },
  {
    id: '5',
    type: 'warning',
    title: 'High Gas Fees',
    message: 'Ethereum network fees are currently high (45+ Gwei)',
    time: '3 hours ago',
    read: true
  }
]

export default function NotificationsDemoPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'success' | 'warning' | 'info'>('all')
  const [notifications, setNotifications] = useState(demoNotifications)

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true
    if (filter === 'unread') return !notif.read
    return notif.type === filter
  })

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-emerald-400" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'info': return <Info className="w-5 h-5 text-cyan-400" />
      default: return <Bell className="w-5 h-5 text-slate-400" />
    }
  }

  const getBgColor = (type: string) => {
    switch (type) {
      case 'success': return 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20'
      case 'warning': return 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20'
      case 'info': return 'from-cyan-500/10 to-teal-500/10 border-cyan-500/20'
      default: return 'from-slate-500/10 to-slate-600/10 border-slate-500/20'
    }
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
            Notifications
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Demo Mode • {unreadCount} unread notifications
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="px-4 py-2 text-teal-400 border border-teal-400/30 hover:bg-teal-400/10 bg-teal-400/5 rounded-lg transition-all duration-200 text-sm"
            >
              Mark all as read
            </button>
          )}
          
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-2 bg-slate-800/60 p-1 rounded-xl">
          {['all', 'unread', 'success', 'warning', 'info'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                filter === f
                  ? 'bg-slate-700 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {f}
              {f === 'unread' && unreadCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-teal-500 text-white text-xs rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Notifications List */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filteredNotifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative bg-gradient-to-br ${getBgColor(notification.type)} backdrop-blur-xl rounded-2xl p-6 border shadow-xl cursor-pointer group ${
              !notification.read ? 'ring-2 ring-teal-500/20' : ''
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getIcon(notification.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {notification.title}
                      {!notification.read && (
                        <span className="ml-2 w-2 h-2 bg-teal-400 rounded-full inline-block"></span>
                      )}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {notification.time}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-700/50 rounded text-slate-400 hover:text-white transition-all duration-200">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {filteredNotifications.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Bell className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No notifications found
            </h3>
            <p className="text-slate-500">
              {filter === 'all' 
                ? 'No notifications to display' 
                : `No ${filter} notifications found`
              }
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}