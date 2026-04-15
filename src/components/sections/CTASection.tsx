import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <div className="bento-card h-full bg-accent text-white border-none flex flex-col justify-center items-center text-center p-8">
      <h2 className="text-2xl font-black mb-2">Siap Bergabung Bersama Kami?</h2>
      <p className="text-sm text-white/80 mb-6 max-w-xs">
        Daftarkan putra-putri Anda sekarang untuk mendapatkan pengalaman belajar terbaik.
      </p>
      <div className="flex flex-col w-full gap-3">
        <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-bold py-6 h-auto w-full shadow-lg shadow-emerald-900/20">
          Daftar Sekarang
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 rounded-xl font-bold py-6 h-auto w-full">
          <Phone className="mr-2 w-4 h-4" />
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
}
