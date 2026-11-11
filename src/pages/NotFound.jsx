import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Error 404"
          title="Esta página se fue a tomar un café"
          align="center"
          as="h1"
        >
          <p>La dirección que buscas no existe o cambió de lugar.</p>
          <Button to="/">Volver al inicio</Button>
        </SectionHeading>
      </div>
    </section>
  );
}
