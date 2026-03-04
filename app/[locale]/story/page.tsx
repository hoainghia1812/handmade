import Footer from "../../components/Footer";
import ChatButton from "../../components/ChatButton";
import StoryHero from "../../story/_components/StoryHero";
import StoryHeritage from "../../story/_components/StoryHeritage";
import StoryValues from "../../story/_components/StoryValues";
import StoryProcess from "../../story/_components/StoryProcess";
import StoryArtisans from "../../story/_components/StoryArtisans";
import StoryMaterials from "../../story/_components/StoryMaterials";
import StoryCTA from "../../story/_components/StoryCTA";

export const metadata = {
  title: "Our Story — Mush & Co.",
  description:
    "Rooted in heritage, crafted for comfort. Discover the story behind every Mush & Co. piece.",
};

export default function LocaleStoryPage() {
  return (
    <>
      <main>
        <StoryHero />
        <StoryHeritage />
        <StoryValues />
        <StoryProcess />
        <StoryArtisans />
        <StoryMaterials />
        <StoryCTA />
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}

