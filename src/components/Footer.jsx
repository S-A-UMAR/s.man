import { Shield, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-gold" />
              <span className="text-xl font-bold tracking-tighter text-white">
                MR S MAN <span className="text-gold">SERVICES</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              The premier destination for secure USDT exchange and professional digital identity verification. 
              Led by the Legit CEO, we guarantee reliability and transparency in every transaction.
            </p>
            <div className="flex space-x-4">
              {[Mail, Phone, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/trade" className="hover:text-gold transition-colors">Trade USDT</Link></li>
              <li><Link to="/verify" className="hover:text-gold transition-colors">Verification</Link></li>
              <li><Link to="/trust" className="hover:text-gold transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>WhatsApp: +2349137448060</li>
              <li>Email: services@mrsman.com</li>
              <li>Hours: 24/7 Priority Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/5 pt-8 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Mr S Man Online Services. Built for the Elite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
