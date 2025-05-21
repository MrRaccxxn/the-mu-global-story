import { useState, useEffect } from 'react';
import Link from 'next/link';

const CyberFooter = () => {
  const currentYear = new Date().getFullYear();
  const [typingText, setTypingText] = useState('');
  const consoleText = '> ETH_WORLD.connect("OSAKA_EXPO_2025")';
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Simulate typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < consoleText.length) {
        setTypingText(prev => prev + consoleText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        // Add cursor blink after typing is complete
        setTimeout(() => {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 200);
        }, 500);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 10000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <footer className="bg-eth-blue-dark text-eth-cream py-16 relative overflow-hidden">
      <div className="matrix-bg"></div>
      <div className={`scanlines ${isGlitching ? 'opacity-30' : 'opacity-10'}`}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Terminal-style header */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-eth-blue-dark/80 border border-eth-orange/30 rounded">
            <div className="px-4 py-2 bg-eth-blue text-xs font-mono text-eth-cream/70 flex justify-between items-center border-b border-eth-orange/20">
              <span>terminal.sh</span>
              <div className="flex space-x-2">
                <span className="inline-block w-3 h-3 bg-[#FF5F57] rounded-full"></span>
                <span className="inline-block w-3 h-3 bg-[#FFBD2E] rounded-full"></span>
                <span className="inline-block w-3 h-3 bg-[#28CA41] rounded-full"></span>
              </div>
            </div>
            <div className="p-4 text-eth-cream font-mono text-sm">
              <p className="mb-2">
                <span className="text-eth-orange-light">root@ethereum:~$</span> {typingText}
                <span className={`inline-block w-2 h-4 bg-eth-orange-light ml-1 ${isGlitching ? 'opacity-0' : 'animate-pulse'}`}></span>
              </p>
              {typingText === consoleText && (
                <div className={`mt-2 ${isGlitching ? 'crt-flicker' : ''}`}>
                  <span className="text-green-400">Connection established</span><br />
                  <span className="text-eth-orange-light">Join us at Expo 2025 Osaka: April 8th, 2025</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-white font-mono tracking-wider text-xl inline-block mb-4">
              <span className="font-bold text-eth-orange-light">ETH</span>
              <span className="glitch-text" data-text="WORLD">WORLD</span>
            </Link>
            <p className="text-eth-cream/70 max-w-md mb-6 font-mono text-sm">
              A documentary miniseries in three chapters exploring Ethereum&apos;s
              impact on technology and society. Premiering at Expo 2025 Osaka.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors glitch-button p-2 rounded-sm"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors glitch-button p-2 rounded-sm"
                aria-label="YouTube"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eth-cream/70 hover:text-eth-orange-light transition-colors glitch-button p-2 rounded-sm"
                aria-label="Instagram"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 font-mono">
              <span className="text-eth-orange-light mr-1">{'>>'}</span>NAVIGATE
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link href="#about" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors inline-flex items-center">
                  <span className="w-4 h-4 mr-2 text-eth-orange">{'>'}</span>
                  ABOUT.md
                </Link>
              </li>
              <li>
                <Link href="#chapters" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors inline-flex items-center">
                  <span className="w-4 h-4 mr-2 text-eth-orange">{'>'}</span>
                  CHAPTERS.exe
                </Link>
              </li>
              <li>
                <Link href="#post-it-wall" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors inline-flex items-center">
                  <span className="w-4 h-4 mr-2 text-eth-orange">{'>'}</span>
                  WALL.html
                </Link>
              </li>
              <li>
                <Link href="#expo" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors inline-flex items-center">
                  <span className="w-4 h-4 mr-2 text-eth-orange">{'>'}</span>
                  EXPO25.io
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 font-mono">
              <span className="text-eth-orange-light mr-1">{'>>'}</span>CONNECT
            </h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eth-orange-light mr-2 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@eth-world-story.com" className="text-eth-cream/70 hover:text-eth-orange-light transition-colors">
                  sudo mail info@eth-world-story.com
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eth-orange-light mr-2 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-eth-cream/70">
                  For press: press@eth-world-story.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-eth-cream/50 text-sm mb-4 md:mb-0 font-mono">
            <span className="text-eth-orange-light">$</span> © {currentYear} ETH:WORLD {'>>'} A GLOBAL STORY
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors font-mono">
              <span className="text-eth-orange-light">../</span>PRIVACY.txt
            </Link>
            <Link href="/terms" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors font-mono">
              <span className="text-eth-orange-light">../</span>TERMS.txt
            </Link>
            <Link href="/credits" className="text-eth-cream/50 hover:text-eth-cream text-sm transition-colors font-mono">
              <span className="text-eth-orange-light">../</span>CREDITS.json
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter; 