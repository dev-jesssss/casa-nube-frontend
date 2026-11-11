import { brand, navLinks } from '@/config/brand';
import Logo from '@/components/ui/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo inverted />
          <p className={styles.concept}>{brand.concept}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className={styles.title}>Explora</h2>
          <ul className={styles.list}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.title}>Contacto</h2>
          <address className={styles.list}>
            <span>{brand.contact.address}</span>
            <span>{brand.contact.city}</span>
            <a href={`tel:${brand.contact.phone.replace(/\s/g, '')}`}>{brand.contact.phone}</a>
            <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
          </address>
        </div>

        <div>
          <h2 className={styles.title}>Síguenos</h2>
          <ul className={styles.list}>
            {brand.social.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {brand.name}. {brand.category}.
        </p>
        <p>{brand.slogan}.</p>
      </div>
    </footer>
  );
}
