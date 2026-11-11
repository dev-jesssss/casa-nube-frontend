import Photo from '@/components/ui/Photo';
import SectionHeading from '@/components/ui/SectionHeading';
import { brand } from '@/config/brand';
import styles from './Essence.module.css';

const values = [
  { title: 'Origen', text: 'Granos de pequeños productores, comprados de forma directa.' },
  { title: 'Oficio', text: 'Cada taza preparada con calma, sin atajos.' },
  { title: 'Pausa', text: 'Un lugar pensado para quedarse un rato más.' },
];

export default function Essence() {
  return (
    <section id="nuestro-cafe" className={`section ${styles.essence}`}>
      <div className={`container ${styles.grid}`}>
        <Photo alt="interior acogedor de la cafetería" ratio="5 / 6" tone="sage" />

        <div>
          <SectionHeading eyebrow="Nuestra esencia" title="Hecho a mano, servido sin prisa">
            <p>
              Casa Nube nació de una idea sencilla: que tomarse un café vuelva a ser un momento y no
              un trámite. Trabajamos con cafés de origen, los preparamos con cuidado y los servimos
              en un espacio cálido, con luz natural y tiempo de sobra.
            </p>
          </SectionHeading>

          <blockquote className={styles.quote}>“{brand.concept}”</blockquote>

          <ul className={styles.values}>
            {values.map(({ title, text }) => (
              <li key={title}>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueText}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
