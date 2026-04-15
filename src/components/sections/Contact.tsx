import { motion } from 'motion/react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="bento-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="bento-section-title mb-0">Lokasi & Kontak</div>
        <Link to="/kontak" className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline flex items-center gap-1">
          Detail <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div>
          <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-600" /> Alamat:
          </p>
          <p className="text-[11px] text-muted-foreground leading-tight">Jl. Ringin Nomor 13, Kec. Taman, Kota Madiun, Prov. Jawa Timur</p>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
            <Phone className="w-3 h-3 text-emerald-600" /> Telepon:
          </p>
          <p className="text-[11px] text-muted-foreground leading-tight">(021) 555-0123</p>
        </div>
      </div>
    </div>
  );
}
