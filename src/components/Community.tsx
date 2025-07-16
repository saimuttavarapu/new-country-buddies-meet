import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Moving to Toronto was scary, but ConnectLocal helped me find my running group within my first week! I've made some of my closest friends through the platform.",
    activities: ["Running", "Hiking", "Photography"]
  },
  {
    name: "Miguel Rodriguez",
    location: "Berlin, Germany", 
    avatar: "/placeholder.svg",
    rating: 5,
    text: "As a digital nomad, it's hard to make deep connections. This platform changed that completely. The cooking classes I joined led to a whole friend group!",
    activities: ["Cooking", "Language Exchange", "Board Games"]
  },
  {
    name: "Priya Patel",
    location: "Sydney, Australia",
    avatar: "/placeholder.svg", 
    rating: 5,
    text: "I was struggling to meet people after graduation. The book club I found here has become my second family. So grateful for this community!",
    activities: ["Book Club", "Yoga", "Art Classes"]
  }
];

const stats = [
  { number: "50K+", label: "Active Members" },
  { number: "500+", label: "Activities Monthly" },
  { number: "25+", label: "Cities Worldwide" },
  { number: "95%", label: "Success Rate" }
];

const Community = () => {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Growing
            <span className="block text-primary">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            See what our members have accomplished and become part of a global network of people making meaningful connections.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-4">{testimonial.text}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {testimonial.activities.map((activity, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Highlights */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found their tribe through shared activities and genuine connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-glow">
              Join the Community
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Host an Activity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;