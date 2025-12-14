import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Products', path: '/projects' },
    { name: 'Recognitions', path: '/recognitions' },
    { name: 'Founders', path: '/founders' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-white/10 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            D
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Doneswari <span className="text-blue-400">Technologies</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-300 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`block py-2 px-3 rounded md:p-0 transition-colors ${
                    location.pathname === link.path 
                      ? 'text-blue-400 font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
           <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 transition shadow-lg shadow-blue-900/20">
             Contact Us
           </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                      location.pathname === link.path 
                        ? 'bg-blue-600 text-white' 
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && <ChevronRight className="w-4 h-4" />}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="block w-full text-center py-3 mt-4 bg-white/10 text-white rounded-lg font-bold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;