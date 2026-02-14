import { BackgroundAudioPlayer } from './BackgroundAudioPlayer';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/uploaded/683CEC41-3F5D-48A7-A96D-FC2FE9C2332B-2.png"
          alt="Hero"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-16 md:pb-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-light tracking-wide text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              A Letter for You
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl">
              Scroll down to read
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/60">
          <div className="mx-auto mt-2 h-2 w-1 animate-pulse rounded-full bg-white/80" />
        </div>
      </div>

      {/* Background Audio Player */}
      <BackgroundAudioPlayer />
    </section>
  );
}
