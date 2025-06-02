import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs';

import TrailerModal from '../components/TrailerModal';

export default function Home() {
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('common');
  const router = useRouter();
  
  // Initialize currentLanguage based on router locale
  const [currentLanguage, setCurrentLanguage] = useState<'EN' | 'JP'>(() => {
    return router.locale === 'ja' ? 'JP' : 'EN';
  });

  // Update currentLanguage when router locale changes
  useEffect(() => {
    setCurrentLanguage(router.locale === 'ja' ? 'JP' : 'EN');
  }, [router.locale]);
  
  // Get translated chapters data
  const getChaptersData = () => [
    {
      id: 1,
      title: t('chapters.details.1.title'),
      subtitle: t('chapters.details.1.subtitle'),
      description: t('chapters.details.1.description'),
      extendedDescription: t('chapters.details.1.extendedDescription'),
      duration: t('chapters.details.1.duration'),
      theme: t('chapters.details.1.theme'),
    },
    {
      id: 2,
      title: t('chapters.details.2.title'),
      subtitle: t('chapters.details.2.subtitle'),
      description: t('chapters.details.2.description'),
      extendedDescription: t('chapters.details.2.extendedDescription'),
      duration: t('chapters.details.2.duration'),
      theme: t('chapters.details.2.theme'),
    },
    {
      id: 3,
      title: t('chapters.details.3.title'),
      subtitle: t('chapters.details.3.subtitle'),
      description: t('chapters.details.3.description'),
      extendedDescription: t('chapters.details.3.extendedDescription'),
      duration: t('chapters.details.3.duration'),
      theme: t('chapters.details.3.theme'),
    },
    {
      id: 4,
      title: t('chapters.details.4.title'),
      subtitle: t('chapters.details.4.subtitle'),
      description: t('chapters.details.4.description'),
      extendedDescription: t('chapters.details.4.extendedDescription'),
      duration: t('chapters.details.4.duration'),
      theme: t('chapters.details.4.theme'),
    },
  ];

  const chaptersData = getChaptersData();
  
  // Simple and reliable vertical to horizontal scroll conversion
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        
        // Simple and direct horizontal scroll with slight multiplier for better feel
        const scrollAmount = e.deltaY * 1.2;
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);
  
  const handleOpenTrailer = () => {
    setTrailerModalOpen(true);
  };
  
  const handleCloseTrailer = () => {
    setTrailerModalOpen(false);
  };

  const handleTrailerClick = () => {
    handleOpenTrailer();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTrailerClick();
    }
  };

  // Video mockup component for chapters
  const VideoMockup = ({ chapter }: { chapter: typeof chaptersData[0] }) => (
    <div className="mb-8 bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700 aspect-video relative">
      {/* Chapter-specific video content */}
      {chapter.id === 1 && (
        <div className="h-full bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 relative">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">💥</div>
              <div className="text-xs">{chapter.theme}</div>
            </div>
          </div>
        </div>
      )}
      {chapter.id === 2 && (
        <div className="h-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-900 relative">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-xs">{chapter.theme}</div>
            </div>
          </div>
        </div>
      )}
      {chapter.id === 3 && (
        <div className="h-full bg-gradient-to-br from-green-900 via-teal-800 to-cyan-900 relative">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-xs">{chapter.theme}</div>
            </div>
          </div>
        </div>
      )}
      {chapter.id === 4 && (
        <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-xs">{chapter.theme}</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Video controls overlay */}
      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm p-2 rounded text-white text-xs">
        <div className="flex items-center justify-between">
          <span>{t('chapters.chapter')} {chapter.id}</span>
          <span>{chapter.duration}</span>
        </div>
      </div>
      
      {/* Play button */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="font-rubik">
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://eth-world-story.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>
      
      {/* Unified Horizontal Layout */}
      <div 
        ref={scrollContainerRef}
        className="w-full h-screen bg-white text-dark relative overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        {/* Subtle Editorial Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02] z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Horizontal Scroll Container */}
        <div className="flex h-full relative z-10">
          
          {/* Left Vertical Navigation Sidebar - Fixed */}
          <div className="w-20 bg-gray-50 flex flex-col justify-center items-center relative shrink-0">
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200" />
            
            {/* Vertical Navigation */}
            <div className="flex flex-col items-center justify-center h-full space-y-32">
              {/* Documentary Label */}
              <div className="relative w-20 h-24 flex items-center justify-center">
                <div 
                  className="transform -rotate-90 origin-center whitespace-nowrap cursor-default"
                  style={{ transformOrigin: 'center center' }}
                >
                  <span className="text-xs uppercase tracking-[0.4em] text-earth font-medium">
                    {t('navigation.documentary')}
                  </span>
                </div>
              </div>
              
              {/* About Project Link */}
              <div className="relative w-20 h-24 flex items-center justify-center">
                <button 
                  className="transform -rotate-90 origin-center whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
                  style={{ transformOrigin: 'center center' }}
                  onClick={() => {
                    // Scroll to about section (Panel 4)
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollLeft = 1150;
                    }
                  }}
                  title="About Project"
                >
                  <span className="text-xs uppercase tracking-[0.4em] text-dark/60">
                    {t('navigation.aboutProject')}
                  </span>
                </button>
              </div>
              
              {/* Language Switcher */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <button 
                  className="transform -rotate-90 origin-center whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
                  style={{ transformOrigin: 'center center' }}
                  onClick={() => {
                    // Toggle language between English and Japanese using i18n
                    const newLanguage = currentLanguage === 'EN' ? 'JP' : 'EN';
                    const newLocale = newLanguage === 'EN' ? 'en' : 'ja';
                    
                    setCurrentLanguage(newLanguage);
                    
                    // Change language using router directly
                    router.push(router.asPath, router.asPath, { locale: newLocale });
                  }}
                  title={t('language.currentTooltip', { 
                    current: currentLanguage === 'EN' ? t('language.english') : t('language.japanese')
                  })}
                >
                  <span className="text-xs uppercase tracking-[0.4em] text-dark/40">
                    <span className={currentLanguage === 'EN' ? 'text-primary font-medium' : ''}>EN</span>
                    {' / '}
                    <span className={currentLanguage === 'JP' ? 'text-primary font-medium' : ''}>JP</span>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="absolute bottom-8 space-y-4">
              <button 
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"
                title="Follow on Twitter"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                t
              </button>
              <button 
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"
                title="View on Platform"
                onClick={() => window.open('https://platform.com', '_blank')}
              >
                p
              </button>
            </div>
          </div>
          
          {/* Panel 1: Introduction */}
          <div className="w-[400px] h-full p-12 flex flex-col justify-center border-r border-gray-200 shrink-0">
            <div className="max-w-md">
              
              {/* Red Accent Circle with Quote */}
              <div className="relative mb-12">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-center p-6 mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
                  <div className="text-xs leading-tight">
                    <div className="font-medium mb-2">{t('hero.quote')}</div>
                    {/* <div className="text-[10px] opacity-80">{t('hero.quoteAuthor')}</div> */}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-16 w-6 h-6 border-2 border-primary rounded-full bg-white flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </div>
              
              {/* Intro Text */}
              <div className="space-y-6 text-sm leading-relaxed text-dark/80 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                <p>
                  {t('hero.introText1')}
                </p>
                <p>
                  {t('hero.introText2')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Panel 2: Main Title */}
          <div className="w-[400px] h-full p-12 flex flex-col justify-center border-r border-gray-200 shrink-0">
            
            {/* Chapter Indicator */}
            <div className="mb-8 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
                  4
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-earth">
                  {t('hero.fourEpisodes')}
                </div>
              </div>
              
              <div className="space-y-2 text-xs text-dark/60">
                <div className="hover:text-primary transition-colors duration-200 cursor-default">❶ {t('chapters.chapterList.1')}</div>
                <div className="hover:text-primary transition-colors duration-200 cursor-default">❷ {t('chapters.chapterList.2')}</div>
                <div className="hover:text-primary transition-colors duration-200 cursor-default">❸ {t('chapters.chapterList.3')}</div>
                <div className="hover:text-primary transition-colors duration-200 cursor-default">❹ {t('chapters.chapterList.4')}</div>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="mb-8 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
              <h1 className="text-3xl font-bold leading-tight mb-4 hover:text-primary/90 transition-colors duration-300">
                {t('hero.mainTitle')}
              </h1>
              
              <p className="text-sm leading-relaxed text-dark/70 max-w-xs">
                {t('hero.subtitle')}
              </p>
            </div>
            
            {/* Action Button */}
            <button
              onClick={handleTrailerClick}
              onKeyDown={handleKeyDown}
              className="group flex items-center space-x-3 text-sm text-dark hover:text-primary transition-all duration-300 transform hover:translate-x-2 animate-fadeIn"
              style={{ animationDelay: '0.9s' }}
              tabIndex={0}
              aria-label="Watch trailer"
            >
              <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all group-hover:rotate-12">
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="font-medium">{t('hero.watchTrailer')}</span>
            </button>
          </div>
          
          {/* Panel 3: Visual with Video Mockup */}
          <div className="w-[350px] h-full relative border-r border-gray-200 shrink-0">
            {/* Large Red Circle Accent */}
            <div className="absolute top-16 right-8 w-40 h-40 bg-primary rounded-full opacity-90 z-10 animate-float" style={{ animationDelay: '1s' }} />
            
            {/* Video Mockup Background */}
            <div className="h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
              
              {/* Video Frame Mockup */}
              <div className="absolute inset-8 bg-black rounded border-2 border-gray-600 overflow-hidden animate-slideInUp" style={{ animationDelay: '0.7s' }}>
                {/* Video Content Simulation */}
                <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative">
                  {/* Blockchain Network Visualization */}
                  <div className="absolute inset-4 border border-cyan-400/30 rounded bg-gradient-radial from-cyan-400/10 to-transparent">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-6 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Additional animated dots */}
                    <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
                  </div>
                  
                  {/* Video Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded text-white animate-slideInUp" style={{ animationDelay: '1.2s' }}>
                    <div className="text-xs text-cyan-400 mb-1">{t('video.liveBlockchain')}</div>
                    <div className="text-[10px] text-white/80">{t('video.visualization')}</div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Documentary Preview Area */}
              <div className="absolute inset-x-8 bottom-8 bg-white/95 backdrop-blur-sm p-6 border animate-fadeIn" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-earth mb-1 hover:text-primary transition-colors duration-200">
                    {t('hero.preview')}
                  </div>
                  <div className="text-[10px] text-dark/60 uppercase tracking-[0.2em] animate-pulse" style={{ animationDuration: '2s' }}>
                    {t('hero.comingSoon')}
                  </div>
                </div>
              </div>
              
              {/* Corner Details */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-white/20 animate-fadeIn" style={{ animationDelay: '2s' }} />
              <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-white/20 animate-fadeIn" style={{ animationDelay: '2.2s' }} />
            </div>
            
            {/* Side Text */}
            <div className="absolute right-0 top-1/2 transform -rotate-90 origin-center translate-x-6 text-[10px] tracking-[0.5em] text-white/60 uppercase whitespace-nowrap animate-fadeIn" style={{ animationDelay: '2.5s' }}>
              Ethereum - A Global Story
            </div>
          </div>
          
          {/* Panel 4: About */}
          <div className="w-[450px] h-full p-12 flex flex-col justify-center border-r border-gray-200 shrink-0 bg-gray-50">
            <div className="max-w-md">
              <div className="mb-8">
                <div className="text-xs uppercase tracking-[0.3em] text-earth mb-4">
                  {t('navigation.aboutProject')}
                </div>
                <h2 className="text-2xl font-bold mb-6 text-dark">
                  {t('about.title')}
                </h2>
              </div>
              
              <p className="text-sm mb-6 text-dark/80 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-sm mb-8 text-dark/80 leading-relaxed">
                {t('about.description2')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-dark text-sm font-medium">{t('about.features.premiere')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  <span className="text-dark text-sm font-medium">{t('about.features.series')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-tertiary rounded-full mr-4"></div>
                  <span className="text-dark text-sm font-medium">{t('about.features.perspectives')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Panel 5-8: Chapters with Alternating Video Positions */}
          {chaptersData.map((chapter, index) => {
            const isVideoAtTop = chapter.id % 2 === 1; // Odd chapters (1,3) = top, Even chapters (2,4) = bottom
            
            return (
              <div key={chapter.id} className={`w-[420px] h-full p-12 flex flex-col ${isVideoAtTop ? 'justify-start pt-16' : 'justify-end pb-16'} border-r border-gray-200 shrink-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="max-w-md">
                  
                  {/* Video at Top Layout */}
                  {isVideoAtTop && (
                    <>
                      <VideoMockup chapter={chapter} />
                      
                      {/* Chapter Number */}
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {chapter.id}
                        </div>
                        <div className="text-xs text-earth font-medium uppercase tracking-[0.2em]">
                          {t('chapters.chapter')} {chapter.id} • {chapter.duration}
                        </div>
                      </div>

                      {/* Chapter Content */}
                      <h3 className="text-xl font-bold mb-3 text-dark">
                        {chapter.title}
                      </h3>
                      
                      <p className="text-sm mb-4 text-secondary font-medium">
                        {chapter.subtitle}
                      </p>
                      
                      <p className="text-sm text-dark/80 leading-relaxed mb-4">
                        {chapter.description}
                      </p>
                      
                      <p className="text-xs text-dark/60 leading-relaxed mb-6">
                        {chapter.extendedDescription}
                      </p>
                      
                      {/* Coming Soon Badge */}
                      <div className="pt-4">
                        <span className="inline-block bg-earth text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-[0.1em]">
                          {t('chapters.comingSoon')}
                        </span>
                      </div>
                    </>
                  )}
                  
                  {/* Video at Bottom Layout */}
                  {!isVideoAtTop && (
                    <>
                      {/* Chapter Number */}
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {chapter.id}
                        </div>
                        <div className="text-xs text-earth font-medium uppercase tracking-[0.2em]">
                          {t('chapters.chapter')} {chapter.id} • {chapter.duration}
                        </div>
                      </div>

                      {/* Chapter Content */}
                      <h3 className="text-xl font-bold mb-3 text-dark">
                        {chapter.title}
                      </h3>
                      
                      <p className="text-sm mb-4 text-secondary font-medium">
                        {chapter.subtitle}
                      </p>
                      
                      <p className="text-sm text-dark/80 leading-relaxed mb-4">
                        {chapter.description}
                      </p>
                      
                      <p className="text-xs text-dark/60 leading-relaxed mb-6">
                        {chapter.extendedDescription}
                      </p>
                      
                      {/* Coming Soon Badge */}
                      <div className="pt-4 mb-8">
                        <span className="inline-block bg-earth text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-[0.1em]">
                          {t('chapters.comingSoon')}
                        </span>
                      </div>
                      
                      <VideoMockup chapter={chapter} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Panel 9: Contact/Footer */}
          <div className="w-[400px] h-full p-12 flex flex-col justify-center bg-dark text-white shrink-0">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-4">
                {t('footer.title')}
              </h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                    {t('footer.premiere')}
                  </div>
                  <div className="text-sm text-white">
                    {t('footer.expoDetails')}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                    {t('footer.stayConnected')}
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.946 2.946 0 0 0-2.074-2.085C19.538 3.625 12 3.625 12 3.625s-7.538 0-9.424.476A2.946 2.946 0 0 0 .502 6.186C.026 8.081.026 12.025.026 12.025s0 3.944.476 5.839a2.946 2.946 0 0 0 2.074 2.085c1.886.476 9.424.476 9.424.476s7.538 0 9.424-.476a2.946 2.946 0 0 0 2.074-2.085c.476-1.895.476-5.839.476-5.839s0-3.944-.476-5.839zM9.545 15.568V8.482l6.278 3.543-6.278 3.543z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Editorial Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-dark" />
        <div className="absolute bottom-4 left-20 right-16 flex justify-between items-center pointer-events-none">
          <div className="text-[10px] text-dark/60 uppercase tracking-[0.2em]">
            {t('footer.expoDate')}
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-dark/60 uppercase tracking-[0.2em]">
            <span>{t('footer.scrollToExplore')}</span>
            <div className="w-4 h-4 border border-primary rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <TrailerModal 
        isOpen={trailerModalOpen} 
        onClose={handleCloseTrailer} 
        trailerSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  // Debug logging for production
  console.log('getServerSideProps called with locale:', locale);
  console.log('Process cwd:', process.cwd());
  console.log('Locale path should be:', path.resolve(process.cwd(), 'public/locales'));
  
  try {
    const currentLocale = locale || 'en';
    const translations = await serverSideTranslations(currentLocale, ['common']);
    console.log('Translations loaded successfully for locale:', currentLocale);
    console.log('Translation keys:', Object.keys(translations._nextI18Next?.initialI18nStore?.[currentLocale]?.common || {}));
    
    return {
      props: {
        ...translations,
      },
    };
  } catch (error) {
    const errorObj = error as Error;
    console.error('Error loading translations:', errorObj);
    console.error('Error details:', {
      message: errorObj.message,
      stack: errorObj.stack,
      cwd: process.cwd(),
      localeExists: fs.existsSync(path.resolve(process.cwd(), 'public/locales', locale || 'en', 'common.json'))
    });
    
    // Return empty translations to prevent build failure
    return {
      props: {
        _nextI18Next: {
          initialI18nStore: { [locale || 'en']: { common: {} } },
          initialLocale: locale || 'en',
          ns: ['common'],
          userConfig: {
            i18n: {
              defaultLocale: 'en',
              locales: ['en', 'ja'],
              localeDetection: false,
            },
          },
        },
      },
    };
  }
};
