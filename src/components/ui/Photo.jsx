import styles from './Photo.module.css';

/**
 * Fotografía con proporción fija.
 * Mientras no haya `src`, muestra un marcador con la descripción de la foto que va ahí,
 * para que el diseño se vea completo y sea fácil saber qué imagen reemplazar.
 *
 * - `ratio`: proporción CSS, por ejemplo '4 / 5' o '16 / 9'
 * - `tone`: color del marcador: 'coffee' | 'terracotta' | 'sage' | 'yellow'
 * - `priority`: true para la imagen principal visible al cargar (no se difiere su carga)
 */
export default function Photo({
  src,
  alt,
  ratio = '4 / 5',
  tone = 'coffee',
  priority = false,
  className = '',
}) {
  return (
    <figure className={`${styles.photo} ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={styles.img}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      ) : (
        <div className={`${styles.placeholder} ${styles[tone]}`} role="img" aria-label={alt}>
          <span className={styles.label}>Foto: {alt}</span>
        </div>
      )}
    </figure>
  );
}
