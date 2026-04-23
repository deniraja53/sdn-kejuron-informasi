import { motion } from "motion/react";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PrincipalWelcome() {
  return (
    <div className="bento-card h-full flex flex-col gap-6 items-center text-center">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl shadow-primary/20 border-2 border-primary/40">
        <img
          src={`${import.meta.env.BASE_URL}assets/profil/juli1.jpg`}
          alt="Kepala Sekolah"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="bento-section-title mb-0">Sambutan</div>
          <Link
            to="/profil"
            className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-1"
          >
            Profil <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="relative px-2">
          <Quote className="absolute -top-3 -left-2 w-6 h-6 text-primary/10 -z-10 opacity-50" />
          <p className="text-slate-300 text-sm italic leading-relaxed">
            "Selamat datang di SDN KEJURON. Kami berkomitmen memberikan
            lingkungan belajar inspiratif, aman, dan berteknologi tinggi bagi
            putra-putri Anda."
          </p>
          <div className="mt-6 pt-4 border-t-2 border-primary/20">
            <div className="font-bold text-white text-sm">
              Juli Sugianingsih, S.Pd
            </div>
            <div className="text-[10px] text-accent font-black uppercase tracking-widest">
              Kepala Sekolah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
