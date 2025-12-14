import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, MapPin, Award, BookOpen, Rocket } from 'lucide-react';

const About = () => {
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
    <div className="bg-slate-900 text-white overflow-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 -z-10"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 tracking-widest uppercase border border-blue-500/30">
            Since 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Doneswari Technologies</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            A DPIIT-recognized, women-led EdTech startup based in Andhra Pradesh. We are on a mission to automate academic compliance and democratize career intelligence for students in Tier-2 and Tier-3 cities.
          </p>
        </motion.div>
      </section>

      {/* ================= THE PROBLEM & SOLUTION ================= */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* The Problem */}
            <motion.div variants={fadeInUp} className="bg-slate-900 p-10 rounded-3xl border border-red-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold mb-6 flex items-center text-red-400">
                <Target className="w-8 h-8 mr-3" /> The Problem
              </h3>
              <ul className="space-y-6 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 shrink-0"></span>
                  <div>
                    <strong className="text-white block mb-1">Academic Inefficiency</strong>
                    Students waste 40% of their research time on MS Word formatting rather than learning.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 shrink-0"></span>
                  <div>
                    <strong className="text-white block mb-1">Tunnel Vision Crisis</strong>
                    School students lack exposure to modern careers, leading to mismatched stream choices and unemployment.
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div variants={fadeInUp} className="bg-slate-900 p-10 rounded-3xl border border-green-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold mb-6 flex items-center text-green-400">
                <Rocket className="w-8 h-8 mr-3" /> Our Solution
              </h3>
              <ul className="space-y-6 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 shrink-0"></span>
                  <div>
                    <strong className="text-white block mb-1">Automation First</strong>
                    We built a Logic-to-Layout engine that handles all compliance and formatting automatically.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 shrink-0"></span>
                  <div>
                    <strong className="text-white block mb-1">Real-World Mentorship</strong>
                    Connecting K-12 students with seniors from IITs and AIIMS for honest career guidance.
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY STATS ================= */}
      <section className="py-20 bg-blue-900/20 border-y border-white/5">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Award className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-4xl font-bold mb-2">DPIIT</h4>
            <p className="text-blue-200 text-sm uppercase tracking-wide">Recognized Startup</p>
          </div>
          <div>
            <Users className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h4 className="text-4xl font-bold mb-2">51%</h4>
            <p className="text-blue-200 text-sm uppercase tracking-wide">Women Shareholding</p>
          </div>
          <div>
            <MapPin className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h4 className="text-4xl font-bold mb-2">AP</h4>
            <p className="text-blue-200 text-sm uppercase tracking-wide">Registered in Chittoor</p>
          </div>
          <div>
            <TrendingUp className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h4 className="text-4xl font-bold mb-2">20+</h4>
            <p className="text-blue-200 text-sm uppercase tracking-wide">Employment Goal</p>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed text-left md:text-center">
            <p>
              Doneswari Technologies was born out of a simple observation: <strong>Technology in education is often stuck in the past.</strong> While the world moved to AI and Cloud, students were still struggling with manual formatting, and schools were struggling to provide genuine career guidance.
            </p>
            <p>
              Founded by <strong>P. Doneswari</strong> and <strong>G. Santhosh</strong>, we incorporated in 2025 with a clear vision: to build tools that respect a student's time and a teacher's effort.
            </p>
            <p>
              Today, we are proud to be a <strong>Startup India recognized entity</strong>, building cloud-native SaaS solutions on the MERN stack that scale from a single classroom in Chittoor to universities across India.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HIRING CTA ================= */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-blue-200 max-w-2xl mx-auto mb-8">
          We are actively hiring interns for Content and Sales roles. Help us build the future of EdTech.
        </p>
        <a 
          href="mailto:doneswarisoftwaresolutions@gmail.com" 
          className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition"
        >
          Apply Now
        </a>
      </section>

    </div>
  );
};

export default About;