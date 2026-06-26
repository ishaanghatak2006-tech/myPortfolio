import Window from '../components/Window';
import { FiExternalLink } from 'react-icons/fi';

export default function LeetCode() {
  return (
    <Window title="leetcode_stats.json" id="leetcode">
      <div className="text-center md:text-left">
        <p className="font-mono-display text-white text-2xl font-bold mb-2">320+ Problems Solved</p>

        <div className="mt-4 mb-6">
          <p className="font-mono-display text-[0.65rem] text-[#555555] tracking-wider uppercase mb-2">
            Topics
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Dynamic Programming', 'Graphs', 'Arrays', 'Strings', 'Linked Lists', 'Binary Search', 'Sliding Window'].map(
              (topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8]"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>

        <a
          href="https://leetcode.com/u/krakenwagen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
        >
          <FiExternalLink size={14} /> View Profile → leetcode.com/u/krakenwagen
        </a>
      </div>
    </Window>
  );
}