import Photo from '@/components/ui/Photo';
import styles from './ProductCard.module.css';

export default function ProductCard({ name, description, image, tone }) {
  return (
    <article className={styles.card}>
      <Photo src={image} alt={name.toLowerCase()} ratio="1 / 1" tone={tone} />
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
