import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Beams from '@/components/ui/Beams';
import { ArrowRight, School } from 'lucide-react';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-[#064e3b] overflow-hidden flex flex-col items-center justify-center">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#fdf2f8"
          beamColor="#be185d"
          backgroundColor="#064e3b"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
            <School className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              SDN <span className="text-pink-500">KEJURON</span>
            </h1>
            <p className="text-pink-200/60 font-medium tracking-widest uppercase text-xs md:text-sm">
              Membentuk Generasi Cerdas & Berakhlak Mulia
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button
            onClick={() => navigate('/home')}
            className="group relative px-8 py-4 bg-white text-pink-900 font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(219,39,119,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Masuk ke Website
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          Kota Madiun &bull; Jawa Timur
        </motion.div>
      </div>
    </div>
  );
}
