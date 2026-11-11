/**
 * Datos del negocio en un solo lugar.
 * Cambia aquí nombre, textos, horarios y contacto; los componentes los leen de este archivo.
 * Los colores y tipografías están en `src/styles/tokens.css`.
 */
export const brand = {
  name: 'Casa Nube',
  category: 'Cafetería de especialidad',
  slogan: 'El placer de ir más despacio',
  concept: 'Un espacio para hacer una pausa.',
  intro:
    'Café de especialidad, repostería hecha en casa y un rincón tranquilo para detener el reloj un momento.',
  contact: {
    email: 'hola@casanube.co',
    phone: '+57 300 123 4567',
    address: 'Calle de las Nubes 12-34, Barrio Jardín',
    city: 'Medellín, Colombia',
  },
  hours: [
    { days: 'Lunes a viernes', time: '7:00 a. m. – 7:00 p. m.' },
    { days: 'Sábados', time: '8:00 a. m. – 8:00 p. m.' },
    { days: 'Domingos y festivos', time: '9:00 a. m. – 5:00 p. m.' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'TikTok', href: 'https://tiktok.com/' },
  ],
};

/** Enlaces del menú: apuntan a las secciones de la landing. */
export const navLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#nuestro-cafe', label: 'Nuestro café' },
  { href: '/#menu', label: 'Menú' },
  { href: '/#ubicacion', label: 'Ubicación' },
];
