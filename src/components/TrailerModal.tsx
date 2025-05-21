import { useEffect, useRef } from 'react';

type TrailerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  trailerSrc?: string;
};

const TrailerModal = ({ isOpen, onClose, trailerSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ' }: TrailerModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleOutsideClick);
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
      
      // Restore body scrolling when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-eth-blue-dark/80 backdrop-blur-md">
      <div 
        ref={modalRef}
        className="bg-eth-blue-dark border border-white/10 rounded-lg shadow-2xl w-full max-w-4xl"
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="text-white font-bold">ETHEREUM: A GLOBAL STORY - TRAILER</h3>
          <button
            className="text-eth-cream/70 hover:text-eth-orange-light transition-colors"
            onClick={onClose}
            aria-label="Close trailer"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={trailerSrc}
            title="Ethereum: A Global Story - Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="p-4 border-t border-white/10">
          <p className="text-eth-cream/80 text-sm mb-2">
            A documentary miniseries told in three chapters, premiering at Expo 2025 Osaka.
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-eth-orange hover:bg-eth-orange-light text-white rounded transition-colors text-sm font-medium tracking-wide"
              onClick={onClose}
              tabIndex={0}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal; 