import { motion } from "framer-motion";
import { MapPin, Zap, DollarSign, PieChart, BarChart3, Globe } from "lucide-react";

const features = [
  { icon: MapPin, title: "Real-time GPS Tracking", desc: "Track every vehicle in your fleet with live location updates." },
  { icon: Zap, title: "Automated Dispatch", desc: "Smart algorithms assign the nearest driver instantly." },
  { icon: DollarSign, title: "Dynamic Pricing", desc: "Surge pricing, zone-based rates, and promotional discounts." },
  { icon: PieChart, title: "Commission Management", desc: "Automated commission splits for agents and drivers." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Deep insights into revenue, trips, and driver performance." },
  { icon: Globe, title: "Multi-language & Currency", desc: "Operate globally with localized experiences." },
];

const FeaturesSection = () => (
  <section id="features" aria-label="Platform Features" className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Everything You Need to Run a Taxi Business
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="card-elevated p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-4">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
