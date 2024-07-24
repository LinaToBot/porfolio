// Libraries.
import Image from "next/image";
import Link from "next/link";
// Public.
import computerImage from "../../../../../public/images/puzzle-computer.png";
// Styles.
import styles from "./ProjectsGrid.module.css";

export const GridLayout = () => {
  const href1 = "/coming-soon-page";
  const href2 = "/projects/responsive-template";
  const href3 = "/projects/to-do";
  const pStyles = "mb-[2rem]";

  return (
    <section className={styles.sectionGrid}>
      <div className={styles.gridContentFormat}>
        <Link
          href={href2}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>Responsive Template</p>
        </Link>
      </div>
      <div className={styles.gridContentFormat}>
        <Link
          href={href3}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>To do</p>
        </Link>
      </div>
      <div className={styles.gridContentFormat}>
        <Link
          href={href1}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>Web project</p>
        </Link>
      </div>
      <div className={styles.gridContentFormat}>
        <Link
          href={href1}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>Web project</p>
        </Link>
      </div>
      <div className={styles.gridContentFormat}>
        <Link
          href={href1}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>Web project</p>
        </Link>
      </div>
      <div className={styles.gridContentFormat}>
        <Link
          href={href1}
          className={`${styles.linkFormat} ${styles.imageHoverEffect}`}
        >
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className={pStyles}>Web project</p>
        </Link>
      </div>
    </section>
  );
};
