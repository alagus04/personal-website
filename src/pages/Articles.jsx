import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = {
  Tech: [
    {
      date: 'January 2, 2023',
      title: 'The Bets and Business of Self Driving',
      link: '/articles/self-driving',
    },
    {
      date: 'August 24, 2020',
      title: 'The Fundamentals of Facial Recognition Technology',
      link: '/articles/facial-recognition',
    },
    {
      date: 'May 24, 2020',
      title: 'What is Contact Tracing and How Does it Work?',
      link: '/articles/contact-tracing',
    },
  ],
  Reflection: [
    {
      date: 'September 4, 2018',
      title: 'What did I learn/do differently this internship?',
      link: '/articles/internship-reflection',
    },
  ],
};

export default function Articles() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 pt-28 pb-24 text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-10">Articles</h1>

      {Object.entries(articles).map(([section, items]) => (
        <div key={section} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{section}</h2>
          <ul className="space-y-4">
            {items.map((article, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span className="text-gray-600 w-1/3">{article.date}</span>
                <Link
                  to={article.link}
                  className="text-lg font-semibold hover:underline w-2/3 text-right"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}
