import { useState, useEffect } from 'react';
import Link from 'next/link';

type HeroProps = {
  onOpenTrailer: () => void;
};

const Hero = ({ onOpenTrailer }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const handleTrailerClick = () => {
    onOpenTrailer();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onOpenTrailer();
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center bg-eth-blue-dark overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-eth-blue-dark via-eth-blue to-eth-blue-dark opacity-70"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-eth-orange opacity-30 blur-[150px] transform -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-eth-orange opacity-20 blur-[130px] transform translate-y-1/4 -translate-x-1/4"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-eth-orange-light text-sm sm:text-base tracking-widest font-mono mb-3">EXPO 2025 OSAKA</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">
              <span className="block">ETHEREUM:</span>
              <span className="block">A GLOBAL STORY</span>
            </h1>
            <p className="text-eth-cream text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed opacity-90">
              A documentary miniseries told in three chapters, each capturing a different facet of a technological and cultural revolution. From the origins of decentralization to the vibrant Ethereum community driving change.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              className="px-8 py-3 bg-eth-orange hover:bg-eth-orange-light text-white rounded-md transition-colors flex items-center gap-2 text-base font-medium tracking-wide"
              onClick={handleTrailerClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              aria-label="Watch trailer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              WATCH TRAILER
            </button>
            <Link 
              href="#chapters"
              className="px-8 py-3 border border-eth-cream/30 hover:border-eth-cream/80 text-eth-cream rounded-md transition-all hover:bg-eth-cream/10 text-base font-medium tracking-wide"
              aria-label="Explore chapters"
              tabIndex={0}
            >
              EXPLORE CHAPTERS
            </Link>
          </div>
          
          <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-eth-orange-light"></div>
              <span className="text-eth-cream text-sm tracking-wider">APRIL 8TH, 2025</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-eth-cream text-xs mb-2 tracking-wider opacity-70">SCROLL DOWN</span>
        <div className="w-5 h-9 border border-eth-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-eth-cream/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 