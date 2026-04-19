import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: 'Alamat Sekolah',
      content: 'Jl. Ringin Nomor 13, Kec. Taman, Kota Madiun, Prov. Jawa Timur',
      link: 'https://www.google.com/maps/search/Jl.+Ringin+Nomor+13,+Kec.+Taman,+Kota+Madiun,+Prov.+Jawa+Timur'
    },
    {
      icon: <Phone className="w-6 h-6 text-pink-600" />,
      title: 'Nomor Telepon',
      content: '(021) 1234-5678 / 0812-3456-7890',
      link: 'tel:+622112345678'
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      title: 'Email Resmi',
      content: 'info@kejuron.sch.id',
      link: 'mailto:info@kejuron.sch.id'
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-600" />,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 07.00 - 15.00 WIB',
      link: null
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Hubungi <span className="text-emerald-600 dark:text-pink-500">Kami</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Kami siap membantu Anda dengan informasi yang Anda butuhkan mengenai SDN KEJURON.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-pink-900/30 transition-colors">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {info.content}
              </p>
              {info.link && (
                <a 
                  href={info.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-black text-emerald-600 dark:text-pink-500 uppercase tracking-widest hover:underline"
                >
                  Lihat Detail
                </a>
              )}
            </motion.div>
          ))}

          {/* WhatsApp Button Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="sm:col-span-2 bg-pink-50 dark:bg-pink-900/20 p-8 rounded-[2.5rem] border border-pink-100 dark:border-pink-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300">Butuh Respon Cepat?</h3>
              <p className="text-pink-700 dark:text-pink-400 text-sm">Hubungi tim administrasi kami langsung melalui WhatsApp.</p>
            </div>
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl px-8 py-6 h-auto shadow-lg shadow-pink-200 gap-3 font-bold text-lg"
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Hubungi via WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-800 p-4 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-xl h-[500px] overflow-hidden relative group"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Jl.%20Ringin%20Nomor%2013,%20Kec.%20Taman,%20Kota%20Madiun,%20Prov.%20Jawa%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[2.5rem] dark:invert dark:grayscale dark:contrast-125"
          ></iframe>
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 dark:bg-pink-600 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lokasi Kami</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Kec. Taman, Kota Madiun</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-xl border-slate-200 dark:border-slate-700 dark:text-slate-300 text-xs font-bold">
              Buka di Maps
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
