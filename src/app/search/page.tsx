import SearchPageClient from './SearchPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search YUNA products.',
};

export default function SearchPage() {
  return <SearchPageClient />;
}
