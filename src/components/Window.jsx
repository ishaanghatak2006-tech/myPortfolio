import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

export default function Window({ title, id, className = '', children }) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`border border-[#1f1f1f] bg-[#0d0d0d] ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1f1f1f] bg-[#0d0d0d]">
        <span className="text-[0.7rem] font-mono-display font-medium text-[#555555] tracking-wide uppercase">
          {title}
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="block w-3 h-3 rounded-full border border-[#1f1f1f] bg-transparent" />
          <span className="block w-3 h-3 rounded-full border border-[#1f1f1f] bg-transparent" />
          <span className="block w-3 h-3 rounded-full border border-[#1f1f1f] bg-transparent" />
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </motion.section>
  );
}