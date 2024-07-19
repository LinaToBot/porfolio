// Libraries.
import Image from "next/image";
import Link from "next/link";
// Public.
import computerImage from "../../../../../public/images/puzzle-computer.png";
// Styles.
import styles from "./GridLayout.module.css";

export const GridLayout = () => {
  const href1 = "/coming-soon-page";
  const href2 = "/projects/responsive-template";

  return (
    <section className="grid h-[100%] section-grid justify-items-center">
      <div className=" grid-content-format">
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
          <p className="roboto-mono">Responsive Template</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href1} className={styles.linkFormat}>
          <Image
            src={computerImage}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Managing State</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href1} className={styles.linkFormat}>
          <Image
            src={computerImage}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href1} className={styles.linkFormat}>
          <Image
            src={computerImage}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href1} className={styles.linkFormat}>
          <Image
            src={computerImage}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href1} className={styles.linkFormat}>
          <Image
            src={computerImage}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
    </section>
  );
};
