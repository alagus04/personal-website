import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 pt-20 pb-20 font-serif text-gray-800 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">My name is Alagappan.</h1>

      <p className="mb-4">
      I’m a third-year undergraduate at UCLA majoring in Cognitive Science with a specialization in Computing. I'm an engineer and researcher working at the intersection of
        <a
          href="#"
          className="text-black underline decoration-1 underline-offset-2 hover:bg-yellow-200 px-1 transition-all duration-200"
        >
          artificial intelligence,
        </a>
        <a
          href="#"
          className="text-black underline decoration-1 underline-offset-2 hover:bg-yellow-200 px-1 transition-all duration-200"
        >
          data science,
        </a>
        and
        <a
          href="#"
          className="text-black underline decoration-1 underline-offset-2 hover:bg-yellow-200 px-1 transition-all duration-200"
        >
          healthcare innovation.
        </a>
        I focus on building systems that blend machine learning with real-world impact—from powering cancer detection pipelines to designing intelligent analytics infrastructure.
      </p>

      <p className="mb-4">
        This summer, I'm interning at both Comcast NBCUniversal and Exact Sciences. At NBCUniversal, I’m part of the Operations & Technology team, contributing to the design, development, and deployment of AI/ML-powered systems that support enterprise architecture, data-driven decision-making, and intelligent solution frameworks across various teams at scale. It's a hands-on role where engineering meets applied AI.
      </p>

      <p className="mb-4">
        At Exact Sciences, I’m joining the Software Bioinformatics team, working on cancer detection pipelines that are shaping the future of precision diagnostics. My work spans from developing scalable, compliant Python-based tooling to collaborating on cutting-edge data engineering workflows and machine learning pipelines for clinical use.
      </p>

      <p className="mb-4">
      I’m currently conducting undergraduate research in the Lin Lab at UCLA, where we focus on advancing AI methods for biomedical imaging. My work explores how large language models like GPT-4o and Gemini 1.5 Flash can be integrated with pathology image data to improve breast cancer subtype classification. I design and optimize prompts that guide LLMs to reason over both textual and visual attributes, working with annotated whole-slide images (WSIs) and regions of interest (ROIs). This research aims to enhance precision in pathology-based diagnosis and evaluate the robustness of AI-assisted classification in real clinical scenarios.
      </p>


      <p className="mb-4">
        Previously, I’ve built AI tools for cancer research, developed generative project planning systems with large language models, and worked on commercial technology teams at companies like FOX, UCLA Health, and SoCalGas. My work has touched everything from AWS-powered AI prototypes to multi-modal pathology image classification.
      </p>

      <p className="mb-4">
        I’m also building PubGenie — an AI-powered research assistant that helps scientists and students rapidly discover, compare, and summarize biomedical literature. It combines real-time PubMed integration with intelligent prompt optimization, making biomedical exploration faster and more context-aware.
      </p>

      <p>
        I’m passionate about creating things that matter—tools that help people think better, feel more, and solve harder problems. If you’d like to chat, feel free to
        <a
          href="mailto:alsellappan@g.ucla.edu"
          className="text-black underline decoration-1 underline-offset-2 hover:bg-yellow-200 px-1 transition-all duration-200"
        >
          reach out.
        </a>
      </p>
    </motion.div>
  );
}
