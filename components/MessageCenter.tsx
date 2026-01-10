import React, { useState, useEffect } from 'react';
import { contactService, ContactMessage } from '../contactService';

interface MessageCenterProps {
  onClose: () => void;
}

const MessageCenter: React.FC<MessageCenterProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    setMessages(contactService.getMessages());
    // Mark messages as read when viewing dashboard
    contactService.markAllAsRead();
  }, []);

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all messages?')) {
      contactService.clearMessages();
      setMessages([]);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `portfolio_inquiries_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 lg:p-8">
      <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl h-[95vh] sm:h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header Section */}
        <div className="p-5 sm:p-8 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex flex-col gap-5">
            {/* Title Row */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  Inquiry Dashboard
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">Total inquiries: {messages.length}</p>
              </div>
              <button onClick={onClose} className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors flex-shrink-0 sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Actions Row */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handleExport}
                disabled={messages.length === 0}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 rounded-xl text-[10px] sm:text-xs font-bold text-white transition-all flex items-center justify-center gap-2 border border-zinc-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export
              </button>
              <button 
                onClick={handleClear} 
                className="flex-1 sm:flex-none px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-red-500/20 text-center"
              >
                Clear All
              </button>
              <button onClick={onClose} className="hidden sm:flex p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-600 text-center space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="font-medium">No messages yet. Send one from the contact form!</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto w-full">
              {messages.map((msg) => (
                <div key={msg.id} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all ${!msg.read ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-zinc-800/30 border-zinc-800'}`}>
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                          {!msg.read && <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse flex-shrink-0" />}
                          <span className="font-bold text-base sm:text-lg text-white truncate">{msg.name}</span>
                          <span className="text-zinc-500 hidden sm:inline">•</span>
                          <span className="text-xs sm:text-sm text-zinc-400 truncate">{msg.email}</span>
                        </div>
                        <span className="text-[10px] text-zinc-600 whitespace-nowrap ml-2">
                          {new Date(msg.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-zinc-300 bg-zinc-950/30 p-3 sm:p-5 rounded-lg sm:rounded-xl border border-zinc-800/50 leading-relaxed italic text-xs sm:text-sm">
                        "{msg.message}"
                      </p>
                    </div>

                    {msg.aiAnalysis && (
                      <div className="lg:w-80 p-3 sm:p-5 rounded-lg sm:rounded-xl bg-zinc-950/50 border border-zinc-800/50 space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-400">AI Intelligence</span>
                          <span className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase ${
                            msg.aiAnalysis.urgency === 'high' ? 'bg-red-500/20 text-red-400' :
                            msg.aiAnalysis.urgency === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {msg.aiAnalysis.urgency}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                          <div>
                            <span className="text-[9px] font-bold text-zinc-500 block mb-0.5 uppercase tracking-widest">Intent</span>
                            <span className="text-xs sm:text-sm text-zinc-200 font-semibold">{msg.aiAnalysis.category}</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold text-zinc-500 block mb-0.5 uppercase tracking-widest">AI Summary</span>
                            <p className="text-[10px] sm:text-xs text-zinc-400 leading-snug">{msg.aiAnalysis.summary}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;