import { Calendar } from "@/components/ui/calendar";
import ScrollReveal from "@/components/ScrollReveal";

const EVENT_DATE = new Date(2026, 5, 11); // 11 Маусым 2026

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
              className="p-4 bg-cream rounded-xl border border-gold/20 shadow-sm overflow-visible"

              classNames={{
                day: "relative w-10 h-10 overflow-visible !bg-transparent hover:!bg-transparent",
                day_selected: "!bg-transparent",
              }}

              components={{
                DayContent: ({ date }) => {
                  const isSelected =
                    date.getDate() === EVENT_DATE.getDate() &&
                    date.getMonth() === EVENT_DATE.getMonth() &&
                    date.getFullYear() === EVENT_DATE.getFullYear();

                  return (
                    <div className="relative flex items-center justify-center w-10 h-10">

                      {isSelected && (
                        <img
                          src="/src/assets/golden_circle.png"
                          alt=""
                          className="absolute w-12 h-12 object-contain pointer-events-none select-none animate-spin"
                          style={{ animationDuration: '6s' }}
                        />
                      )}

                      <span
                        className={`relative z-10 ${
                          isSelected
                            ? "text-gold"
                            : ""
                        }`}
                      >
                        {date.getDate()}
                      </span>

                    </div>
                  );
                },
              }}
            />

          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-muted-foreground text-sm mt-6">
            11 Маусым 2026 жыл — Бейсенбі, 13:00
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CalendarSection;