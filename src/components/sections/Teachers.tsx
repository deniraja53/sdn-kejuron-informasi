import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teachers = [
  {
    name: 'Drs. Ahmad Subarjo, M.Pd',
    role: 'Kepala Sekolah',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'Memimpin dengan visi teknologi.'
  },
  {
    name: 'Hendra Wijaya, S.Pd',
    role: 'Guru Kelas 6',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Dedikasi untuk prestasi siswa.'
  }
];

export function Teachers() {
  return (
    <div className="bento-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="bento-section-title mb-0">Guru Unggulan</div>
        <Link to="/guru" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-1">
          Semua Guru <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {teachers.map((teacher, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-4 rounded-2xl bg-black/40 border-2 border-primary/20 group hover:border-primary/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border-2 border-primary/30">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight uppercase tracking-tighter">{teacher.name}</div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest">{teacher.role}</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 italic font-medium">"{teacher.bio}"</p>
            <div className="flex items-center gap-2 pt-2 border-t-2 border-primary/20">
              <button className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-primary transition-colors border-2 border-primary/10" title="WhatsApp">
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-primary transition-colors border-2 border-primary/10" title="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-primary transition-colors border-2 border-primary/10" title="Email">
                <Mail className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
