import { useState, useEffect } from 'react';
import Image from 'next/image';

type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
  color: string;
  borderColor: string;
};

const chaptersData: Chapter[] = [
  {
    id: 1,
    title: 'THE SPARK',
    subtitle: 'In the middle of chaos, a community was born.',
    description: 'Blockchain emerged as a response to various economic, political, and social crises that eroded trust in traditional institutions. From hyperinflation in collapsing economies to financial censorship under authoritarian regimes, and excessive banking control during global crises, the need for a decentralized alternative became evident.',
    duration: 'DURATION: 00:05:32',
    image: '/images/chapter1.jpg',
    color: 'from-eth-orange/30 to-eth-blue-dark',
    borderColor: 'border-eth-orange/30',
  },
  {
    id: 2,
    title: 'HUMAN CONNECTION',
    subtitle: 'Together, we break walls and we build New worlds.',
    description: 'This episode explores the real stories behind Ethereum\'s community, one of the blockchains that most faithfully preserves the core philosophy behind the technology. Millions of people, driven by the conviction that they can reshape the world, have found in Ethereum more than just a platform.',
    duration: 'DURATION: 00:05:17',
    image: '/images/chapter2.jpg',
    color: 'from-[#7B61FF]/30 to-eth-blue-dark',
    borderColor: 'border-[#7B61FF]/30',
  },
  {
    id: 3,
    title: 'THE DREAM',
    subtitle: 'In the middle of chaos, a community was born.',
    description: 'Blockchain has the potential to redefine our relationship with institutions, data, and the economy. Beyond speculation, its adoption can bring structural changes that benefit society. This episode explores how the technology can work alongside governments to improve economies and data management—without compromising its decentralized nature.',
    duration: 'DURATION: 00:04:58',
    image: '/images/chapter3.jpg',
    color: 'from-[#00C2FF]/30 to-eth-blue-dark',
    borderColor: 'border-[#00C2FF]/30',
  },
];

const CyberChapters = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [isGlitching, setIsGlitching] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState<{[key: number]: number}>({1: 100, 2: 0, 3: 0});
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Simulate loading progress for inactive chapters
  useEffect(() => {
    const progressIntervals: NodeJS.Timeout[] = [];
    
    chaptersData.forEach(chapter => {
      if (chapter.id !== activeChapter && loadingProgress[chapter.id] < 100) {
        const interval = setInterval(() => {
          setLoadingProgress(prev => {
            const newProgress = Math.min(prev[chapter.id] + (Math.random() * 5), 100);
            return { ...prev, [chapter.id]: newProgress };
          });
        }, 500);
        
        progressIntervals.push(interval);
      }
    });
    
    return () => {
      progressIntervals.forEach(interval => clearInterval(interval));
    };
  }, [activeChapter, loadingProgress]);
  
  const handleChapterClick = (chapterId: number) => {
    setIsGlitching(true);
    
    // Reset progress of newly selected chapter
    setLoadingProgress(prev => ({
      ...prev,
      [chapterId]: 100
    }));
    
    setTimeout(() => {
      setActiveChapter(chapterId);
      setIsGlitching(false);
    }, 300);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, chapterId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleChapterClick(chapterId);
    }
  };
  
  const activeChapterData = chaptersData.find(chapter => chapter.id === activeChapter) || chaptersData[0];
  
  return (
    <section id="chapters" className="relative py-24 bg-eth-blue-dark overflow-hidden">
      <div className="matrix-bg"></div>
      <div className={`scanlines ${isGlitching ? 'opacity-30' : ''}`}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="px-4 py-2 bg-eth-blue/50 border border-eth-orange/30 rounded-md mb-4 inline-flex items-center">
            <div className="w-2 h-2 bg-eth-orange rounded-full mr-2 animate-pulse"></div>
            <span className="text-eth-orange-light text-sm tracking-widest font-mono">SYSTEM:/ETH_WORLD/CHAPTERS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center neon-text">
            CHAPTER <span className={`glitch-text ${isGlitching ? 'crt-flicker' : ''}`} data-text="SELECT">SELECT</span>
          </h2>
          
          <div className="w-16 h-1 bg-eth-orange-light"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {chaptersData.map((chapter) => (
            <div 
              key={chapter.id}
              className={`rounded-lg overflow-hidden relative cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border border-transparent ${
                activeChapter === chapter.id 
                  ? 'border-eth-orange-light shadow-[0_0_15px_rgba(232,76,61,0.5)]' 
                  : 'opacity-80 hover:border-eth-orange/50'
              }`}
              onClick={() => handleChapterClick(chapter.id)}
              onKeyDown={(e) => handleKeyDown(e, chapter.id)}
              tabIndex={0}
              aria-label={`Chapter ${chapter.id}: ${chapter.title}`}
            >
              <div className="relative h-48 md:h-56 lg:h-64">
                <div className={`absolute inset-0 bg-gradient-to-t ${chapter.color} z-10 opacity-80`}></div>
                
                {/* Terminal-like overlay */}
                <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-eth-orange-light text-xs font-mono block mb-1 bg-eth-blue-dark/50 px-2 py-1 rounded">
                      CHAPTER_{chapter.id}
                    </span>
                    
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      activeChapter === chapter.id ? 'bg-eth-orange text-white' : 'bg-eth-blue-dark/70 text-eth-cream/70'
                    }`}>
                      {activeChapter === chapter.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                      ) : (
                        <span className="font-mono text-sm">{chapter.id}</span>
                      )}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-bold font-mono mb-1">{chapter.title}</h3>
                    <span className="text-eth-cream/70 text-xs block font-mono">{chapter.duration}</span>
                    
                    {/* Loading progress bar */}
                    <div className="mt-2 h-1 bg-eth-blue-dark/50 rounded overflow-hidden">
                      <div 
                        className={`h-full ${activeChapter === chapter.id ? 'bg-eth-orange animate-pulse' : 'bg-eth-cream/50'}`}
                        style={{ width: `${loadingProgress[chapter.id] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Static noise effect for non-active chapters */}
                {activeChapter !== chapter.id && (
                  <div className="absolute inset-0 bg-[url('/static-noise.gif')] mix-blend-overlay opacity-10 z-25"></div>
                )}
                
                <Image 
                  src={chapter.image} 
                  alt={`Chapter ${chapter.id}: ${chapter.title}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className={`${activeChapter !== chapter.id ? 'grayscale-[30%]' : ''} ${isGlitching && activeChapter === chapter.id ? 'crt-flicker' : ''}`}
                  priority={chapter.id === 1}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className={`bg-eth-blue/20 rounded-xl p-6 md:p-10 backdrop-blur-md ${activeChapterData.borderColor} border relative overflow-hidden ${isGlitching ? 'crt-flicker' : ''}`}>
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 bg-eth-blue-dark/80 text-xs font-mono text-eth-cream/70 px-4 py-1 flex justify-between items-center border-b border-eth-orange/20">
            <span>CHAPTER_{activeChapter}.dat</span>
            <div className="flex space-x-2">
              <span className="inline-block w-3 h-3 bg-[#FF5F57] rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-[#FFBD2E] rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-[#28CA41] rounded-full"></span>
            </div>
          </div>
          
          {chaptersData.map((chapter) => (
            <div 
              key={chapter.id} 
              className={`transition-opacity duration-300 pt-6 ${activeChapter === chapter.id ? 'block' : 'hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-eth-orange rounded-full mr-2 animate-pulse"></div>
                    <span className="text-eth-orange-light text-sm font-mono block mb-2">{`CHAPTER_${chapter.id}`}</span>
                  </div>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 glitch-text" data-text={chapter.title}>
                    {chapter.title}
                  </h3>
                  
                  <div className="mb-4 text-eth-cream/80 text-sm px-3 py-2 border-l-2 border-eth-orange">
                    {chapter.subtitle}
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-eth-orange-light mr-2">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-eth-cream/60 text-xs block font-mono">{chapter.duration}</span>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="bg-eth-blue-dark/50 p-4 border border-eth-cream/10 rounded-md">
                    <p className="text-eth-cream text-base md:text-lg leading-relaxed font-mono">
                      <span className="text-eth-orange-light font-bold">$ cat </span>
                      <span className="crt-flicker">_</span>
                      <br /><br />
                      {chapter.description}
                    </p>
                  </div>
                  
                  <button 
                    className="mt-6 glitch-button px-5 py-2 rounded-md text-sm font-medium tracking-wide flex items-center gap-2"
                    aria-label={`Watch Chapter ${chapter.id}`}
                    tabIndex={0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    STREAM_CHAPTER_{chapter.id}.mp4
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberChapters; 