import { brand } from '@/config/brand';
import styles from './QuoteBanner.module.css';

/** Franja con el eslogan de la marca sobre fondo verde salvia. */
export default function QuoteBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <span className={styles.mark} aria-hidden="true">
          ✳
        </span>
        <h2 className={styles.slogan}>{brand.slogan}.</h2>
        <p className={styles.note}>Que el día espere. Tu café está listo.</p>
      </div>
    </section>
  );
}
