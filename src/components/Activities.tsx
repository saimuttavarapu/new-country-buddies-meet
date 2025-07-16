import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Clock } from "lucide-react";
import runningImage from "@/assets/running-activity.jpg";
import hikingImage from "@/assets/hiking-activity.jpg";
import cookingImage from "@/assets/cooking-activity.jpg";

const activities = [
  {
    id: 1,
    title: "Morning Running Group",
    description: "Join our friendly running group for a scenic 5km route through the city park. Perfect for beginners and experienced runners alike!",
    image: runningImage,
    category: "Fitness",
    date: "Every Tuesday & Thursday",
    time: "7:00 AM",
    location: "Central Park",
    participants: 12,
    maxParticipants: 15
  },
  {
    id: 2,
    title: "Weekend Hiking Adventure",
    description: "Explore beautiful trails and enjoy breathtaking views while making new friends. All fitness levels welcome.",
    image: hikingImage,
    category: "Outdoor",
    date: "Saturday, Dec 21",
    time: "9:00 AM",
    location: "Mountain Trail",
    participants: 8,
    maxParticipants: 12
  },
  {
    id: 3,
    title: "International Cooking Class",
    description: "Learn to cook authentic dishes from around the world while sharing stories and making connections.",
    image: cookingImage,
    category: "Culture",
    date: "Sunday, Dec 22",
    time: "2:00 PM",
    location: "Community Kitchen",
    participants: 6,
    maxParticipants: 10
  }
];

const categories = ["All", "Fitness", "Outdoor", "Culture", "Arts", "Language", "Games"];

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Amazing
            <span className="block text-primary">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From fitness groups to cultural experiences, find activities that match your interests and connect with your future best friends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  {activity.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {activity.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {activity.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {activity.participants}/{activity.maxParticipants} joined
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground shadow-elegant">
                  Join Activity
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;