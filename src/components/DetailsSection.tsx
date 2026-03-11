import { MapPin, Clock, CalendarDays, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const details = [
  {
    icon: CalendarDays,
    title: "Күні",
    text: "11 Маусым, 2026 жыл",
    sub: "Бейсенбі",
  },
  {
    icon: Clock,
    title: "Уақыты",
    text: "13:00",
  },
  {
    icon: MapPin,
    title: "Мекенжайы",
    text: "Vogue",
    sub: "Қарағанды қ.",
    link: "https://2gis.kz/karaganda/geo/70000001020299483",
  },
];

const DetailsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-2">
            Той мәліметтері
          </h2>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold">✦</span>
            <div className="w-12 h-px bg-gold" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((d, i) => (
            <ScrollReveal
              key={d.title}
              variant={i === 0 ? "slideLeft" : i === 2 ? "slideRight" : "scaleUp"}
              delay={i * 0.15}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-cream-dark border border-gold/15 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">{d.title}</h3>
                {d.link ? (
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="font-body font-medium text-gold hover:text-gold/80 transition-colors">
                    {d.text}
                  </a>
                ) : (
                  <p className="font-body font-medium text-foreground">{d.text}</p>
                )}
                <p className="font-body text-sm text-muted-foreground mt-1">{d.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground text-sm mb-2">Той иелері</p>
            <h3 className="font-display text-2xl text-gold">Жанболат - Айнагүл</h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DetailsSection;
