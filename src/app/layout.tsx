import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import CartDrawer from '@/components/layout/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'YUNA — Japanese Tea, Quietly Made',
    template: '%s | YUNA',
  },
  description:
    'Thoughtfully sourced ceremonial matcha, roasted hojicha, and creative blends from Japan. Delivered across India.',
  keywords: ['matcha', 'hojicha', 'japanese tea', 'ceremonial matcha', 'india', 'yuna'],
  openGraph: {
    siteName: 'YUNA',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FCFAF6] text-[#292925] antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
