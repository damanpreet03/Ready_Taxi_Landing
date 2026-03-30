import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const HeroSection = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"email" | "otp" | "form">("email");

  // 👉 Step 1: Send Email
  const handleContinue = async () => {
    await fetch(`${API_URL}/owner/continue-with-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setStep("otp");
  };

  // 👉 Step 2: Verify OTP
  const handleVerify = async () => {
    const res = await fetch(`${API_URL}/owner/verify-email`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    if (res.ok) {
      setStep("form"); // ✅ open final form inside modal
    }
  };

  return (
    <>
      <section aria-label="Hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-12">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6"
            >
              All-in-One Taxi Booking &{" "}
              <span className="text-gradient">Fleet Management</span> Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Manage drivers, customers, fleets, corporate clients, and agents from one powerful system.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setOpen(true)}>
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <a href="#contact">
                <Button variant="hero-outline" size="xl">
                  <Play className="mr-2 h-5 w-5" /> Book Demo
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div className="relative max-w-5xl mx-auto">
            <div className="card-elevated-xl overflow-hidden">
              <img src={heroDashboard} alt="dashboard" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">

            {/* Close */}
            <button
              onClick={() => {
                setOpen(false);
                setStep("email");
              }}
              className="absolute top-3 right-4 text-gray-400 text-xl"
            >
              ×
            </button>

            {/* Header */}
            <div className="text-center px-6 pt-8 pb-4">
              <h2 className="text-2xl font-bold text-primary">
                {step === "email"
                  ? "Get Started"
                  : step === "otp"
                    ? "Verify Email"
                    : "Complete Registration"}
              </h2>

              <p className="text-sm text-muted-foreground mt-2">
                {step === "email"
                  ? "Enter your email to continue"
                  : step === "otp"
                    ? "Enter the OTP sent to your email"
                    : "Set your password to complete setup"}
              </p>
            </div>

            {/* Body */}
            <div className="px-6 pb-6">

              {/* EMAIL STEP */}
              {step === "email" && (
                <>
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@yourcompany.com"
                    className="w-full mt-2 rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <button
                    onClick={handleContinue}
                    disabled={!email}
                    className="w-full mt-5 py-3 rounded-lg text-white font-medium bg-primary disabled:opacity-50"
                  >
                    Continue →
                  </button>
                </>
              )}

              {/* OTP STEP */}
              {step === "otp" && (
                <>
                  <label className="text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>

                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full mt-2 rounded-lg border px-4 py-3 text-center tracking-widest text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <button
                    onClick={handleVerify}
                    disabled={!otp}
                    className="w-full mt-5 py-3 rounded-lg text-white font-medium bg-primary disabled:opacity-50"
                  >
                    Verify →
                  </button>
                </>
              )}

              {/* FINAL FORM STEP */}
              {step === "form" && (
                <>
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full mt-2 rounded-lg border px-4 py-3"
                  />

                  <label className="text-sm font-medium mt-4 block">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full mt-2 rounded-lg border px-4 py-3"
                  />

                  <div className="flex justify-between mt-5">
                    <button
                      onClick={() => setStep("otp")}
                      className="px-4 py-2 border rounded-lg"
                    >
                      Back
                    </button>

                    <button className="px-4 py-2 bg-primary text-white rounded-lg">
                      Complete Registration →
                    </button>
                  </div>
                </>
              )}

              <p className="text-xs text-center text-muted-foreground mt-4">
                By continuing, you agree to our{" "}
                <span className="text-primary font-medium">
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;