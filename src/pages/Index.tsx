import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <TechStack />
      <Impact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
