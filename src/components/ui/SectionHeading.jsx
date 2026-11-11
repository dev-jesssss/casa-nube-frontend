import styles from './SectionHeading.module.css';

/**
 * Encabezado de sección: etiqueta (eyebrow) + título + texto opcional.
 * - `title` acepta JSX, por ejemplo: <>Se trata de <em>cómo te hace sentir</em></>
 * - `align`: 'left' | 'center' | 'split' (título a la izquierda, texto a la derecha)
 * - `as`: nivel del título ('h1', 'h2'...). Por defecto 'h2'.
 */
export default function SectionHeading({ eyebrow, title, children, align = 'left', as = 'h2' }) {
  const Heading = as;

  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className={styles.title}>{title}</Heading>
      </div>
      {children && <div className={styles.text}>{children}</div>}
    </header>
  );
}
