import { useState, useEffect, lazy, Suspense } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import Sidebar from './components/Sidebar';
import MobileDrawer from './components/MobileDrawer';
import CustomCursor from './components/CustomCursor';
import { useActiveSection } from './hooks/useActiveSection';
import { useSound } from './hooks/useSound';

const BootScreen = lazy(() => import('./components/BootScreen'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Toolkit = lazy(() => import('./sections/Toolkit'));
const LeetCode = lazy(() => import('./sections/LeetCode'));
const GitHub = lazy(() => import('./sections/GitHub'));
const CurrentlySection = lazy(() => import('./sections/Currently'));
const Timeline = lazy(() => import('./sections/Timeline'));
const Personal = lazy(() => import('./sections/Personal'));
const Contact = lazy(() => import('./sections/Contact'));

const SECTION_IDS = ['about', 'projects', 'toolkit', 'leetcode', 'timeline', 'currently', 'contact'];

function SectionFallback() {
  return (
    <div className="border border-[#1f1f1f] bg-[#0d0d0d] p-6">
      <div className="animate-pulse space-y-3">
        <div className="h-4 bg-[#111111] w-32" />
        <div className="h-3 bg-[#0d0d0d] w-48" />
      </div>
    </div>
  );
}

export default function App() {
  const [bootComplete, setBootComplete] = useState(() => {
    try {
      return sessionStorage.getItem('ishaanos-booted') === 'true';
    } catch {
      return false;
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { enabled: soundEnabled, toggle: toggleSound, play } = useSound();

  const handleBootComplete = () => {
    try {
      sessionStorage.setItem('ishaanos-booted', 'true');
    } catch {}
    setBootComplete(true);
  };

  const handleNavClick = (label) => {
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    play?.('click');
  };

  return (
    <>
      <StarfieldCanvas />
      <CustomCursor />

      {!bootComplete && (
        <Suspense fallback={null}>
          <BootScreen onComplete={handleBootComplete} />
        </Suspense>
      )}

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 bg-black border-b border-[#1f1f1f]">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white font-mono-display text-lg"
          aria-label="Open menu"
        >
          ≡
        </button>
        <span className="font-mono-display text-[0.7rem] text-[#555555] tracking-wider">
          ISHAANOS v1.0
        </span>
        <div />
      </div>

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        play={play}
      />

      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavClick}
        soundEnabled={soundEnabled}
        onSoundToggle={toggleSound}
        play={play}
      />

      <main
        className="relative z-10 min-h-screen lg:ml-[220px] pt-14 lg:pt-0"
        style={{ zIndex: 1 }}
      >
        <Suspense fallback={<SectionFallback />}>
          <Hero play={play} />
        </Suspense>

        <div className="px-4 md:px-8 lg:px-12 pb-16 space-y-12 max-w-4xl">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Toolkit />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <LeetCode />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <GitHub />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CurrentlySection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Timeline />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Personal />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </div>

        <footer className="px-4 md:px-8 lg:px-12 py-6 border-t border-[#1f1f1f]">
          <p className="text-center text-[0.65rem] font-mono-display text-[#333333] tracking-wider">
            Built one commit at a time.   ·   © 2025 Ishaan
          </p>
        </footer>
      </main>
    </>
  );
}