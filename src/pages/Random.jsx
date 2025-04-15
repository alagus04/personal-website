import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="font-sans scroll-smooth"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >

        
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6 pt-28"
      >
        <img
          src="/Alagu.png"
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-xl mb-8 object-cover"
        />
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
          Alagappan Sellappan
        </h1>
        <p className="text-xl text-gray-600 mb-4 max-w-xl">
          Student. Researcher. Developer.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-6 text-gray-500">
          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG here */}
          </a>
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="GitHub"
          >
            {/* GitHub SVG here */}
          </a>
          <a
            href="https://twitter.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            {/* Twitter SVG here */}
          </a>
        </div>

        <button
          onClick={() => scrollToSection(aboutRef)}
          className="mt-6 animate-bounce text-4xl text-gray-400 hover:text-black"
        >
          ↓
        </button>
      </section>
    </motion.div>
  );
}
