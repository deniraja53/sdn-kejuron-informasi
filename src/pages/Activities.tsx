import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Filter, Clock, MapPin, X, Maximize2, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categories = ['Semua', 'Kegiatan Harian', 'Ekstrakurikuler', 'Event Sekolah'];

const activities = [
  {
    id: 1,
    title: 'Upacara Bendera Senin',
    category: 'Kegiatan Harian',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop',
    date: 'Setiap Senin',
    desc: 'Meningkatkan rasa nasionalisme dan kedisiplinan siswa melalui upacara rutin.',
    detail: 'Upacara bendera dilaksanakan setiap hari Senin pukul 07.00 WIB. Seluruh siswa diwajibkan mengenakan seragam lengkap dengan atribut topi dan dasi. Kegiatan ini bertujuan untuk menanamkan jiwa patriotisme, kedisiplinan, dan rasa cinta tanah air sejak dini.'
  },
  {
    id: 2,
    title: 'Klub Robotik Nasional',
    category: 'Ekstrakurikuler',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    date: 'Setiap Rabu & Jumat',
    desc: 'Merakit dan memprogram robot untuk kompetisi tingkat nasional dan internasional.',
    detail: 'Klub Robotik merupakan salah satu ekstrakurikuler unggulan di SDN KEJURON. Siswa belajar merakit komponen elektronik, memahami logika pemrograman, hingga menciptakan robot fungsional. Tim kami rutin mengikuti kompetisi tingkat nasional dan telah meraih berbagai penghargaan bergengsi.'
  },
  {
    id: 3,
    title: 'Pentas Seni Tahunan',
    category: 'Event Sekolah',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
    date: '20 Mei 2024',
    desc: 'Ajang unjuk bakat siswa dalam bidang seni musik, tari, dan teater.',
    detail: 'Pentas Seni (PENSI) adalah acara tahunan yang paling dinanti. Di sini, setiap kelas menampilkan kreativitas mereka, mulai dari tarian tradisional, paduan suara, hingga drama musikal. Acara ini juga menjadi sarana untuk melatih kepercayaan diri dan kerja sama tim antar siswa.'
  },
  {
    id: 4,
    title: 'Coding for Kids Workshop',
    category: 'Ekstrakurikuler',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    date: 'Setiap Selasa',
    desc: 'Belajar logika pemrograman dasar melalui game dan animasi interaktif.',
    detail: 'Workshop Coding dirancang khusus untuk anak-anak dengan pendekatan yang menyenangkan. Menggunakan platform visual programming, siswa diajak untuk memahami konsep algoritma sambil membuat game sederhana atau cerita animasi mereka sendiri.'
  },
  {
    id: 5,
    title: 'Lomba Sains Provinsi',
    category: 'Event Sekolah',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop',
    date: '15 Juni 2024',
    desc: 'Kompetisi eksperimen sains antar sekolah dasar tingkat provinsi.',
    detail: 'Sekolah kami aktif mengirimkan delegasi terbaik untuk mengikuti Lomba Sains tingkat Provinsi. Siswa dibimbing secara intensif oleh guru-guru ahli untuk melakukan eksperimen ilmiah dan memecahkan masalah kompleks di bidang IPA dan Matematika.'
  },
  {
    id: 6,
    title: 'Literasi Pagi',
    category: 'Kegiatan Harian',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    date: 'Setiap Hari',
    desc: 'Kegiatan membaca buku bersama selama 15 menit sebelum memulai pelajaran.',
    detail: 'Budaya literasi sangat ditekankan di SDN KEJURON. Setiap pagi sebelum bel masuk berbunyi, siswa berkumpul di kelas atau taman sekolah untuk membaca buku pilihan mereka. Kegiatan ini terbukti meningkatkan minat baca dan wawasan pengetahuan siswa secara signifikan.'
  }
];

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  const filteredActivities = activeCategory === 'Semua' 
    ? activities 
    : activities.filter(a => a.category === activeCategory);

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Kegiatan Sekolah</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Berbagai aktivitas seru dan edukatif yang mendukung tumbuh kembang siswa di SDN KEJURON.</p>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 transition-all ${activeCategory === cat ? 'bg-emerald-600 dark:bg-pink-600 text-white shadow-lg shadow-emerald-200 dark:shadow-pink-900/20' : 'dark:border-slate-700 dark:text-slate-400 hover:border-emerald-400 dark:hover:border-pink-500'}`}
            >
              {cat}
            </Button>
        ))}
      </div>

      {/* Activities Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div 
                className="h-56 overflow-hidden relative cursor-pointer group/img"
                onClick={() => setSelectedActivity(activity)}
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 opacity-70 group-hover/img:opacity-0 transition-opacity">
                  <div className="bg-black/20 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur-md text-emerald-600 border-none font-bold px-3 py-1">
                    {activity.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-4 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary dark:text-pink-500 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {activity.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-pink-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {activity.desc}
                </p>
                <Button 
                  onClick={() => setSelectedActivity(activity)}
                  variant="ghost" 
                  className="w-full justify-between group/btn hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl"
                >
                  Selengkapnya
                  <motion.div whileHover={{ x: 5 }} className="transition-transform group-hover/btn:translate-x-1">
                    →
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Activity Detail Dialog */}
      <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl">
          {selectedActivity && (
            <div className="flex flex-col">
              <div className="h-64 md:h-80 relative">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-emerald-600 text-white border-none font-bold px-3 py-1 mb-3">
                    {selectedActivity.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {selectedActivity.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 space-y-6 bg-white dark:bg-slate-800">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Waktu</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedActivity.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Status</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Aktif</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-emerald-600 dark:bg-pink-600 rounded-full" />
                    Deskripsi Detail
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                      {selectedActivity.detail}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 flex items-start gap-3">
                      <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-emerald-900 dark:text-emerald-300">Manfaat Kegiatan</p>
                        <p className="text-xs text-emerald-700 dark:text-emerald-500">Mendukung pengembangan karakter, kreativitas, dan kompetensi siswa secara holistik.</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-pink-900 dark:text-pink-300">Lokasi</p>
                        <p className="text-xs text-pink-700 dark:text-pink-500">Area Kampus SDN KEJURON (Ruang Kelas, Lab, atau Lapangan Sekolah).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <Button 
                    onClick={() => setSelectedActivity(null)}
                    className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8 py-6 h-auto font-bold shadow-lg shadow-emerald-200"
                  >
                    Tutup Detail
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
