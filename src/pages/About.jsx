import PageHeader from '@/components/layout/PageHeader';
import { brand } from '@/config/brand';

export default function About() {
  return (
    <>
      <PageHeader title="Nosotros" subtitle={`Conoce la historia de ${brand.name}.`} />
      <section className="section">
        <div className="container">
          <h2>Nuestra historia</h2>
          <p>Cuenta aquí cómo nació el negocio, su misión y sus valores.</p>
        </div>
      </section>
    </>
  );
}
