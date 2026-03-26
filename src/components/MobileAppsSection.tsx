import { motion } from "framer-motion";
import { MapPin, Navigation, CreditCard, CheckCircle, DollarSign, Map } from "lucide-react";
import mobileApps from "@/assets/mobile-apps.png";

const customerFeatures = [
  { icon: MapPin, text: "Book rides instantly" },
  { icon: Navigation, text: "Live GPS tracking" },
  { icon: CreditCard, text: "Multiple payment options" },
];

const driverFeatures = [
  { icon: CheckCircle, text: "Accept/reject rides" },
  { icon: DollarSign, text: "Earnings dashboard" },
  { icon: Map, text: "Built-in navigation" },
];

const MobileAppsSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mobile Apps</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Powerful Apps for Riders & Drivers
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Native-quality mobile experiences that keep everyone connected.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h3 className="text-xl font-bold text-foreground">Customer App</h3>
          {customerFeatures.map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{f.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={mobileApps} alt="Customer and driver mobile apps" loading="lazy" width={1024} height={768} className="w-full max-w-md animate-float" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h3 className="text-xl font-bold text-foreground">Driver App</h3>
          {driverFeatures.map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{f.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default MobileAppsSection;
