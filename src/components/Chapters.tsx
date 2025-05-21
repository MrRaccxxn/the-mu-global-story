import { useState } from 'react';
import Image from 'next/image';

type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
};

const chaptersData: Chapter[] = [
  {
    id: 1,
    title: 'THE SPARK',
    subtitle: 'In the middle of chaos, a community was born.',
    description: 'Blockchain emerged as a response to various economic, political, and social crises that eroded trust in traditional institutions. From hyperinflation in collapsing economies to financial censorship under authoritarian regimes, and excessive banking control during global crises, the need for a decentralized alternative became evident.',
    duration: 'About 5 minutes',
    image: '/images/chapter1.jpg',
  },
  {
    id: 2,
    title: 'HUMAN CONNECTION',
    subtitle: 'Together, we break walls and we build New worlds.',
    description: 'This episode explores the real stories behind Ethereum&apos;s community, one of the blockchains that most faithfully preserves the core philosophy behind the technology. Millions of people, driven by the conviction that they can reshape the world, have found in Ethereum more than just a platform.',
    duration: 'About 5 minutes',
    image: '/images/chapter2.jpg',
  },
  {
    id: 3,
    title: 'THE DREAM',
    subtitle: 'In the middle of chaos, a community was born.',
    description: 'Blockchain has the potential to redefine our relationship with institutions, data, and the economy. Beyond speculation, its adoption can bring structural changes that benefit society. This episode explores how the technology can work alongside governments to improve economies and data management—without compromising its decentralized nature.',
    duration: 'About 5 minutes',
    image: '/images/chapter3.jpg',
  },
];

const Chapters = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  
  const handleChapterClick = (chapterId: number) => {
    setActiveChapter(chapterId);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, chapterId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveChapter(chapterId);
    }
  };
  
  return (
    <section id="chapters" className="py-24 bg-eth-blue-dark relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-eth-blue-dark via-eth-blue to-eth-blue-dark opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-eth-orange-light text-sm tracking-widest font-mono mb-3">ETHEREUM: A GLOBAL STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center">CHAPTERS</h2>
          <div className="w-16 h-1 bg-eth-orange-light"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {chaptersData.map((chapter) => (
            <div 
              key={chapter.id}
              className={`rounded-lg overflow-hidden relative cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                activeChapter === chapter.id ? 'ring-2 ring-eth-orange scale-[1.02]' : 'opacity-80'
              }`}
              onClick={() => handleChapterClick(chapter.id)}
              onKeyDown={(e) => handleKeyDown(e, chapter.id)}
              tabIndex={0}
              aria-label={`Chapter ${chapter.id}: ${chapter.title}`}
            >
              <div className="relative h-48 md:h-56 lg:h-64">
                <div className="absolute inset-0 bg-eth-blue-dark/50 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-eth-orange-light text-xs font-mono block mb-1">{`Chapter ${chapter.id}`}</span>
                  <h3 className="text-white text-xl font-bold">{chapter.title}</h3>
                  <span className="text-eth-cream/70 text-xs block mt-1">{chapter.duration}</span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                    activeChapter === chapter.id ? 'bg-eth-orange' : 'bg-white/30'
                  }`}>
                    {activeChapter === chapter.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                      </svg>
                    ) : (
                      <span className="text-white font-medium text-sm">{chapter.id}</span>
                    )}
                  </span>
                </div>
                <Image 
                  src={chapter.image} 
                  alt={`Chapter ${chapter.id}: ${chapter.title}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={chapter.id === 1}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-eth-blue/20 rounded-xl p-6 md:p-10 backdrop-blur-sm border border-white/10">
          {chaptersData.map((chapter) => (
            <div 
              key={chapter.id} 
              className={`transition-opacity duration-300 ${activeChapter === chapter.id ? 'block' : 'hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <span className="text-eth-orange-light text-sm font-mono block mb-2">{`Chapter ${chapter.id}`}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">{chapter.title}</h3>
                  <p className="text-eth-cream/80 text-sm mb-4">{chapter.subtitle}</p>
                  <span className="text-eth-cream/60 text-xs block">{chapter.duration}</span>
                </div>
                <div className="col-span-2">
                  <p className="text-eth-cream text-base md:text-lg leading-relaxed">{chapter.description}</p>
                  <button 
                    className="mt-6 px-5 py-2 border border-eth-cream/30 hover:border-eth-cream/80 text-eth-cream rounded-md transition-all hover:bg-eth-cream/10 text-sm font-medium tracking-wide flex items-center gap-2"
                    aria-label={`Watch Chapter ${chapter.id}`}
                    tabIndex={0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    WATCH THIS CHAPTER
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

export default Chapters; 