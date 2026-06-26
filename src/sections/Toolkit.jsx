import Window from '../components/Window';
import { toolkit } from '../constants/toolkit';

export default function Toolkit() {
  return (
    <Window title="toolkit.json" id="toolkit">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toolkit.map((group) => (
          <div key={group.group} className="border border-[#1f1f1f] p-4">
            <p className="font-mono-display text-[0.65rem] text-[#555555] tracking-wider uppercase mb-3">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 border border-[#1f1f1f] text-[0.7rem] font-mono-display text-[#e8e8e8]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}