import { Button } from "@/components/ui/button";
import { Users, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">ConnectLocal</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#activities" className="text-muted-foreground hover:text-primary transition-colors">
            Activities
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
            Join Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;