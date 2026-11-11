import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Botón reutilizable.
 * - Con `to` se renderiza como enlace interno (react-router).
 * - Con `href` se renderiza como enlace externo.
 * - Sin ninguno, es un <button>.
 */
export default function Button({ variant = 'primary', to, href, className = '', ...props }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (to) return <Link to={to} className={classes} {...props} />;
  if (href) return <a href={href} className={classes} {...props} />;
  return <button type="button" className={classes} {...props} />;
}
