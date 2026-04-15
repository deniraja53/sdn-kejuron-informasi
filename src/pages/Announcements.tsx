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
    // Simple demo login
    if (loginData.email === 'admin@kejuron.sch.id' && loginData.password === 'admin123') {
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

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Pengumuman <span className="text-emerald-600">Terbaru</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Dapatkan informasi terkini mengenai kegiatan, kebijakan, dan berita penting dari SDN KEJURON.
        </p>
      </section>

      {/* Filter & Admin Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl gap-2 border-slate-200">
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
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100" 
                    : "text-slate-600 hover:bg-slate-50"
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
              className="group relative bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date Box */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-slate-50 flex flex-col items-center justify-center border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                  <span className="text-2xl font-black text-slate-900 group-hover:text-emerald-600">
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

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <Button variant="link" className="p-0 h-auto text-emerald-600 font-bold gap-2 group/btn">
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
                placeholder="admin@kejuron.sch.id"
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
          <div className="text-center">
            <p className="text-[10px] text-slate-400 font-medium">
              Gunakan email: <span className="text-slate-600 font-bold">admin@kejuron.sch.id</span> <br />
              Password: <span className="text-slate-600 font-bold">admin123</span>
            </p>
          </div>
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
    </div>
  );
}
