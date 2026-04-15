import { Users, GraduationCap, School, Trophy } from 'lucide-react';

const stats = [
  { label: 'Siswa Aktif', value: '850+', icon: <Users className="w-5 h-5 text-emerald-600" /> },
  { label: 'Tenaga Pengajar', value: '42', icon: <GraduationCap className="w-5 h-5 text-pink-600" /> },
  { label: 'Ruang Kelas', value: '24', icon: <School className="w-5 h-5 text-emerald-600" /> },
  { label: 'Prestasi Nasional', value: '120+', icon: <Trophy className="w-5 h-5 text-pink-600" /> },
];

export function Stats() {
  return (
    <div className="bento-card h-full">
      <div className="bento-section-title">Statistik Sekolah</div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md transition-all">
            <div className="mb-2 p-2 bg-white rounded-lg shadow-sm">
              {stat.icon}
            </div>
            <div className="text-xl font-black text-slate-900">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
