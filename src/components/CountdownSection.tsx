import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const EVENT_DATE = new Date("2026-04-15T17:00:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Күн" },
    { value: timeLeft.hours, label: "Сағат" },
    { value: timeLeft.minutes, label: "Минут" },
    { value: timeLeft.seconds, label: "Секунд" },
  ];

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container max-w-3xl mx-auto text-center px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
            Тойға дейін
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold">✦</span>
            <div className="w-12 h-px bg-gold" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.label} variant="scaleUp" delay={i * 0.1}>
              <div className="bg-cream rounded-lg p-4 md:p-6 shadow-sm border border-gold/20">
                <motion.span
                  key={b.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-4xl md:text-5xl text-gold font-semibold block"
                >
                  {String(b.value).padStart(2, "0")}
                </motion.span>
                <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1 block">
                  {b.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
