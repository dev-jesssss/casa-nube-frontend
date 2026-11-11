import styles from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <article className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </article>
  );
}
