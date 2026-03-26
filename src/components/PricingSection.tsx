import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Minus } from "lucide-react";
import { useEffect, useState } from "react";

const PricingSection = () => {
  const [plansData, setPlansData] = useState([]);

  // 🔹 Fetch Plans from API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;

        const res = await fetch(
          `${API_URL}/subscription-plans/get-subscription-plan-list`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              product_id: "69946529f63fc087d17abc26",
            },
          }
        );

        const data = await res.json();

        setPlansData(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlans();
  }, []);

  // 🔹 Format Helpers
  const formatCurrency = (v) => (v > 0 ? `₹${v}` : false);
  const formatDays = (v) => `${v} days`;

  // 🔹 Helper to map plan values dynamically
  const getPlanValue = (key, format = (v) => v) => {
    return {
      starter: format(plansData[0]?.[key]),
      growth: format(plansData[1]?.[key]),
      enterprise: format(plansData[2]?.[key]),
    };
  };

  // 🔹 Compare Features (Dynamic)
  const compareFeatures = [
    {
      name: "Order Limit",
      ...getPlanValue("order_limit"),
    },
    {
      name: "Extra Order Fee",
      ...getPlanValue("extra_order_amount", formatCurrency),
    },
    {
      name: "Max Extra Order Fee",
      ...getPlanValue("max_extra_order_amount", formatCurrency),
    },
    {
      name: "Basic Subscription",
      ...getPlanValue("basic_subscription_amount", formatCurrency),
    },
    {
      name: "Customer Subscription",
      ...getPlanValue("customer_subscription_amount", formatCurrency),
    },
    {
      name: "Fleet Subscription",
      ...getPlanValue("fleet_subscription_amount", formatCurrency),
    },
    {
      name: "Corporate Subscription",
      ...getPlanValue("corporate_subscription_amount", formatCurrency),
    },
    {
      name: "Agent Subscription",
      ...getPlanValue("agent_subscription_amount", formatCurrency),
    },
    {
      name: "Apps Subscription",
      ...getPlanValue("apps_subscription_amount", formatCurrency),
    },
    {
      name: "Trial Period",
      ...getPlanValue("trial_period", formatDays),
    },
  ];

  // 🔹 Plans UI Mapping (same structure)
  const plans = plansData.map((plan, i) => ({
    name: plan.plan_name?.replace(" Plan", ""),
    price: plan.total_plan_price ? `₹${plan.total_plan_price}` : "Custom",
    period: plan.billing_cycle === "monthly" ? "/mo" : "",
    desc: "Pricing managed by Admin.",
    features: [
      `Order Limit: ${plan.order_limit}`,
      `Trial: ${plan.trial_period} days`,
      `Extra Order: ₹${plan.extra_order_amount}`,
    ],
    popular: i === 1, // middle plan highlight
  }));

  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
        </motion.div>

        {/* 🔹 Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular
                ? "hero-gradient text-primary-foreground ring-4 scale-105"
                : "card-elevated-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-card text-primary text-xs font-bold rounded-full">
                  <Star className="h-3 w-3" /> Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold">{plan.name}</h3>

              <div className="mt-4 mb-2">
                <span className="text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-sm ml-1">{plan.period}</span>
              </div>

              <p className="text-sm mb-6">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Compare Table */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl font-bold">Compare Plans</h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px] max-w-4xl mx-auto">

            {/* Header */}
            <div className="grid grid-cols-4 border-b pb-2">
              <div className="pl-4 pb-4 text-sm font-bold">Feature</div>
              {plans.map((p, i) => (
                <div key={i} className="text-center pb-4">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs">{p.price}</div>
                </div>
              ))}
            </div>

            {/* Body */}
            {compareFeatures.map((feature, i) => (
              <div
                key={i}
                className="grid grid-cols-4 border-b min-h-[60px]"
              >
                <div className="pl-4 flex items-center font-medium">
                  {feature.name}
                </div>

                {["starter", "growth", "enterprise"].map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center"
                  >
                    {typeof feature[key] === "boolean" ? (
                      feature[key] ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Minus className="w-3 h-3 opacity-30" />
                      )
                    ) : (
                      feature[key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;