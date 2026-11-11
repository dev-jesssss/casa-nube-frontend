import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { brand } from '@/config/brand';
import styles from './Location.module.css';

export default function Location() {
  const { address, city, phone } = brand.contact;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address}, ${city}`,
  )}`;

  return (
    <section id="ubicacion" className={`section ${styles.location}`}>
      <div className={`container ${styles.grid}`}>
        <SectionHeading eyebrow="Ubicación" title="Ven a tomarte una pausa">
          <p>
            Te esperamos con una taza recién hecha, una mesa junto a la ventana y todo el tiempo que
            necesites.
          </p>
        </SectionHeading>

        <div className={styles.card}>
          <div className={styles.block}>
            <h3 className={styles.label}>Dirección</h3>
            <p>
              {address}
              <br />
              {city}
            </p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.label}>Horarios</h3>
            <dl className={styles.hours}>
              {brand.hours.map(({ days, time }) => (
                <div key={days} className={styles.row}>
                  <dt>{days}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.actions}>
            <Button href={mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </Button>
            <Button href={`tel:${phone.replace(/\s/g, '')}`} variant="outline">
              Llamar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
