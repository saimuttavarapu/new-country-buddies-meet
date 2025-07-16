import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Activities />
      <HowItWorks />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
