import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
  {
    date: '15 April 2024',
    title: 'Pendaftaran Siswa Baru Tahun Ajaran 2024/2025 Telah Dibuka',
    category: 'Pendaftaran',
    description: 'Segera daftarkan putra-putri Anda untuk mendapatkan kuota terbatas dan potongan biaya pendaftaran awal.'
  },
  {
    date: '10 April 2024',
    title: 'Juara 1 Lomba Robotik Tingkat Provinsi',
    category: 'Prestasi',
    description: 'Tim Robotik SDN KEJURON berhasil meraih medali emas dalam kompetisi "Young Innovator Challenge 2024".'
  },
  {
    date: '05 April 2024',
    title: 'Workshop Digital Parenting untuk Orang Tua',
    category: 'Kegiatan',
    description: 'Mengundang seluruh orang tua siswa untuk hadir dalam workshop mendampingi anak di era digital.'
  }
];

export function Announcements() {
  return (
    <div className="bento-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="bento-section-title mb-0">Pengumuman</div>
        <Link to="/pengumuman" className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline">
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-4 flex-1">
        {news.slice(0, 2).map((item, idx) => (
          <div key={idx} className="pb-3 border-b border-slate-100 last:border-0">
            <div className="text-[10px] text-secondary font-bold uppercase mb-1">{item.date}</div>
            <div className="text-sm font-bold text-slate-900 leading-tight">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
