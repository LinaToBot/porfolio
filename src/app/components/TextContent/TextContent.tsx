// Module style.
import styles from "./TextContent.module.css";
// Utils.
import { space } from "../../utils/utils";

interface TextContentProps {
  heading1?: string;
  heading2?: string;
  paragraph: string | React.ReactNode;
}

export const TextContent: React.FC<TextContentProps> = ({
  heading1,
  heading2,
  paragraph,
}) => {
  return (
    <div className={styles.content}>
      <h1
        className={`${space.className} ${
          heading1 ? styles.heading1 : styles.heading2
        } mb-[2rem]`}
      >
        {heading1 || heading2}
      </h1>
      <p className={`${styles.text}`}>{paragraph}</p>
    </div>
  );
};
