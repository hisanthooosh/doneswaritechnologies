import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Compass, CheckCircle, Zap, Layout, Globe, Server, Database, ArrowRight } from 'lucide-react';

const Projects = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden selection:bg-pink-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900 -z-10"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-8 border border-indigo-500/20 backdrop-blur-sm">
             <Zap className="w-6 h-6 text-indigo-400 mr-2" />
             <span className="text-sm font-bold tracking-widest uppercase text-indigo-300">Our Product Suite</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Software that Solves <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Real-World Friction
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We build B2B and B2B2C SaaS platforms that eliminate manual inefficiencies in colleges and bridge the career guidance gap in schools.
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCT 1: MAKE MY REPORT ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group"
          >
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 group-hover:bg-blue-600/20 transition duration-700"></div>

            {/* Content Side */}
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Make My Report</h2>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">MVP DEVELOPED • HIGHER ED TECH</p>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A smart website that helps college students write final project reports and helps faculty check them automatically. We developed a proprietary <strong>"Logic-to-Layout" engine</strong> that eliminates MS Word entirely.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Live A4 Preview</h4>
                    <p className="text-slate-400 text-sm">"What You See Is What You Get". Students see the final print view as they type.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Faculty Dashboard</h4>
                    <p className="text-slate-400 text-sm">Teachers track progress bars and approve/reject submissions instantly.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <button className="px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition">Request Demo</button>
                 <button className="px-6 py-3 border border-white/20 rounded-full font-bold hover:bg-white/10 transition">View Features</button>
              </div>
            </div>

            {/* Visual Side (Abstract Representation of UI) */}
            <div className="relative h-full min-h-[400px] bg-slate-900 rounded-2xl border border-white/10 p-6 flex flex-col justify-center">
               {/* Floating UI Elements Animation */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-slate-800 p-4 rounded-xl border border-white/5 mb-4 shadow-xl"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="h-2 w-3/4 bg-slate-700 rounded mb-2"></div>
                 <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 text-center"
               >
                 <FileText className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                 <h4 className="text-xl font-bold text-blue-100">PDF Generated</h4>
                 <p className="text-blue-300/60 text-sm">Formatting Complete</p>
               </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCT 2: WHATISNXT ================= */}
      <section className="py-24 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Visual Side first on large screens */}
            <div className="order-2 lg:order-1 relative h-full min-h-[400px] bg-slate-900 rounded-2xl border border-white/10 p-6 flex flex-col justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-pink-900/20 p-8 rounded-full border border-pink-500/30 w-64 h-64 mx-auto flex items-center justify-center relative"
               >
                 <Globe className="w-24 h-24 text-pink-500" />
                 <div className="absolute top-0 right-0 bg-slate-800 text-xs px-2 py-1 rounded border border-white/10">IIT Mentor</div>
                 <div className="absolute bottom-10 left-0 bg-slate-800 text-xs px-2 py-1 rounded border border-white/10">AIIMS Senior</div>
               </motion.div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pink-500/30">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">WhatIsNxt</h2>
              <p className="text-pink-400 text-sm font-bold uppercase tracking-widest mb-6">CONCEPT VALIDATION • K-12 EDTECH</p>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A program for schools (Grades 8-10) to help students discover different careers before choosing a stream. We replace generic counseling with real seniors from top institutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Job of the Month</h4>
                    <p className="text-slate-400 text-sm">Systematic exposure: June for Engineers, July for Doctors, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">NEP 2020 Compliant</h4>
                    <p className="text-slate-400 text-sm">Helps schools meet the government mandate for vocational guidance.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <button className="px-6 py-3 bg-pink-600 rounded-full font-bold hover:bg-pink-500 transition">Learn More</button>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK FOOTER ================= */}
      <section className="py-16 border-t border-white/10 text-center">
         <p className="text-slate-500 mb-6 uppercase tracking-widest text-sm">Powered by Cloud-Native Technologies</p>
         <div className="flex justify-center gap-8 text-slate-400">
           <div className="flex flex-col items-center">
             <Database className="w-8 h-8 mb-2" />
             <span className="text-xs">MongoDB</span>
           </div>
           <div className="flex flex-col items-center">
             <Server className="w-8 h-8 mb-2" />
             <span className="text-xs">Express</span>
           </div>
           <div className="flex flex-col items-center">
             <Layout className="w-8 h-8 mb-2" />
             <span className="text-xs">React</span>
           </div>
           <div className="flex flex-col items-center">
             <Zap className="w-8 h-8 mb-2" />
             <span className="text-xs">Node.js</span>
           </div>
         </div>
      </section>

    </div>
  );
};

export default Projects;