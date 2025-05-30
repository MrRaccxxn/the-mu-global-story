type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
};

const chaptersData: Chapter[] = [
  {
    id: 1,
    title: 'The Spark',
    subtitle: 'In the middle of chaos, a community was born.',
    description: 'Blockchain emerged as a response to various economic, political, and social crises that eroded trust in traditional institutions. From hyperinflation in collapsing economies to financial censorship under authoritarian regimes, the need for a decentralized alternative became evident.',
    duration: '5:32',
  },
  {
    id: 2,
    title: 'Human Connection',
    subtitle: 'Together, we break walls and build new worlds.',
    description: 'This episode explores the real stories behind Ethereum&apos;s community, one of the blockchains that most faithfully preserves the core philosophy behind the technology. Millions of people, driven by the conviction that they can reshape the world, have found in Ethereum more than just a platform.',
    duration: '5:17',
  },
  {
    id: 3,
    title: 'The Dream',
    subtitle: 'Building a decentralized future together.',
    description: 'Blockchain has the potential to redefine our relationship with institutions, data, and the economy. Beyond speculation, its adoption can bring structural changes that benefit society. This episode explores how the technology can work alongside governments to improve economies and data management.',
    duration: '4:58',
  },
];

const Chapters = () => {
  return (
    <section id="chapters" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Three Chapters
          </h2>
          <p className="text-xl text-earth max-w-2xl mx-auto">
            Discover the complete story through three compelling episodes 
            that explore Ethereum&apos;s transformative journey.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {chaptersData.map((chapter) => (
            <div 
              key={chapter.id}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Chapter Number */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {chapter.id}
                </div>
                <div className="text-sm text-earth font-medium">
                  Chapter {chapter.id} • {chapter.duration}
                </div>
              </div>

              {/* Chapter Content */}
              <h3 className="text-2xl font-bold mb-3 text-dark">
                {chapter.title}
              </h3>
              
              <p className="text-lg mb-4 text-secondary font-medium">
                {chapter.subtitle}
              </p>
              
              <p className="text-dark leading-relaxed">
                {chapter.description}
              </p>
              
              {/* Coming Soon Badge */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="inline-block bg-earth text-white text-sm px-3 py-1 rounded-full font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-dark">
              Stay Updated
            </h3>
            <p className="text-dark mb-6">
              Be the first to know when the documentary premieres at Expo 2025 Osaka.
            </p>
            <button className="btn-primary">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapters; 