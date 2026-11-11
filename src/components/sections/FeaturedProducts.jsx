import ProductCard from '@/components/ui/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { featuredProducts } from '@/data/products';
import styles from './FeaturedProducts.module.css';

const tones = ['coffee', 'terracotta', 'sage', 'yellow'];

export default function FeaturedProducts() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <SectionHeading eyebrow="Menú" title="Nuestros favoritos" align="center">
          <p>Lo que más piden quienes ya conocen la casa.</p>
        </SectionHeading>

        <ul className={styles.grid}>
          {featuredProducts.map((product, index) => (
            <li key={product.name}>
              <ProductCard {...product} tone={tones[index % tones.length]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
