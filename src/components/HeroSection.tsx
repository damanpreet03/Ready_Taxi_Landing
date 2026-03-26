import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => (
  <section aria-label="Hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden">
    <div className="container-narrow">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            🚀 Trusted by 100+ businesses worldwide
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6"
        >
          All-in-One Taxi Booking &{" "}
          <span className="text-gradient">Fleet Management</span> Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Manage drivers, customers, fleets, corporate clients, and agents from one powerful system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="hero-outline" size="xl">
            <Play className="mr-2 h-5 w-5" /> Book Demo
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="card-elevated-xl overflow-hidden">
          <img src={heroDashboard} alt="Ready Taxi taxi management dashboard" width={1280} height={800} className="w-full h-auto" />
        </div>
        <div className="absolute -bottom-4 -left-4 -right-4 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
