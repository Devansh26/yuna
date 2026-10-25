import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import Bestsellers from '@/components/home/Bestsellers';
import EditorialFeature from '@/components/home/EditorialFeature';
import Comparison from '@/components/home/Comparison';
import GiftSets from '@/components/home/GiftSets';
import BrandStory from '@/components/home/BrandStory';
import PrepGuide from '@/components/home/PrepGuide';
import Newsletter from '@/components/home/Newsletter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUNA — Japanese Tea, Quietly Made',
  description:
    'Thoughtfully imagined matcha, roasted hojicha, and everyday rituals worth slowing down for. Sourced from Japan, delivered across India.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Bestsellers />
      <EditorialFeature />
      <Comparison />
      <GiftSets />
      <BrandStory />
      <PrepGuide />
      <Newsletter />
    </>
  );
}
