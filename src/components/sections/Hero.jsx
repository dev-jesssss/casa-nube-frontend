import Button from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">Café · Calma · Momentos</p>
          <h1 className={styles.title}>
            Un espacio para hacer una <em>pausa.</em>
          </h1>
          <p className={styles.intro}>
            Creemos en los pequeños momentos, en el aroma del café recién hecho y en el placer de ir
            más despacio.
          </p>
          <Button href="#nuestro-cafe" variant="dark">
            Descubre nuestro café <span aria-hidden="true">↗</span>
          </Button>
        </div>

        <div className={styles.media}>
          <Photo
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200"
            alt="Una taza de café en un ambiente acogedor"
            ratio="5 / 4"
            className={styles.arch}
            priority
          />
          <p className={styles.note}>Un momento para ti.</p>
        </div>
      </div>

      <span className={styles.decoration} aria-hidden="true">
        CN.
      </span>
    </section>
  );
}
