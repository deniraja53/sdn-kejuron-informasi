import { Calendar, Trophy, Zap } from "lucide-react";

export function LatestActivity() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-primary/10 rounded-lg border-2 border-primary/30">
          <Zap className="w-4 h-4 text-primary" />
        </div>
        <div className="text-[10px] font-black text-primary uppercase tracking-widest">
          Kegiatan Terbaru
        </div>
      </div>
      <h3 className="text-sm font-black text-white mb-2 uppercase tracking-tighter">
        Workshop Digital Parenting
      </h3>
      <p className="text-xs text-slate-300 line-clamp-2 font-medium">
        Mengundang seluruh orang tua siswa untuk hadir dalam workshop
        mendampingi anak di era digital.
      </p>
    </div>
  );
}

export function LatestAnnouncement() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-accent/10 rounded-lg border-2 border-accent/30">
          <Calendar className="w-4 h-4 text-accent" />
        </div>
        <div className="text-[10px] font-black text-accent uppercase tracking-widest">
          Pengumuman
        </div>
      </div>
      <h3 className="text-sm font-black text-white mb-2 uppercase tracking-tighter">
        PPDB 2026/2026 Dibuka
      </h3>
      <p className="text-xs text-slate-300 line-clamp-2 font-medium">
        Segera daftarkan putra-putri Anda untuk mendapatkan kuota terbatas.
      </p>
    </div>
  );
}

export function SchoolAchievement() {
  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-primary/10 rounded-lg border-2 border-primary/30">
          <Trophy className="w-4 h-4 text-primary" />
        </div>
        <div className="text-[10px] font-black text-primary uppercase tracking-widest">
          Prestasi
        </div>
      </div>
      <h3 className="text-sm font-black text-white mb-2 uppercase tracking-tighter">
        ADIWIYATA NASIONAL
      </h3>
      <p className="text-xs text-slate-300 line-clamp-2 font-medium">
        Tim Adiwiyata SDN KEJURON berhasil meraih Melaju ke tingkat Nasional dan
        siap untuk menuju Adiwiyata Mandiri
      </p>
    </div>
  );
}
