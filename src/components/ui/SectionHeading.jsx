import styles from './SectionHeading.module.css';

/**
 * Encabezado de sección: etiqueta pequeña (eyebrow) + título + texto opcional.
 * `align`: 'left' | 'center'
 */
export default function SectionHeading({ eyebrow, title, children, align = 'left', as = 'h2' }) {
  const Heading = as;

  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={styles.title}>{title}</Heading>
      {children && <div className={styles.text}>{children}</div>}
    </header>
  );
}
