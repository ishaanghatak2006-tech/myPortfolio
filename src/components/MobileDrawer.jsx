import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem';

const navItems = [
  'About', 'Projects', 'Toolkit', 'LeetCode',
  'Timeline', 'Currently', 'Contact'
];

export default function MobileDrawer({ isOpen, onClose, activeSection, play }) {
  const handleNavClick = (label) => {
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    play?.('click');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-0 top-0 h-full w-[260px] bg-black border-r border-[#1f1f1f] z-50 lg:hidden flex flex-col"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-5 border-b border-[#1f1f1f]">
              <h1 className="font-mono-display text-white text-lg tracking-[0.3em]">ISHAAN</h1>
              <p className="font-mono-display text-[0.6rem] text-[#555555] mt-1 tracking-wider">
                dev@ishaanos:~$
              </p>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-0.5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavItem
                  key={item}
                  label={item}
                  isActive={activeSection === item.toLowerCase()}
                  onClick={handleNavClick}
                  onHover={() => play?.('tick')}
                />
              ))}
            </nav>
            <div className="px-4 py-4 border-t border-[#1f1f1f]">
              <a
                href="/resume_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-3 py-2 border border-[#1f1f1f] text-[#e8e8e8] hover:bg-[#111111] transition-colors duration-150 font-mono-display text-[0.65rem] tracking-wider"
                onClick={() => play?.('click')}
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}