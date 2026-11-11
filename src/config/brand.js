/**
 * Datos del negocio en un solo lugar.
 * Cambia aquí el nombre, textos y contacto; los componentes los leen de este archivo.
 * Los colores y tipografías están en `src/styles/tokens.css`.
 */
export const brand = {
  name: 'Casa Nube',
  tagline: 'Tu espacio, a otro nivel.',
  description:
    'Escribe aquí una descripción corta del negocio: qué ofrece, para quién y por qué es diferente.',
  contact: {
    email: 'hola@casanube.com',
    phone: '+57 300 000 0000',
    address: 'Ciudad, País',
  },
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
};

export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];
