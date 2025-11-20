import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Smart India Hackathon 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight">
            Learn. Teach. Grow.
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            A Community Skill Exchange Platform
          </p>

          {/* Problem statement */}
          <div className="max-w-3xl mx-auto mb-8 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border shadow-xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Many can't afford to learn new skills, while others want to teach but can't find eager learners 
              or a place to connect. We're bridging this gap with a <span className="font-semibold text-primary">credit-based, 
              community-driven ecosystem</span>.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Join as Learner
              <BookOpen className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Join as Mentor
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-card-hover transition-all hover:scale-105">
              Explore Skills
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-secondary mb-2">5K+</div>
              <div className="text-muted-foreground">Expert Mentors</div>
            </div>
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
