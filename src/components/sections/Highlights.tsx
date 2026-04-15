import { Calendar, Trophy, Zap } from 'lucide-react';

export function LatestActivity() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-emerald-100 rounded-lg">
          <Zap className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Kegiatan Terbaru</div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-2">Workshop Digital Parenting</h3>
      <p className="text-xs text-slate-500 line-clamp-2">Mengundang seluruh orang tua siswa untuk hadir dalam workshop mendampingi anak di era digital.</p>
    </div>
  );
}

export function LatestAnnouncement() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-pink-100 rounded-lg">
          <Calendar className="w-4 h-4 text-pink-600" />
        </div>
        <div className="text-[10px] font-bold text-pink-600 uppercase tracking-wider">Pengumuman</div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-2">PPDB 2024/2025 Dibuka</h3>
      <p className="text-xs text-slate-500 line-clamp-2">Segera daftarkan putra-putri Anda untuk mendapatkan kuota terbatas dan potongan biaya.</p>
    </div>
  );
}

export function SchoolAchievement() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-emerald-100 rounded-lg">
          <Trophy className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Prestasi</div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-2">Juara 1 Robotik Provinsi</h3>
      <p className="text-xs text-slate-500 line-clamp-2">Tim Robotik SDN KEJURON berhasil meraih medali emas dalam kompetisi Young Innovator 2024.</p>
    </div>
  );
}
