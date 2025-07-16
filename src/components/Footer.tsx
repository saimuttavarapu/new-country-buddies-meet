import { Users, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">ConnectLocal</span>
            </div>
            <p className="text-muted-foreground">
              Connecting people through shared activities and genuine friendships in cities worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Activities</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Fitness & Sports</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Outdoor Adventures</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Cultural Events</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Language Exchange</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Arts & Crafts</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Safety Guidelines</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Host an Event</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Community Rules</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Support</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Press</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ConnectLocal. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Available in 25+ cities worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;