import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";
import StoryHero      from "./_components/StoryHero";
import StoryHeritage  from "./_components/StoryHeritage";
import StoryValues    from "./_components/StoryValues";
import StoryProcess   from "./_components/StoryProcess";
import StoryArtisans  from "./_components/StoryArtisans";
import StoryMaterials from "./_components/StoryMaterials";
import StoryCTA       from "./_components/StoryCTA";

export const metadata = {
  title: "Our Story — Mush & Co.",
  description: "Rooted in heritage, crafted for comfort. Discover the story behind every Mush & Co. piece.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
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
