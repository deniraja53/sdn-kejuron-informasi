import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Hyperspeed from '@/components/ui/Hyperspeed';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xff007f, 0x9d00ff, 0xff007f],
              rightCars: [0x00f3ff, 0x00f3ff, 0x00f3ff],
              sticks: 0x00f3ff,
            },
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Logo SDN KEJURON"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border-2 border-primary/40 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Selamat Datang di SDN KEJURON</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
            Masa Depan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">
              Dimulai di Sini
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl mx-auto text-lg md:text-xl font-black uppercase tracking-widest">
            Pendidikan dasar modern dengan informasi futuristik.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            onClick={() => navigate("/home")}
            size="lg"
            className="group relative overflow-hidden bg-primary text-white hover:bg-primary/80 rounded-2xl px-12 py-10 h-auto text-xl font-black shadow-[0_0_50px_rgba(255,0,127,0.5)] transition-all active:scale-95 uppercase tracking-widest"
          >
            <span className="relative z-10 flex items-center gap-3">
              Masuk ke Website
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </span>

            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="text-accent text-xs font-black uppercase tracking-[0.5em] drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
        >
          Explore the future of education
        </motion.p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 blur-[120px]" />
    </div>
  );
}
