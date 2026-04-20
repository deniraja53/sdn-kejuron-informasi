import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Bell, ArrowRight, Filter, Plus, Edit2, Trash2, X, Save, Lock, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

const initialAnnouncements = [
  {
    id: 1,
    title: 'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025',
    date: '2024-04-10',
    description: 'Penerimaan siswa baru telah dibuka. Segera daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik dengan kurikulum modern.',
    type: 'Penting',
    category: 'Akademik'
  },
  {
    id: 2,
    title: 'Libur Hari Raya Idul Fitri 1445 H',
    date: '2024-04-05',
    description: 'Sesuai dengan kalender pendidikan, kegiatan belajar mengajar akan diliburkan mulai tanggal 8 April hingga 15 April 2024.',
    type: 'Umum',
    category: 'Kegiatan'
  },
  {
    id: 3,
    title: 'Pengumuman Hasil Ujian Tengah Semester Genap',
    date: '2024-03-25',
    description: 'Hasil UTS Genap sudah dapat diakses melalui portal orang tua siswa. Silakan hubungi wali kelas untuk informasi lebih lanjut.',
    type: 'Penting',
    category: 'Akademik'
  },
  {
    id: 4,
    title: 'Workshop Parenting: Mendidik Anak di Era Digital',
    date: '2024-03-20',
    description: 'Mengundang seluruh orang tua siswa untuk hadir dalam workshop parenting yang akan dilaksanakan pada hari Sabtu mendatang.',
    type: 'Umum',
    category: 'Parenting'
  },
  {
    id: 5,
    title: 'Lomba Kebersihan Kelas dan Lingkungan Sekolah',
    date: '2024-03-15',
    description: 'Dalam rangka memperingati Hari Bumi, sekolah mengadakan lomba kebersihan antar kelas dengan hadiah menarik.',
    type: 'Umum',
    category: 'Kegiatan'
  }
];

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Umum',
    category: 'Kegiatan',
    date: new Date().toISOString().split('T')[0]
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState<string | null>(null);

  // Filter and Sort
  const filteredAnnouncements = announcements.filter(item => 
    selectedCategory === 'Semua' || item.category === selectedCategory
  );

  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      description: '',
      type: 'Umum',
      category: 'Kegiatan',
      date: new Date().toISOString().split('T')[0]
    });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      type: item.type,
      category: item.category,
      date: item.date
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus pengumuman ini?')) {
      setAnnouncements(announcements.filter(a => a.id !== id));
      showNotification('Pengumuman berhasil dihapus');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setAnnouncements(announcements.map(a => 
        a.id === editingItem.id ? { ...a, ...formData } : a
      ));
      showNotification('Pengumuman berhasil diperbarui');
    } else {
      const newId = Math.max(...announcements.map(a => a.id), 0) + 1;
      setAnnouncements([{ id: newId, ...formData }, ...announcements]);
      showNotification('Pengumuman baru berhasil diterbitkan');
    }
    setIsDialogOpen(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // User requested specific credentials
    if (loginData.email === 'sdnkejuron13@gmail.com' && loginData.password === 'sdnkejuron041185') {
      setIsAdmin(true);
      setIsLoginDialogOpen(false);
      setLoginError(null);
      showNotification('Berhasil masuk sebagai Admin');
    } else {
      setLoginError('Email atau password salah');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    showNotification('Berhasil keluar dari Mode Admin');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 space-y-12 relative">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="text-center space-y-4">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold"
          >
            <Bell className="w-4 h-4" />
            Pusat Informasi
          </motion.div>
          
          {/* Admin Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => isAdmin ? handleLogout() : setIsLoginDialogOpen(true)}
            className={cn(
              "text-[10px] font-black uppercase tracking-widest rounded-full px-4 gap-2",
              isAdmin ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            )}
          >
            {isAdmin ? (
              <>
                <X className="w-3 h-3" />
                Matikan Mode Admin
              </>
            ) : (
              <>
                <Lock className="w-3 h-3" />
                Aktifkan Mode Admin
              </>
            )}
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Pengumuman <span className="text-emerald-600 dark:text-pink-500">Terbaru</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Dapatkan informasi terkini mengenai kegiatan, kebijakan, dan berita penting dari SDN KEJURON.
        </p>
      </section>

      {/* Filter & Admin Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl gap-2 border-slate-200 dark:border-slate-700 dark:text-slate-300">
            <Filter className="w-4 h-4" />
            Filter Kategori
          </Button>
          <div className="hidden sm:flex gap-2">
            {['Semua', 'Akademik', 'Kegiatan', 'Parenting'].map((cat) => (
              <Button 
                key={cat} 
                variant={selectedCategory === cat ? "default" : "ghost"}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-xl transition-all",
                  selectedCategory === cat 
                    ? "bg-emerald-600 dark:bg-pink-600 text-white shadow-lg shadow-emerald-100 dark:shadow-pink-900/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        
        {isAdmin && (
          <Button 
            onClick={handleOpenAdd}
            className="bg-emerald-600 hover:bg-emerald-700 rounded-xl gap-2 font-bold shadow-lg shadow-emerald-200"
          >
            <Plus className="w-4 h-4" />
            Tambah Pengumuman
          </Button>
        )}
        
        {!isAdmin && (
          <div className="text-sm text-slate-400 font-medium">
            Menampilkan {filteredAnnouncements.length} pengumuman
          </div>
        )}
      </div>

      {/* Announcements List */}
      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {sortedAnnouncements.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-emerald-100 dark:hover:border-pink-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date Box */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:bg-emerald-50 dark:group-hover:bg-pink-900/30 group-hover:border-emerald-100 dark:group-hover:border-pink-500 transition-colors">
                  <span className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-pink-400">
                    {new Date(item.date).getDate()}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {new Date(item.date).toLocaleString('id-ID', { month: 'short' })}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Badge 
                        className={cn(
                          "rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-wider border-none",
                          item.type === 'Penting' 
                            ? "bg-red-100 text-red-600" 
                            : "bg-green-100 text-green-600"
                        )}
                      >
                        {item.type}
                      </Badge>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>

                    {isAdmin && (
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon-sm" 
                          onClick={() => handleOpenEdit(item)}
                          className="rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon-sm" 
                          onClick={() => handleDelete(item.id)}
                          className="rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSelectedAnnouncement(item);
                      setIsDetailDialogOpen(true);
                    }}
                    className="p-0 h-auto text-emerald-600 dark:text-pink-500 font-bold gap-2 group/btn"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Login Dialog */}
      <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
        <DialogContent className="max-w-md rounded-[2.5rem] p-8 border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <Lock className="w-6 h-6" />
              </div>
              Admin Login
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</Label>
              <Input 
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="sdnkejuron13@gmail.com"
                className="rounded-xl border-slate-200 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-400">Password</Label>
              <Input 
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="••••••••"
                className="rounded-xl border-slate-200 focus:ring-emerald-500"
                required
              />
            </div>

            {loginError && (
              <p className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
                {loginError}
              </p>
            )}

            <DialogFooter className="pt-4">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setIsLoginDialogOpen(false)}
                className="rounded-xl font-bold"
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8 font-bold shadow-lg shadow-emerald-200 gap-2"
              >
                <LogIn className="w-4 h-4" />
                Masuk
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Admin Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-xl rounded-[2.5rem] p-8 border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900">
              {editingItem ? 'Edit Pengumuman' : 'Tambah Pengumuman'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-slate-400">Judul Pengumuman</Label>
              <Input 
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Masukkan judul..."
                className="rounded-xl border-slate-200 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-slate-400">Tipe</Label>
                <select 
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Umum">Umum</option>
                  <option value="Penting">Penting</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-xs font-bold uppercase tracking-widest text-slate-400">Kategori</Label>
                <select 
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Akademik">Akademik</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Parenting">Parenting</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-xs font-bold uppercase tracking-widest text-slate-400">Tanggal</Label>
              <Input 
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="rounded-xl border-slate-200 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desc" className="text-xs font-bold uppercase tracking-widest text-slate-400">Deskripsi</Label>
              <Textarea 
                id="desc"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tulis isi pengumuman..."
                className="rounded-xl border-slate-200 focus:ring-emerald-500 min-h-[120px]"
                required
              />
            </div>

            <DialogFooter className="pt-4">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setIsDialogOpen(false)}
                className="rounded-xl font-bold"
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8 font-bold shadow-lg shadow-emerald-200 gap-2"
              >
                <Save className="w-4 h-4" />
                {editingItem ? 'Simpan Perubahan' : 'Terbitkan'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Announcement Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-none shadow-[0_50px_150px_rgba(16,185,129,0.3)] bg-white dark:bg-slate-950 sm:rounded-[4.5rem] w-[95vw] h-auto max-h-[94vh] flex flex-col selection:bg-emerald-500 selection:text-white">
          {selectedAnnouncement && (
            <div className="flex flex-col h-full overflow-hidden relative">
              {/* Dynamic Futuristic Hero */}
              <div className="relative shrink-0 p-8 sm:p-16 md:p-24 bg-slate-900 overflow-hidden text-white">
                {/* Layered Animated Backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-900 to-slate-950" />
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />
                
                {/* Floating Glow Orbs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-32 bg-gradient-to-t from-emerald-500/10 to-transparent blur-2xl" />
                
                <div className="relative z-10 space-y-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-wrap items-center gap-4"
                  >
                    <Badge className={cn(
                      "rounded-full px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] border-none shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl", 
                      selectedAnnouncement.type === 'Penting' 
                        ? "bg-red-500 text-white" 
                        : "bg-emerald-400 text-slate-900"
                    )}>
                      {selectedAnnouncement.type}
                    </Badge>
                    <div className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[11px] font-black uppercase tracking-[0.2em] text-white/80 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                       INFO-DOC #{selectedAnnouncement.id.toString().padStart(4, '0')}
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring", damping: 15 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  >
                    {selectedAnnouncement.title}
                  </motion.h2>
                </div>

                {/* Futurist Control Button */}
                <Button
                  onClick={() => setIsDetailDialogOpen(false)}
                  className="absolute top-8 right-8 sm:top-12 sm:right-12 z-50 w-14 h-14 md:w-20 md:h-20 rounded-[2rem] bg-black/40 backdrop-blur-3xl text-white hover:bg-emerald-500 hover:scale-110 hover:rotate-90 transition-all duration-500 border border-white/10 group shadow-3xl"
                >
                  <X className="w-8 h-8 group-hover:scale-125 transition-transform" />
                </Button>
              </div>
              
              {/* Immersive Scrollable Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 sm:p-20 bg-slate-50 dark:bg-slate-950 relative">
                {/* Child-friendly Background Blob */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="max-w-5xl mx-auto space-y-20 relative z-10">
                  
                  {/* Neon Bento Grid (Child-friendly Vibrant Colors) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { 
                        icon: Calendar, 
                        label: 'Tanggal Rilis', 
                        value: new Date(selectedAnnouncement.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
                        color: 'emerald',
                        delay: 0.2
                      },
                      { 
                        icon: Filter, 
                        label: 'Kategori Info', 
                        value: selectedAnnouncement.category,
                        color: 'violet',
                        delay: 0.3
                      },
                      { 
                        icon: Bell, 
                        label: 'Status Sistem', 
                        value: `Prioritas ${selectedAnnouncement.type}`,
                        color: 'rose',
                        delay: 0.4
                      }
                    ].map((card, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: card.delay }}
                        className={cn(
                          "bg-white dark:bg-slate-900 p-10 rounded-[4rem] border shadow-xl flex flex-col gap-6 group cursor-default transition-all duration-500",
                          card.color === 'emerald' ? "border-emerald-100 hover:border-emerald-500/50 hover:shadow-emerald-200" :
                          card.color === 'violet' ? "border-violet-100 hover:border-violet-500/50 hover:shadow-violet-200" :
                          "border-rose-100 hover:border-rose-500/50 hover:shadow-rose-200"
                        )}
                      >
                        <div className={cn(
                          "w-20 h-20 rounded-[1.75rem] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6",
                          card.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                          card.color === 'violet' ? "bg-violet-50 text-violet-600" :
                          "bg-rose-50 text-rose-600"
                        )}>
                          <card.icon className="w-10 h-10" />
                        </div>
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{card.label}</p>
                          <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter italic uppercase">{card.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bold Editorial Content */}
                  <div className="space-y-16">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="relative p-12 border-l-[12px] border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 rounded-r-[3rem]"
                    >
                      <p className="text-3xl sm:text-4xl text-slate-900 dark:text-emerald-50 leading-[1.3] font-bold tracking-tight italic">
                        "{selectedAnnouncement.description}"
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="prose prose-emerald lg:prose-xl dark:prose-invert max-w-none space-y-10 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      <p>
                        Informasi resmi ini diterbitkan untuk memberikan panduan yang jelas bagi seluruh warga sekolah. Kami menghargai partisipasi aktif dan kedisiplinan Bapak/Ibu sekalian dalam mengikuti arahan ini demi kepentingan bersama putra-putri kita.
                      </p>
                      <p>
                        Detail teknis tambahan akan didistribusikan melalui grup komunikasi resmi sekolah. Pastikan Anda mendapatkan informasi hanya dari kanal terpercaya SDN KEJURON.
                      </p>
                    </motion.div>
                  </div>

                  {/* Holographic Verification Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="p-12 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden group shadow-3xl"
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20 opacity-50 group-hover:animate-pulse" />
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rotate-45 transform group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                      <div className="space-y-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <div className="px-4 py-2 bg-emerald-500/20 rounded-xl border border-emerald-500/40 flex items-center gap-2">
                             <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Authentic School Doc</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                          Sertifikat digital ini membuktikan bahwa pengumuman diterbitkan oleh <span className="text-white font-black underline decoration-emerald-500 decoration-4 underline-offset-4">Otoritas Digital SDN KEJURON</span>. 
                        </p>
                      </div>
                      
                      <div className="flex -space-x-4">
                         {['A', 'S', 'K'].map((x, i) => (
                           <div key={i} className="w-16 h-16 rounded-[1.5rem] border-4 border-slate-900 bg-emerald-500 flex items-center justify-center text-xl font-black text-white shadow-2xl rotate-6 group-hover:rotate-12 transition-transform">
                             {x}
                           </div>
                         ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Futuristic Close Button */}
                  <div className="flex justify-center pt-10">
                    <Button 
                      onClick={() => setIsDetailDialogOpen(false)}
                      className="group bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] px-20 h-24 font-black uppercase tracking-[0.5em] text-sm shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 gap-6 border-b-8 border-emerald-800"
                    >
                      Mengerti & Tutup
                      <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
