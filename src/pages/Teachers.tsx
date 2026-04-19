import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, MessageCircle, GraduationCap, Search, UserX } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const teachers = [
  {
    name: 'Drs. Ahmad Subarjo, M.Pd',
    role: 'Kepala Sekolah',
    subject: 'Manajemen Pendidikan',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'Berpengalaman lebih dari 20 tahun dalam memimpin institusi pendidikan dasar.',
    whatsapp: '6281234567890',
    instagram: 'ahmad_subarjo',
    email: 'ahmad@kejuron.sch.id'
  },
  {
    name: 'Hendra Wijaya, S.Pd',
    role: 'Guru Kelas 6',
    subject: 'Wali Kelas 6',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Membimbing siswa tingkat akhir untuk persiapan melanjutkan ke jenjang menengah.',
    whatsapp: '6281234567891',
    instagram: 'hendra_wijaya',
    email: 'hendra@kejuron.sch.id'
  },
  {
    name: 'Siti Aminah, S.Pd',
    role: 'Guru Kelas 5',
    subject: 'Wali Kelas 5',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Berdedikasi dalam mengembangkan potensi akademik dan karakter siswa kelas 5.',
    whatsapp: '6281234567892',
    instagram: 'siti_aminah',
    email: 'siti@kejuron.sch.id'
  },
  {
    name: 'Budi Santoso, S.Pd',
    role: 'Guru Kelas 4',
    subject: 'Wali Kelas 4',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Menerapkan metode pembelajaran aktif untuk siswa kelas 4.',
    whatsapp: '6281234567893',
    instagram: 'budi_santoso',
    email: 'budi@kejuron.sch.id'
  },
  {
    name: 'Dewi Lestari, S.Pd',
    role: 'Guru Kelas 3',
    subject: 'Wali Kelas 3',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Menciptakan suasana belajar yang menyenangkan dan kreatif bagi siswa kelas 3.',
    whatsapp: '6281234567894',
    instagram: 'dewi_lestari',
    email: 'dewi@kejuron.sch.id'
  },
  {
    name: 'Rina Kartika, S.Pd',
    role: 'Guru Kelas 2',
    subject: 'Wali Kelas 2',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Fokus pada pengembangan literasi dan numerasi dasar siswa kelas 2.',
    whatsapp: '6281234567895',
    instagram: 'rina_kartika',
    email: 'rina@kejuron.sch.id'
  },
  {
    name: 'Ani Maryani, S.Pd',
    role: 'Guru Kelas 1',
    subject: 'Wali Kelas 1',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    bio: 'Membantu transisi siswa dari taman kanak-kanak ke sekolah dasar dengan penuh kasih.',
    whatsapp: '6281234567896',
    instagram: 'ani_maryani',
    email: 'ani@kejuron.sch.id'
  },
  {
    name: 'Agus Setiawan, S.Pd',
    role: 'Guru Mapel PJOK',
    subject: 'Pendidikan Jasmani',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Mengembangkan kebugaran fisik dan sportivitas siswa melalui olahraga.',
    whatsapp: '6281234567897',
    instagram: 'agus_setiawan',
    email: 'agus@kejuron.sch.id'
  },
  {
    name: 'H. M. Yusuf, S.Ag',
    role: 'Guru Mapel PAI',
    subject: 'Pendidikan Agama Islam',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop',
    bio: 'Membentuk akhlakul karimah dan pemahaman agama Islam yang moderat.',
    whatsapp: '6281234567898',
    instagram: 'yusuf_sai',
    email: 'yusuf@kejuron.sch.id'
  },
  {
    name: 'Christian, S.Th',
    role: 'Guru Mapel PAK',
    subject: 'Pendidikan Agama Kristen',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Membimbing kerohanian siswa melalui nilai-nilai kasih dalam ajaran Kristen.',
    whatsapp: '6281234567899',
    instagram: 'christian_pak',
    email: 'christian@kejuron.sch.id'
  },
  {
    name: 'Eko Prasetyo, S.Kom',
    role: 'Tendik Operator',
    subject: 'Dapodik & Administrasi',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Mengelola data sekolah dan sistem informasi pendidikan dengan akurat.',
    whatsapp: '6281234567900',
    instagram: 'eko_prasetyo',
    email: 'eko@kejuron.sch.id'
  },
  {
    name: 'Maya Sari, S.I.Pust',
    role: 'Tendik Perpustakaan',
    subject: 'Manajemen Perpustakaan',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Meningkatkan minat baca siswa melalui pengelolaan perpustakaan yang modern.',
    whatsapp: '6281234567901',
    instagram: 'maya_sari',
    email: 'maya@kejuron.sch.id'
  },
  {
    name: 'Pak Jono',
    role: 'Tendik Kebersihan',
    subject: 'Fasilitas & Lingkungan',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop',
    bio: 'Menjaga kebersihan dan kenyamanan lingkungan sekolah demi kesehatan bersama.',
    whatsapp: '6281234567902',
    instagram: 'jono_cleaning',
    email: 'jono@kejuron.sch.id'
  }
];

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Guru & Tenaga Kependidikan</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Bertemu dengan para profesional yang berdedikasi membimbing putra-putri Anda menuju masa depan yang cerah.</p>
      </section>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative group">
        <Search className={searchTerm ? "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" : "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"} />
        <Input 
          placeholder="Cari nama guru atau mata pelajaran..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-6 rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-emerald-500 shadow-sm transition-all focus:border-emerald-500"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500"
          >
            Bersihkan
          </button>
        )}
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher, idx) => (
              <motion.div
                key={teacher.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border-2 border-slate-50 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-pink-500 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="h-40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                    alt="School Background" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800 via-transparent to-transparent z-20" />
                </div>
                
                <div className="relative px-8 pb-8">
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl border-4 border-white dark:border-slate-800 overflow-hidden bg-slate-200 shadow-2xl z-30 group-hover:rotate-3 transition-transform">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="pt-20 text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-pink-400 transition-colors">
                        {teacher.name}
                      </h3>
                      <div className="text-[10px] font-black text-emerald-600 dark:text-pink-500 uppercase tracking-[0.2em] mt-1">
                        {teacher.role}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl">
                      <GraduationCap className="w-4 h-4 text-emerald-500 dark:text-pink-500" />
                      {teacher.subject}
                    </div>
      
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      "{teacher.bio}"
                    </p>
      
                    <div className="pt-4 flex items-center justify-center gap-4 border-t border-slate-100 dark:border-slate-700">
                      <a 
                        href={`https://wa.me/${teacher.whatsapp}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 transition-colors" 
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <a 
                        href={`https://instagram.com/${teacher.instagram}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-pink-600 transition-colors" 
                        title="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${teacher.email}`} 
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 transition-colors" 
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mb-4">
                <UserX className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Guru Tidak Ditemukan</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Maaf, kami tidak menemukan guru atau staf dengan kata kunci <span className="text-emerald-500 font-black">"{searchTerm}"</span>.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="mt-4 rounded-xl border-slate-200 dark:border-slate-700 dark:text-slate-300"
              >
                Reset Pencarian
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
