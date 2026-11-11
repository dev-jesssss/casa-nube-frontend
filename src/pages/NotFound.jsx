import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>404</h1>
        <p>La página que buscas no existe.</p>
        <Button to="/">Volver al inicio</Button>
      </div>
    </section>
  );
}
