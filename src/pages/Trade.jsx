import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, RefreshCcw, ArrowRightLeft, MessageCircle } from 'lucide-react';

const Trade = () => {
  const [type, setType] = useState('buy'); // buy or sell
  const [usdAmount, setUsdAmount] = useState('');
  const [ngnAmount, setNgnAmount] = useState(0);
  const rate = 1500;

  useEffect(() => {
    const val = parseFloat(usdAmount) || 0;
    setNgnAmount(val * rate);
  }, [usdAmount]);

  const handleWhatsApp = () => {
    const message = `Hello Mr S Man, I want to ${type.toUpperCase()} USDT.\n\nAmount: $${usdAmount}\nValue: ₦${ngnAmount.toLocaleString()}\nRate: ₦${rate}/$\n\nPlease provide payment details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349137448060?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 min-h-screen"
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">USDT EXCHANGE</h1>
          <p className="text-gray-400">Instant Buy & Sell at Premium Rates</p>
        </div>

        <div className="bg-white/[0.02] border border-gold/20 rounded-3xl p-8 gold-glow">
          {/* Toggle */}
          <div className="flex bg-dark/50 p-1 rounded-2xl mb-8 border border-white/5">
            <button
              onClick={() => setType('buy')}
              className={`flex-1 py-3 rounded-xl font-bold transition-all ${type === 'buy' ? 'bg-gold text-dark' : 'text-gray-400 hover:text-white'}`}
            >
              BUY USDT
            </button>
            <button
              onClick={() => setType('sell')}
              className={`flex-1 py-3 rounded-xl font-bold transition-all ${type === 'sell' ? 'bg-emerald text-white' : 'text-gray-400 hover:text-white'}`}
            >
              SELL USDT
            </button>
          </div>

          <div className="space-y-6">
            {/* Input USD */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">
                Amount (USD)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={usdAmount}
                  onChange={(e) => setUsdAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-dark/80 border border-white/10 rounded-2xl py-5 pl-6 pr-20 text-2xl font-bold text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-gold font-bold">USDT</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <ArrowRightLeft className="text-gray-500 w-5 h-5 rotate-90" />
              </div>
            </div>

            {/* Output NGN */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">
                Value (NGN)
              </label>
              <div className="w-full bg-dark/40 border border-white/5 rounded-2xl py-5 px-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-300">
                    ₦ {ngnAmount.toLocaleString()}
                  </span>
                  <span className="text-emerald font-bold">NGN</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current Rate</span>
                <span className="text-gold font-bold">1 USDT = 1,500 NGN</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-400">Processing Time</span>
                <span className="text-emerald font-bold">Instant</span>
              </div>
            </div>

            {/* Action */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              disabled={!usdAmount || usdAmount <= 0}
              className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all ${
                !usdAmount ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-emerald text-white emerald-glow'
              }`}
            >
              PROCEED TO WHATSAPP
              <MessageCircle size={20} />
            </motion.button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            By proceeding, you agree to our <span className="text-gold hover:underline cursor-pointer">Terms of Service</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Trade;
