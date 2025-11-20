import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, BookOpen, ArrowRight } from "lucide-react";

const CreditExchange = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Credit Exchange
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn credits by teaching or spend them to learn new skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Teach & Earn */}
          <Card className="border-2 border-success/30 hover:border-success hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-success to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-success">Teach & Earn</CardTitle>
              <CardDescription className="text-lg">
                Share your expertise and earn credits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-xl bg-success/10 border border-success/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Coins className="w-6 h-6 text-success" />
                  <span className="text-3xl font-bold text-success">+50</span>
                  <span className="text-lg text-muted-foreground">Credits/hr</span>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Average earning per session
                </p>
              </div>
              
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Set your own availability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Build your reputation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Flexible session duration
                </li>
              </ul>

              <Button className="w-full bg-success hover:bg-success/90 text-white group-hover:scale-105 transition-transform">
                Start Teaching
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Spend & Learn */}
          <Card className="border-2 border-secondary/30 hover:border-secondary hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-warning flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-secondary">Spend & Learn</CardTitle>
              <CardDescription className="text-lg">
                Book sessions with expert mentors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Coins className="w-6 h-6 text-secondary" />
                  <span className="text-3xl font-bold text-secondary">-30</span>
                  <span className="text-lg text-muted-foreground">Credits/hr</span>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Average cost per session
                </p>
              </div>
              
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  AI-matched mentors
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Verified experts only
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Session recordings included
                </li>
              </ul>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white group-hover:scale-105 transition-transform">
                Find a Mentor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreditExchange;
