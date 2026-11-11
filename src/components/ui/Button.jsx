import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Botón reutilizable.
 * - `variant`: 'primary' (terracota) | 'dark' (café oscuro) | 'outline' (píldora con borde)
 * - `size`: 'md' | 'small'
 * - Con `to` se renderiza como enlace interno (react-router).
 * - Con `href` se renderiza como enlace normal (anclas o externos).
 * - Sin ninguno, es un <button>.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = [styles.button, styles[variant], size === 'small' && styles.small, className]
    .filter(Boolean)
    .join(' ');

  if (to) return <Link to={to} className={classes} {...props} />;
  if (href) return <a href={href} className={classes} {...props} />;
  return <button type="button" className={classes} {...props} />;
}
