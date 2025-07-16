import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People enjoying activities together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find Your Tribe in a
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                New Country
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Connect with like-minded people through shared activities. 
              From running groups to cooking classes, discover friends who share your passions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow text-lg px-8 py-6"
            >
              Start Connecting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Browse Activities
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <MapPin className="h-12 w-12 text-secondary" />
              <h3 className="text-xl font-semibold">Local Activities</h3>
              <p className="text-white/80 text-center">
                Discover events and activities happening right in your neighborhood
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Users className="h-12 w-12 text-secondary" />
              <h3 className="text-xl font-semibold">Like-minded People</h3>
              <p className="text-white/80 text-center">
                Meet people who share your interests and hobbies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Heart className="h-12 w-12 text-secondary" />
              <h3 className="text-xl font-semibold">Genuine Friendships</h3>
              <p className="text-white/80 text-center">
                Build meaningful connections that last beyond the activity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;