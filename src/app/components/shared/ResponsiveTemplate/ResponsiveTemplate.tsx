// Utils.
import { space } from "@/app/utils";
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

interface GridTemplateProps {
  childrenA: React.ReactNode;
  childrenB: React.ReactNode;
}

export const ResponsiveGridTemplate: React.FC<GridTemplateProps> = ({
  childrenA,
  childrenB,
}) => {
  return (
    <div className={`${styles.responsivePage2} ${space.className}`}>
      <div className={styles.responsiveTitle}>{childrenA}</div>
      <div className={styles.responsiveGrid}>{childrenB}</div>
    </div>
  );
};
