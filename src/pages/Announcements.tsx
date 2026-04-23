import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Bell, ArrowRight, Filter, Plus, Pencil, Trash2, X, Save, Lock, LogIn, MapPin, Clock, ListChecks, Phone, Info, Tag, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialAnnouncements = [
  {
    id: 1,
    title: 'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025',
    date: '2024-04-10',
    description: 'Penerimaan siswa baru telah dibuka. Segera daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik dengan kurikulum modern.',
    details: {
      location: 'Kantor Tata Usaha SDN KEJURON',
      time: '08:00 - 14:00 WIB',
      agenda: ['Pengambilan Formulir', 'Verifikasi Dokumen', 'Wawancara Orang Tua', 'Tes Kematangan Siswa'],
      contact: 'Ibu Ratna (0812-3456-7890)'
    },
    type: 'Penting',
    category: 'Akademik'
  },
  {
    id: 2,
    title: 'Libur Hari Raya Idul Fitri 1445 H',
    date: '2024-04-05',
    description: 'Sesuai dengan kalender pendidikan, kegiatan belajar mengajar akan libur mulai tanggal 8 April hingga 15 April 2024.',
    details: {
      location: 'Rumah Masing-masing',
      time: 'Selama 8 Hari',
      agenda: ['Cuti Bersama', 'Libur Lebaran', 'Kembali Masuk: 16 April 2024'],
      contact: 'Sekretariat Sekolah'
    },
    type: 'Umum',
    category: 'Kegiatan'
  },
  {
    id: 3,
    title: 'Workshop Teknologi Informasi & AI untuk Siswa',
    date: '2024-03-28',
    description: 'Mengenalkan dunia teknologi masa depan kepada siswa-siswi melalui praktik langsung penggunaan AI sederhana.',
    details: {
      location: 'Laboratorium Komputer',
      time: '09:00 - 12:00 WIB',
      agenda: ['Pengenalan AI', 'Demo Robotika', 'Sesi Kreativitas Digital'],
      contact: 'Pak Andi (IT Dept)'
    },
    type: 'Umum',
    category: 'Kegiatan'
  }
];

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('school_announcements');
      return saved ? JSON.parse(saved) : initialAnnouncements;
    }
    return initialAnnouncements;
  });

  // Sync with localStorage whenever announcements change
  React.useEffect(() => {
    localStorage.setItem('school_announcements', JSON.stringify(announcements));
  }, [announcements]);

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isAdmin, setIsAdmin] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('isAdmin') === 'true';
  });
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [notification, setNotification] = useState<string | null>(null);
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const [formData, setFormData] = useState({
    title: '', description: '', type: 'Umum', category: 'Kegiatan',
    date: new Date().toISOString().split('T')[0],
    location: '', time: '', contact: '', agenda: ''
  });

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'sdnkejuron13@gmail.com' && loginData.password === 'sdnkejuron041185') {
      setIsLoginOpen(false);
      setTimeout(() => {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', 'true');
        showNotification('ACCESS GRANTED: ADMIN MODE ACTIVE');
      }, 100);
      setLoginError(null);
    } else {
      setLoginError('INVALID CREDENTIALS');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    showNotification('ADMIN MODE DEACTIVATED');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Hapus pengumuman ini secara permanen?')) {
      setAnnouncements(announcements.filter(a => a.id !== id));
      showNotification('DATA DELETED');
    }
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      title: item.title, description: item.description, type: item.type, category: item.category,
      date: item.date, location: item.details?.location || '',
      time: item.details?.time || '', contact: item.details?.contact || '',
      agenda: item.details?.agenda?.join(', ') || ''
    });
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title: formData.title, description: formData.description, type: formData.type,
      category: formData.category, date: formData.date,
      details: {
        location: formData.location, time: formData.time, contact: formData.contact,
        agenda: formData.agenda.split(',').map(s => s.trim()).filter(Boolean)
      }
    };

    if (editingItem) {
      setAnnouncements(announcements.map(a => a.id === editingItem.id ? { ...a, ...data } : a));
      showNotification('UPDATE SUCCESS');
    } else {
      const newId = Math.max(...announcements.map(a => a.id), 0) + 1;
      setAnnouncements([{ id: newId, ...data }, ...announcements]);
      showNotification('NEW ENTRY CREATED');
    }
    setIsFormOpen(false);
  };

  const filtered = announcements.filter(a => selectedCategory === 'Semua' || a.category === selectedCategory);
  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12 min-h-screen text-slate-100">
      {/* Premium Notification */}
      {notification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[300] bg-black/90 backdrop-blur-xl text-primary px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(255,0,127,0.3)] border-2 border-primary/50 font-black tracking-tighter italic uppercase animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            {notification}
          </div>
        </div>
      )}

      {/* Cyber Header */}
      <div className="text-center space-y-6">
        <div className="flex flex-col items-center gap-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/30 shadow-[0_0_15px_rgba(255,0,127,0.1)] cursor-pointer select-none"
            onClick={() => {
              setClickCount(prev => prev + 1);
              if (clickCount >= 4) { setIsAdmin(!isAdmin); localStorage.setItem('isAdmin', String(!isAdmin)); setClickCount(0); }
            }}
          >
            <Sparkles className="w-3 h-3" /> Pusat Informasi Sekolah
          </div>
          <button 
            onClick={() => isAdmin ? handleLogout() : setIsLoginOpen(true)}
            className={cn(
              "px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border-2 active:scale-95", 
              isAdmin 
                ? "bg-red-600/10 text-red-500 border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
                : "bg-slate-900/50 text-slate-400 border-white/10 hover:border-primary/50"
            )}
          >
            {isAdmin ? 'Deactivate Admin Mode' : 'Activate Admin Mode'}
          </button>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
          PENGUMUMAN <span className="text-primary block md:inline underline decoration-accent/30 underline-offset-8">TERBARU</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          Sistem Informasi Terintegrasi SDN KEJURON. Dapatkan berita dan pengumuman resmi di sini.
        </p>
      </div>

      {/* Cyber Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-6 bg-slate-900/40 backdrop-blur-md p-6 rounded-[2rem] border-2 border-white/5 shadow-2xl">
        <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {['Semua', 'Akademik', 'Kegiatan', 'Parenting'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap", 
                selectedCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(255,0,127,0.4)]" 
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        {isAdmin && (
          <button 
            onClick={() => { setEditingItem(null); setIsFormOpen(true); }}
            className="bg-accent text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:scale-105 transition-transform"
          >
            <Plus className="w-4 h-4" /> Tambah Data
          </button>
        )}
      </div>

      {/* Premium List */}
      <div className="grid grid-cols-1 gap-8">
        {sorted.map(item => (
          <div key={item.id} className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-[3rem] border-2 border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative flex flex-col md:flex-row gap-8">
              {/* Premium Date Box */}
              <div className="flex-shrink-0 w-24 h-24 rounded-[2rem] bg-slate-900 border-2 border-white/10 flex flex-col items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                <span className="text-3xl font-black italic text-white">{new Date(item.date).getDate()}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white/80 transition-colors">
                  {new Date(item.date).toLocaleString('id-ID', { month: 'short' })}
                </span>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <span className={cn(
                      "px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] italic border-2", 
                      item.type === 'Penting' 
                        ? "bg-red-500/10 text-red-500 border-red-500/30" 
                        : "bg-accent/10 text-accent border-accent/30"
                    )}>
                      {item.type}
                    </span>
                    <span className="px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] italic bg-white/5 text-slate-400 border-2 border-white/5">
                      {item.category}
                    </span>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleOpenEdit(item)} 
                        className="p-3 bg-white/5 hover:bg-accent/20 rounded-xl text-slate-500 hover:text-accent transition-all"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)} 
                        className="p-3 bg-white/5 hover:bg-red-500/20 rounded-xl text-slate-500 hover:text-red-500 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <h3 
                  className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors cursor-pointer leading-none"
                  onClick={() => { setSelectedItem(item); setIsDetailOpen(true); }}
                >
                  {item.title}
                </h3>
                
                <p className="text-slate-400 font-medium leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-4 flex justify-between items-center border-t-2 border-white/5">
                   <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-500">
                     <Tag className="w-4 h-4 text-primary"/> {item.category}
                   </div>
                   <button 
                     className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn hover:gap-4 transition-all"
                     onClick={() => { setSelectedItem(item); setIsDetailOpen(true); }}
                   >
                     System Details <ArrowRight className="w-4 h-4 transition-transform"/>
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cyber Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="bg-slate-900 w-full max-w-md rounded-[3rem] p-10 shadow-[0_0_50px_rgba(255,0,127,0.2)] border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"><X className="w-6 h-6"/></button>
            
            <div className="text-center space-y-2 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto border-2 border-primary/20 text-primary mb-4">
                <Lock className="w-8 h-8"/>
              </div>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">SECURE LOGIN</h2>
              <p className="text-xs font-bold text-slate-500 tracking-[0.3em] uppercase">Administrator Authentication</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 block ml-4">Terminal ID (Email)</label>
                <input 
                  type="email" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})}
                  className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-primary/50 transition-colors" required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 block ml-4">Access Key (Password)</label>
                <input 
                  type="password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})}
                  className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-primary/50 transition-colors" required 
                />
              </div>
              {loginError && <div className="text-[10px] text-red-500 font-black tracking-widest bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-center">{loginError}</div>}
              <button type="submit" className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:scale-105 transition-all uppercase tracking-widest italic">Initialize Session</button>
            </form>
          </div>
        </div>
      )}

      {/* Cyber Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto">
          <div className="bg-slate-900 w-full max-w-xl rounded-[3rem] p-10 shadow-[0_0_50px_rgba(0,243,255,0.2)] border-2 border-accent/30 my-auto">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-8">{editingItem ? 'EDIT' : 'ADD'} ANNOUNCEMENT</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Title</label>
                <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                       className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white focus:border-accent/50 outline-none transition-colors" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Content Description</label>
                <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                          className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white focus:border-accent/50 outline-none transition-colors h-32" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Type</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
                          className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white outline-none">
                    <option value="Umum">Umum</option><option value="Penting">Penting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
                          className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white outline-none">
                    <option value="Akademik">Akademik</option><option value="Kegiatan">Kegiatan</option><option value="Parenting">Parenting</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Date Log</label>
                <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                       className="w-full bg-black border-2 border-white/5 rounded-2xl p-4 text-sm text-white outline-none" required />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 font-black py-4 text-slate-500 uppercase tracking-widest text-xs italic">Discard</button>
                <button type="submit" className="flex-1 bg-accent text-black font-black py-4 rounded-2xl shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:scale-105 transition-all uppercase tracking-widest italic">Commit Data</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cyber Detail Modal */}
      {isDetailOpen && selectedItem && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
          <div className="bg-slate-900 w-full max-w-3xl rounded-[3rem] p-10 shadow-[0_0_100px_rgba(255,0,127,0.15)] border-2 border-white/10 relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
             
            <button onClick={() => setIsDetailOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors z-10"><X className="w-8 h-8"/></button>
            
            <div className="relative space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-6 py-1.5 bg-primary/20 text-primary border-2 border-primary/30 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] italic">{selectedItem.type}</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">{selectedItem.category}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">{selectedItem.title}</h2>
              
              <div className="flex flex-wrap gap-6 text-slate-400 text-[11px] font-black uppercase tracking-widest border-y-2 border-white/5 py-4">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary"/> {selectedItem.date}</div>
                {selectedItem.details?.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent"/> {selectedItem.details.location}</div>}
                {selectedItem.details?.time && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent"/> {selectedItem.details.time}</div>}
              </div>
              
              <p className="text-slate-300 text-lg font-medium leading-relaxed">{selectedItem.description}</p>
              
              {selectedItem.details?.agenda?.length > 0 && (
                <div className="space-y-4 bg-white/5 p-8 rounded-[2rem] border-2 border-white/5 shadow-inner">
                  <h4 className="font-black text-primary uppercase text-xs tracking-[0.4em] italic flex items-center gap-2">
                    <ListChecks className="w-5 h-5"/> SESSION AGENDAS
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.details.agenda.map((a: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-bold italic">
                        <div className="w-2 h-2 bg-accent shadow-[0_0_10px_rgba(0,243,255,0.8)] rounded-full"/> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedItem.details?.contact && (
                <div className="flex items-center gap-3 text-xs font-black text-slate-500 bg-black/40 w-fit px-6 py-3 rounded-full border border-white/5">
                  <Phone className="w-4 h-4 text-accent"/> CONTACT SYSTEM: <span className="text-white italic">{selectedItem.details.contact}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
