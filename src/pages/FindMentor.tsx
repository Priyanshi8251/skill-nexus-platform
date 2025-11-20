import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  CheckCircle2, 
  Coins, 
  Star, 
  Calendar,
  Sparkles,
  MessageSquare
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const mentors = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    verified: true,
    matchPercentage: 95,
    skills: ["React", "JavaScript", "UI/UX"],
    creditCost: 30,
    rating: 4.9,
    reviews: 127,
    status: "online",
    bio: "Senior Frontend Developer with 8 years of experience",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    verified: true,
    matchPercentage: 92,
    skills: ["Python", "Machine Learning", "Data Science"],
    creditCost: 35,
    rating: 4.8,
    reviews: 98,
    status: "online",
    bio: "ML Engineer passionate about AI and education",
  },
  {
    id: 3,
    name: "Ananya Patel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    verified: true,
    matchPercentage: 88,
    skills: ["Node.js", "Express", "MongoDB"],
    creditCost: 28,
    rating: 4.7,
    reviews: 85,
    status: "available-tomorrow",
    bio: "Backend specialist with expertise in scalable systems",
  },
  {
    id: 4,
    name: "Arjun Singh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    verified: true,
    matchPercentage: 90,
    skills: ["Java", "Spring Boot", "Microservices"],
    creditCost: 32,
    rating: 4.9,
    reviews: 142,
    status: "online",
    bio: "Enterprise Java developer with cloud expertise",
  },
];

const FindMentor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Matching</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Find Your Perfect Mentor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SkillMatch AI has found the best mentors based on your interests and goals
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="border-2 hover:border-primary hover:shadow-card-hover transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-20 h-20 border-2 border-primary">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {mentor.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{mentor.name}</h3>
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {mentor.matchPercentage}% Match
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{mentor.bio}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-muted-foreground">({mentor.reviews})</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {mentor.status === "online" ? (
                          <>
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="text-success font-medium">Online Now</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Available Tomorrow</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center justify-center gap-2">
                    <Coins className="w-5 h-5 text-secondary" />
                    <span className="text-2xl font-bold text-foreground">{mentor.creditCost}</span>
                    <span className="text-muted-foreground">Credits / session</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      Quick Book
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Booking</DialogTitle>
                      <DialogDescription>
                        Book a session with {mentor.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {mentor.skills.join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="text-sm text-muted-foreground mb-2">Session Cost</p>
                        <div className="flex items-center gap-2">
                          <Coins className="w-5 h-5 text-secondary" />
                          <span className="text-2xl font-bold">{mentor.creditCost}</span>
                          <span className="text-muted-foreground">Credits</span>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-success hover:bg-success/90">
                        Confirm Booking
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="icon">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindMentor;
