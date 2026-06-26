import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiExternalLink } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Hero({ play }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center px-4 md:px-8 lg:px-12 pt-24 lg:pt-0 pb-12">
      <div className="w-full max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-mono-display font-bold text-white tracking-[0.3em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ISHAAN
        </motion.h1>

        <motion.hr
          className="border-t border-[#2e2e2e] my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <motion.p
          className="text-sm text-[#555555] font-mono-display tracking-wide mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Pre-final Year B.Tech · CSE
        </motion.p>
        <motion.p
          className="text-sm text-[#555555] font-mono-display tracking-wide mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          Indian Institute of Technology Jodhpur
        </motion.p>

        <motion.p
          className="text-[#e8e8e8] font-sans-body text-[0.95rem] leading-relaxed max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          I enjoy solving complex problems, building scalable applications, and exploring AI-powered solutions.
        </motion.p>

        <motion.hr
          className="border-t border-[#2e2e2e] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        />

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <button
            onClick={() => { handleScroll('projects'); play?.('click'); }}
            className="px-5 py-2.5 border border-white text-white text-[0.75rem] font-mono-display tracking-wider hover:bg-white hover:text-black transition-colors duration-150"
          >
            View Projects
          </button>
          <a
            href="https://github.com/ishaanghatak2006-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#1f1f1f] text-[#e8e8e8] text-[0.75rem] font-mono-display tracking-wider hover:border-white hover:text-white transition-colors duration-150 flex items-center gap-2"
            onClick={() => play?.('click')}
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/krakenwagen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#1f1f1f] text-[#e8e8e8] text-[0.75rem] font-mono-display tracking-wider hover:border-white hover:text-white transition-colors duration-150 flex items-center gap-2"
            onClick={() => play?.('click')}
          >
            <SiLeetcode size={14} /> LeetCode
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#1f1f1f] text-[#e8e8e8] text-[0.75rem] font-mono-display tracking-wider hover:border-white hover:text-white transition-colors duration-150 flex items-center gap-2"
            onClick={() => play?.('click')}
          >
            <FiDownload size={14} /> Resume ↓
          </a>
        </motion.div>
      </div>
    </div>
  );
}