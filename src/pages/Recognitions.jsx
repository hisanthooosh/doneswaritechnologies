import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building2, FileText, CheckCircle, Scale, Landmark } from 'lucide-react';

const Recognitions = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center border-b border-white/10">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-8 border border-blue-500/20 backdrop-blur-sm">
             <ShieldCheck className="w-6 h-6 text-blue-400 mr-2" />
             <span className="text-sm font-bold tracking-widest uppercase text-blue-300">Official Status</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Legally Registered & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Fully Compliant
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Doneswari Technologies is a registered Limited Liability Partnership (LLP) under the Ministry of Corporate Affairs, Government of India.
          </p>
        </motion.div>
      </section>

      {/* ================= CERTIFICATE SHOWCASE ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 md:p-1 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="bg-slate-900/90 rounded-[22px] p-8 md:p-16 text-center md:text-left relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Icon & Status */}
                <div>
                   <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                     <Building2 className="w-10 h-10 text-white" />
                   </div>
                   <h2 className="text-3xl font-bold mb-2">Certificate of Incorporation</h2>
                   <p className="text-blue-400 font-medium mb-6">Ministry of Corporate Affairs (MCA)</p>
                   
                   <div className="space-y-4">
                     <div className="flex items-center p-4 bg-slate-800 rounded-xl border border-white/5">
                       <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                       <div>
                         <p className="text-xs text-slate-400 uppercase tracking-wide">Legal Name</p>
                         <p className="font-bold text-lg">Doneswari Technologies LLP</p>
                       </div>
                     </div>
                     <div className="flex items-center p-4 bg-slate-800 rounded-xl border border-white/5">
                       <Landmark className="w-6 h-6 text-blue-500 mr-4" />
                       <div>
                         <p className="text-xs text-slate-400 uppercase tracking-wide">Jurisdiction</p>
                         <p className="font-bold text-lg">Andhra Pradesh, India</p>
                       </div>
                     </div>
                   </div>
                </div>

                {/* Right Side: Why It Matters */}
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Scale className="w-5 h-5 mr-3 text-purple-400" /> Why This Matters
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-4 shrink-0"></span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong>Distinct Legal Entity:</strong> As an LLP, we are a separate legal body from our partners, ensuring stability and long-term commitment to our clients.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-4 shrink-0"></span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong>Transparency:</strong> Our records are public and auditable by the government, providing you with a transparent partner you can trust.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-4 shrink-0"></span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong>Compliance:</strong> We adhere to all regulatory compliances mandated by the LLP Act, 2008, ensuring your data and contracts are safe.
                      </p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ROADMAP TO RECOGNITION ================= */}
      <section className="py-20 px-4 bg-black/20 text-center">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-2xl font-bold mb-10 text-slate-400">Our Compliance Roadmap</h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
             
             {/* Step 1: Done */}
             <div className="flex flex-col items-center opacity-100">
               <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                 <CheckCircle className="w-8 h-8 text-white" />
               </div>
               <h4 className="font-bold text-white">Incorporation</h4>
               <p className="text-xs text-green-400 font-bold uppercase mt-1">Completed</p>
             </div>

             {/* Connector */}
             <div className="hidden md:block w-24 h-1 bg-slate-700 rounded"></div>

             {/* Step 2: Next */}
             <div className="flex flex-col items-center opacity-60">
               <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center mb-4">
                 <FileText className="w-8 h-8 text-slate-400" />
               </div>
               <h4 className="font-bold text-slate-300">Startup India</h4>
               <p className="text-xs text-slate-500 font-bold uppercase mt-1">In Process</p>
             </div>

             {/* Connector */}
             <div className="hidden md:block w-24 h-1 bg-slate-700 rounded"></div>

             {/* Step 3: Next */}
             <div className="flex flex-col items-center opacity-60">
               <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center mb-4">
                 <Building2 className="w-8 h-8 text-slate-400" />
               </div>
               <h4 className="font-bold text-slate-300">MSME</h4>
               <p className="text-xs text-slate-500 font-bold uppercase mt-1">Upcoming</p>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default Recognitions;