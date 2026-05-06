import { motion } from 'framer-motion';

const Ticker = () => {
  const prices = [
    { coin: 'BTC', price: '₦95,420,000', change: '+2.4%' },
    { coin: 'ETH', price: '₦5,510,000', change: '+1.8%' },
    { coin: 'SOL', price: '₦254,000', change: '+4.2%' },
    { coin: 'USDT', price: '₦1,500', change: '0.0%' },
    { coin: 'BNB', price: '₦980,000', change: '-0.5%' },
    { coin: 'ADA', price: '₦850', change: '+1.1%' },
  ];

  return (
    <div className="bg-gold/5 border-b border-gold/10 py-2.5 overflow-hidden whitespace-nowrap relative z-[60] backdrop-blur-sm">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="inline-flex gap-16 items-center"
      >
        {[...prices, ...prices, ...prices].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" />
              <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{item.coin}</span>
            </div>
            <span className="text-[10px] font-black text-white tracking-tight">{item.price}</span>
            <span className={`text-[9px] font-black px-1.5 py-0.5 rounded bg-white/5 ${item.change.startsWith('+') ? 'text-emerald' : item.change === '0.0%' ? 'text-gray-500' : 'text-red-500'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
