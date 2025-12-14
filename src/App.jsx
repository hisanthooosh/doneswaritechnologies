import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Recognitions from './pages/Recognitions';
import Projects from './pages/Projects';
import Founders from './pages/Founders';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Content Area - This changes based on the URL */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/recognitions" element={<Recognitions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;