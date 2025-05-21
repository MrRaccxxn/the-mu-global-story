import { useState } from 'react';
import Head from 'next/head';

import CyberNavbar from '../components/CyberNavbar';
import CyberpunkHero from '../components/CyberpunkHero';
import CyberAbout from '../components/CyberAbout';
import CyberChapters from '../components/CyberChapters';
import CyberFooter from '../components/CyberFooter';
import TrailerModal from '../components/TrailerModal';
import PostItWall from '../components/PostItWall';

export default function Home() {
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  
  const handleOpenTrailer = () => {
    setTrailerModalOpen(true);
  };
  
  const handleCloseTrailer = () => {
    setTrailerModalOpen(false);
  };
  
  return (
    <div className="font-sans cyberpunk-cursor">
      <Head>
        <title>Ethereum: A Global Story | Documentary Miniseries</title>
        <meta name="description" content="A documentary miniseries told in three chapters exploring Ethereum&apos;s impact on technology and society. Premiering at Expo 2025 Osaka." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Ethereum: A Global Story | Documentary Miniseries" />
        <meta property="og:description" content="A documentary miniseries told in three chapters exploring Ethereum&apos;s impact on technology and society." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://eth-world-story.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ethereum: A Global Story | Documentary Miniseries" />
        <meta name="twitter:description" content="A documentary miniseries told in three chapters exploring Ethereum&apos;s impact on technology and society." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>
      
      <main className="bg-eth-blue-dark min-h-screen">
        <CyberNavbar transparent={true} onOpenTrailer={handleOpenTrailer} />
        
        <div className="content relative">
          <CyberpunkHero onOpenTrailer={handleOpenTrailer} />
          <CyberAbout />
          <CyberChapters />
          <PostItWall />
          <CyberFooter />
        </div>
        
        <TrailerModal 
          isOpen={trailerModalOpen} 
          onClose={handleCloseTrailer} 
          trailerSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
      </main>
    </div>
  );
}
