import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div 
      ref={containerRef}
      className="bento-card h-full bg-gradient-to-br from-black via-slate-950 to-pink-950 text-white border-2 border-primary/40 justify-center overflow-hidden p-8 md:p-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="bento-pill">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-primary">Cyber Primary School</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4 tracking-tighter">
          MEMBANGUN GENERASI <span className="text-primary">CERDAS</span> DAN <span className="text-accent">BERKARAKTER</span>
        </h1>
        <p className="text-sm md:text-base opacity-70 max-w-md leading-relaxed mb-8 font-medium">
          Pendidikan dasar modern dengan sentuhan futuristik, menciptakan pemimpin masa depan yang unggul dalam ilmu dan akhlak.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Button 
              render={<Link to="/profil" />}
              nativeButton={false}
              size="lg" 
              className="bg-primary text-white hover:bg-primary/80 rounded-xl font-black px-6 py-4 h-auto shadow-[0_0_30px_rgba(255,0,127,0.3)] group relative overflow-hidden uppercase tracking-widest text-xs"
            >
              <span className="relative z-10 flex items-center">
                Lihat Profil
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Hover Gradient Sweep */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full z-0"
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Button>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Button 
              render={<Link to="/kontak" />}
              nativeButton={false}
              size="lg" 
              variant="outline" 
              className="border-2 border-accent/60 text-accent hover:bg-accent/10 rounded-xl font-black px-6 py-4 h-auto backdrop-blur-sm group relative overflow-hidden uppercase tracking-widest text-xs"
            >
              <span className="relative z-10">Hubungi Kami</span>
              {/* Hover Gradient Sweep */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full z-0"
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative background elements with parallax */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" 
      />

      {/* Sharp Corner Accents */}
      <div className="absolute top-0 right-0 w-32 h-[2px] bg-gradient-to-l from-primary to-transparent opacity-50" />
      <div className="absolute top-0 right-0 h-32 w-[2px] bg-gradient-to-b from-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 h-32 w-[2px] bg-gradient-to-t from-accent to-transparent opacity-30" />
    </div>
  );
}
