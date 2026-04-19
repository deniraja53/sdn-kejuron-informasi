import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Feedback() {
  return (
    <div className="bento-card h-full bg-accent/10 border-2 border-accent/40 text-white flex flex-col shadow-[0_0_20px_rgba(0,243,255,0.1)]">
      <div className="bento-section-title !before:bg-white !text-accent">Aspirasi</div>
      <h3 className="text-lg font-black mt-1 uppercase tracking-tighter">Kritik & Saran</h3>
      <p className="text-[11px] my-2 leading-tight text-slate-300 font-medium">Bantu kami menjadi lebih baik untuk buah hati Anda.</p>
      <Link 
        to="/kritik-saran"
        className="mt-auto bg-accent/20 border-2 border-accent/40 p-2 rounded-xl text-[11px] text-center font-black uppercase tracking-widest cursor-pointer hover:bg-accent/30 transition-all"
      >
        Kirim Pesan
      </Link>
    </div>
  );
}
