import styles from './Logo.module.css';

/**
 * Logotipo tipográfico: CASA NUBE. con "NUBE." en color de acento.
 * `inverted`: versión clara para fondos oscuros (footer).
 */
export default function Logo({ inverted = false }) {
  return (
    <span className={`${styles.logo} ${inverted ? styles.inverted : ''}`}>
      Casa <span className={styles.accent}>Nube.</span>
    </span>
  );
}
