import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { AddedToCartModal } from '@/components/AddedToCartModal';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pink Lady — Natural Care. Everyday Confidence | Herbal Sanitary Care',
  description: 'Pink Lady — Natural Care. Everyday Confidence. Customizable, rash-free organic herbal sanitary napkins infused with cooling Aloe Vera, pure Ayurvedic Neem, and breathable bamboo cotton.',
  icons: {
    icon: '/brand/logo.svg',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <AddedToCartModal />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
