import {
  School,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-primary/20 h-[60px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-[11px] text-muted-foreground">
        <div className="font-medium tracking-wider">
          &copy; 2026 SDN KEJURON.{" "}
          <span className="text-accent">TERAKREDITASI B</span>.
        </div>
        <div className="flex gap-4 font-black uppercase tracking-widest">
          <span className="cursor-pointer hover:text-primary transition-colors">
            Instagram
          </span>
          <span className="cursor-pointer hover:text-primary transition-colors">
            YouTube
          </span>
          <span className="cursor-pointer hover:text-primary transition-colors">
            Facebook
          </span>
          <span className="cursor-pointer hover:text-primary transition-colors">
            Twitter
          </span>
        </div>
      </div>
    </footer>
  );
}
