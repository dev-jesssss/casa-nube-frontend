/**
 * Productos destacados de la landing.
 * - `price` en pesos colombianos, como número (se formatea al mostrarlo).
 * - `image` puede ser una URL o una ruta en `public/` (ej. '/images/latte.jpg').
 *   Si es null, se muestra un marcador de foto.
 */
export const featuredProducts = [
  {
    name: 'Latte de la casa',
    description: 'Espresso suave con leche cremosa.',
    price: 12000,
    tag: 'Favorito',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, leche y una capa de espuma.',
    price: 11000,
    tag: 'Clásico',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=700',
  },
  {
    name: 'Cold brew',
    description: 'Café de extracción lenta, servido frío.',
    price: 14000,
    tag: 'Refrescante',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700',
  },
  {
    name: 'Repostería artesanal',
    description: 'Croissants y tortas horneadas cada mañana.',
    price: 9000,
    tag: 'Hecho en casa',
    image: null,
  },
];
