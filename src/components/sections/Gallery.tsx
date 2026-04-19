import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const images = [
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', alt: 'Belajar di Kelas' },
  { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', alt: 'Coding for Kids' },
  { url: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop', alt: 'Eksperimen Sains' },
  { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop', alt: 'Seni Lukis' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', alt: 'Robotik' },
  { url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop', alt: 'English Club' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <div className="bento-card h-full">
      <div className="bento-section-title">Galeri Kegiatan</div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedImage(img)}
            className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative border-2 border-primary/20 hover:border-primary/50 transition-all"
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[1.5rem] border-2 border-primary/30 shadow-[0_0_50px_rgba(255,0,127,0.3)] bg-black">
          {selectedImage && (
            <div className="relative group">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl border-2 border-primary/30">
                <p className="text-white font-black uppercase tracking-widest text-center text-sm">{selectedImage.alt}</p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-primary/40 transition-colors border-2 border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
