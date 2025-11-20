import { Code2, Database, Video, Smartphone } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    techs: ["React", "HTML5", "CSS3", "TypeScript"]
  },
  {
    category: "Backend",
    icon: Database,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    techs: ["Node.js", "Express.js", "MongoDB", "Python"]
  },
  {
    category: "Real-Time",
    icon: Video,
    color: "text-accent",
    bgColor: "bg-accent/10",
    techs: ["WebRTC", "Socket.io", "WebSockets"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "text-warning",
    bgColor: "bg-warning/10",
    techs: ["React Native", "Progressive Web App"]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground">
            Powered by industry-leading technologies for a seamless, scalable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-full ${tech.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${tech.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((t, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
