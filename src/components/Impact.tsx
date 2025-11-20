import { TrendingUp, Recycle, BookOpen, Zap, Users, Sparkles } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Bridging the Gap",
    description: "Connecting learners with mentors across skills and regions, making quality education accessible to all."
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "A self-sustaining ecosystem where teaching fuels learning through our credit system."
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "Fostering a culture of continuous growth and skill development at every stage of life."
  },
  {
    icon: Zap,
    title: "Empowerment",
    description: "Enabling individuals to transform their knowledge into value and opportunities."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Creating strong networks of learners and mentors supporting each other's growth."
  },
  {
    icon: Sparkles,
    title: "Innovation in Education",
    description: "Revolutionizing traditional learning with AI-powered matching and collaborative tools."
  }
];

const benefits = [
  "Flexible learning schedules adapted to your lifestyle",
  "Cultural preservation through multilingual support",
  "Entrepreneurship opportunities for skilled individuals",
  "Breaking geographical and economic barriers",
  "Building valuable professional networks",
  "Recognition and validation of diverse skills"
];

const Impact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Creating Real Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Transforming lives through accessible education and community-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Impacts */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Impact</h3>
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">{impact.title}</h4>
                    <p className="text-muted-foreground">{impact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Key Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
