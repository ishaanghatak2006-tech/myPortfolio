import Window from '../components/Window';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function GitHub() {
  return (
    <Window title="git_log --graph" id="github">
      <div className="space-y-4 text-center">
        <img
          src="https://ghchart.rshah.org/ishaanghatak2006-tech"
          alt="GitHub contribution graph showing commit activity"
          loading="lazy"
          className="w-full max-w-2xl mx-auto"
          style={{ filter: 'invert(0.85)' }}
        />
        <p className="text-[0.7rem] font-mono-display text-[#555555]">
          "Building consistently, one commit at a time."
        </p>
        <a
          href="https://github.com/ishaanghatak2006-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
        >
          <FiGithub size={14} /> View GitHub Profile
        </a>
      </div>
    </Window>
  );
}