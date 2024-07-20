// Utils.
import { space } from "@/app/utils";
// Module style.
import styles from "./TextContent.module.css";

interface TextContentProps {
  headingWhite?: string;
  blinkingHeading?: string;
  heading1?: string;
  heading2?: string;
  paragraph?: string | React.ReactNode;
  paragraphs?: React.ReactNode;
}

export const TextContent: React.FC<TextContentProps> = ({
  headingWhite,
  blinkingHeading,
  heading1,
  heading2,
  paragraph,
  paragraphs,
}) => {
  return (
    <div className={styles.content}>
      {headingWhite || blinkingHeading ? (
        <h1
          className={`${space.className} ${
            headingWhite ? styles.headingWhite : styles.blinkingHeading
          } mb-[2rem]`}
        >
          {headingWhite || blinkingHeading}
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
