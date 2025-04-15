import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Home() {
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
        className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6 -mt-14"
      >
        <img
          src="/Alagu.png"
          alt="Profile"
          className="w-52 h-52 rounded-full shadow-xl mb-6 object-cover"
        />
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
          Alagappan Sellappan
        </h1>
        <p className="text-xl text-gray-600 mb-4 max-w-xl">
          Student. Researcher. Developer.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6 text-2xl text-gray-500 hover:text-black mb-4">
          <a
            href="https://www.linkedin.com/in/alsellappan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alagus04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/alagus22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaTwitter />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
