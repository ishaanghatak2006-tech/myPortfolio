import Window from '../components/Window';
import { FiExternalLink } from 'react-icons/fi';

const difficultyStats = [
  { label: 'Easy', count: 48, color: '#00b8a3' },
  { label: 'Medium', count: 226, color: '#ffc01e' },
  { label: 'Hard', count: 78, color: '#ff375f' },
];

const totalSolved = difficultyStats.reduce((sum, stat) => sum + stat.count, 0);
const circumference = 2 * Math.PI * 42;

export default function LeetCode() {
  let dashOffset = 0;

  return (
    <Window title="leetcode_stats.json" id="leetcode">
      <div className="space-y-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:items-center">
          <div className="mx-auto flex w-full max-w-[240px] justify-center">
            <div className="relative h-52 w-52">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                <circle cx="60" cy="60" r="42" fill="none" stroke="#1f1f1f" strokeWidth="12" />
                {difficultyStats.map((stat) => {
                  const segmentLength = (stat.count / totalSolved) * circumference;
                  const segment = (
                    <circle
                      key={stat.label}
                      cx="60"
                      cy="60"
                      r="42"
                      fill="none"
                      stroke={stat.color}
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                      strokeDashoffset={-dashOffset}
                    />
                  );
                  dashOffset += segmentLength;
                  return segment;
                })}
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-mono-display text-[0.65rem] uppercase tracking-[0.28em] text-[#555555]">
                  Solved
                </span>
                <span className="font-mono-display text-4xl font-bold text-white">{totalSolved}</span>
                <span className="font-mono-display text-[0.7rem] text-[#8a8a8a]">Question Distribution</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div>
              <p className="font-mono-display text-white text-2xl font-bold">{totalSolved} Problems Solved</p>
              <p className="mt-2 font-mono-display text-[0.72rem] uppercase tracking-[0.28em] text-[#555555]">
                LeetCode question distribution
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {difficultyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#1f1f1f] bg-[#111111] px-4 py-3"
                >
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stat.color }} />
                    <span className="font-mono-display text-[0.72rem] uppercase tracking-[0.24em] text-[#8a8a8a]">
                      {stat.label}
                    </span>
                  </div>
                  <p className="mt-3 font-mono-display text-2xl font-bold text-white">{stat.count}</p>
                  <p className="mt-1 font-mono-display text-[0.7rem] text-[#555555]">
                    {Math.round((stat.count / totalSolved) * 100)}% of solved set
                  </p>
                </div>
              ))}
            </div>

            <div>
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
          </div>
        </div>

        <div className="text-center md:text-left">
          <a
            href="https://leetcode.com/u/krakenwagen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8] hover:border-white transition-colors duration-150"
          >
            <FiExternalLink size={14} /> View Profile → leetcode.com/u/krakenwagen
          </a>
        </div>
      </div>
    </Window>
  );
}
