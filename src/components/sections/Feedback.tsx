import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Feedback() {
  return (
    <div className="bento-card h-full bg-accent border-none text-white flex flex-col">
      <div className="bento-section-title !before:bg-white !text-white/80">Aspirasi</div>
      <h3 className="text-lg font-bold mt-1">Kritik & Saran</h3>
      <p className="text-[11px] my-2 leading-tight opacity-80">Bantu kami menjadi lebih baik untuk buah hati Anda.</p>
      <Link 
        to="/kritik-saran"
        className="mt-auto bg-white/20 p-2 rounded-xl text-[11px] text-center font-bold cursor-pointer hover:bg-white/30 transition-colors"
      >
        Kirim Pesan
      </Link>
    </div>
  );
}
