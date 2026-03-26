import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Server, Puzzle, Headphones } from "lucide-react";

const benefits = [
  { icon: Sparkles, text: "Custom pricing tailored to your needs" },
  { icon: Server, text: "Dedicated infrastructure & hosting" },
  { icon: Puzzle, text: "Advanced third-party integrations" },
  { icon: Headphones, text: "Priority 24/7 support" },
];

const CustomPlanSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative rounded-3xl hero-gradient p-10 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Custom Enterprise Plan
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
            For businesses needing tailored solutions and advanced features.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {benefits.map((b) => (
              <div key={b.text} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary-foreground/90">{b.text}</span>
              </div>
            ))}
          </div>

          <Button variant="secondary" size="xl" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CustomPlanSection;
