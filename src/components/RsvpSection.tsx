import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Users, MessageSquare, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container max-w-lg mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-2">
            Қатысуыңызды растаңыз
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold">✦</span>
            <div className="w-12 h-px bg-gold" />
          </div>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal variant="scaleUp">
            <motion.div
              className="text-center py-12 px-6 bg-cream-dark rounded-2xl border border-gold/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Check className="w-8 h-8 text-gold" />
              </motion.div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                Рахмет, {name}!
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Сіздің қатысуыңыз расталды. Сізді күтеміз!
              </p>
            </motion.div>
          </ScrollReveal>
        ) : (
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-cream-dark rounded-2xl border border-gold/20 p-6 md:p-8 space-y-5 shadow-sm"
            >
              {/* Name */}
              <div className="space-y-2">
                <label className="font-body text-sm text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  Аты-жөніңіз
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 100))}
                  required
                  maxLength={100}
                  placeholder="Толық аты-жөніңіз"
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/20 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="font-body text-sm text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  Қонақ саны
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/20 font-body text-sm text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "адам" : "адам"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-body text-sm text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  Тілек (міндетті емес)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                  maxLength={500}
                  rows={3}
                  placeholder="Жас жұбайларға тілектеріңіз..."
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/20 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-lg bg-gold font-body text-sm font-medium text-primary-foreground flex items-center justify-center gap-2 transition-colors hover:opacity-90"
              >
                <Send className="w-4 h-4" />
                Растау
              </motion.button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
