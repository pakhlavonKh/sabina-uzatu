import { Calendar } from "@/components/ui/calendar";
import ScrollReveal from "@/components/ScrollReveal";

const EVENT_DATE = new Date(2026, 3, 15); // April 15, 2026

const CalendarSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
            Той күні
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold">✦</span>
            <div className="w-12 h-px bg-gold" />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scaleUp" delay={0.2}>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={EVENT_DATE}
              defaultMonth={EVENT_DATE}
              className="p-3 pointer-events-auto bg-cream rounded-xl border border-gold/20 shadow-sm font-body [&_.rdp-day_selected]:!bg-transparent [&_.rdp-day_selected]:!text-foreground"
              classNames={{
                day_selected: "relative z-10 !bg-transparent !text-foreground font-bold",
                day_today: "bg-accent text-accent-foreground",
              }}
              components={{
                DayContent: ({ date }) => {
                  const isSelected =
                    date.getDate() === EVENT_DATE.getDate() &&
                    date.getMonth() === EVENT_DATE.getMonth() &&
                    date.getFullYear() === EVENT_DATE.getFullYear();

                  if (isSelected) {
                    return (
                      <div className="relative flex items-center justify-center w-9 h-9">
                        <div className="absolute inset-[-10px] animate-spin-slow">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(38, 60%, 45%)" />
                                <stop offset="50%" stopColor="hsl(40, 50%, 70%)" />
                                <stop offset="100%" stopColor="hsl(38, 60%, 45%)" />
                              </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r="44" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
                            {Array.from({ length: 12 }).map((_, i) => {
                              const angle = (i * 30 * Math.PI) / 180;
                              const x = 50 + 44 * Math.cos(angle);
                              const y = 50 + 44 * Math.sin(angle);
                              return (
                                <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 1.5} fill="hsl(38, 60%, 45%)" />
                              );
                            })}
                            {Array.from({ length: 4 }).map((_, i) => {
                              const angle = ((i * 90 + 45) * Math.PI) / 180;
                              const x = 50 + 44 * Math.cos(angle);
                              const y = 50 + 44 * Math.sin(angle);
                              return (
                                <rect
                                  key={`d-${i}`}
                                  x={x - 2.5}
                                  y={y - 2.5}
                                  width={5}
                                  height={5}
                                  rx={0.5}
                                  fill="hsl(40, 50%, 70%)"
                                  transform={`rotate(45 ${x} ${y})`}
                                />
                              );
                            })}
                          </svg>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gold/15 border border-gold/40" />
                        <span className="relative z-10 text-gold font-display font-bold text-base">
                          {date.getDate()}
                        </span>
                      </div>
                    );
                  }

                  return <span>{date.getDate()}</span>;
                },
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-muted-foreground text-sm mt-6">
            15 Сәуір, 2026 жыл — Сәрсенбі, 17:00
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CalendarSection;
