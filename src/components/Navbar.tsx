import { useState, useEffect } from 'react';
import Link from 'next/link';

type NavbarProps = {
  transparent?: boolean;
  onOpenTrailer?: () => void;
};

const Navbar = ({ transparent = false, onOpenTrailer }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMobileMenuToggle();
    }
  };
  
  const handleTrailerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTrailer) {
      onOpenTrailer();
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
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#chapters', label: 'Chapters' },
    { href: '#watch', label: 'Watch' },
    { href: '#expo', label: 'Expo 2025' },
  ];
  
  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled || !transparent ? 'bg-eth-blue-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
  }`;
  
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-mono tracking-wider text-xl">
            <span className="font-bold text-eth-orange-light">ETH</span>WORLD
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-eth-cream hover:text-eth-orange-light transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#trailer" 
              className="px-5 py-2 bg-eth-orange hover:bg-eth-orange-light text-white rounded transition-colors text-sm font-medium tracking-wide"
              aria-label="Watch Trailer"
              tabIndex={0}
              onClick={handleTrailerClick}
              onKeyDown={handleTrailerKeyDown}
            >
              WATCH TRAILER
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div 
            className="md:hidden"
            onClick={handleMobileMenuToggle}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span className={`line bg-white transition-all duration-300 block h-0.5 w-6 rounded ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`line bg-white transition-all duration-300 block h-0.5 w-6 rounded my-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`line bg-white transition-all duration-300 block h-0.5 w-6 rounded ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 pb-4 pt-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-eth-cream hover:text-eth-orange-light transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#trailer" 
              className="px-5 py-2 bg-eth-orange hover:bg-eth-orange-light text-white rounded transition-colors text-sm font-medium tracking-wide text-center"
              aria-label="Watch Trailer"
              tabIndex={0}
              onClick={handleTrailerClick}
              onKeyDown={handleTrailerKeyDown}
            >
              WATCH TRAILER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 