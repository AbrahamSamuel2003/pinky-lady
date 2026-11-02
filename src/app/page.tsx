import { HeroSection } from '@/components/HeroSection';
import { AtelierCustomizer } from '@/components/AtelierCustomizer';
import { BotanicalScience } from '@/components/BotanicalScience';
import { PadAnatomy } from '@/components/PadAnatomy';
import { CuratedKits } from '@/components/CuratedKits';
import { CommunityStories } from '@/components/CommunityStories';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtelierCustomizer />
      <BotanicalScience />
      <PadAnatomy />
      <CuratedKits />
      <CommunityStories />
    </>
  );
}
