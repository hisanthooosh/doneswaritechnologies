import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
              <span className="text-xl font-bold text-white">Doneswari Technologies</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              A DPIIT-recognized, women-led startup innovating education through SaaS automation and career intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><Linkedin className="w-4 h-4"/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition"><Github className="w-4 h-4"/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"><Twitter className="w-4 h-4"/></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/vision" className="hover:text-blue-400 transition">Our Vision</Link></li>
              <li><Link to="/founders" className="hover:text-blue-400 transition">Leadership</Link></li>
              <li><Link to="/recognitions" className="hover:text-blue-400 transition">Certifications</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/projects" className="hover:text-blue-400 transition">Make My Report</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition">WhatIsNxt</Link></li>
              <li className="text-slate-500 pt-2 text-xs uppercase tracking-widest font-bold">Coming Soon</li>
              <li><span className="text-slate-600 cursor-not-allowed">School ERP</span></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span>
                  <strong>Registered Office:</strong><br/>
                  Chittoor, Andhra Pradesh,<br/>India.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                <a href="tel:9182845569" className="hover:text-white transition">+91 91828 45569</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-pink-500 mr-3 shrink-0" />
                <a href="mailto:doneswarisoftwaresolutions@gmail.com" className="hover:text-white transition break-all">
                  doneswarisoftwaresolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Doneswari Technologies LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;