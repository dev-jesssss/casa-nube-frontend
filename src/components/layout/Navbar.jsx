import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '@/config/brand';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <Link to="/" className={styles.logoLink} onClick={close} aria-label="Casa Nube, inicio">
          <Logo />
        </Link>

        <button
          type="button"
          className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div id="main-menu" className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.links}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.link} onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="/#ubicacion" size="small" onClick={close}>
            Visítanos
          </Button>
        </div>
      </nav>
    </header>
  );
}
