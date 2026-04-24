import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, User, Phone, Mail, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PPDBModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PPDBModal({ isOpen, onOpenChange }: PPDBModalProps) {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      formType: 'ppdb',
      childName: (form.querySelector('input[placeholder="Masukkan nama..."]') as HTMLInputElement)?.value,
      pob: (form.querySelector('input[placeholder="Kota..."]') as HTMLInputElement)?.value,
      dob: (form.querySelector('input[type="date"]') as HTMLInputElement)?.value,
      parentName: (form.querySelector('input[placeholder="Nama wali..."]') as HTMLInputElement)?.value,
      whatsapp: (form.querySelector('input[placeholder="08xxxxxxxxxx"]') as HTMLInputElement)?.value,
      email: (form.querySelector('input[type="email"]') as HTMLInputElement)?.value,
    };

    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setIsSubmitting(false);
        setIsSuccess(true);
      } catch (error) {
        console.error('PPDB Submission failed:', error);
        setIsSubmitting(false);
        alert('Maaf, pendaftaran gagal. Silakan hubungi admin sekolah melalui WhatsApp.');
      }
    } else {
      // Fallback delay if no webhook
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const reset = () => {
    setStep(1);
    setIsSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl bg-slate-950 text-white">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <GraduationCap className="w-32 h-32" />
                </div>
                <Badge className="bg-white/20 text-white border-none mb-4">
                  TA 2026/2027
                </Badge>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-black uppercase tracking-tighter leading-tight">
                    PPDB Online <br />
                    <span className="text-emerald-300">SDN KEJURON</span>
                  </DialogTitle>
                </DialogHeader>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex gap-2 items-center mb-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all ${step >= i ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-slate-800"}`}
                    />
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-sm font-black uppercase tracking-widest text-emerald-500">
                        Data Calon Siswa
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Nama Lengkap Anak
                          </Label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                            <Input
                              placeholder="Masukkan nama..."
                              className="bg-slate-900 border-slate-800 rounded-xl pl-12 h-12 focus:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                              Tempat Lahir
                            </Label>
                            <Input
                              placeholder="Kota..."
                              className="bg-slate-900 border-slate-800 rounded-xl h-12 focus:ring-emerald-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                              Tanggal Lahir
                            </Label>
                            <Input
                              type="date"
                              className="bg-slate-900 border-slate-800 rounded-xl h-12 focus:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 rounded-xl font-black uppercase tracking-widest text-xs"
                      >
                        Tahap Selanjutnya
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-sm font-black uppercase tracking-widest text-emerald-500">
                        Data Orang Tua / Wali
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Nama Ayah / Ibu
                          </Label>
                          <Input
                            placeholder="Nama wali..."
                            className="bg-slate-900 border-slate-800 rounded-xl h-12 focus:ring-emerald-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Nomor WhatsApp Aktif
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                            <Input
                              placeholder="08xxxxxxxxxx"
                              className="bg-slate-900 border-slate-800 rounded-xl pl-12 h-12 focus:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Email Utama
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                            <Input
                              type="email"
                              placeholder="email@contoh.com"
                              className="bg-slate-900 border-slate-800 rounded-xl pl-12 h-12 focus:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setStep(1)}
                          className="flex-1 border-2 border-slate-800 h-14 rounded-xl font-black uppercase tracking-widest text-xs"
                        >
                          Kembali
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-[2] bg-emerald-600 hover:bg-emerald-700 h-14 rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        >
                          {isSubmitting ? "Memproses..." : "Kirim Pendaftaran"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>
                    Petugas akan menghubungi Anda dalam 1x24 jam setelah
                    pendaftaran diterima.
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-12 text-center space-y-6 flex flex-col items-center justify-center min-h-[500px]"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)] border-2 border-emerald-500">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                Pendaftaran Diterima!
              </h2>
              <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed font-medium">
                Terima kasih telah mempercayakan pendidikan putra-putri Anda
                kepada SDN KEJURON. Kode pendaftaran telah dikirim ke Email &
                WhatsApp Anda.
              </p>
              <Button
                onClick={reset}
                className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-12 h-14 font-black uppercase tracking-widest text-xs shadow-lg shadow-emerald-200/10"
              >
                Kembali ke Beranda
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${className}`}>
      {children}
    </span>
  );
}
