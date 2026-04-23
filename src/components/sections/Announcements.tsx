import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    date: "15 April 2025",
    title: "Pendaftaran Siswa Baru Tahun Ajaran 2025/2026 Telah Dibuka",
    category: "Pendaftaran",
    description:
      "Segera daftarkan putra-putri Anda untuk mendapatkan kuota terbatas dan potongan biaya pendaftaran awal.",
  },
  {
    date: "10 April 2024",
    title: "Juara Harapan Lomba Hadroh",
    category: "Prestasi",
    description:
      'Tim Hadroh SDN KEJURON berhasil meraih Juara Harapan dalam kompetisi "Hari Santri"yang diselenggarakan oleh Pemerintah Kota Madiun.',
  },
  {
    date: "05 April 2024",
    title: "Workshop Digital Parenting untuk Orang Tua",
    category: "Kegiatan",
    description:
      "Mengundang seluruh orang tua siswa untuk hadir dalam workshop mendampingi anak di era digital.",
  },
];

export function Announcements() {
  return (
    <div className="bento-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="bento-section-title mb-0">Pengumuman</div>
        <Link
          to="/pengumuman"
          className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-4 flex-1">
        {news.slice(0, 2).map((item, idx) => (
          <div
            key={idx}
            className="pb-3 border-b-2 border-primary/20 last:border-0"
          >
            <div className="text-[10px] text-accent font-black uppercase tracking-widest mb-1">
              {item.date}
            </div>
            <div className="text-sm font-black text-white leading-tight uppercase tracking-tighter">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
