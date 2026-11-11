import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { brand } from '@/config/brand';
import styles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    // TODO: enviar `data` al backend (por ejemplo a `${import.meta.env.VITE_API_URL}/contact`)
    console.info('Formulario de contacto:', data);
    setSent(true);
  };

  return (
    <>
      <PageHeader title="Contacto" subtitle="Escríbenos y te responderemos pronto." />
      <section className="section">
        <div className={`container ${styles.wrapper}`}>
          <div>
            <h2>Hablemos</h2>
            <p>
              Correo: <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
            </p>
            <p>Teléfono: {brand.contact.phone}</p>
            <p>Dirección: {brand.contact.address}</p>
          </div>

          {sent ? (
            <p role="status" className={styles.success}>
              ¡Gracias! Recibimos tu mensaje.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                Nombre
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Correo
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Mensaje
                <textarea name="message" rows="5" required />
              </label>
              <Button type="submit">Enviar</Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
