import Window from '../components/Window';

export default function About() {
  return (
    <Window title="about.md" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <p className="font-mono-display text-[0.75rem] text-[#555555] mb-2">{'>'} whoami</p>
            <p className="text-[#e8e8e8] font-sans-body text-[0.9rem] leading-relaxed">
              Ishaan<br />
              B.Tech Computer Science & Engineering<br />
              <span className="text-[#555555]">IIT Jodhpur · Expected 2027</span>
            </p>
          </div>
          <div>
            <p className="font-mono-display text-[0.75rem] text-[#555555] mb-2">{'>'} motivation</p>
            <p className="text-[#e8e8e8] font-sans-body text-[0.9rem] leading-relaxed">
              I started building software because I wanted to create things that are actually
              worthwhile — products that make people's lives easier while challenging me to grow
              as an engineer. Every project is an opportunity to learn something new.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 content-start">
          <div className="border border-[#1f1f1f] p-4 text-center">
            <p className="font-mono-display text-white text-xl font-bold">8.84</p>
            <p className="font-mono-display text-[0.6rem] text-[#555555] tracking-wider uppercase mt-1">CGPA (after 4th sem)</p>
          </div>
          <div className="border border-[#1f1f1f] p-4 text-center">
            <p className="font-mono-display text-white text-xl font-bold">3rd</p>
            <p className="font-mono-display text-[0.6rem] text-[#555555] tracking-wider uppercase mt-1">Year</p>
          </div>
          <div className="col-span-2 border border-[#1f1f1f] p-4">
            <p className="font-mono-display text-white text-sm font-bold">Focus</p>
            <p className="text-[#e8e8e8] font-mono-display text-[0.7rem] mt-1">
              SWE · Full Stack · AI/ML
            </p>
          </div>
        </div>
      </div>
    </Window>
  );
}