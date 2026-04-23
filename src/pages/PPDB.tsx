import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, User, Phone, Mail, Clock, CheckCircle2, ArrowLeft, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PPDBPage() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-slate-900 border-2 border-emerald-500/30 rounded-[3rem] p-12 text-center space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
        >
          <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Berhasil!</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            Data pendaftaran putra-putri Anda telah kami terima. Petugas PPDB SDN KEJURON akan segera menghubungi Anda.
          </p>
          <Button 
            onClick={() => navigate('/home')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 h-16 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg"
          >
            Kembali ke Beranda
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/tentang-kami" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Kembali</span>
          </Link>
          <div className="text-right">
            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Pendaftaran Online</div>
            <div className="text-white font-black uppercase tracking-tighter italic text-xl">TA 2024/2025</div>
          </div>
        </div>

        <div className="bg-slate-900 border-2 border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5 h-full">
            {/* Sidebar Info */}
            <div className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-emerald-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 -rotate-12">
                <GraduationCap className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <h1 className="text-4xl font-black uppercase tracking-tighter leading-none italic">
                  PPDB <br />
                  <span className="text-emerald-300">SDN KEJURON</span>
                </h1>
                <p className="text-sm text-emerald-50/70 leading-relaxed font-medium">
                  Selamat datang di sistem pendaftaran peserta didik baru. Silakan lengkapi formulir dengan data yang valid.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Clock className="w-4 h-4" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Respon 1x24 Jam</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Send className="w-4 h-4" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Sistem Paperless</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 pt-12">
                <div className="flex gap-2 mb-4">
                  {[1, 2].map((i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 flex-1 rounded-full ${step >= i ? 'bg-white' : 'bg-white/20'}`} 
                    />
                  ))}
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60">Tahap {step} dari 2</div>
              </div>
            </div>

            {/* Form Area */}
            <div className="md:col-span-3 p-10 md:p-14 bg-slate-900">
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Data Calon Siswa</Label>
                      <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Identitas Anak</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nama Lengkap</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                          <Input placeholder="Nama sesuai akta..." className="bg-black/40 border-white/5 rounded-xl pl-12 h-14 focus:ring-emerald-500 text-white" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tempat Lahir</Label>
                          <Input placeholder="Kota..." className="bg-black/40 border-white/5 rounded-xl h-14 focus:ring-emerald-500 text-white" required />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tanggal Lahir</Label>
                          <Input type="date" className="bg-black/40 border-white/5 rounded-xl h-14 focus:ring-emerald-500 text-white" required />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="button" 
                      onClick={() => setStep(2)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 h-16 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-900/20"
                    >
                      Lanjut ke Data Orang Tua
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Data Kontak</Label>
                      <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Orang Tua / Wali</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nama Ayah / Ibu</Label>
                        <Input placeholder="Nama wali..." className="bg-black/40 border-white/5 rounded-xl h-14 focus:ring-emerald-500 text-white" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">WhatsApp Aktif</Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                          <Input placeholder="08xxxxxxxxxx" className="bg-black/40 border-white/5 rounded-xl pl-12 h-14 focus:ring-emerald-500 text-white" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Alamat Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                          <Input type="email" placeholder="email@domain.com" className="bg-black/40 border-white/5 rounded-xl pl-12 h-14 focus:ring-emerald-500 text-white" required />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={() => setStep(1)}
                        className="flex-1 border-2 border-white/5 h-16 rounded-xl font-black uppercase tracking-widest text-xs text-slate-400 hover:text-white"
                      >
                        Kembali
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-[2] bg-emerald-600 hover:bg-emerald-700 h-16 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-900/20"
                      >
                        {isSubmitting ? "Memproses..." : "Kirim Sekarang"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
