import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-3xl hero-gradient p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Launch Your Taxi Business Today
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
            Join 100+ businesses already using Ready Taxi to power their operations.
          </p>
          <Button variant="secondary" size="xl">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
