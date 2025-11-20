import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Award, 
  GraduationCap, 
  Shield, 
  Video, 
  Clock, 
  Globe2, 
  Users2,
  Download
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "SkillMatch AI",
    description: "Intelligent mentor matching based on your learning goals, interests, and availability.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Award,
    title: "Teach to Earn Credits",
    description: "Share your expertise and earn credits that unlock learning opportunities.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: GraduationCap,
    title: "Learn with Credits",
    description: "Access quality education from expert mentors using your earned credits.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Shield,
    title: "Profile Verification & Ratings",
    description: "Trusted community with verified profiles and transparent rating systems.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Video,
    title: "LiveBoard & Whiteboard",
    description: "Interactive real-time collaboration tools for engaging learning sessions.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Clock,
    title: "QuickStart Micro-Skills",
    description: "15-minute focused learning modules for quick skill acquisition on the go.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Globe2,
    title: "MultiLingua Mode",
    description: "Learn in your preferred language with support for multiple regional languages.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users2,
    title: "OpenCircle Sessions",
    description: "Join community rooms for group learning, networking, and collaboration.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download sessions and access learning materials anytime, anywhere.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for Seamless Learning
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to teach, learn, and grow in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
