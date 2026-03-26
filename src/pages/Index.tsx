import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import MobileAppsSection from "@/components/MobileAppsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CustomPlanSection from "@/components/CustomPlanSection";
import ContactSection from "@/components/ContactSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <SolutionsSection />
    <MobileAppsSection />
    <FeaturesSection />
    <PricingSection />
    <CustomPlanSection />
    <ContactSection />
    <HowItWorksSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
