// Utils.
import { space } from "../../utils/utils";
// Module style.
import styles from "./TextContent.module.css";

interface TextContentProps {
  headingWhite?: string;
  heading1?: string;
  heading2?: string;
  paragraph?: string | React.ReactNode;
  paragraphs?: React.ReactNode;
}

export const TextContent: React.FC<TextContentProps> = ({
  headingWhite,
  heading1,
  heading2,
  paragraph,
  paragraphs,
}) => {
  return (
    <div className={styles.content}>
      {headingWhite ? (
        <h1 className={`${space.className} ${styles.headingWhite} mb-[2rem]`}>
          {headingWhite}
        </h1>
      ) : (
        <h1
          className={`${space.className} ${
            heading1 ? styles.heading1 : styles.heading2
          } mb-[2rem]`}
        >
          {heading1 || heading2}
        </h1>
      )}
      {paragraph ? (
        <p className={styles.text}>{paragraph}</p>
      ) : (
        <div className={styles.alternativeText}>{paragraphs}</div>
      )}
    </div>
  );
};
