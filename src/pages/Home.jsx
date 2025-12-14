import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Cpu, Globe, Database, Server, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  // --- 1. Typewriter Effect Logic ---
  const words = ["SaaS Automation", "Career Intelligence", "Academic Compliance"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // --- 2. Animations ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-900 text-white overflow-hidden selection:bg-pink-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-20">
        
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
             transition={{ duration: 8, repeat: Infinity }}
             className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-30"
           />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} 
             transition={{ duration: 10, repeat: Infinity, delay: 1 }}
             className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[120px] opacity-20"
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-100 tracking-wide uppercase">DPIIT Recognized • Women-Led</span>
            </div>
            
            {/* Main Headline with Typewriter */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              Innovating Education <br /> through {' '}
              <AnimatePresence mode='wait'>
                <motion.span 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block md:inline"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              We digitally transform educational institutions by automating academic compliance and democratizing career guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/projects" className="group relative px-8 py-4 bg-blue-600 rounded-full font-bold text-lg overflow-hidden shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="flex items-center">Explore Products <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" /></span>
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 font-bold text-lg transition backdrop-blur-sm">
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      <section className="border-y border-white/10 bg-black/20 backdrop-blur-sm py-8 overflow-hidden">
        <div className="flex gap-12 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition duration-500">
           {/* Simple static representation of MERN Stack for elegance */}
           <div className="flex items-center gap-2"><Layout className="text-cyan-400"/> <span className="font-bold text-xl">React.js</span></div>
           <div className="flex items-center gap-2"><Server className="text-green-500"/> <span className="font-bold text-xl">Node.js</span></div>
           <div className="flex items-center gap-2"><Database className="text-green-400"/> <span className="font-bold text-xl">MongoDB</span></div>
           <div className="flex items-center gap-2"><Code className="text-yellow-400"/> <span className="font-bold text-xl">Express</span></div>
           <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-8"><span className="text-pink-500 font-bold">Cloud-Native SaaS</span></div>
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE (BENTO GRID) ================= */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solutions</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Addressing the "Academic Inefficiency" in colleges and the "Tunnel Vision" crisis in schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product Card 1: Make My Report */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                  <Layout className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Make My Report</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  A smart platform where students type answers and our <strong>Logic-to-Layout Engine</strong> generates a perfectly formatted PDF automatically.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500 mr-3"/> No MS Word formatting needed</li>
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500 mr-3"/> Live A4 Preview</li>
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500 mr-3"/> Automated Faculty Approval</li>
                </ul>
                <Link to="/projects" className="text-blue-400 font-bold hover:text-white transition flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Product Card 2: WhatIsNxt */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] group-hover:bg-pink-600/30 transition"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/30">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">WhatIsNxt</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Career discovery for Schools (Grades 8-10). We connect students with mentors from top colleges like IITs & AIIMS to democratize career guidance.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-3"/> Mandatory B2B Model</li>
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-3"/> "Job of the Month" Concept</li>
                  <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-3"/> NEP 2020 Compliant</li>
                </ul>
                <Link to="/projects" className="text-pink-400 font-bold hover:text-white transition flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHY US (GRID) ================= */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
               <Cpu className="w-10 h-10 text-purple-400 mb-6" />
               <h4 className="text-xl font-bold mb-4">Logic-to-Layout Engine</h4>
               <p className="text-slate-400">Our unique tech that eliminates manual formatting entirely, saving 40% of student time.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
               <Server className="w-10 h-10 text-cyan-400 mb-6" />
               <h4 className="text-xl font-bold mb-4">Scalable MERN Stack</h4>
               <p className="text-slate-400">Cloud-native infrastructure capable of scaling from 1 to 1,000 colleges without physical infrastructure costs.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
               <Globe className="w-10 h-10 text-orange-400 mb-6" />
               <h4 className="text-xl font-bold mb-4">Social Impact</h4>
               <p className="text-slate-400">Solving the "Tunnel Vision" crisis by exposing students to diverse careers before they choose a stream.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-slate-900 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your institution?</h2>
          <Link to="/contact" className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition shadow-2xl shadow-white/20">
            Contact Founders
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;