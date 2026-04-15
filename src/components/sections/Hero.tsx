import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, GraduationCap, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="bento-card h-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-none justify-center overflow-hidden p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="bento-pill">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-pink-300" />
            <span>EdTech Primary School</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-4">
          Membangun Generasi Cerdas dan Berkarakter
        </h1>
        <p className="text-sm md:text-base opacity-90 max-w-md leading-relaxed mb-8">
          Pendidikan dasar modern dengan sentuhan futuristik, menciptakan pemimpin masa depan yang unggul dalam ilmu dan akhlak.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            render={<Link to="/profil" />}
            nativeButton={false}
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-slate-100 rounded-xl font-bold px-6 py-4 h-auto shadow-lg shadow-emerald-900/20 group"
          >
            Lihat Profil
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            render={<Link to="/kontak" />}
            nativeButton={false}
            size="lg" 
            variant="outline" 
            className="border-white/40 text-white hover:bg-white/10 rounded-xl font-bold px-6 py-4 h-auto"
          >
            Hubungi Kami
          </Button>
        </div>
      </motion.div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
    </div>
  );
}
