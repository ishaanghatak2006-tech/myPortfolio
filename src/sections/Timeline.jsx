import Window from '../components/Window';
import { timeline } from '../constants/timeline';

export default function Timeline() {
  return (
    <Window title="journey.log" id="timeline">
      <div className="space-y-0">
        {timeline.map((item, idx) => (
          <div key={item.year} className="relative pl-8 pb-6 last:pb-0">
            {/* Vertical line */}
            {idx < timeline.length - 1 && (
              <div className="absolute left-[11px] top-4 bottom-0 w-px bg-[#1f1f1f]" />
            )}
            {/* Year node */}
            <div className="absolute left-0 top-1 flex items-center gap-2">
              <span className="block w-[3px] h-[3px] bg-[#555555]" />
            </div>

            <p className="font-mono-display text-[0.75rem] text-white font-bold mb-2">{item.year}  ──</p>
            <div className="space-y-1">
              {item.events.map((event, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#555555] font-mono-display text-[0.65rem] mt-0.5">
                    {i === 0 ? '├─' : '│'}
                  </span>
                  <span className="text-[0.8rem] text-[#e8e8e8] font-sans-body">{event}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}