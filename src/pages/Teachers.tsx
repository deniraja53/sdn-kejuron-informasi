import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircle, GraduationCap, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const teachers = [
  {
    name: 'Drs. Ahmad Subarjo, M.Pd',
    role: 'Kepala Sekolah',
    subject: 'Manajemen Pendidikan',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'Berpengalaman lebih dari 20 tahun dalam memimpin institusi pendidikan dasar.'
  },
  {
    name: 'Hendra Wijaya, S.Pd',
    role: 'Guru Kelas 6',
    subject: 'Wali Kelas 6',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Membimbing siswa tingkat akhir untuk persiapan melanjutkan ke jenjang menengah.'
  },
  {
    name: 'Siti Aminah, S.Pd',
    role: 'Guru Kelas 5',
    subject: 'Wali Kelas 5',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Berdedikasi dalam mengembangkan potensi akademik dan karakter siswa kelas 5.'
  },
  {
    name: 'Budi Santoso, S.Pd',
    role: 'Guru Kelas 4',
    subject: 'Wali Kelas 4',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Menerapkan metode pembelajaran aktif untuk siswa kelas 4.'
  },
  {
    name: 'Dewi Lestari, S.Pd',
    role: 'Guru Kelas 3',
    subject: 'Wali Kelas 3',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Menciptakan suasana belajar yang menyenangkan dan kreatif bagi siswa kelas 3.'
  },
  {
    name: 'Rina Kartika, S.Pd',
    role: 'Guru Kelas 2',
    subject: 'Wali Kelas 2',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Fokus pada pengembangan literasi dan numerasi dasar siswa kelas 2.'
  },
  {
    name: 'Ani Maryani, S.Pd',
    role: 'Guru Kelas 1',
    subject: 'Wali Kelas 1',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    bio: 'Membantu transisi siswa dari taman kanak-kanak ke sekolah dasar dengan penuh kasih.'
  },
  {
    name: 'Agus Setiawan, S.Pd',
    role: 'Guru Mapel PJOK',
    subject: 'Pendidikan Jasmani',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Mengembangkan kebugaran fisik dan sportivitas siswa melalui olahraga.'
  },
  {
    name: 'H. M. Yusuf, S.Ag',
    role: 'Guru Mapel PAI',
    subject: 'Pendidikan Agama Islam',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop',
    bio: 'Membentuk akhlakul karimah dan pemahaman agama Islam yang moderat.'
  },
  {
    name: 'Christian, S.Th',
    role: 'Guru Mapel PAK',
    subject: 'Pendidikan Agama Kristen',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Membimbing kerohanian siswa melalui nilai-nilai kasih dalam ajaran Kristen.'
  },
  {
    name: 'Eko Prasetyo, S.Kom',
    role: 'Tendik Operator',
    subject: 'Dapodik & Administrasi',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Mengelola data sekolah dan sistem informasi pendidikan dengan akurat.'
  },
  {
    name: 'Maya Sari, S.I.Pust',
    role: 'Tendik Perpustakaan',
    subject: 'Manajemen Perpustakaan',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Meningkatkan minat baca siswa melalui pengelolaan perpustakaan yang modern.'
  },
  {
    name: 'Pak Jono',
    role: 'Tendik Kebersihan',
    subject: 'Fasilitas & Lingkungan',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop',
    bio: 'Menjaga kebersihan dan kenyamanan lingkungan sekolah demi kesehatan bersama.'
  }
];

export default function TeachersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900">Guru & Tenaga Kependidikan</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Bertemu dengan para profesional yang berdedikasi membimbing putra-putri Anda menuju masa depan yang cerah.</p>
      </section>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <Input 
          placeholder="Cari nama guru atau mata pelajaran..." 
          className="pl-12 py-6 rounded-2xl border-slate-200 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2rem] overflow-hidden border-2 border-slate-50 hover:border-emerald-500 shadow-sm hover:shadow-2xl transition-all group"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                alt="School Background" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-2xl border-4 border-white overflow-hidden bg-slate-200 shadow-lg z-10">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="pt-16 p-8 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {teacher.name}
                </h3>
                <div className="text-sm font-bold text-secondary uppercase tracking-wider mt-1">
                  {teacher.role}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-lg">
                <GraduationCap className="w-4 h-4 text-emerald-500" />
                Spesialis: {teacher.subject}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed italic">
                "{teacher.bio}"
              </p>

              <div className="pt-4 flex items-center gap-3 border-t border-slate-100">
                <button className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" title="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-pink-50 hover:text-pink-600 transition-colors" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" title="Email">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
