import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { StaggeredMenu } from '@/components/ui/StaggeredMenu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Beranda', ariaLabel: 'Go to home page', link: '/home' },
  { label: 'Profil', ariaLabel: 'Learn about school profile', link: '/profil' },
  { label: 'Kegiatan', ariaLabel: 'View school activities', link: '/kegiatan' },
  { label: 'Guru & Tendik', ariaLabel: 'View teachers and staff', link: '/guru' },
  { label: 'Pengumuman', ariaLabel: 'View announcements', link: '/pengumuman' },
  { label: 'Kontak', ariaLabel: 'Get in touch', link: '/kontak' },
  { label: 'Kritik & Saran', ariaLabel: 'Send feedback', link: '/kritik-saran' },
  { label: 'PPDB Online', ariaLabel: 'Register online', link: '/ppdb' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'Facebook', link: 'https://facebook.com' },
  { label: 'YouTube', link: 'https://youtube.com' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px]',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-white border-b border-slate-100'
      )}
    >
      <StaggeredMenu
        position="right"
        items={navItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#1e293b"
        openMenuButtonColor="#1e293b"
        changeMenuColorOnOpen={true}
        colors={['#059669', '#be185d', '#db2777']}
        accentColor="#059669"
        isFixed={false}
      />

      {/* Desktop Menu Overlay */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none flex items-center">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo spacer - StaggeredMenu handles the logo */}
          <div className="w-48" />
          
          <div className="hidden lg:flex items-center gap-6 pointer-events-auto">
            {navItems.filter(item => item.label !== 'PPDB Online').map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={cn(
                  "text-[13px] font-bold transition-colors",
                  location.pathname === item.link ? "text-emerald-600" : "text-slate-800 hover:text-emerald-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button className="ml-4 bg-pink-600 hover:bg-pink-700 rounded-xl px-6 h-10 shadow-lg shadow-pink-200 text-xs font-bold">
              PPDB Online
            </Button>
          </div>
          
          {/* Toggle spacer - StaggeredMenu handles the toggle */}
          <div className="w-24" />
        </div>
      </div>
    </nav>
  );
}
