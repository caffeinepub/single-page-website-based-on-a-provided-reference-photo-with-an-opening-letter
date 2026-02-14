import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackgroundAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio element
    audio.loop = true;
    audio.volume = 0.5;

    // Try to autoplay (will be blocked by most browsers)
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay blocked - user will need to click play
        setIsPlaying(false);
      }
    };

    attemptAutoplay();

    // Cleanup
    return () => {
      audio.pause();
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/audio/hi-nana-bgm.mp3" />
      
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={togglePlayPause}
          size="lg"
          variant="secondary"
          className="h-14 w-14 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-0.5" />
          )}
        </Button>
        <div className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <Volume2 className="h-3 w-3" />
          <span className="font-medium">BGM</span>
        </div>
      </div>
    </>
  );
}
