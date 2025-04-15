import { motion } from 'framer-motion';

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
        <p className="text-xl text-gray-600 mb-8 max-w-xl">
          Student. Researcher. Developer.
        </p>

        <div className="mt-4 animate-bounce text-4xl text-gray-400 hover:text-black">
          ↓
        </div>
      </section>
    </motion.div>
  );
}
