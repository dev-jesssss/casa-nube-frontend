import Button from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import { brand } from '@/config/brand';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{brand.category}</p>
          <h1 className={styles.title}>
            El placer de ir <em>más despacio</em>
          </h1>
          <p className={styles.intro}>{brand.intro}</p>
          <div className={styles.actions}>
            <Button href="#nuestro-cafe">Descubre nuestro café</Button>
            <Button href="#menu" variant="outline">
              Ver el menú
            </Button>
          </div>
        </div>

        <div className={styles.media}>
          <Photo alt="taza de café de especialidad sobre mesa de madera" ratio="4 / 5" />
          <span className={styles.badge} aria-hidden="true">
            Tostado
            <br />
            artesanal
          </span>
        </div>
      </div>
    </section>
  );
}
