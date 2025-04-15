import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';
import Articles from './pages/Articles.jsx';
// import Resume from './pages/Resume.jsx';
import ContactTracing from './pages/articles/ContactTracing.jsx'; // ✅ your sample article
import FacialRecognition from './pages/articles/FacialRecognition.jsx';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/contact-tracing" element={<ContactTracing />} /> {/* ✅ new route */}
        <Route path="/articles/facial-recognition" element={<FacialRecognition />} /> {/* ✅ new route */}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-black transition">
            Alagappan Sellappan
          </Link>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-black transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-black transition">Projects</Link></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1FJrSFJMKsc0JAHA3dyupMAuEueVljjG9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                Resume
              </a>
            </li>
            <li><Link to="/articles" className="hover:text-black transition">Articles</Link></li>
          </ul>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-24">
        <AnimatedRoutes />
      </main>
    </Router>
  );
}
