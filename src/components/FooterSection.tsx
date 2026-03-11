import flowersTop from "@/assets/flowers-top.png";
import ScrollReveal from "@/components/ScrollReveal";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-cream-dark text-center">
      <div className="container max-w-2xl mx-auto px-4">
        <ScrollReveal variant="scaleUp">
          <img
            src={flowersTop}
            alt=""
            className="w-32 mx-auto mb-6 opacity-60 rotate-180"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Сіздерді күтеміз!
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-muted-foreground text-sm">
            Сабинаның отбасы
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm">♡</span>
            <div className="w-8 h-px bg-gold" />
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default FooterSection;
