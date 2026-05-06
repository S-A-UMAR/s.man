import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Star, Quote, Award } from 'lucide-react';

const Trust = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald/30"
          >
            <ShieldCheck className="text-emerald w-10 h-10" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">TRUST & SAFETY</h1>
          <p className="text-gray-400">Our 'Trusted & Secure' Protocol</p>
        </div>

        {/* Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Zero Data Leak', desc: 'Your personal info is encrypted and purged after every session.', icon: Lock },
            { title: 'CEO Oversight', desc: 'Every major trade is verified personally by the Legit CEO.', icon: Award },
            { title: 'Full Transparency', desc: 'No hidden fees or exchange spreads. What you see is what you get.', icon: Eye },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-gold" />
              </div>
              <h3 className="text-white font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Placeholder */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-white">Client Testimonials</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-gold/5 to-transparent border border-gold/10 relative">
                <Quote className="absolute top-6 right-6 text-gold/10 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-gold text-gold" />)}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Mr S Man is the only service I trust for my USDT trades. Fast response time and very professional handling of my verification request."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div>
                    <p className="text-white font-bold text-sm">Premium Client {i}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-tighter">Verified User</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Satisfaction Badge Section */}
        <div className="text-center p-12 rounded-[3rem] bg-emerald/5 border border-emerald/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] rounded-full -mr-32 -mt-32" />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-emerald text-white rounded-full flex items-center justify-center emerald-glow border-4 border-white/20">
              <Award size={48} />
            </div>
          </motion.div>
          <h2 className="text-3xl font-black text-white mb-4">SATISFACTION GUARANTEED</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            If our services do not meet your expectations, we offer a full protocol review to ensure your absolute satisfaction.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-black text-gold">100%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Secure</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-black text-emerald">5k+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Clients</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-black text-gold">24h</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Support</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Trust;
