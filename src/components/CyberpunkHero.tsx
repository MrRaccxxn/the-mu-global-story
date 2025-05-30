type HeroProps = {
  onOpenTrailer: () => void;
};

const Hero = ({ onOpenTrailer }: HeroProps) => {
  const handleTrailerClick = () => {
    onOpenTrailer();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTrailerClick();
    }
  };

  return (
    <section className="w-full min-h-screen bg-white text-dark relative">
      {/* Subtle Editorial Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 w-full min-h-screen">
        {/* Main Editorial Layout - Magazine Style */}
        <div className="flex w-full min-h-screen">
          
          {/* Left Vertical Text Column */}
          <div className="w-20 bg-gray-50 flex flex-col justify-center items-center relative shrink-0">
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200" />
            
            {/* Vertical Navigation */}
            <div className="flex flex-col items-center space-y-16">
              <div className="transform -rotate-90 whitespace-nowrap">
                <div className="text-xs uppercase tracking-[0.4em] text-earth font-medium">
                  Documentary
                </div>
              </div>
              <div className="transform -rotate-90 whitespace-nowrap">
                <div className="text-xs uppercase tracking-[0.4em] text-dark/60">
                  About project
                </div>
              </div>
              <div className="transform -rotate-90 whitespace-nowrap">
                <div className="text-xs uppercase tracking-[0.4em] text-dark/40">
                  SK / EN
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="absolute bottom-8 space-y-4">
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer">
                f
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer">
                t
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer">
                p
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 flex min-h-screen">
            
            {/* First Panel - Introduction */}
            <div className="w-[400px] p-12 flex flex-col justify-center border-r border-gray-200 shrink-0">
              <div className="max-w-md">
                
                {/* Red Accent Circle with Quote */}
                <div className="relative mb-12">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-center p-6 mb-6">
                    <div className="text-xs leading-tight">
                      <div className="font-medium mb-2">What is the biggest story in technology today?</div>
                      <div className="text-[10px] opacity-80">— Documentary Team</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-16 w-6 h-6 border-2 border-primary rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                </div>
                
                {/* Intro Text */}
                <div className="space-y-6 text-sm leading-relaxed text-dark/80">
                  <p>
                    Blockchain technology emerged through various economic and financial crises. A revolutionary idea that has evolved into something that might fundamentally transform our understanding of digital ownership, decentralized governance, and global connectivity.
                  </p>
                  <p>
                    Perhaps this will remain a transformative period where one crucial innovation becomes the foundation for the next era of human interaction with technology.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second Panel - Main Title */}
            <div className="w-[350px] p-12 flex flex-col justify-center border-r border-gray-200 shrink-0">
              
              {/* Chapter Indicator */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary text-sm font-medium">
                    1
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-earth">
                    The Spark
                  </div>
                </div>
                
                <div className="space-y-2 text-xs text-dark/60">
                  <div>❶ Shades of revolution</div>
                  <div>❷ Digital communities</div>
                  <div>❸ Global movement</div>
                  <div>❹ Future vision</div>
                  <div>❺ Documentary series</div>
                </div>
              </div>
              
              {/* Main Headline */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold leading-tight mb-4">
                  ETHEREUM: A GLOBAL STORY
                </h1>
                
                <p className="text-sm leading-relaxed text-dark/70 max-w-xs">
                  Post-financial crisis architecture still doesn&apos;t have widespread adoption. This is perhaps due to complexity: endless technical barriers, regulatory uncertainty, and fundamental questions about decentralized systems.
                </p>
              </div>
              
              {/* Action Button */}
              <button
                onClick={handleTrailerClick}
                onKeyDown={handleKeyDown}
                className="group flex items-center space-x-3 text-sm text-dark hover:text-primary transition-colors"
                tabIndex={0}
                aria-label="Watch trailer"
              >
                <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="font-medium">Watch Trailer</span>
              </button>
            </div>
            
            {/* Third Panel - Visual */}
            <div className="w-[300px] relative shrink-0">
              {/* Large Red Circle Accent */}
              <div className="absolute top-16 right-8 w-40 h-40 bg-primary rounded-full opacity-90 z-10" />
              
              {/* Image Placeholder */}
              <div className="h-full bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
                
                {/* Documentary Preview Area */}
                <div className="absolute inset-x-8 bottom-8 bg-white/90 backdrop-blur-sm p-6 border">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-earth mb-1">
                      Preview
                    </div>
                    <div className="text-[10px] text-dark/60 uppercase tracking-[0.2em]">
                      Coming 2025
                    </div>
                  </div>
                </div>
                
                {/* Corner Details */}
                <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-dark/20" />
                <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-dark/20" />
              </div>
              
              {/* Side Text */}
              <div className="absolute right-0 top-1/2 transform -rotate-90 origin-center translate-x-6 text-[10px] tracking-[0.5em] text-dark/40 uppercase whitespace-nowrap">
                + Dušan Kuzma - Matica Slovenská
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Editorial Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-dark" />
        <div className="absolute bottom-4 left-20 right-16 flex justify-between items-center">
          <div className="text-[10px] text-dark/60 uppercase tracking-[0.2em]">
            Expo 2025 Osaka / April 13 - October 13, 2025
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-dark/60 uppercase tracking-[0.2em]">
            <span>Next</span>
            <div className="w-4 h-4 border border-primary rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 