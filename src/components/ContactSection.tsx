import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold  uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Get a Custom Plan
          </h2>
          <p className="text-muted-foreground">Fill in your details and our team will contact you within 24 hours.</p>
        </motion.div>

        {submitted ? (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card-elevated-xl p-12 text-center">
            <CheckCircle className="h-16 w-16  mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h3>
            <p className="text-muted-foreground">Our team will contact you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card-elevated-xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input required placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <Input required type="email" placeholder="john@company.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input required type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
                <Input required placeholder="Acme Taxi Co." />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Business Type</label>
                <Input required placeholder="Taxi / Ride-hailing" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Expected Monthly Rides</label>
                <Input required placeholder="e.g. 10,000" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea placeholder="Tell us about your requirements..." rows={4} />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Submit Request
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
