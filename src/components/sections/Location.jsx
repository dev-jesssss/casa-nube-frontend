import Button from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import SectionHeading from '@/components/ui/SectionHeading';
import { brand } from '@/config/brand';
import styles from './Location.module.css';

export default function Location() {
  const { address, city } = brand.contact;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address}, ${city}`,
  )}`;

  return (
    <section id="ubicacion" className="section">
      <div className={`container ${styles.grid}`}>
        <Photo
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
          alt="Interior cálido de la cafetería"
          ratio="1 / 1"
        />

        <div>
          <SectionHeading eyebrow="Te esperamos" title="Tu nuevo lugar favorito está aquí.">
            <p>
              Ven por un café, quédate por el momento. Siempre habrá un espacio para ti en{' '}
              {brand.name}.
            </p>
          </SectionHeading>

          <dl className={styles.details}>
            <div>
              <dt className="eyebrow">Encuéntranos</dt>
              <dd>
                {address}
                <br />
                {city}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Horarios</dt>
              <dd>
                <ul className={styles.hours}>
                  {brand.hours.map(({ days, time }) => (
                    <li key={days}>
                      {days} · {time}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <Button href={mapsUrl} variant="dark" target="_blank" rel="noreferrer">
            Cómo llegar <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
