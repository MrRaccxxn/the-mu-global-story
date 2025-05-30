const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              About the Documentary
            </h2>
            
            <p className="text-lg mb-6 text-dark leading-relaxed">
              Ethereum: A Global Story is a groundbreaking documentary miniseries 
              that explores how Ethereum has transformed from a visionary idea into 
              a global phenomenon reshaping technology, finance, and society.
            </p>
            
            <p className="text-lg mb-8 text-dark leading-relaxed">
              Through three compelling chapters, we dive deep into the stories of 
              developers, entrepreneurs, and communities who are building the 
              decentralized future on Ethereum&apos;s foundation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                <span className="text-dark font-medium">World Premiere at Expo 2025 Osaka</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                <span className="text-dark font-medium">Three-part documentary series</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-tertiary rounded-full mr-4"></div>
                <span className="text-dark font-medium">Global perspectives and stories</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-video bg-accent rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-dark font-medium">Documentary Preview</p>
                <p className="text-sm text-earth mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 