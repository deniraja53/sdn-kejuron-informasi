import React from "react";
import { motion } from "motion/react";
import {
  History,
  Target,
  ShieldCheck,
  Heart,
  Users,
  Star,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan etika dalam setiap tindakan.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    color: "from-pink-500/20 to-transparent",
  },
  {
    title: "Inovasi",
    description:
      "Selalu mencari cara baru yang kreatif untuk memecahkan masalah.",
    icon: <Star className="w-8 h-8 text-accent" />,
    color: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Kolaborasi",
    description:
      "Bekerja sama untuk mencapai hasil terbaik bagi seluruh siswa.",
    icon: <Users className="w-8 h-8 text-purple-500" />,
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Empati",
    description:
      "Memahami dan menghargai perasaan serta perspektif orang lain.",
    icon: <Heart className="w-8 h-8 text-red-500" />,
    color: "from-red-500/20 to-transparent",
  },
];

const AboutUs = () => {
  return (
    <div className="pt-[100px] pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 relative py-20 px-6 rounded-[3rem] overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-accent/10 sm:scale-110" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,127,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(0,243,255,0.1),transparent_50%)]" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em]"
            >
              <Building2 className="w-4 h-4" />
              Eksklusif Tentang Kami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter italic"
            >
              Membentuk Masa Depan <br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(255,0,127,0.5)]">
                Berkarakter
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
            >
              SDN KEJURON berkomitmen untuk menyelenggarakan pendidikan
              berkualitas tinggi yang menggabungkan nilai-nilai tradisional
              dengan inovasi teknologi modern.
            </motion.p>
          </div>
        </section>

        {/* History Section (Bento Inspired) */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-slate-800" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">
              Jejak Langkah
            </span>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
              Sejarah Sekolah
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative p-10 rounded-[2.5rem] bg-slate-900/50 border-2 border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl">
                <p className="text-xl text-slate-300 leading-relaxed italic">
                  "Didirikan pada tahun 1980, SDN KEJURON berawal dari sebuah
                  bangunan sederhana dengan visi besar untuk menciptakan akses
                  pendidikan yang berkeadilan bagi seluruh anak di wilayah Kota
                  Madiun."
                </p>
                <div className="mt-8 space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Selama dekade terakhir, sekolah kami telah bertransformasi
                    menjadi institusi pendidikan yang modern, tetap mengakar
                    pada keramahan dan perkembangan kota Madiun. Kami terus
                    beradaptasi dengan perubahan zaman, mengintegrasikan
                    teknologi ke dalam setiap ruang kelas.
                  </p>
                  <p>
                    Hari ini, SDN KEJURON dikenal sebagai salah satu sekolah
                    dasar yang berada di Kelurahan Kejuron, Kota Madiun,
                    Provinsi Jawa Timur, melahirkan berbagai alumni yang telah
                    sukses berkontribusi di berbagai bidang pembangunan bangsa.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa1b424d?q=80&w=2071&auto=format&fit=crop"
                alt="School Building History"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-[120px] font-black opacity-10 leading-none">
                  1980
                </span>
                <p className="text-xs font-black uppercase tracking-widest text-primary italic">
                  Awal dari sebuah perjalanan besar
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/20 to-black border-2 border-primary/20 shadow-[0_0_50px_rgba(255,0,127,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform">
              <History className="w-64 h-64" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-glow shadow-primary/40">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                Visi Utama
              </h3>
              <p className="text-2xl text-slate-100 font-bold leading-tight tracking-tight italic">
                "Menjadi lembaga pendidikan pilihan yang unggul dalam melahirkan
                generasi religius, cerdas, inovatif, dan berwawasan lingkungan."
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-12 rounded-[3.5rem] bg-slate-900/50 border-2 border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform">
              <GraduationCap className="w-64 h-64" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent border border-accent/20 shadow-glow shadow-accent/40">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                Misi Sekolah
              </h3>
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan kegiatan keagamaan yang intensif untuk membentuk akhlak mulia.",
                  "Memaksimalkan pemanfaatan teknologi informasi dalam proses pembelajaran.",
                  "Mengembangkan potensi sains, seni, dan olahraga secara terintegrasi.",
                  "Menanamkan budaya bersih dan peduli lingkungan sejak usia dini.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 items-start text-slate-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shadow-glow shadow-accent/60 flex-shrink-0" />
                    <p className="text-lg font-medium leading-tight">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Core Values (Bento Grid) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">
              Prinsip Kami
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter italic shadow-glow">
              Nilai-Nilai Dasar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 rounded-[2.5rem] bg-slate-900/50 border-2 border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${v.color}`}
                />
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                    {v.title}
                  </h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing Call to Action */}
        <section className="text-center pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 via-black to-slate-900 border-2 border-white/5 shadow-3xl text-center space-y-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.05),transparent_70%)]" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight italic">
              Mari Bergabung Membangun Generasi <br />
              <span className="text-accent underline decoration-primary/50 underline-offset-8">
                Emas Masa Depan
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Kami percaya setiap anak memiliki potensi jenius yang unik.
              Temukan cara kami mengasahnya menjadi permata yang cemerlang.
            </p>
            <div className="pt-8">
              <Link
                to="/ppdb"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/80 text-white rounded-2xl px-16 h-20 font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_20px_50px_rgba(255,0,127,0.4)] transition-all active:scale-95 group"
              >
                Mulai Pendaftaran
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
