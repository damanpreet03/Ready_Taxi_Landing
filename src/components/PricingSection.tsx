import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "Perfect for small taxi businesses just getting started.",
    features: ["Up to 20 drivers", "Customer booking app", "Basic analytics", "Email support", "Single currency"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    desc: "For growing fleets that need more power and flexibility.",
    features: ["Up to 100 drivers", "All panels included", "Advanced analytics", "Priority support", "Multi-currency", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex requirements.",
    features: ["Unlimited drivers", "Dedicated infrastructure", "Custom integrations", "24/7 phone support", "SLA guarantee", "White-label apps"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" aria-label="Pricing Plans" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground">Pricing managed by Admin. Starting from the plans below.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 ${plan.popular ? "hero-gradient text-primary-foreground ring-4 ring-primary/20 scale-105" : "card-elevated-lg"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-card text-primary text-xs font-bold rounded-full shadow">
                <Star className="h-3 w-3" /> Most Popular
              </div>
            )}
            <h3 className={`text-lg font-bold ${plan.popular ? "" : "text-foreground"}`}>{plan.name}</h3>
            <div className="mt-4 mb-2">
              <span className={`text-4xl font-extrabold ${plan.popular ? "" : "text-foreground"}`}>{plan.price}</span>
              <span className={`text-sm ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>{plan.period}</span>
            </div>
            <p className={`text-sm mb-6 ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>{plan.desc}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`h-4 w-4 shrink-0 ${plan.popular ? "" : "text-primary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "secondary" : "hero"}
              size="lg"
              className="w-full"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
