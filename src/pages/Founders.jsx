import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Code, TrendingUp } from 'lucide-react';

const Founders = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden selection:bg-pink-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-blue-900/10 -z-10"></div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-sm font-bold mb-6 tracking-widest uppercase">
            The Visionaries
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Leadership Team
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A balanced partnership combining strategic vision with technical excellence.
          </p>
        </motion.div>
      </section>

      {/* ================= FOUNDERS GRID ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* ---------------- FOUNDER 1: P. DONESWARI ---------------- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-slate-800/50 rounded-3xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition duration-500"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] group-hover:bg-pink-600/20 transition"></div>

              {/* Photo */}
              <div className="relative mb-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full p-2 bg-gradient-to-b from-pink-500 to-transparent">
                  <img 
                    src="/doni.jpg" 
                    alt="P. Doneswari" 
                    className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                    onError={(e) => {e.target.src = "https://via.placeholder.com/200?text=Doneswari"}}
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border-4 border-slate-900 uppercase tracking-wide">
                  51% Shareholder
                </div>
              </div>

              {/* Info */}
              <div className="text-center mt-6">
                <h2 className="text-3xl font-bold mb-1">P. Doneswari</h2>
                <p className="text-pink-400 font-medium mb-6 uppercase tracking-widest text-sm">Designated Partner</p>
                
                <p className="text-slate-300 leading-relaxed mb-8">
                  Leading Operations & Strategy. As the majority stakeholder, she drives the company's vision to empower women in tech and ensure operational excellence across all educational products.
                </p>

                {/* Skills/Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-white/5 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" /> Strategy
                  </span>
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-white/5 flex items-center">
                    <Award className="w-3 h-3 mr-1" /> Operations
                  </span>
                </div>

                {/* Social Button */}
                <a 
                  href="https://www.linkedin.com/in/pathipati-doneswari-611340369" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition shadow-lg shadow-pink-900/20"
                >
                  <Linkedin className="w-5 h-5 mr-2" /> Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            {/* ---------------- FOUNDER 2: G. SANTHOSH ---------------- */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-slate-800/50 rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition duration-500"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition"></div>

              {/* Photo */}
              <div className="relative mb-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full p-2 bg-gradient-to-b from-blue-500 to-transparent">
                  <img 
                    src="/santhu.jpg" 
                    alt="G. Santhosh" 
                    className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                    onError={(e) => {e.target.src = "https://via.placeholder.com/200?text=Santhosh"}}
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border-4 border-slate-900 uppercase tracking-wide">
                  49% Shareholder
                </div>
              </div>

              {/* Info */}
              <div className="text-center mt-6">
                <h2 className="text-3xl font-bold mb-1">G. Santhosh</h2>
                <p className="text-blue-400 font-medium mb-6 uppercase tracking-widest text-sm">Designated Partner</p>
                
                <p className="text-slate-300 leading-relaxed mb-8">
                  Technical Architect & Lead Developer. An expert in the MERN Stack, responsible for building the cloud-native infrastructure, the "Logic-to-Layout" engine, and product scalability.
                </p>

                {/* Skills/Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-white/5 flex items-center">
                    <Code className="w-3 h-3 mr-1" /> MERN Stack
                  </span>
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-white/5 flex items-center">
                    <Award className="w-3 h-3 mr-1" /> Architecture
                  </span>
                </div>

                {/* Social Button */}
                <a 
                  href="https://www.linkedin.com/in/santhosh-gangasani-8461a72a9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition shadow-lg shadow-blue-900/20"
                >
                  <Linkedin className="w-5 h-5 mr-2" /> Connect on LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Founders;