import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand, navLinks } from '@/config/brand';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <Link to="/" className={styles.logo} onClick={close}>
          <img src="/favicon.svg" alt="" width="32" height="32" />
          <span>{brand.name}</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <ul id="main-menu" className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={close}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
