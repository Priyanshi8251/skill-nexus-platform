import { Button } from "@/components/ui/button";
import { Coins, Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Community Skills</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/find-mentor" className="text-foreground hover:text-primary transition-colors">
              Find Mentors
            </Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-colors">
              My Profile
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Select defaultValue="english">
              <SelectTrigger className="w-[120px] border-border">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
                <SelectItem value="regional">Regional</SelectItem>
              </SelectContent>
            </Select>

            {/* Credit Balance */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-success/20 border border-success/30 hover:scale-105 transition-transform cursor-pointer">
              <Coins className="w-5 h-5 text-success animate-pulse" />
              <span className="font-bold text-lg text-foreground">450</span>
              <span className="text-sm text-muted-foreground">Credits</span>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/find-mentor" className="text-lg text-foreground hover:text-primary transition-colors">
                    Find Mentors
                  </Link>
                  <Link to="/profile" className="text-lg text-foreground hover:text-primary transition-colors">
                    My Profile
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
