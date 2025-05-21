import { useState, useEffect } from 'react';
import Link from 'next/link';

type CyberNavbarProps = {
  transparent?: boolean;
  onOpenTrailer?: () => void;
};

const CyberNavbar = ({ transparent = false, onOpenTrailer }: CyberNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  
  const handleMobileMenuToggle = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setIsGlitching(false);
    }, 200);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMobileMenuToggle();
    }
  };
  
  const handleTrailerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTrailer) {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
        onOpenTrailer();
      }, 300);
    }
  };
  
  const handleTrailerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onOpenTrailer) {
        onOpenTrailer();
      }
    }
  };
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 8000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'ABOUT.md' },
    { href: '#chapters', label: 'CHAPTERS.exe' },
    { href: '#post-it-wall', label: 'WALL.html' },
    { href: '#expo', label: 'EXPO25.io' },
  ];
  
  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled || !transparent 
      ? 'bg-eth-blue-dark/90 backdrop-blur-md border-b border-eth-orange/20 py-3' 
      : 'bg-transparent py-5'
  }`;
  
  return (
    <nav className={navbarClasses}>
      <div className={`scanlines ${isGlitching ? 'opacity-30' : 'opacity-10'}`}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={`text-white font-mono tracking-wider text-xl relative group ${isGlitching ? 'crt-flicker' : ''}`}
          >
            <span className="absolute -inset-0.5 bg-gradient-to-r from-eth-orange/0 via-eth-orange/40 to-eth-orange/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-500 animate-pulse blur-sm"></span>
            <span className="relative">
              <span className="font-bold text-eth-orange-light">ETH</span>
              <span className="glitch-text" data-text="WORLD">WORLD</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-eth-cream hover:text-eth-orange-light transition-colors text-sm font-mono tracking-wide relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eth-orange-light transition-all duration-300 group-hover:w-full"></span>
                {link.label}
              </Link>
            ))}
            <Link 
              href="#trailer" 
              className={`glitch-button px-5 py-2 bg-eth-orange/80 hover:bg-eth-orange text-white rounded-sm transition-colors text-sm font-mono tracking-wide ${isGlitching ? 'crt-flicker' : ''}`}
              aria-label="Watch Trailer"
              tabIndex={0}
              onClick={handleTrailerClick}
              onKeyDown={handleTrailerKeyDown}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                STREAM_TRAILER.mp4
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div 
            className="md:hidden cursor-pointer z-50"
            onClick={handleMobileMenuToggle}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Toggle mobile menu"
          >
            <div className={`glitch-button px-2 py-1 rounded-sm border border-eth-orange/50 ${isGlitching ? 'crt-flicker' : ''}`}>
              <div className="w-6 space-y-1.5">
                <span className={`block h-0.5 w-6 bg-eth-orange transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-eth-orange transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-4 ml-auto'}`}></span>
                <span className={`block h-0.5 w-6 bg-eth-orange transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-eth-blue-dark/95 backdrop-blur-md z-40 flex items-center justify-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="matrix-bg opacity-10"></div>
        <div className={`scanlines ${isGlitching ? 'opacity-30' : 'opacity-10'}`}></div>
        
        <div className="container px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-eth-cream hover:text-eth-orange-light transition-colors text-lg font-mono tracking-wide py-2 glitch-text"
                data-text={link.label}
                onClick={handleMobileMenuToggle}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#trailer" 
              className="glitch-button px-6 py-3 bg-eth-orange/80 hover:bg-eth-orange text-white rounded-sm transition-colors text-base font-mono tracking-wide mt-4 w-full text-center"
              aria-label="Watch Trailer"
              tabIndex={0}
              onClick={(e) => {
                handleTrailerClick(e);
                handleMobileMenuToggle();
              }}
              onKeyDown={handleTrailerKeyDown}
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                STREAM_TRAILER.mp4
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CyberNavbar; 