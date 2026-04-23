import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: <Target className="w-6 h-6 text-emerald-600" />,
    title: 'Visi',
    description: 'Menjadi lembaga pendidikan dasar yang unggul dalam teknologi, berwawasan global, dan berakar pada nilai-nilai karakter bangsa.'
  },
  {
    icon: <Eye className="w-6 h-6 text-pink-600" />,
    title: 'Misi',
    description: 'Menyelenggarakan pembelajaran inovatif berbasis digital, mengembangkan potensi minat bakat siswa, dan menanamkan budi pekerti luhur.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: 'Nilai Inti',
    description: 'Integritas, Kreativitas, Kolaborasi, dan Empati menjadi landasan setiap langkah kami dalam mendidik siswa.'
  }
];

export function Profile() {
  return (
    <div className="bento-card h-full">
      <div className="bento-section-title">Profil Sekolah</div>
      <div className="grid md:grid-cols-2 gap-6 flex-1 items-center">
        <div>
          <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">
            Visi & Misi Kami
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Menjadi lembaga pendidikan dasar yang unggul dalam teknologi,
            berwawasan global, dan berakar pada nilai-nilai karakter bangsa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-primary/5 p-3 rounded-xl border-2 border-primary/30 shadow-[0_0_15px_rgba(255,0,127,0.1)]">
            <div className="text-primary font-black text-2xl drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
              B
            </div>
            <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
              Akreditasi
            </div>
          </div>
          <div className="bg-accent/5 p-3 rounded-xl border-2 border-accent/30 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
            <div className="text-accent font-black text-2xl drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
              20+
            </div>
            <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
              Ekskul
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
