const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

/** 12000 → "$ 12.000". Los precios se guardan como números y se formatean al mostrarlos. */
export function formatPrice(value) {
  return copFormatter.format(value);
}
