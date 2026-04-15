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
          <h3 className="text-xl font-bold text-slate-900 mb-2">Visi & Misi Kami</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Menjadi lembaga pendidikan dasar yang unggul dalam teknologi, berwawasan global, dan berakar pada nilai-nilai karakter bangsa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
            <div className="text-emerald-600 font-bold text-lg">A</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Akreditasi</div>
          </div>
          <div className="bg-pink-50 p-3 rounded-xl border border-pink-100">
            <div className="text-pink-600 font-bold text-lg">20+</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Ekskul</div>
          </div>
        </div>
      </div>
    </div>
  );
}
