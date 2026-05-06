import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ArrowRight, Zap, ShieldCheck, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trade USDT', path: '/trade' },
    { name: 'Verification', path: '/verify' },
    { name: 'Trust & Safety', path: '/trust' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-gold" />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              MR S MAN <span className="text-gold">SERVICES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold underline underline-offset-8' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <motion.button
              onClick={() => setShowGetStarted(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-dark px-6 py-2.5 rounded-full font-black text-sm emerald-glow shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-gold/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={() => { setIsOpen(false); setShowGetStarted(true); }} className="w-full bg-gold text-dark py-4 rounded-xl font-black">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Get Started Modal */}
      <AnimatePresence>
        {showGetStarted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGetStarted(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#050505] border border-gold/30 rounded-[3rem] p-8 md:p-10 gold-glow overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Start Your Journey</h2>
                  <p className="text-gray-500 text-sm mt-1 font-medium">Select your primary objective</p>
                </div>
                <button onClick={() => setShowGetStarted(false)} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/5">✕</button>
              </div>

              <div className="grid gap-4">
                {[
                  { title: 'Instant Exchange', desc: 'Buy or Sell Crypto assets instantly.', icon: Zap, path: '/trade', color: 'text-gold' },
                  { title: 'Identity Authority', desc: 'Secure your verification checkmark.', icon: ShieldCheck, path: '/verify', color: 'text-emerald' },
                  { title: 'VIP Consultation', desc: 'Direct access to the Legit CEO office.', icon: MessageCircle, path: 'https://wa.me/2349137448060', color: 'text-blue-400', external: true }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10, backgroundColor: 'rgba(212, 175, 55, 0.03)', borderColor: 'rgba(212, 175, 55, 0.2)' }}
                    onClick={() => {
                      setShowGetStarted(false);
                      if (item.external) window.open(item.path, '_blank');
                      else navigate(item.path);
                    }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex items-center gap-5 cursor-pointer group transition-all"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className={item.color} size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-black text-lg tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <ArrowRight className="text-gray-800 group-hover:text-gold transition-colors" size={20} />
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-700 text-[10px] uppercase tracking-[0.3em] font-black">Elite Access Granted</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
