import { useState, useEffect } from 'react';

type PostItNote = {
  id: string;
  content: string;
  color: string;
  rotation: number;
  posX: number;
  posY: number;
};

const initialNotes: PostItNote[] = [
  { id: '1', content: 'When my bank froze my account without warning', color: 'post-it-yellow', rotation: -2, posX: 20, posY: 10 },
  { id: '2', content: 'During the 2008 financial crisis', color: 'post-it-blue', rotation: 3, posX: 40, posY: 25 },
  { id: '3', content: 'When hyperinflation made my savings worthless', color: 'post-it-green', rotation: -5, posX: 65, posY: 15 },
  { id: '4', content: 'When I couldn\'t send money to my family overseas', color: 'post-it-purple', rotation: 2, posX: 30, posY: 45 },
  { id: '5', content: 'When I was denied a loan despite having good credit', color: 'post-it-yellow', rotation: 4, posX: 70, posY: 40 },
  { id: '6', content: 'When my data was sold without my consent', color: 'post-it-blue', rotation: -3, posX: 10, posY: 60 },
  { id: '7', content: 'When centralized platforms censored our community', color: 'post-it-green', rotation: 5, posX: 60, posY: 60 },
  { id: '8', content: 'When my government devalued our currency overnight', color: 'post-it-purple', rotation: -4, posX: 50, posY: 75 },
];

const colors = ['post-it-yellow', 'post-it-blue', 'post-it-green', 'post-it-purple'];

const PostItWall = () => {
  const [notes, setNotes] = useState<PostItNote[]>(initialNotes);
  const [newNote, setNewNote] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Create a glitch effect at random intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 10000 + 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  const handleAddNote = () => {
    if (newNote.trim() === '') return;
    
    const newPostIt: PostItNote = {
      id: Date.now().toString(),
      content: newNote,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 10 - 5,
      posX: Math.random() * 70 + 10,
      posY: Math.random() * 70 + 10,
    };
    
    setNotes([...notes, newPostIt]);
    setNewNote('');
    setIsAddingNote(false);
    
    // Trigger a brief glitch effect when adding a note
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };
  
  return (
    <section id="post-it-wall" className="relative py-20 overflow-hidden">
      <div className="matrix-bg"></div>
      <div className={`scanlines ${isGlitching ? 'opacity-30' : ''}`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eth-cream mb-4 neon-text">
            WHEN DID THE SYSTEM <span className="glitch-text" data-text="FAIL">FAIL</span> YOU?
          </h2>
          <p className="text-eth-cream/80 max-w-2xl mx-auto mb-8">
            At Expo 2025 Osaka, visitors shared their stories on our Wall of Truths. 
            Continue this global conversation by adding your experience below.
          </p>
          
          {!isAddingNote ? (
            <button 
              onClick={() => setIsAddingNote(true)}
              className="glitch-button px-6 py-3 rounded-md text-lg font-medium"
            >
              Share Your Story
            </button>
          ) : (
            <div className="max-w-md mx-auto bg-eth-blue-dark/90 p-4 rounded-lg border border-eth-orange/30 backdrop-blur-md">
              <textarea 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="When did the system fail you?"
                className="w-full h-32 p-3 bg-eth-blue-dark border border-eth-orange/50 rounded text-eth-cream focus:outline-none focus:border-eth-orange-light"
                maxLength={200}
              />
              <div className="flex justify-end mt-3 space-x-3">
                <button 
                  onClick={() => setIsAddingNote(false)}
                  className="px-4 py-2 text-eth-cream/70 hover:text-eth-cream"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddNote}
                  className="glitch-button px-4 py-2 rounded-md"
                  disabled={newNote.trim() === ''}
                >
                  Add Note
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className={`relative h-[600px] md:h-[800px] transition-all duration-300 ${isGlitching ? 'crt-flicker' : ''}`}>
          {notes.map((note) => (
            <div
              key={note.id}
              className={`post-it ${note.color} absolute w-48 h-48 shadow-lg`}
              style={{
                '--random-rotate': note.rotation,
                left: `${note.posX}%`,
                top: `${note.posY}%`,
                transform: `rotate(${note.rotation}deg)`,
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                zIndex: 1,
              } as React.CSSProperties}
            >
              <p className="font-handwriting text-black/80 text-sm leading-snug">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostItWall; 