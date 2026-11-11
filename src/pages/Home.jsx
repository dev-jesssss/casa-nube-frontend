import Hero from '@/components/sections/Hero';
import Essence from '@/components/sections/Essence';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import QuoteBanner from '@/components/sections/QuoteBanner';
import Location from '@/components/sections/Location';

/** Landing de Casa Nube: las secciones siguen el orden del brief de marca. */
export default function Home() {
  return (
    <>
      <Hero />
      <Essence />
      <FeaturedProducts />
      <QuoteBanner />
      <Location />
    </>
  );
}
