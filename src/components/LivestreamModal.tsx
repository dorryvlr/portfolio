import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Livestream {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface LivestreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LivestreamModal({ isOpen, onClose }: LivestreamModalProps) {
  // Add your livestream highlights here with their YouTube links and thumbnails
  const livestreams: Livestream[] = [
    {
      id: 1,
      title: "Gaming Livestream Highlight #1",
      thumbnail: "https://img.youtube.com/vi/OIBrOZSezdo/maxresdefault.jpg",
      videoUrl: "https://youtu.be/OIBrOZSezdo?si=P-Jk4vX5gNU_djru"
    },
    {
      id: 2,
      title: "Gaming Livestream Highlight #2",
      thumbnail: "https://img.youtube.com/vi/lpzarLS_uVw/maxresdefault.jpg",
      videoUrl: "https://youtu.be/lpzarLS_uVw?si=BAAEeF6HhkHPDQSn"
    },
    {
      id: 3,
      title: "Epic Gaming Moments",
      thumbnail: "https://img.youtube.com/vi/Z3wZ7u_dL6Y/maxresdefault.jpg",
      videoUrl: "https://youtu.be/Z3wZ7u_dL6Y?si=fK-EPUzE1cdcmTl5"
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-2xl border border-border/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
          <div>
            <h2 className="text-3xl font-bold">
              Gaming Livestream <span className="text-teal-400">Highlights</span>
            </h2>
            <p className="text-muted-foreground mt-1">Browse all my livestream highlights</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Livestreams Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {livestreams.map((livestream) => (
              <a
                key={livestream.id}
                href={livestream.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-background rounded-xl overflow-hidden border border-border/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={livestream.thumbnail}
                    alt={livestream.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
