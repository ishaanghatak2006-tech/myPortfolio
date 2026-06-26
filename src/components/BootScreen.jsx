import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: 'Initializing IshaanOS v1.0...', delay: 0 },
  { text: 'Loading kernel modules.............. OK', delay: 400 },
  { text: 'Mounting /projects.................. OK', delay: 800 },
  { text: 'Loading developer profile........... OK', delay: 1200 },
  { text: 'Establishing connection............. OK', delay: 1600 },
  { text: '', delay: 2000 },
  { text: 'Welcome, Ishaan.', delay: 2100 },
];

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers = bootLines.map((line) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay)
    );

    const completeTimer = setTimeout(() => {
      setShowCursor(false);
      setTimeout(onComplete, 500);
    }, 2800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="font-mono-display text-[#e8e8e8] text-sm leading-relaxed">
          {visibleLines.map((line, i) => (
            <div key={i} className="mb-1">
              {line}
              {i === visibleLines.length - 1 && showCursor && line === 'Welcome, Ishaan.' && (
                <span className="animate-pulse ml-0.5">_</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}