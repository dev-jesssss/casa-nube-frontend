import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Essence.module.css';

export default function Essence() {
  return (
    <section id="nuestro-cafe" className={`section ${styles.essence}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Nuestra esencia"
          align="center"
          title={
            <>
              No se trata solo de café. Se trata de <em>cómo te hace sentir.</em>
            </>
          }
        >
          <p>
            Casa Nube nace para recordarte que siempre hay tiempo para respirar, desconectarte y
            disfrutar de algo sencillo. Un café preparado con cariño, un buen libro o una
            conversación sin afán.
          </p>
        </SectionHeading>
      </div>
    </section>
  );
}
