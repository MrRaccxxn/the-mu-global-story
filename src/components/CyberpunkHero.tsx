import { useState, useEffect } from 'react';
import Link from 'next/link';

type CyberpunkHeroProps = {
  onOpenTrailer: () => void;
};

const CyberpunkHero = ({ onOpenTrailer }: CyberpunkHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState('ETHEREUM');
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 7000 + 3000);
    
    // Text scramble effect for ETHEREUM
    const textScrambleInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const scrambledText = 'ETHEREUM'.split('')
          .map(char => Math.random() > 0.3 ? char : String.fromCharCode(Math.floor(Math.random() * 26) + 65))
          .join('');
        setGlitchText(scrambledText);
        
        setTimeout(() => {
          setGlitchText('ETHEREUM');
        }, 200);
      }
    }, 1000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(textScrambleInterval);
    };
  }, []);
  
  const handleTrailerClick = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      onOpenTrailer();
    }, 300);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleTrailerClick();
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center bg-eth-blue-dark overflow-hidden cyberpunk-cursor">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-eth-blue-dark via-eth-blue to-eth-blue-dark opacity-70"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-eth-orange opacity-30 blur-[150px] transform -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-eth-orange opacity-20 blur-[130px] transform translate-y-1/4 -translate-x-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scanlines effect */}
      <div className={`scanlines ${isGlitching ? 'opacity-30' : ''}`}></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-3">
              <div className="w-8 h-[1px] bg-eth-orange-light mr-3"></div>
              <span className="inline-block text-eth-orange-light text-sm sm:text-base tracking-widest font-mono">
                <span className={isGlitching ? 'crt-flicker' : ''}>EXPO 2025 OSAKA</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
              <div className="flex items-center mb-2">
                <span className="glitch-text mr-2" data-text={glitchText}>{glitchText}:</span>
              </div>
              <span className="block text-eth-cream">A GLOBAL <span className="neon-text">STORY</span></span>
            </h1>
            
            <p className="text-eth-cream text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed opacity-90 border-l-2 border-eth-orange pl-4">
              A documentary miniseries in three chapters, capturing a technological and cultural revolution. From decentralization&apos;s origins to the vibrant Ethereum community reshaping our future.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              className={`glitch-button px-8 py-3 bg-eth-orange/80 hover:bg-eth-orange text-white rounded transition-colors flex items-center gap-2 text-base font-medium tracking-wide relative overflow-hidden ${isGlitching ? 'crt-flicker' : ''}`}
              onClick={handleTrailerClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              aria-label="Watch trailer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              WATCH_TRAILER.mp4
            </button>
            
            <Link 
              href="#chapters"
              className="px-8 py-3 border border-eth-cream/30 hover:border-eth-cream/80 text-eth-cream rounded transition-all hover:bg-eth-cream/10 text-base font-medium tracking-wide relative group"
              aria-label="Explore chapters"
              tabIndex={0}
            >
              <span className="relative z-10">EXPLORE_CHAPTERS.exe</span>
              <span className="absolute inset-0 bg-gradient-to-r from-eth-orange/0 via-eth-orange/20 to-eth-orange/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            </Link>
          </div>
          
          <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-eth-blue/30 border border-eth-orange/20 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-eth-orange-light mr-2">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
              <span className="text-eth-cream text-sm tracking-wider font-mono">
                <span className={isGlitching ? 'crt-flicker' : ''}>RELEASE: 08.04.2025</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Digital particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute bg-eth-orange/30 rounded-full w-2 h-2 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-eth-cream text-xs mb-2 tracking-wider opacity-70 font-mono">SCROLL_DOWN</span>
        <div className="w-5 h-9 border border-eth-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-eth-cream/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default CyberpunkHero; 