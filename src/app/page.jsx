import LiveTracker from '@/components/LiveTracker';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#121418]">
      
      <Hero />
      <LiveTracker/>

      <FeaturedSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}