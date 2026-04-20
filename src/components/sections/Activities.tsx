import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Music, Trophy, Microscope, Globe, X, Info, Calendar, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const activities = [
  {
    title: 'Coding for Kids',
    category: 'Teknologi',
    icon: <Code className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    description: 'Belajar logika pemrograman dasar melalui game dan animasi interaktif.'
  },
  {
    title: 'Sains Eksperimen',
    category: 'Akademik',
    icon: <Microscope className="w-6 h-6 text-accent" />,
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop',
    description: 'Menjelajahi keajaiban alam melalui eksperimen laboratorium yang seru.'
  },
  {
    title: 'Seni Lukis Digital',
    category: 'Kreativitas',
    icon: <Palette className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
    description: 'Mengekspresikan kreativitas menggunakan tablet grafis dan software modern.'
  },
  {
    title: 'Paduan Suara',
    category: 'Seni',
    icon: <Music className="w-6 h-6 text-accent" />,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
    description: 'Mengasah bakat vokal dan kerja sama tim dalam harmoni musik.'
  },
  {
    title: 'Klub Robotik',
    category: 'Teknologi',
    icon: <Trophy className="w-6 h-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    description: 'Merakit dan memprogram robot untuk kompetisi tingkat nasional.'
  },
  {
    title: 'English Club',
    category: 'Bahasa',
    icon: <Globe className="w-6 h-6 text-accent" />,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
    description: 'Meningkatkan kemampuan komunikasi bahasa Inggris dengan cara yang asyik.'
  }
];

export function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  return (
    <div className="bento-card h-full">
      <div className="bento-section-title">Kegiatan Unggulan</div>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {activities.slice(0, 3).map((activity, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedActivity(activity)}
            className="bg-black/40 border-2 border-primary/20 rounded-xl p-4 text-center flex flex-col items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all group cursor-pointer"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,0,127,0.4)]">
              {activity.icon}
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-100">{activity.title}</span>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-none shadow-[0_0_80px_rgba(255,0,127,0.15)] bg-slate-950 sm:rounded-[2.5rem] h-[100dvh] sm:h-auto sm:max-h-[92vh]">
          {selectedActivity && (
            <div className="flex flex-col h-full bg-slate-950">
              {/* Premium Hero Header */}
              <div className="relative flex-shrink-0 h-[30vh] sm:h-[480px] overflow-hidden group/hero">
                <motion.img 
                  initial={{ scale: 1.1, filter: 'blur(10px)', opacity: 0 }}
                  animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-full object-cover grayscale md:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Advanced Light Leak Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 opacity-40" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14 md:p-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-primary shadow-2xl">
                        {selectedActivity.icon}
                      </div>
                      <Badge className="bg-primary/90 text-white border-none font-bold uppercase tracking-[0.2em] px-4 py-1.5 text-[9px] md:text-[11px] shadow-lg">
                        {selectedActivity.category}
                      </Badge>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                      {selectedActivity.title}
                    </h2>
                  </motion.div>
                </div>

                {/* Precision Close Button */}
                <Button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black/60 backdrop-blur-xl text-white hover:bg-primary transition-all border border-white/10 group/close"
                >
                  <X className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                </Button>
              </div>

              {/* Document-style Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-950 px-8 py-10 sm:px-14 sm:py-16 md:px-20 relative">
                <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
                  
                  {/* Clean Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 flex items-center gap-3">
                        <Calendar className="w-3 h-3" />
                        Jadwal & Waktu
                      </h4>
                      <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:border-primary/20 transition-colors group">
                        <p className="text-xl md:text-2xl text-white font-bold tracking-tight mb-2">Selasa & Kamis</p>
                        <p className="text-sm font-mono text-slate-500 group-hover:text-primary transition-colors">14.00 — 16.00 WIB</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                    >
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 flex items-center gap-3">
                        <Trophy className="w-3 h-3" />
                        Sasaran Peserta
                      </h4>
                      <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:border-accent/20 transition-colors group">
                        <p className="text-xl md:text-2xl text-white font-bold tracking-tight mb-2">Kelas 4, 5, 6</p>
                        <p className="text-sm font-mono text-slate-500 group-hover:text-accent transition-colors">Program Unggulan Sekolah</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Main Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-slate-800" />
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">Overview Eksklusif</span>
                      <div className="h-px flex-1 bg-slate-800" />
                    </div>
                    <p className="text-xl sm:text-2xl md:text-4xl text-slate-200 font-medium leading-[1.3] text-center md:text-left tracking-tight">
                      {selectedActivity.description}
                    </p>
                  </motion.div>
                  
                  {/* Verification Section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-[0.02] -rotate-12">
                      <Code className="w-40 h-40" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,0,127,1)]" />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Official Program Notification</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xl font-medium">
                          Kegiatan ini telah disetujui oleh Kepala Sekolah dan merupakan bagian dari kurikulum pengembangan bakat siswa <span className="text-white">SDN KEJURON</span>. Setiap sesi dipandu oleh pembimbing profesional.
                        </p>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex -space-x-4">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                              GTK
                            </div>
                          ))}
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">3 Pembimbing Terdaftar</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Footer Action Area */}
                  <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-8">
                    <div className="flex items-center gap-4 text-slate-500">
                      <Info className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Dokumen Resmi Aktivitas</span>
                    </div>
                    <Button 
                      onClick={() => setSelectedActivity(null)}
                      className="w-full md:w-auto bg-white text-black hover:bg-primary hover:text-white rounded-2xl px-16 h-20 font-black uppercase tracking-[0.3em] text-xs transition-all active:scale-95 group/btn shadow-2xl"
                    >
                      Konfirmasi
                      <ArrowRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
