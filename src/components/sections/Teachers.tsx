import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teachers = [
  {
    name: 'Drs. Ahmad Subarjo, M.Pd',
    role: 'Kepala Sekolah',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    specialty: 'Manajemen Pendidikan'
  },
  {
    name: 'Hendra Wijaya, S.Pd',
    role: 'Guru Kelas 6',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    specialty: 'Wali Kelas 6'
  },
  {
    name: 'Siti Aminah, S.Pd',
    role: 'Guru Kelas 5',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    specialty: 'Wali Kelas 5'
  },
  {
    name: 'Budi Santoso, S.Pd',
    role: 'Guru Kelas 4',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Wali Kelas 4'
  }
];

export function Teachers() {
  return (
    <div className="bento-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="bento-section-title mb-0">Guru & Pengajar</div>
        <Link to="/guru" className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline flex items-center gap-1">
          Lihat Semua <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="flex flex-row items-center gap-6 flex-1">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 leading-tight">42 Tenaga Pendidik</h3>
          <p className="text-[11px] text-muted-foreground mt-1">Profesional, Ramah, & Bersertifikasi</p>
        </div>
        <div className="flex -space-x-3">
          {teachers.map((teacher, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition-colors"
            >
              <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
          <Link to="/guru" className="w-12 h-12 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white hover:bg-emerald-700 transition-colors">
            +38
          </Link>
        </div>
      </div>
    </div>
  );
}
