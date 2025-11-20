import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer",
    image: "👩‍💻",
    rating: 5,
    text: "This platform changed my career! I learned web development from amazing mentors and now I'm working at a top tech company."
  },
  {
    name: "Rahul Mehta",
    role: "Graphic Designer",
    image: "👨‍🎨",
    rating: 5,
    text: "As a mentor, I love sharing my design skills with eager learners. The credit system is brilliant and fair!"
  },
  {
    name: "Anjali Patel",
    role: "Business Analyst",
    image: "👩‍💼",
    rating: 5,
    text: "The AI matching connected me with the perfect mentor for data analytics. The learning experience has been incredible!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            Join learners, mentors, and communities building skills together nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">5K</div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">+</div>
            </div>
            <span className="text-sm font-medium text-foreground">Active community members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
