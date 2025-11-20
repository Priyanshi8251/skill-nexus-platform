import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const quickStartModules = [
  {
    id: 1,
    title: "Learn Flexbox",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration: "15 Mins",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "JavaScript Promises",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    duration: "15 Mins",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "React Hooks Basics",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    duration: "15 Mins",
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Python Functions",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    duration: "15 Mins",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "CSS Grid Layout",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    duration: "15 Mins",
    difficulty: "Intermediate",
  },
];

const QuickStart = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 text-lg px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            QuickStart Micro-Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Learn in Just 15 Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bite-sized lessons designed for quick learning on the go
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {quickStartModules.map((module) => (
              <CarouselItem key={module.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 hover:border-primary hover:shadow-card-hover transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={module.thumbnail}
                      alt={module.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-accent text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      {module.difficulty}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <Button className="w-full group-hover:scale-105 transition-transform">
                      Start Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default QuickStart;
