import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function FeedbackPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-4">
            <MessageSquare className="w-4 h-4" />
            Suara Anda Berharga
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Kritik & <span className="text-emerald-600">Saran</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Bantu kami menjadi lebih baik. Sampaikan masukan, kritik, atau saran Anda demi kemajuan pendidikan di SDN KEJURON.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl shadow-emerald-200">
              <h3 className="text-xl font-bold">Mengapa Masukan Anda Penting?</h3>
              <ul className="space-y-4 text-sm text-emerald-50">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  Meningkatkan kualitas fasilitas sekolah.
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  Evaluasi metode pembelajaran.
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  Membangun komunikasi yang transparan.
                </li>
              </ul>
              <div className="pt-4 border-t border-white/20 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-pink-200" />
                <p className="text-xs text-pink-100 italic">
                  Privasi Anda terjaga. Anda dapat mengirimkan saran secara anonim.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
              <p className="text-sm text-slate-500 leading-relaxed">
                "Pendidikan adalah tanggung jawab bersama. Masukan dari orang tua dan masyarakat adalah kunci utama inovasi kami."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Kepala Sekolah</p>
                  <p className="text-xs text-slate-400">SDN KEJURON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                      <div className="space-y-0.5">
                        <Label className="text-sm font-bold text-slate-700">Identitas Pengirim</Label>
                        <p className="text-xs text-slate-500">Isi nama Anda atau kirim secara anonim.</p>
                      </div>
                      <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <Checkbox 
                          id="anonymous" 
                          checked={isAnonymous}
                          onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                          className="rounded-md border-slate-300"
                        />
                        <label
                          htmlFor="anonymous"
                          className="text-sm font-bold text-slate-700 cursor-pointer select-none"
                        >
                          Kirim Anonim
                        </label>
                      </div>
                    </div>

                    <AnimatePresence>
                      {!isAnonymous && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input 
                              placeholder="Nama Lengkap" 
                              required={!isAnonymous}
                              className="pl-12 py-6 rounded-2xl border-slate-200 focus:ring-emerald-500"
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input 
                              type="email" 
                              placeholder="Email Anda" 
                              required={!isAnonymous}
                              className="pl-12 py-6 rounded-2xl border-slate-200 focus:ring-emerald-500"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-slate-700">Pesan / Masukan</Label>
                    <Textarea 
                      placeholder="Tuliskan kritik atau saran Anda di sini..." 
                      required
                      className="min-h-[150px] rounded-2xl border-slate-200 focus:ring-emerald-500 p-4 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-8 text-lg font-bold shadow-lg shadow-emerald-200 gap-3 transition-all active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Sekarang
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 rounded-[3rem] border border-green-100 shadow-xl text-center space-y-6 flex flex-col items-center justify-center min-h-[500px]"
                >
                  <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Terima Kasih!</h2>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    Masukan Anda telah kami terima dan akan segera kami tinjau demi kemajuan sekolah.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-xl border-slate-200 px-8"
                  >
                    Kirim Saran Lain
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
