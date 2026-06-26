import Window from '../components/Window';
import { currently } from '../constants/currently';

export default function CurrentlySection() {
  return (
    <Window title="status.live" id="currently">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="font-mono-display text-[0.65rem] text-[#555555] tracking-wider">LIVE</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currently.map((item) => (
          <div key={item.label} className="border border-[#1f1f1f] p-4">
            <div className="flex items-center gap-2 mb-2">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-6 h-6 object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="text-base">{item.icon}</span>
              )}
              <span className="font-mono-display text-[0.6rem] text-[#555555] tracking-wider uppercase">
                {item.label}
              </span>
            </div>
            <p className="font-mono-display text-[0.85rem] text-white mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </Window>
  );
}