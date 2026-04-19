import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Music, Trophy, Microscope, Globe, X, Info, Calendar } from 'lucide-react';
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
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-[0_0_100px_rgba(255,0,127,0.3)] bg-black sm:rounded-[3rem] h-[100dvh] sm:h-auto sm:max-h-[90vh]">
          {selectedActivity && (
            <div className="flex flex-col h-full overscroll-none">
              {/* Massive Hero Section */}
              <div className="relative flex-shrink-0 h-[40vh] sm:h-[450px] overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                
                {/* Floating Content */}
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-[85%] sm:max-w-[80%]">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge className="bg-primary text-white border-none font-black uppercase tracking-[0.3em] px-4 sm:px-5 py-1.5 sm:py-2 mb-3 sm:mb-4 text-[9px] sm:text-[10px] shadow-[0_0_30px_rgba(255,0,127,0.6)] animate-pulse">
                      {selectedActivity.category}
                    </Badge>
                    <h2 className="text-xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight sm:leading-[0.9] italic mb-2 drop-shadow-2xl">
                      {selectedActivity.title}
                    </h2>
                  </motion.div>
                </div>

                {/* Cyber Close Button */}
                <Button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-2xl text-white hover:bg-primary transition-all border-2 border-white/20 hover:border-transparent group/close shadow-2xl"
                >
                  <X className="w-5 h-5 sm:w-8 sm:h-8 group-hover:rotate-180 transition-transform duration-500" />
                </Button>
              </div>

              {/* Responsive Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-black relative p-6 md:p-14">
                <div className="max-w-3xl mx-auto space-y-12">
                  
                  {/* Grid Stats */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="group bg-slate-950 p-8 rounded-[2.5rem] border-2 border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Timeline / Schedule</span>
                      </div>
                      <p className="text-2xl text-white font-black uppercase tracking-tight">Setiap Selasa & Kamis</p>
                      <p className="text-sm font-mono text-primary mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        14:00 — 16:00 WIB
                      </p>
                    </div>

                    <div className="group bg-slate-950 p-8 rounded-[2.5rem] border-2 border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Eligibility / Target</span>
                      </div>
                      <p className="text-2xl text-white font-black uppercase tracking-tight">Siswa Kelas 4 - 6</p>
                      <p className="text-sm font-mono text-accent mt-2">Peminatan Khusus Sekolah</p>
                    </div>
                  </motion.div>

                  {/* Editorial Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent opacity-30 hidden md:block" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 mb-8 flex items-center gap-4">
                      <span className="w-12 h-px bg-slate-800" />
                      Detailed Overview
                    </h4>
                    <p className="text-xl md:text-3xl text-slate-300 font-medium leading-[1.3] tracking-tight">
                      {selectedActivity.description}
                    </p>
                  </motion.div>
                  
                  {/* Warning/Info Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start gap-6 p-8 rounded-[2rem] bg-slate-900/50 border-2 border-slate-800 text-slate-400"
                  >
                    <Info className="w-8 h-8 flex-shrink-0 text-primary mt-1" />
                    <div className="space-y-2">
                      <p className="text-xs font-black uppercase tracking-widest text-primary">Informasi Penting:</p>
                      <p className="text-sm leading-relaxed">
                        Seluruh peserta didik diwajibkan membawa peralatan dasar sesuai instruksi pembimbing masing-masing. Kegiatan ini dirancang secara profesional untuk mengasah fundamental dan kreativitas tinggi.
                      </p>
                    </div>
                  </motion.div>

                  {/* Final Action */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-between pt-12 gap-8"
                  >
                    <div className="text-center md:text-left">
                      <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-1">Status Pendaftaran</p>
                      <p className="text-lg text-emerald-500 font-black uppercase tracking-tighter">Terbuka / Silakan Hubungi Wali Kelas</p>
                    </div>
                    <Button 
                      onClick={() => setSelectedActivity(null)}
                      className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white rounded-[1.5rem] px-16 h-20 font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(255,0,127,0.4)] transition-all active:scale-95 group"
                    >
                      Kembali ke Beranda
                      <X className="ml-4 w-4 h-4 group-hover:rotate-90 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
