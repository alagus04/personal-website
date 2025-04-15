import { motion } from 'framer-motion';

export default function ArticleLayout({ title, date, children }) {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 pt-28 pb-24 text-black font-serif leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="prose prose-lg">{children}</div>
    </motion.div>
  );
}
