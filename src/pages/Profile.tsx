import { motion } from 'motion/react';
import { Target, Eye, Award, History, Users, Building2 } from 'lucide-react';

const visionMission = [
  {
    title: 'Visi',
    icon: <Eye className="w-8 h-8 text-emerald-600" />,
    description: 'Menjadi lembaga pendidikan dasar yang unggul dalam teknologi, berkarakter mulia, dan berwawasan global.'
  },
  {
    title: 'Misi',
    icon: <Target className="w-8 h-8 text-pink-600" />,
    points: [
      'Menyelenggarakan pendidikan berbasis teknologi informasi modern.',
      'Membentuk karakter siswa yang religius, jujur, dan disiplin.',
      'Mengembangkan potensi akademik dan non-akademik secara optimal.',
      'Membangun jejaring kerjasama pendidikan tingkat internasional.'
    ]
  }
];

const facilities = [
  {
    title: 'Laboratorium Komputer',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    desc: 'Dilengkapi dengan perangkat terbaru untuk mendukung pembelajaran coding dan desain.'
  },
  {
    title: 'Perpustakaan Digital',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop',
    desc: 'Ribuan koleksi buku fisik dan digital yang dapat diakses kapan saja.'
  },
  {
    title: 'Smart Classroom',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    desc: 'Ruang kelas interaktif dengan papan tulis digital dan koneksi internet cepat.'
  },
  {
    title: 'Area Olahraga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop',
    desc: 'Fasilitas olahraga lengkap untuk mendukung kesehatan dan bakat atletik siswa.'
  }
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Profil Sekolah</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Mengenal lebih dekat SDN KEJURON, tempat di mana masa depan dibangun dengan dedikasi dan inovasi.</p>
      </section>

      {/* Sejarah */}
      <section className="bento-card">
        <div className="flex items-center gap-3 mb-6">
          <History className="w-6 h-6 text-emerald-600 dark:text-pink-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sejarah Sekolah</h2>
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Didirikan pada tahun 2010, SDN KEJURON lahir dari visi untuk menciptakan sekolah dasar yang tidak hanya fokus pada akademik, tetapi juga pada penguasaan teknologi sejak dini. Berawal dari sebuah gedung kecil dengan 30 siswa, kini kami telah berkembang menjadi salah satu sekolah dasar unggulan yang melayani lebih dari 800 siswa dengan fasilitas kelas dunia.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
            Selama lebih dari satu dekade, kami terus berinovasi dalam kurikulum dan metode pengajaran, mengintegrasikan teknologi EdTech ke dalam setiap aspek pembelajaran tanpa melupakan pembentukan karakter dan nilai-nilai moral yang luhur.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="grid md:grid-cols-2 gap-6">
        {visionMission.map((item, idx) => (
          <div key={idx} className="bento-card">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
            {item.description && <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item.description}</p>}
            {item.points && (
              <ul className="space-y-2">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-pink-500 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Struktur Organisasi */}
      <section className="bento-card">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Struktur Organisasi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 flex justify-center">
            <div className="bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center w-64">
              <div className="font-bold text-slate-900 dark:text-white">Drs. Ahmad Subarjo, M.Pd</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase">Kepala Sekolah</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center w-full">
              <div className="font-bold text-slate-900 dark:text-white">Siti Aminah, S.Pd</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Waka Kurikulum</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center w-full">
              <div className="font-bold text-slate-900 dark:text-white">Budi Santoso, S.Kom</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Waka Kesiswaan</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center w-full">
              <div className="font-bold text-slate-900 dark:text-white">Larasati, M.Psi</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Waka Sarana Prasarana</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-6 h-6 text-emerald-600 dark:text-pink-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Fasilitas Sekolah</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-40 overflow-hidden">
                <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{facility.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Akreditasi */}
      <section className="bento-card bg-emerald-600 text-white border-none flex flex-col md:flex-row items-center justify-between gap-6 p-10">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-black">Akreditasi A</h2>
          </div>
          <p className="opacity-80">SDN KEJURON telah terakreditasi "Unggul" oleh BAN-S/M dengan nilai sempurna.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
          <div className="text-4xl font-black">98.5</div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Skor Akreditasi</div>
        </div>
      </section>
    </div>
  );
}
