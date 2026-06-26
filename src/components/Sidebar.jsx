import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import NavItem from './NavItem';
import { staggerContainer, staggerItem } from '../animations/variants';

const navItems = [
  'About', 'Projects', 'Toolkit', 'LeetCode',
  'Timeline', 'Currently', 'Contact'
];

export default function Sidebar({ activeSection, onNavigate, soundEnabled, onSoundToggle, play }) {
  const handleNavClick = (label) => {
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    play?.('click');
  };

  const handleDownloadResume = () => {
    play?.('click');
    window.open('/resume_final.pdf', '_blank');
  };

  return (
    <motion.aside
      className="fixed left-0 top-0 h-full w-[220px] border-r border-[#1f1f1f] bg-black z-30 flex flex-col hidden lg:flex"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="p-5 border-b border-[#1f1f1f]">
        <h1 className="font-mono-display text-white text-lg tracking-[0.3em]">ISHAAN</h1>
        <p className="font-mono-display text-[0.6rem] text-[#555555] mt-1 tracking-wider">
          dev@ishaanos:~$
        </p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-0.5" aria-label="Main navigation">
        {navItems.map((item) => (
          <motion.div key={item} variants={staggerItem}>
            <NavItem
              label={item}
              isActive={activeSection === item.toLowerCase()}
              onClick={handleNavClick}
              onHover={() => play?.('tick')}
            />
          </motion.div>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-[#1f1f1f] space-y-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onSoundToggle}
            className="text-[#555555] hover:text-[#e8e8e8] transition-colors duration-150"
            aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
            onMouseEnter={() => play?.('tick')}
          >
            {soundEnabled ? <FiVolume2 size={16} /> : <FiVolumeX size={16} />}
          </button>
          <a
            href="https://github.com/ishaanghatak2006-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555555] hover:text-[#e8e8e8] transition-colors duration-150"
            aria-label="GitHub profile"
            onMouseEnter={() => play?.('tick')}
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://leetcode.com/u/krakenwagen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555555] hover:text-[#e8e8e8] transition-colors duration-150"
            aria-label="LeetCode profile"
            onMouseEnter={() => play?.('tick')}
          >
            <SiLeetcode size={15} />
          </a>
        </div>

        <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 w-full px-3 py-2 border border-[#1f1f1f] text-[#e8e8e8] hover:bg-[#111111] transition-colors duration-150 font-mono-display text-[0.65rem] tracking-wider"
        >
          <FiDownload size={14} />
          Resume ↓
        </button>
      </div>
    </motion.aside>
  );
}