import { motion } from "framer-motion";
import { ListChecks, Globe, Mail, Rocket } from "lucide-react";

const steps = [
  { icon: ListChecks, title: "Choose Plan", desc: "Select the plan that fits your business size." },
  { icon: Globe, title: "Set Subdomain & Details", desc: "Configure your brand and business info." },
  { icon: Mail, title: "Get Admin Credentials", desc: "Receive login details via email instantly." },
  { icon: Rocket, title: "Launch Your Platform", desc: "Go live and start accepting rides." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Get Started in 4 Simple Steps
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4 relative">
              <s.icon className="h-7 w-7 text-primary-foreground" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card text-primary text-xs font-bold flex items-center justify-center shadow border border-border">
                {i + 1}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
