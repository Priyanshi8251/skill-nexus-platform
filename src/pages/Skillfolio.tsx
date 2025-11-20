import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Award,
  Star,
  TrendingUp,
  Calendar,
  Flame,
  Trophy,
  Target,
  Zap,
  Edit
} from "lucide-react";

const Skillfolio = () => {
  const badges = [
    { id: 1, name: "7-Day Streak", icon: Flame, color: "text-orange-500" },
    { id: 2, name: "Top Rated Teacher", icon: Trophy, color: "text-yellow-500" },
    { id: 3, name: "Quick Learner", icon: Zap, color: "text-blue-500" },
    { id: 4, name: "100 Sessions", icon: Target, color: "text-green-500" },
    { id: 5, name: "Rising Star", icon: TrendingUp, color: "text-purple-500" },
  ];

  const reviews = [
    {
      id: 1,
      studentName: "Arjun Kumar",
      rating: 5,
      comment: "Excellent mentor! Explained React concepts very clearly. Highly recommend!",
      date: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      studentName: "Sneha Patel",
      rating: 5,
      comment: "Very patient and knowledgeable. Helped me understand complex topics easily.",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      id: 3,
      studentName: "Rohan Singh",
      rating: 4,
      comment: "Great session on JavaScript. Would love to learn more advanced topics.",
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Identity Section */}
        <Card className="border-2 mb-8 animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Profile" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  className="absolute -bottom-2 -right-2 rounded-full shadow-lg"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Priya Sharma</h1>
                    <p className="text-lg text-muted-foreground mb-3">
                      Senior Frontend Developer & UI/UX Enthusiast
                    </p>
                  </div>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg px-4 py-2">
                    <Award className="w-5 h-5 mr-2" />
                    Gold Tier Mentor
                  </Badge>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  Passionate about teaching web development and helping students build amazing applications. 
                  With 8+ years of experience in React, JavaScript, and modern frontend technologies, 
                  I love sharing knowledge and watching students grow their skills.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">127</div>
                    <div className="text-sm text-muted-foreground">Total Sessions</div>
                  </div>
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="text-3xl font-bold text-success mb-1">4.9</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary mb-1">98</div>
                    <div className="text-sm text-muted-foreground">Students Taught</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">450</div>
                    <div className="text-sm text-muted-foreground">Credits Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges & Streaks Section */}
        <Card className="border-2 mb-8 animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Badges & Achievements</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {badges.map((badge) => (
                <Card key={badge.id} className="flex-shrink-0 w-40 border-2 hover:border-primary hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <badge.icon className={`w-8 h-8 ${badge.color}`} />
                    </div>
                    <p className="font-semibold text-sm text-foreground">{badge.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card className="border-2 animate-scale-in">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-warning fill-warning" />
              <h2 className="text-2xl font-bold text-foreground">Recent Feedback</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={review.avatar} alt={review.studentName} />
                        <AvatarFallback>{review.studentName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-foreground">{review.studentName}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-warning text-warning"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-foreground mb-2">{review.comment}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skillfolio;
