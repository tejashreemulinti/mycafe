'use client';

import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { MenuSection } from '@/components/MenuSection';
import { AmbianceSection } from '@/components/AmbianceSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar isSticky={true} />

      {/* Hero Section */}
      <HeroSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Ambiance Section */}
      <AmbianceSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
