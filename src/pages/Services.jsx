import Card from '@/components/ui/Card';
import PageHeader from '@/components/layout/PageHeader';
import styles from './Services.module.css';

const services = [
  { title: 'Servicio 1', text: 'Descripción breve del servicio.' },
  { title: 'Servicio 2', text: 'Descripción breve del servicio.' },
  { title: 'Servicio 3', text: 'Descripción breve del servicio.' },
  { title: 'Servicio 4', text: 'Descripción breve del servicio.' },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Servicios" subtitle="Lo que ofrecemos a nuestros clientes." />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          {services.map(({ title, text }) => (
            <Card key={title} title={title}>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
