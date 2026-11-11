import Photo from '@/components/ui/Photo';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductCard.module.css';

export default function ProductCard({ name, description, price, tag, image, tone }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Photo src={image} alt={name} ratio="4 / 5" tone={tone} />
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>

      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        {price != null && <strong className={styles.price}>{formatPrice(price)}</strong>}
      </div>
    </article>
  );
}
