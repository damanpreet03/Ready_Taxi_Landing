import { motion } from "framer-motion";
import { Shield, Users, Truck, Building2, UserCheck, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Admin Panel",
    desc: "Central dashboard for owners to monitor bookings, drivers, earnings, taxes, and overall system performance.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Customer Panel",
    desc: "Book rides easily, manage trips, and handle payments with a smooth user experience.",
    color: "text-primary"
  },
  {
    icon: Truck,
    title: "Fleet Panel",
    desc: "For fleet owners to onboard drivers, manage vehicles, assign trips, and track driver activity and performance in real time.",
    color: "text-primary"
  },
  {
    icon: Building2,
    title: "Corporate Panel",
    desc: "Designed for businesses to manage employee travel, corporate bookings, and centralized billing.",
    color: "text-primary"
  },
  {
    icon: UserCheck,
    title: "Agent Panel",
    desc: "Enable agents to book rides, manage customers, and earn commissions through the platform.",
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Dedicated apps for customers and drivers—book rides easily while drivers manage trips, navigation, and earnings on the go.",
    color: "text-primary"
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solutions</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          One Platform, Five Powerful Panels
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every stakeholder gets a dedicated, role-based experience designed for efficiency.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="card-elevated-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className={`h-6 w-6 ${s.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
