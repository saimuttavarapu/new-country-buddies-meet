import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Calendar, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Tell us about your interests, location, and what kind of activities you enjoy. The more we know, the better we can match you!"
  },
  {
    icon: Search,
    title: "Discover Activities", 
    description: "Browse activities in your area or let our smart matching system suggest perfect activities based on your interests and availability."
  },
  {
    icon: Calendar,
    title: "Join & Participate",
    description: "RSVP to activities that interest you. Show up, be yourself, and enjoy meeting people who share your passions."
  },
  {
    icon: Heart,
    title: "Build Lasting Friendships",
    description: "Connect with people after activities, plan your own events, and build a supportive community in your new home."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It
            <span className="block text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin your journey of making meaningful connections in your new country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border inline-block shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to start your journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of people who have already found their community through ConnectLocal.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                100% Free to join
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                Verified profiles
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                Safe & friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;