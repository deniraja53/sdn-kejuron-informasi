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
    icon: <Code className="w-6 h-6 text-emerald-600" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    description: 'Belajar logika pemrograman dasar melalui game dan animasi interaktif.'
  },
  {
    title: 'Sains Eksperimen',
    category: 'Akademik',
    icon: <Microscope className="w-6 h-6 text-pink-600" />,
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop',
    description: 'Menjelajahi keajaiban alam melalui eksperimen laboratorium yang seru.'
  },
  {
    title: 'Seni Lukis Digital',
    category: 'Kreativitas',
    icon: <Palette className="w-6 h-6 text-emerald-600" />,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
    description: 'Mengekspresikan kreativitas menggunakan tablet grafis dan software modern.'
  },
  {
    title: 'Paduan Suara',
    category: 'Seni',
    icon: <Music className="w-6 h-6 text-pink-600" />,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
    description: 'Mengasah bakat vokal dan kerja sama tim dalam harmoni musik.'
  },
  {
    title: 'Klub Robotik',
    category: 'Teknologi',
    icon: <Trophy className="w-6 h-6 text-emerald-600" />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    description: 'Merakit dan memprogram robot untuk kompetisi tingkat nasional.'
  },
  {
    title: 'English Club',
    category: 'Bahasa',
    icon: <Globe className="w-6 h-6 text-pink-600" />,
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
            className="bg-slate-50 rounded-xl p-4 text-center flex flex-col items-center justify-center hover:bg-emerald-50 transition-colors group cursor-pointer"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform">
              {activity.icon}
            </div>
            <span className="text-[11px] font-bold text-slate-700">{activity.title}</span>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl">
          {selectedActivity && (
            <div className="flex flex-col">
              <div className="h-56 md:h-64 relative">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-emerald-600 text-white border-none font-bold px-3 py-1 mb-2">
                    {selectedActivity.category}
                  </Badge>
                  <h2 className="text-2xl font-black text-white">
                    {selectedActivity.title}
                  </h2>
                </div>
                <Button
                  onClick={() => setSelectedActivity(null)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6 space-y-4 bg-white">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {selectedActivity.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Info className="w-4 h-4" />
                  <p className="text-xs font-medium">Kegiatan ini dirancang untuk mengasah bakat dan minat siswa di bidang {selectedActivity.category.toLowerCase()}.</p>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button 
                    onClick={() => setSelectedActivity(null)}
                    className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-6 font-bold"
                  >
                    Tutup
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
