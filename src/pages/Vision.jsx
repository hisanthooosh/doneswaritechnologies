import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Map, Users, Lightbulb, Zap, Flag } from 'lucide-react';

const Vision = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-slate-900 text-white overflow-hidden selection:bg-green-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900 -z-10"></div>
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-8 border border-white/10 backdrop-blur-sm">
             <Compass className="w-6 h-6 text-green-400 mr-2" />
             <span className="text-sm font-bold tracking-widest uppercase text-green-300">Our North Star</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Building the Digital Backbone of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Modern Education
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We don't just build software; we build bridges between academic compliance and student success.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION CARDS ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Vision Card */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Lightbulb className="w-32 h-32 text-white" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Our Vision</h3>
                 <h2 className="text-3xl font-bold mb-6 text-white">Future Readiness</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">
                   To be the leading catalyst in Andhra Pradesh that transforms educational institutions into smart, data-driven campuses, ensuring every student has access to automated tools and world-class career intelligence.
                 </p>
               </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Target className="w-32 h-32 text-white" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">Our Mission</h3>
                 <h2 className="text-3xl font-bold mb-6 text-white">Daily Execution</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">
                   To digitally transform educational institutions by automating academic compliance (reports, approvals) and democratizing career guidance for students in Tier-2 and Tier-3 cities.
                 </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STRATEGIC ROADMAP ================= */}
      <section className="py-24 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Roadmap</h2>
            <p className="text-slate-400 text-xl">Our step-by-step plan for growth and impact.</p>
          </div>

          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-1/2 space-y-12">
            
            {/* Milestone 1 */}
            <div className="relative pl-12">
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition duration-300">
                <span className="inline-block px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold mb-4">YEAR 1 (Current Focus)</span>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Flag className="w-6 h-6 mr-3 text-green-400" /> Pilot Launch & Validation
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Launch pilot in 5 Colleges & 5 Schools in Tirupati/Chittoor.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Validate "WhatIsNxt" concept in Tier-2 markets.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Hire initial interns for Content & Sales roles.</li>
                </ul>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative pl-12">
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition duration-300">
                <span className="inline-block px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold mb-4">YEAR 2 (Expansion)</span>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-400" /> Scaling Operations
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Hire 10-15 Full-stack MERN Developers.</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Onboard 50+ part-time mentors for career guidance.</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Expand "Make My Report" to 20+ institutions.</li>
                </ul>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative pl-12">
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition duration-300">
                <span className="inline-block px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-bold mb-4">LONG TERM</span>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Map className="w-6 h-6 mr-3 text-purple-400" /> Ecosystem Leadership
                </h3>
                <p className="text-slate-400">
                  Establish Doneswari Technologies as the primary EdTech partner for state governments and private universities across South India.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EMPLOYMENT COMMITMENT ================= */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-blue-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
          
          <Users className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Employment</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            We are committed to generating high-quality tech jobs in Chittoor and Tirupati. Our roadmap includes hiring 15+ developers and 50+ mentors within the next 24 months.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Vision;