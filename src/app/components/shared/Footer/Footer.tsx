// Styles.
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection}>
      <p className="text-center">
        &copy; 2024 Lina2Bot. Todos los derechos reservados. Icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          icons8.com
        </a>
      </p>
    </footer>
  );
};
