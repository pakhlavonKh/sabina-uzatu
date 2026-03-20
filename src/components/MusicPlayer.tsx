import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt to autoplay on mount
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented by browser:", error);
        // Try again on first user interaction
        const handleUserInteraction = () => {
          audioRef.current?.play();
          document.removeEventListener("click", handleUserInteraction);
        };
        document.addEventListener("click", handleUserInteraction);
      });
    }
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/wedding-music.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gold text-cream hover:bg-gold/90 transition-colors shadow-lg"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
