import styles from './Logo.module.css';

/**
 * Logotipo provisional de CASA NUBE (nube + wordmark).
 * Si el negocio tiene un logo oficial, reemplaza el SVG por <img src="/logo.svg" ... />.
 * `inverted`: versión clara para fondos oscuros.
 */
export default function Logo({ inverted = false }) {
  return (
    <span className={`${styles.logo} ${inverted ? styles.inverted : ''}`}>
      <svg className={styles.mark} viewBox="0 0 48 32" aria-hidden="true">
        <path
          d="M12 28h24a8 8 0 0 0 0-16 11 11 0 0 0-21-2 7.5 7.5 0 0 0-3 18z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="37" cy="7" r="3.5" className={styles.dot} />
      </svg>
      <span className={styles.wordmark}>Casa Nube</span>
    </span>
  );
}
