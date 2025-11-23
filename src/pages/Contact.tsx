
import React from 'react';
import { Mail, MessageCircle, Send, ArrowRight, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-secondary">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Our support team is always available to help you. Choose any of the contact options below and reach us instantly.
          </p>
        </div>
      </div>

      {/* 2. CONTACT OPTIONS */}
      <div className="py-12 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Email Card */}
            <div className="glass-panel p-8 rounded-3xl text-center group hover:bg-white/5 transition-all duration-300 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 mb-6">info@megatrades.net</p>
              <a 
                href="mailto:greatmega213@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all w-full justify-center"
              >
                Send Email <ArrowRight size={18} />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel p-8 rounded-3xl text-center group hover:bg-white/5 transition-all duration-300 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp Support</h3>
              <p className="text-gray-400 mb-6">+234 707 554 6375</p>
              <a 
                href="https://wa.me/2347075546375" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all w-full justify-center"
              >
                Chat on WhatsApp <ArrowRight size={18} />
              </a>
            </div>

            {/* Telegram Card */}
            <div className="glass-panel p-8 rounded-3xl text-center group hover:bg-white/5 transition-all duration-300 border-t-4 border-cyan-500">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Send className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Telegram Support</h3>
              <p className="text-gray-400 mb-6">@MegaTrades_bot</p>
              <a 
                href="https://t.me/GreatMegaSupport_bot" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all w-full justify-center"
              >
                Message on Telegram <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 3. NEED QUICK HELP SECTION */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
                    alt="Customer Support" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary/20 rounded-lg">
                    <HelpCircle className="text-secondary" />
                </div>
                <span className="text-secondary font-bold tracking-wide text-sm uppercase">24/7 Assistance</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Quick Help?</h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                We respond fast and are always ready to guide you with account setup, signal access, and general questions. Your success is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="https://t.me/GreatMegaSupport_bot" target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-dark-900 font-bold rounded-xl hover:bg-gray-200 transition-all text-center">
                    Talk to an Agent
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
