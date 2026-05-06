import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, UserPlus, Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

const Verify = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    platform: '',
    username: '',
    requirements: ''
  });

  const services = [
    { id: 'smv', name: 'Social Media Verification', icon: BadgeCheck, desc: 'Get that blue checkmark on IG, Twitter, or FB.' },
    { id: 'pas', name: 'Platform Account Setup', icon: UserPlus, desc: 'Professional setup for Upwork, Fiverr, or LinkedIn.' }
  ];

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Mr S Man, I need Verification Services.\n\nService: ${formData.service}\nPlatform: ${formData.platform}\nUsername/Handle: ${formData.username}\nSpecific Requirements: ${formData.requirements}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349137448060?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 min-h-screen"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">PROFESSIONAL VERIFICATION</h1>
          <p className="text-gray-400">Step up your digital presence with premium authority</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-gold transition-all duration-500 -translate-y-1/2" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step >= i ? 'bg-gold text-dark' : 'bg-dark border border-white/10 text-gray-500'
              }`}
            >
              {step > i ? <CheckCircle2 size={20} /> : i}
            </div>
          ))}
        </div>

        <div className="bg-white/[0.02] border border-gold/10 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Select Your Service</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { setFormData({...formData, service: s.name}); handleNext(); }}
                        className={`p-6 rounded-2xl border transition-all text-left group flex items-start gap-4 ${
                          formData.service === s.name ? 'border-gold bg-gold/5' : 'border-white/5 bg-white/[0.01] hover:border-gold/30'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <s.icon className="text-gold" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{s.name}</h4>
                          <p className="text-gray-400 text-sm">{s.desc}</p>
                        </div>
                        <ChevronRight className="ml-auto text-gray-600 self-center" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Target Platform</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Instagram', 'Twitter (X)', 'LinkedIn', 'Upwork', 'Fiverr', 'Others'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => { setFormData({...formData, platform: p}); handleNext(); }}
                        className={`p-4 rounded-xl border text-center transition-all ${
                          formData.platform === p ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 text-gray-400 hover:border-gold/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleBack} className="text-gray-500 flex items-center gap-2 hover:text-white">
                    <ChevronLeft size={16} /> Back
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Final Details</h3>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Username or Profile Link</label>
                    <input
                      required
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      placeholder="@yourhandle"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold/50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Specific Requirements</label>
                    <textarea
                      required
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      placeholder="Tell us more about your needs..."
                      rows={4}
                      className="w-full bg-dark/50 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold/50"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={handleBack} className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-all">
                      Back
                    </button>
                    <button type="submit" className="flex-1 bg-gold text-dark font-black py-4 rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2">
                      SUBMIT REQUEST <Send size={18} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Verify;
