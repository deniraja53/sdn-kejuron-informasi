import { useState, useEffect, useCallback } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const images = [
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', alt: 'Belajar di Kelas' },
  { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', alt: 'Coding for Kids' },
  { url: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop', alt: 'Eksperimen Sains' },
  { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop', alt: 'Seni Lukis' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', alt: 'Robotik' },
  { url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop', alt: 'English Club' },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="bento-card h-full flex flex-col relative group overflow-hidden">
      <div className="flex items-center justify-between mb-4 z-10 relative">
        <div className="bento-section-title !mb-0">Galeri Kegiatan</div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-primary/20 border border-white/10"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <div className="text-[10px] font-black font-mono text-primary/60 tracking-wider">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-primary/20 group/carousel shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.6 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover grayscale md:grayscale-0 group-hover/carousel:md:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">School Activities</div>
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4 italic drop-shadow-xl">
                  {images[currentIndex].alt}
                </h3>
                <Button
                  onClick={() => setSelectedImage(images[currentIndex])}
                  className="bg-white/10 backdrop-blur-md hover:bg-primary text-white border border-white/20 hover:border-primary px-4 h-10 rounded-xl transition-all gap-2 group/zoom"
                >
                  <Maximize2 className="w-4 h-4 group-hover/zoom:scale-125 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Detail Ekspansi</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl text-white hover:bg-primary border-2 border-white/10 hover:border-primary transition-all pointer-events-auto shadow-2xl active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl text-white hover:bg-primary border-2 border-white/10 hover:border-primary transition-all pointer-events-auto shadow-2xl active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                idx === currentIndex ? "w-8 bg-primary shadow-[0_0_10px_rgba(255,0,127,0.8)]" : "w-1.5 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2.5rem] border-2 border-primary/30 shadow-[0_0_80px_rgba(255,0,127,0.3)] bg-black">
          {selectedImage && (
            <div className="relative flex flex-col items-center justify-center min-h-[40vh] bg-black">
               <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-black/60 backdrop-blur-2xl p-8 rounded-[2rem] border-2 border-white/5 shadow-2xl text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">Detailed Capture</p>
                <h4 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none italic">{selectedImage.alt}</h4>
              </div>
              <Button 
                onClick={() => setSelectedImage(null)}
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md text-white hover:bg-primary/40 transition-all border-2 border-white/10 group/close"
              >
                <X className="w-6 h-6 group-hover/close:rotate-90 transition-transform" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
