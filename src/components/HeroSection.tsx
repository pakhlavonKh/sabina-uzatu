import flowersTop from "@/assets/flowers-top.png";
import ornament from "@/assets/ornament.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream overflow-hidden px-4">
      {/* Ornament background */}
      <img
        src={ornament}
        alt=""
        className="absolute top-0 left-0 w-full opacity-20 pointer-events-none"
      />
      <img
        src={ornament}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none rotate-180"
      />

      {/* Flowers */}
      <img
        src={flowersTop}
        alt="Flowers"
        className="w-48 md:w-64 mb-6 animate-fade-in-up"
      />

      {/* Title */}
      <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold animate-fade-in-up animate-delay-200">
        Құрметті қонақтар
      </p>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mt-4 mb-2 animate-fade-in-up animate-delay-200">
        Сабина
      </h1>

      <div className="flex items-center gap-4 my-4 animate-fade-in-up animate-delay-400">
        <div className="w-16 md:w-24 h-px bg-gold" />
        <span className="text-gold text-2xl">✦</span>
        <div className="w-16 md:w-24 h-px bg-gold" />
      </div>

      <h2 className="font-display text-2xl md:text-3xl font-light text-gold italic animate-fade-in-up animate-delay-400">
        Қыз Ұзату
      </h2>

      <p className="font-body text-muted-foreground text-sm md:text-base mt-6 max-w-md text-center leading-relaxed animate-fade-in-up animate-delay-600">
        Сіздерді қызымыздың қыз ұзату тойына шақырамыз.
        <br />
        Біздің бақытты күнімізді бірге бөлісуіңізді сұраймыз.
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-5 h-8 border-2 border-gold rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
