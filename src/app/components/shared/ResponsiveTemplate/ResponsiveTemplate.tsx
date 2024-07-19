// Styles.
import styles from "./ResponsiveTemplate.module.css";

interface TemplateProps {
  childrenA: React.ReactNode;
  childrenB: React.ReactNode;
}

export const ResponsiveTemplate: React.FC<TemplateProps> = ({
  childrenA,
  childrenB,
}) => {
  return (
    <div className={styles.responsivePage}>
      <div className={styles.responsiveDiv}>{childrenA}</div>
      <div className={styles.responsiveImage}>{childrenB}</div>
    </div>
  );
};
