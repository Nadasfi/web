"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, RotateCcw, Sparkles, User, Cpu, CheckCircle, AlertTriangle, Info, Play, Eye, Shield } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  data?: any;
  strategyId?: string;
}

const EXAMPLE_PROMPTS = [
  "Transfer 1 ETH from Ethereum to Hyperliquid",
  "Move 5000 USDC to Hyperliquid and set up DCA for ETH",
  "Bridge my tokens and buy ETH when price drops below $3000",
  "Setup cross-chain arbitrage between Polygon and Hyperliquid",
  "Create automated rebalancing strategy after bridging assets"
];

const QUICK_ACTIONS = [
  { text: "Show my cross-chain options", icon: "🌉" },
  { text: "What's the cheapest way to bridge?", icon: "💰" },
  { text: "Set up DCA after bridging", icon: "📈" },
  { text: "Compare bridge providers", icon: "⚖️" },
  { text: "Help me optimize gas fees", icon: "⛽" }
];

const DEMO_RESPONSES = {
  "transfer 1 eth": {
    content: "I've analyzed your request and created a cross-chain strategy! Here's what I found:\n\n**Summary:** Transfer 1 ETH from Ethereum to Hyperliquid for optimal trading opportunities\n\n**Strategy Details:**\n• From: Ethereum (ETH)\n• To: Hyperliquid (ETH)\n• Amount: 1 ETH\n\n**Estimated Costs:** $12.45\n\n**Risk Level:** Low\n\n**Key Points:**\n• Use Stargate bridge for best rates\n• Estimated time: 3-5 minutes\n• Gas optimization applied\n\nWould you like me to execute this strategy for you?",
    strategyId: "demo-strategy-001"
  },
  "bridge tokens": {
    content: "I've analyzed your request and created a cross-chain strategy! Here's what I found:\n\n**Summary:** Bridge your tokens across multiple chains for optimal yield farming\n\n**Strategy Details:**\n• From: Ethereum (Multiple tokens)\n• To: Polygon & Arbitrum\n• Amount: Portfolio allocation\n\n**Estimated Costs:** $28.90\n\n**Risk Level:** Medium\n\n**Key Points:**\n• Multi-chain bridge optimization\n• Yield farming opportunities identified\n• Gas fee optimization\n\nWould you like me to execute this strategy for you?",
    strategyId: "demo-strategy-002"
  },
  "dca strategy": {
    content: "I've analyzed your request and created a cross-chain strategy! Here's what I found:\n\n**Summary:** Set up Dollar Cost Averaging (DCA) strategy on Hyperliquid\n\n**Strategy Details:**\n• From: USDC stablecoin\n• To: ETH on Hyperliquid\n• Amount: $5000\n• Frequency: Weekly\n\n**Estimated Costs:** $15.20\n\n**Risk Level:** Low\n\n**Key Points:**\n• Automated DCA execution\n• Risk management included\n• Performance tracking\n\nWould you like me to execute this strategy for you?",
    strategyId: "demo-strategy-003"
  }
};

export default function AIChatDemoPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'system',
      content: "👋 Hi! I'm your cross-chain AI assistant. I can help you bridge assets, set up trading automation, and optimize your DeFi strategies. Try asking me something like 'Transfer 1 ETH to Hyperliquid'",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pendingStrategyIds, setPendingStrategyIds] = useState<Set<string>>(new Set());
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Add message to chat
  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...message
    }
    setMessages(prev => [...prev, newMessage])
    return newMessage.id
  };

  // Update message by id
  const updateMessage = (id: string, updates: Partial<ChatMessage>) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, ...updates } : msg
    ))
  };

  // Handle sending user message
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    setInputValue('');

    // Add user message
    addMessage({
      type: 'user',
      content: userMessage
    });

    // Add typing indicator
    setIsTyping(true);
    const typingId = addMessage({
      type: 'ai',
      content: 'Thinking...'
    });

    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsTyping(false);
      
      // Find appropriate demo response
      const lowerMessage = userMessage.toLowerCase();
      let responseContent = '';
      let strategyId = '';
      
      if (lowerMessage.includes('transfer') && lowerMessage.includes('eth')) {
        responseContent = DEMO_RESPONSES["transfer 1 eth"].content;
        strategyId = DEMO_RESPONSES["transfer 1 eth"].strategyId;
      } else if (lowerMessage.includes('bridge')) {
        responseContent = DEMO_RESPONSES["bridge tokens"].content;
        strategyId = DEMO_RESPONSES["bridge tokens"].strategyId;
      } else if (lowerMessage.includes('dca') || lowerMessage.includes('dollar cost')) {
        responseContent = DEMO_RESPONSES["dca strategy"].content;
        strategyId = DEMO_RESPONSES["dca strategy"].strategyId;
      } else {
        // Generic response
        responseContent = "I've analyzed your request and created a cross-chain strategy! Here's what I found:\n\n**Summary:** Custom strategy based on your requirements\n\n**Strategy Details:**\n• From: Ethereum (ETH)\n• To: Hyperliquid (ETH)\n• Amount: Custom amount\n\n**Estimated Costs:** $18.75\n\n**Risk Level:** Medium\n\n**Key Points:**\n• Personalized strategy\n• Risk assessment included\n• Cost optimization\n\nWould you like me to execute this strategy for you?";
        strategyId = "demo-strategy-generic";
      }
      
      updateMessage(typingId, {
        content: responseContent,
        strategyId: strategyId
      });
      
      // Track this strategy for execution
      setPendingStrategyIds(prev => new Set(Array.from(prev).concat([strategyId])));
      
    } catch (error) {
      console.error('AI chat error:', error);
      setIsTyping(false);
      updateMessage(typingId, {
        content: 'Sorry, I encountered an error while analyzing your request. Please try rephrasing or contact support.',
        type: 'ai'
      });
    }
  };

  // Handle quick action clicks
  const handleQuickAction = (action: string) => {
    setInputValue(action);
    inputRef.current?.focus();
  };

  // Handle example prompt clicks
  const handleExamplePrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  // Handle strategy execution from chat
  const handleExecuteStrategy = (strategyId: string) => {
    alert(`Demo Mode: Strategy ${strategyId} would be executed in production. This is a simulation.`);
    setPendingStrategyIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(strategyId);
      return newSet;
    });
  };

  // Handle view strategy details
  const handleViewStrategy = (strategyId: string) => {
    alert(`Demo Mode: Opening strategy ${strategyId} details...`);
  };

  // Render message content
  const renderMessageContent = (message: ChatMessage) => {
    const lines = message.content.split('\n');
    
    return (
      <div className="space-y-2">
        {lines.map((line, index) => {
          if (line.startsWith('**') && line.endsWith('**')) {
            // Bold text
            return (
              <div key={index} className="font-semibold text-white">
                {line.replace(/\*\*/g, '')}
              </div>
            )
          } else if (line.startsWith('• ')) {
            // Bullet point
            return (
              <div key={index} className="ml-4 text-slate-300">
                {line}
              </div>
            )
          } else if (line.trim()) {
            // Regular text
            return (
              <div key={index} className="text-slate-300">
                {line}
              </div>
            )
          } else {
            // Empty line
            return <div key={index} className="h-2"></div>
          }
        })}
      </div>
    )
  };

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
          AI Cross-Chain Assistant
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Get AI-powered insights and strategy recommendations</p>
        
        {/* Demo Mode Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          <span className="text-sm text-purple-400">
            Demo Mode - AI responses are simulated
          </span>
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl" />
          
          {/* Header */}
          <div className="relative p-4 border-b border-slate-700/30">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-white">AI Cross-Chain Assistant</h3>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Claude 3.5 Sonnet
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="relative flex-1 overflow-y-auto p-4 space-y-4 h-96">
            {messages.map(message => (
              <div key={message.id} className={`flex space-x-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type !== 'user' && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'ai' ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-blue-500/20 border border-blue-500/30'
                  }`}>
                    {message.type === 'ai' ? (
                      <Cpu className={`w-5 h-5 ${isTyping && message.id === messages[messages.length - 1]?.id ? 'text-purple-400 animate-pulse' : 'text-purple-400'}`} />
                    ) : (
                      <Info className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                )}
                
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-l-lg rounded-tr-lg' 
                    : 'bg-slate-800/60 text-slate-200 rounded-r-lg rounded-tl-lg border border-slate-700/30'
                } px-4 py-3`}>
                  {message.type === 'user' ? (
                    <div>{message.content}</div>
                  ) : (
                    renderMessageContent(message)
                  )}
                  
                  {/* Strategy Action Buttons */}
                  {message.type === 'ai' && message.strategyId && pendingStrategyIds.has(message.strategyId) && (
                    <div className="flex space-x-2 mt-3 pt-3 border-t border-slate-600/30">
                      <button
                        onClick={() => handleExecuteStrategy(message.strategyId!)}
                        className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <Play className="w-4 h-4" />
                        <span>Execute</span>
                      </button>
                      <button
                        onClick={() => handleViewStrategy(message.strategyId!)}
                        className="flex items-center space-x-1 px-4 py-2 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                    </div>
                  )}
                </div>

                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-teal-500/20 border border-teal-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-teal-400" />
                  </div>
                )}
              </div>
            ))}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="relative px-4 py-2 border-t border-slate-700/30">
              <div className="mb-3">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Try these examples:</h4>
                <div className="flex flex-wrap gap-2">
                  {EXAMPLE_PROMPTS.slice(0, 3).map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleExamplePrompt(prompt)}
                      className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/70 rounded-full text-sm text-slate-200 transition-colors border border-slate-600/50"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Quick actions:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_ACTIONS.slice(0, 4).map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.text)}
                      className="flex items-center space-x-2 p-2 bg-slate-800/40 hover:bg-slate-700/50 rounded-lg text-sm text-slate-200 transition-colors border border-slate-600/30"
                    >
                      <span>{action.icon}</span>
                      <span className="truncate">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="relative p-4 border-t border-slate-700/30">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Ask me about cross-chain bridging, automation, or DeFi strategies..."
                className="flex-1 p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? (
                  <RotateCcw className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>Send</span>
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
              <span>Powered by Claude 3.5 Sonnet (Demo Mode)</span>
              <span>{messages.length - 1} messages</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Demo Notice */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Demo Mode Active</span>
          </div>
          <p className="text-slate-300 text-sm">
            This AI chat interface demonstrates the platform's capabilities. All AI responses and strategy recommendations are simulated. 
            Experience intelligent DeFi assistance without connecting a wallet.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
