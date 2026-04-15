import { School, Facebook, Instagram, Youtube, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 h-[60px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-[11px] text-muted-foreground">
        <div>&copy; 2023 SDN KEJURON. Terakreditasi A.</div>
        <div className="flex gap-4 font-bold">
          <span className="cursor-pointer hover:text-emerald-600">Instagram</span>
          <span className="cursor-pointer hover:text-emerald-600">YouTube</span>
          <span className="cursor-pointer hover:text-emerald-600">Facebook</span>
          <span className="cursor-pointer hover:text-emerald-600">Twitter</span>
        </div>
      </div>
    </footer>
  );
}
