import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container px-4 py-16 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Learning or Teaching Today
            </h2>
            <p className="text-xl mb-8 text-background/80">
              Build Skills, Earn Credits, and Grow Together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Learners</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Browse Skills</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Find Mentors</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Mentors</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Become a Mentor</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Teaching Resources</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Press</a></li>
            </ul>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/70">
            © 2025 Community Skill Exchange Platform. Built for Smart India Hackathon 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
