import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eth-blue-dark text-eth-cream py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-white font-mono tracking-wider text-xl inline-block mb-4">
              <span className="font-bold text-eth-orange-light">ETH</span>WORLD
            </Link>
            <p className="text-eth-cream/70 max-w-md mb-6">
              A documentary miniseries told in three chapters, each capturing a different facet of a technological and cultural revolution.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors"
                aria-label="YouTube"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors"
                aria-label="Instagram"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#chapters" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  Chapters
                </Link>
              </li>
              <li>
                <Link href="#watch" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  Watch
                </Link>
              </li>
              <li>
                <Link href="#expo" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  Expo 2025
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eth-orange-light mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@eth-world-story.com" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  info@eth-world-story.com
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eth-orange-light mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-eth-cream/70">
                  Press inquiries: press@eth-world-story.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-eth-cream/50 text-sm mb-4 md:mb-0">
            © {currentYear} Ethereum: A Global Story. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="/credits" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 