import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { brand } from '@/config/brand';
import styles from './Home.module.css';

const highlights = [
  { title: 'Beneficio uno', text: 'Describe aquí una ventaja clave del negocio.' },
  { title: 'Beneficio dos', text: 'Otra razón por la que los clientes te eligen.' },
  { title: 'Beneficio tres', text: 'Un diferencial frente a la competencia.' },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{brand.name}</h1>
          <p className={styles.tagline}>{brand.tagline}</p>
          <p className={styles.description}>{brand.description}</p>
          <div className={styles.actions}>
            <Button to="/servicios">Ver servicios</Button>
            <Button to="/contacto" variant="outline">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className={styles.grid}>
            {highlights.map(({ title, text }) => (
              <Card key={title} title={title}>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
