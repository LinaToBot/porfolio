// Libraries.
import Link from "next/link";
// Components.
import { ResponsiveGridTemplate } from "../shared/ResponsiveTemplate/ResponsiveTemplate";
import { GridLayout } from "./ProjectsGrid/ProjectsGrid";
// Styles.
import styles from "../shared/ResponsiveTemplate/ResponsiveTemplate.module.css";

export const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <ResponsiveGridTemplate
        childrenA={
          <Link href="/coming-soon-page">
            <h2>Mini Projects</h2>
          </Link>
        }
        childrenB={<GridLayout />}
      />
    </section>
  );
};
