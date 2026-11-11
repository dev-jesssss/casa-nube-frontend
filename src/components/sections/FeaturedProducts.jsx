import ProductCard from '@/components/ui/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { featuredProducts } from '@/data/products';
import styles from './FeaturedProducts.module.css';

// Colores de los marcadores para productos que todavía no tienen foto
const tones = ['coffee', 'terracotta', 'sage', 'yellow'];

export default function FeaturedProducts() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <SectionHeading eyebrow="Hecho con calma" title="Nuestros favoritos" align="split">
          <p>Una pequeña selección de sabores para acompañar tu día.</p>
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
