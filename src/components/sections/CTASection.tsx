import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <div className="bento-card h-full bg-primary/10 border-2 border-primary/40 flex flex-col justify-center items-center text-center p-8 shadow-[0_0_30px_rgba(255,0,127,0.15)]">
      <h2 className="text-2xl font-black mb-2 text-white uppercase tracking-tighter">Siap Bergabung Bersama Kami?</h2>
      <p className="text-sm text-slate-300 mb-6 max-w-xs font-medium">
        Daftarkan putra-putri Anda sekarang untuk mendapatkan pengalaman belajar terbaik.
      </p>
      <div className="flex flex-col w-full gap-3">
        <Link 
          to="/ppdb"
          className="bg-primary text-white hover:bg-primary/80 rounded-xl font-black uppercase tracking-widest flex items-center justify-center py-6 h-auto w-full shadow-[0_20px_40px_rgba(255,0,127,0.3)] text-xs transition-all active:scale-95"
        >
          Daftar Sekarang
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        <Button variant="outline" className="border-2 border-primary/30 bg-black/40 text-white hover:bg-primary/10 rounded-xl font-black uppercase tracking-widest py-6 h-auto w-full text-xs">
          <Phone className="mr-2 w-4 h-4" />
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
}
