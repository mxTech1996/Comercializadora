'use client';

import About from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import ConsultingBenefits from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import AdminServiceShowcase from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonials';
import TopSection from '@/components/organisms/TopSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AdminServiceShowcase />
      <TopSection />
      <About />
      <Products />
      <ConsultingBenefits />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
