import { Users, GraduationCap, School, Trophy } from "lucide-react";

const stats = [
  {
    label: "Siswa Aktif",
    value: "55+",
    icon: <Users className="w-5 h-5 text-primary" />,
  },
  {
    label: "Tenaga Pengajar",
    value: "13",
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
  },
  {
    label: "Ruang Sekolah",
    value: "11",
    icon: <School className="w-5 h-5 text-primary" />,
  },
  {
    label: "Prestasi Nasional",
    value: "99+",
    icon: <Trophy className="w-5 h-5 text-accent" />,
  },
];

export function Stats() {
  return (
    <div className="bento-card h-full">
      <div className="bento-section-title">Statistik Sekolah</div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-black/40 border-2 border-primary/20 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-primary/10 hover:border-primary/40 transition-all group"
          >
            <div className="mb-2 p-2 bg-slate-950 rounded-lg shadow-sm border-2 border-primary/10 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {stat.value}
            </div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
