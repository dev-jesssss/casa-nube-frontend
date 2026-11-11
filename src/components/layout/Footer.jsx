import { brand } from '@/config/brand';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <strong>{brand.name}</strong>
          <p className={styles.muted}>{brand.tagline}</p>
        </div>

        <address className={styles.contact}>
          <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
          <span>{brand.contact.phone}</span>
          <span>{brand.contact.address}</span>
        </address>
      </div>

      <p className={`container ${styles.copy}`}>
        © {year} {brand.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
