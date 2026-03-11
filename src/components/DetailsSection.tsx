import { MapPin, Clock, CalendarDays } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const details = [
  {
    icon: CalendarDays,
    title: "Күні",
    text: "15 Сәуір, 2026 жыл",
    sub: "Сәрсенбі",
  },
  {
    icon: Clock,
    title: "Уақыты",
    text: "17:00",
    sub: "Қонақтарды қарсы алу 16:30-да",
  },
  {
    icon: MapPin,
    title: "Мекенжайы",
    text: "«Алтын Сарай» мейрамханасы",
    sub: "Алматы қ., Абай даңғылы 52",
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
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-cream-dark border border-gold/15 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">{d.title}</h3>
                <p className="font-body font-medium text-foreground">{d.text}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{d.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
