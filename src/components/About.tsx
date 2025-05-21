import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-eth-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <span className="text-eth-orange text-sm tracking-widest font-mono mb-3">ABOUT THE PROJECT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-eth-blue-dark mb-6 tracking-tight text-center">A DOCUMENTARY MINISERIES</h2>
            <div className="w-16 h-1 bg-eth-orange"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-eth-blue-dark text-lg leading-relaxed mb-6">
              <span className="font-semibold">Ethereum: A Global Story</span> is a documentary miniseries told in three chapters, each capturing a different facet of a technological and cultural revolution. As blockchain reshapes economies, governance, and human connection, this series explores the people behind the protocol.
            </p>
            
            <p className="text-eth-blue-dark text-lg leading-relaxed mb-6">
              From the origins of decentralization in moments of global crisis, to the vibrant Ethereum community driving change, and the visions that hint at a new societal model, each episode weaves personal stories with systemic shifts.
            </p>
            
            <p className="text-eth-blue-dark text-lg leading-relaxed mb-8">
              Shot across multiple countries and voices, this miniseries reveals how blockchain is no longer a distant concept—it&apos;s a living, breathing movement powered by real individuals determined to build a more transparent and inclusive future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-eth-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eth-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-eth-blue-dark mb-2">Expo 2025 Osaka</h3>
              <p className="text-eth-gray">Premiering at the Expo 2025 Osaka, bringing blockchain storytelling to a global audience.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-eth-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eth-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0 .621.504 1.125 1.125 1.125m-1.5-1.5v-5.25m0 5.25v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-9.75M7.125 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M7.125 12h9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-eth-blue-dark mb-2">Three-Part Miniseries</h3>
              <p className="text-eth-gray">A trilogy telling the complete story of Ethereum&apos;s impact on technology and society.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-eth-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eth-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19 9 9l-6.88 6.88a2.25 2.25 0 0 0 0 3.18l.34.34a2.25 2.25 0 0 0 3.18 0L12.5 13l3.809 3.808a2.25 2.25 0 0 0 3.18 0l.34-.34a2.25 2.25 0 0 0 0-3.18L13 7l3.81-3.81a2.25 2.25 0 0 0 0-3.18l-.34-.34a2.25 2.25 0 0 0-3.18 0L9 3.5 5.196.686a2.25 2.25 0 0 0-3.18 0l-.34.34a2.25 2.25 0 0 0 0 3.18l4.44 4.44Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-eth-blue-dark mb-2">Global Perspective</h3>
              <p className="text-eth-gray">Filmed across continents, capturing diverse voices and experiences from the Ethereum ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 