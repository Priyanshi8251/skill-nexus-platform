import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import CreditExchange from "@/components/CreditExchange";
import Features from "@/components/Features";
import QuickStart from "@/components/QuickStart";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <CreditExchange />
      <Features />
      <QuickStart />
      <HowItWorks />
      <TechStack />
      <Impact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
