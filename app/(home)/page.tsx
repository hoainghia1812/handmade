import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import NewArrivals from "../components/NewArrivals";
import OurStory from "../components/OurStory";
import Testimonial from "../components/Testimonial";
import Lookbook from "../components/Lookbook";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <NewArrivals />
      <OurStory />
      <Testimonial />
      <Lookbook />
      <Footer />
      <ChatButton />
    </>
  );
}
