import { UserPlus, CheckCircle, Search, Users, Video, Coins, Briefcase } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds and join our growing community."
  },
  {
    icon: CheckCircle,
    title: "Verify Account",
    description: "Complete your profile verification for trusted interactions."
  },
  {
    icon: Search,
    title: "Explore Interests",
    description: "Browse through hundreds of skills and find what excites you."
  },
  {
    icon: Users,
    title: "Match with Mentors",
    description: "Our AI connects you with the perfect mentor for your goals."
  },
  {
    icon: Video,
    title: "Join Sessions",
    description: "Start learning through live interactive sessions and workshops."
  },
  {
    icon: Coins,
    title: "Earn Credits",
    description: "Teach others and earn credits to unlock more learning."
  },
  {
    icon: Briefcase,
    title: "Update Portfolio",
    description: "Showcase your new skills and track your growth journey."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Your journey from curious learner to skilled expert in 7 simple steps.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-border -translate-x-4" />
                  )}
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground mt-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
