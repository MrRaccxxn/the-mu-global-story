import { useState } from 'react';
import Link from 'next/link';

type NavbarProps = {
  transparent?: boolean;
  onOpenTrailer: () => void;
};

const Navbar = ({ transparent = false, onOpenTrailer }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTrailerClick = () => {
    onOpenTrailer();
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent ? 'bg-transparent' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-dark hover:text-primary transition-colors"
            tabIndex={0}
            aria-label="Go to homepage"
          >
            ETH Story
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-dark hover:text-primary transition-colors font-medium"
              tabIndex={0}
            >
              About
            </Link>
            <Link 
              href="#chapters" 
              className="text-dark hover:text-primary transition-colors font-medium"
              tabIndex={0}
            >
              Chapters
            </Link>
            <button
              onClick={handleTrailerClick}
              className="btn-primary"
              tabIndex={0}
              aria-label="Watch trailer"
            >
              Watch Trailer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            tabIndex={0}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link 
                href="#about" 
                className="block px-4 py-2 text-dark hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                About
              </Link>
              <Link 
                href="#chapters" 
                className="block px-4 py-2 text-dark hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                Chapters
              </Link>
              <div className="px-4">
                <button
                  onClick={handleTrailerClick}
                  className="btn-primary w-full"
                  tabIndex={0}
                  aria-label="Watch trailer"
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 