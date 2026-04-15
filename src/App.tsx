/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'motion/react';
import Home from '@/pages/Home';
import ProfilePage from '@/pages/Profile';
import ActivitiesPage from '@/pages/Activities';
import TeachersPage from '@/pages/Teachers';
import AnnouncementsPage from '@/pages/Announcements';
import ContactPage from '@/pages/Contact';
import FeedbackPage from '@/pages/Feedback';
import Intro from '@/pages/Intro';

function AppContent() {
  const location = useLocation();
  const isIntro = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      {/* Animated Border Lines */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-[2px] bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
          initial={{ width: 0, left: 0 }}
          animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-[2px] bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
          initial={{ height: 0, top: 0 }}
          animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-[2px] bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
          initial={{ width: 0, right: 0 }}
          animate={{ width: ['0%', '100%', '0%'], right: ['0%', '0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[2px] bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
          initial={{ height: 0, bottom: 0 }}
          animate={{ height: ['0%', '100%', '0%'], bottom: ['0%', '0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {!isIntro && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/kegiatan" element={<ActivitiesPage />} />
          <Route path="/guru" element={<TeachersPage />} />
          <Route path="/pengumuman" element={<AnnouncementsPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/kritik-saran" element={<FeedbackPage />} />
          {/* Fallback to Home for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isIntro && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

