import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { StaggeredMenu } from '@/components/ui/StaggeredMenu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { PPDBModal } from '@/components/ui/PPDBModal';

const navItems = [
  { label: 'Beranda', ariaLabel: 'Go to home page', link: '/home' },
  { label: 'Tentang', ariaLabel: 'Learn about us', link: '/tentang-kami' },
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
  const [isPPDBOpen, setIsPPDBOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Ensure dark mode is always active for cyberpunk theme
    document.documentElement.classList.add('dark');

    const handleOpenPPDB = () => setIsPPDBOpen(true);
    window.addEventListener('open-ppdb', handleOpenPPDB);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-ppdb', handleOpenPPDB);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px]',
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b-2 border-primary/40 shadow-[0_0_20px_rgba(255,0,127,0.1)]' 
          : 'bg-black border-b-2 border-primary/20'
      )}
    >
      <StaggeredMenu
        position="right"
        items={navItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={['#ff007f', '#9d00ff', '#00f3ff']}
        accentColor="#00f3ff"
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
                  "text-[13px] font-black uppercase tracking-widest transition-colors",
                  location.pathname === item.link 
                    ? "text-primary shadow-[0_0_10px_rgba(255,0,127,0.5)]" 
                    : "text-slate-300 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <Button 
              onClick={() => setIsPPDBOpen(true)}
              className="ml-4 bg-primary hover:bg-primary/80 rounded-xl px-6 h-10 shadow-[0_0_20px_rgba(255,0,127,0.4)] text-xs font-black uppercase tracking-widest pointer-events-auto"
            >
              PPDB Online
            </Button>
          </div>
          
          {/* Toggle spacer - StaggeredMenu handles the toggle */}
          <div className="w-24" />
        </div>
      </div>

      <PPDBModal isOpen={isPPDBOpen} onOpenChange={setIsPPDBOpen} />
    </nav>
  );
}
