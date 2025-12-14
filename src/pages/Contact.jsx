import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 px-4 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-blue-900/10 -z-10"></div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold mb-6 tracking-widest uppercase">
            24/7 Support
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build the Future
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you represent a college needing automation or a school seeking career guidance, our team is ready to deploy.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              {/* Email Card */}
              <div className="group flex items-start p-8 bg-slate-800/50 rounded-3xl border border-white/5 hover:border-blue-500/30 transition duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1">Email Us</h3>
                  <p className="text-slate-400 text-sm mb-2">For partnerships & inquiries</p>
                  <a href="mailto:doneswarisoftwaresolutions@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition break-all">
                    doneswarisoftwaresolutions@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group flex items-start p-8 bg-slate-800/50 rounded-3xl border border-white/5 hover:border-green-500/30 transition duration-300">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1">Call Us</h3>
                  <p className="text-slate-400 text-sm mb-2">Speak to our founders directly</p>
                  <a href="tel:9182845569" className="text-2xl font-bold text-white hover:text-green-400 transition">
                    +91 91828 45569
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group flex items-start p-8 bg-slate-800/50 rounded-3xl border border-white/5 hover:border-pink-500/30 transition duration-300">
                <div className="w-14 h-14 bg-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1">Registered Office</h3>
                  <p className="text-slate-400 text-sm mb-2">Doneswari Technologies LLP</p>
                  <p className="text-xl font-bold text-white">
                    Chittoor, Andhra Pradesh
                  </p>
                  <p className="text-slate-500 text-sm mt-1">India</p>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Glossy Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-400" /> Send a Message
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Name</label>
                    <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition" placeholder="+91 ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition" placeholder="john@college.edu" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Message</label>
                  <textarea className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition h-32" placeholder="Tell us about your institution's needs..."></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
                
                <p className="text-center text-xs text-slate-500 flex items-center justify-center mt-4">
                  <Clock className="w-3 h-3 mr-1" /> We usually reply within 24 hours.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;