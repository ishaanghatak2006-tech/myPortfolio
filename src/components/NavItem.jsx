import { motion } from 'framer-motion';

export default function NavItem({ label, isActive, onClick, onHover }) {
  return (
    <motion.button
      onClick={() => onClick(label)}
      onMouseEnter={() => onHover?.()}
      className={`w-full text-left py-1.5 transition-colors duration-150 font-mono-display text-[0.75rem] tracking-wide ${
        isActive
          ? 'text-white'
          : 'text-[#555555] hover:text-[#e8e8e8]'
      }`}
      style={{ outline: 'none' }}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
    >
      <span className="inline-block w-4">{isActive ? '▸' : ''}</span>
      {label}
    </motion.button>
  );
}