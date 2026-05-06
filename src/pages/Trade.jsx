import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRightLeft, MessageCircle, Search } from 'lucide-react';

const COINS = [
  { id: 'usdt', name: 'USDT', symbol: 'USDT', rate: 1500, color: 'text-emerald' },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', rate: 95000000, color: 'text-[#F7931A]' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', rate: 5500000, color: 'text-[#627EEA]' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', rate: 250000, color: 'text-[#14F195]' },
];

const Trade = () => {
  const [type, setType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const ngnValue = (parseFloat(amount) || 0) * selectedCoin.rate;

  const handleWhatsApp = () => {
    const message = `Hello Mr S Man, I want to ${type.toUpperCase()} ${selectedCoin.name}.\n\nAmount: ${amount} ${selectedCoin.symbol}\nValue: ₦${ngnValue.toLocaleString()}\nRate: ₦${selectedCoin.rate.toLocaleString()}/${selectedCoin.symbol}\n\nPlease provide payment details.`;
    window.open(`https://wa.me/2349137448060?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredCoins = COINS.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tighter">PREMIUM <span className="text-gold">EXCHANGE</span></h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Trade assets at the Legit CEO rate</p>
        </div>

        <div className="bg-white/[0.02] border border-gold/20 rounded-[2.5rem] p-8 gold-glow relative overflow-hidden">
          {/* Glass background effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />

          {/* Buy/Sell Toggle */}
          <div className="flex bg-dark/50 p-1 rounded-2xl mb-10 border border-white/5 relative z-10">
            <button onClick={() => setType('buy')} className={`flex-1 py-4 rounded-xl font-bold transition-all ${type === 'buy' ? 'bg-gold text-dark' : 'text-gray-500'}`}>BUY</button>
            <button onClick={() => setType('sell')} className={`flex-1 py-4 rounded-xl font-bold transition-all ${type === 'sell' ? 'bg-emerald text-white' : 'text-gray-500'}`}>SELL</button>
          </div>

          <div className="space-y-8 relative z-10">
            {/* Asset Input */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 px-1">You Send</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-dark/80 border border-white/10 rounded-2xl py-7 pl-8 pr-32 text-3xl font-black text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-gray-800"
                />
                <button 
                  onClick={() => setIsSelectorOpen(true)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 transition-all group"
                >
                  <span className={`font-black tracking-tight ${selectedCoin.color}`}>{selectedCoin.symbol}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors" />
                </button>
              </div>
            </div>

            {/* Swap Visual */}
            <div className="flex justify-center -my-4 relative z-20">
              <motion.button 
                whileHover={{ rotate: 180, scale: 1.1 }}
                className="w-14 h-14 bg-dark border-2 border-gold/30 rounded-full flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                <ArrowRightLeft size={24} className="rotate-90" />
              </motion.button>
            </div>

            {/* NGN Value */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 px-1">You Receive</label>
              <div className="w-full bg-dark/40 border border-white/5 rounded-2xl py-7 px-8 flex justify-between items-center">
                <span className="text-3xl font-black text-gray-200">₦ {ngnValue.toLocaleString()}</span>
                <span className="text-emerald font-black text-xs tracking-[0.2em] uppercase">NGN</span>
              </div>
            </div>

            {/* Rate Info */}
            <div className="p-5 bg-gold/5 rounded-2xl border border-gold/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-emerald animate-pulse`} />
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Live Rate</span>
              </div>
              <span className="text-white font-bold">1 {selectedCoin.symbol} = ₦{selectedCoin.rate.toLocaleString()}</span>
            </div>

            {/* Action */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(38, 161, 123, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              disabled={!amount || amount <= 0}
              className={`w-full py-6 rounded-2xl flex items-center justify-center gap-4 font-black text-xl transition-all ${
                !amount ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-emerald text-white'
              }`}
            >
              PROCEED TO WHATSAPP
              <MessageCircle size={24} />
            </motion.button>
          </div>

          {/* Coin Selector Modal */}
          <AnimatePresence>
            {isSelectorOpen && (
              <motion.div 
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                className="absolute inset-0 z-50 bg-dark/95 flex flex-col p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-white tracking-tight">SELECT ASSET</h3>
                  <button onClick={() => setIsSelectorOpen(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">✕</button>
                </div>
                
                <div className="relative mb-8">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search crypto..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-gold/50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                  {filteredCoins.map(coin => (
                    <button
                      key={coin.id}
                      onClick={() => { setSelectedCoin(coin); setIsSelectorOpen(false); }}
                      className={`w-full p-5 rounded-[1.5rem] flex items-center justify-between transition-all ${selectedCoin.id === coin.id ? 'bg-gold/10 border border-gold/40' : 'hover:bg-white/5 border border-white/5'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xl ${coin.color}`}>
                          {coin.symbol[0]}
                        </div>
                        <div className="text-left">
                          <p className="text-white font-black text-lg leading-none">{coin.name}</p>
                          <p className="text-gray-500 text-xs font-bold mt-2 uppercase tracking-widest">{coin.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-black">₦{coin.rate.toLocaleString()}</p>
                        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">Legit Rate</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Trade;
