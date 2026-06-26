import Window from '../components/Window';

export default function Personal() {
  return (
    <Window title="interests.txt" id="personal">
      <p className="font-mono-display text-[0.65rem] text-[#555555] tracking-wider uppercase mb-4">
        Things I enjoy:
      </p>
      <div className="space-y-2">
        <p className="text-[0.85rem] text-[#e8e8e8] font-sans-body">
          → Building software that solves real problems
        </p>
        <p className="text-[0.85rem] text-[#e8e8e8] font-sans-body">
          → Solving DSA problems (especially graph & DP)
        </p>
        <p className="text-[0.85rem] text-[#e8e8e8] font-sans-body">
          → Playing story-based games (God of War, etc.)
        </p>
        <p className="text-[0.85rem] text-[#e8e8e8] font-sans-body">
          → Listening to music while coding
        </p>
      </div>
    </Window>
  );
}