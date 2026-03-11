import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import DetailsSection from "@/components/DetailsSection";
import CalendarSection from "@/components/CalendarSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <CalendarSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
