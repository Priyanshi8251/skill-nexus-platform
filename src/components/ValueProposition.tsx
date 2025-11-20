import { Coins, Heart, Lightbulb, Globe } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Knowledge as Shared Currency
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A platform where knowledge becomes a shared currency — bridging gaps across 
            skills, regions, and generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Coins className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Credit-Based Exchange</h3>
            <p className="text-muted-foreground">
              Teach to earn credits, use credits to learn. Fair and sustainable ecosystem.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Powered Matching</h3>
            <p className="text-muted-foreground">
              Smart algorithms connect you with perfect mentors based on your goals and interests.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Community-Driven</h3>
            <p className="text-muted-foreground">
              Join a thriving community where everyone learns, teaches, and grows together.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center mb-4">
              <Globe className="w-7 h-7 text-warning" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Accessible to All</h3>
            <p className="text-muted-foreground">
              Free learning for everyone, breaking down barriers across regions and generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
