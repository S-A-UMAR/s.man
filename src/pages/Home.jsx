import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Trophy, Headphones, DollarSign, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Gradients */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-emerald/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] uppercase bg-gold/5">
              Approved by Legit CEO
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            EXCHANGE <span className="gold-gradient">PREMIUM</span> <br /> 
            ASSETS SECURELY
          </motion.h1>

          {/* 3D-styled USDT Icon */}
          <motion.div 
            variants={itemVariants}
            animate={{ 
              rotateY: [0, 10, 0, -10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12 relative inline-block"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-emerald to-[#1a7a5c] rounded-full flex items-center justify-center emerald-glow border-4 border-white/10 shadow-[0_20px_50px_rgba(38,161,123,0.4)]">
              <DollarSign className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={3} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold px-3 py-1 rounded-md shadow-lg transform rotate-12">
              <span className="text-dark font-black text-sm">USDT</span>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/trade">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gold text-dark font-black rounded-xl overflow-hidden flex items-center gap-3"
              >
                START TRADING
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/verify">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-gold/50 text-gold font-bold rounded-xl hover:bg-gold/5 transition-all"
              >
                VERIFY ACCOUNT
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Mr S Man?</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fast', desc: 'Instant verification and trade processing.', icon: Zap, color: 'text-gold' },
              { title: 'Secure', desc: 'Military-grade encryption for all data.', icon: Shield, color: 'text-emerald' },
              { title: 'Reliable', desc: 'Trusted by thousands of premium clients.', icon: Trophy, color: 'text-gold' },
              { title: '24/7 Support', desc: 'Direct access to our dedicated team.', icon: Headphones, color: 'text-emerald' },
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feat.icon className={feat.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-dark/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Common Questions</h2>
            <p className="text-gray-500 font-medium">Everything you need to know about our elite services</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does verification take?", a: "Most verifications are processed within 2-4 hours. Premium clients get priority handling in under 30 minutes." },
              { q: "Is my data secure?", a: "Absolutely. We use military-grade AES-256 encryption. Your personal data is purged from our active systems immediately after verification." },
              { q: "What are the transaction limits?", a: "New accounts start with a $5,000 daily limit. This increases as you build trust with the Legit CEO office." },
              { q: "Can I trade other coins not listed?", a: "Yes. For custom assets or large volume OTC trades, please contact the CEO directly via the VIP Consultation button." }
            ].map((faq, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-all"
                  >
                    <span className="text-white font-bold">{faq.q}</span>
                    <ChevronDown className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-white/[0.02]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-emerald/10 to-transparent border border-emerald/20 text-center">
          <Shield className="w-16 h-16 text-emerald mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Legit CEO Verified</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our platform operates under strict compliance and transparency protocols. 
            Your security is our highest priority.
          </p>
          <Link to="/trust" className="text-emerald font-bold hover:underline">
            View our Trust Protocol →
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
