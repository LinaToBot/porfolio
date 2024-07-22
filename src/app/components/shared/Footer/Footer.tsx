"use client";

// Libraries.
import { usePathname } from "next/navigation";
// Public.
import linkedinIcon from "../../../../../public/Icons/icon-linkedin.svg";
import mediumIcon from "../../../../../public/Icons/icon-medium.svg";
import githubIcon from "../../../../../public/Icons/icon-github.svg";
// Styles.
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { gitHubURL, linkedinURL, mediumURL } from "@/app/utils";

const FooterHome: React.FC = () => {
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

const FooterSecondary: React.FC = () => {
  return (
    <footer className={styles.footerSection2}>
      <p className={styles.footerText}>
        &copy; 2024 Lina2Bot. Todos los derechos reservados. Icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          icons8.com
        </a>{" "}
      </p>
      <div className={styles.socialMedia}>
        <Link href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <Image
            src={linkedinIcon}
            alt="Linkedin icon"
            className=""
            width={40}
            height={40}
            priority
          />
        </Link>
        <Link href={mediumURL} target="_blank" rel="noopener noreferrer">
          <Image
            src={mediumIcon}
            alt="Medium icon"
            className=""
            width={40}
            height={40}
            priority
          />
        </Link>
        <Link href={gitHubURL} target="_blank" rel="noopener noreferrer">
          <Image
            src={githubIcon}
            alt="Github icon"
            className=""
            width={40}
            height={40}
            priority
          />
        </Link>
      </div>
    </footer>
  );
};

export const FooterSwitcher: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return isHome ? <FooterHome /> : <FooterSecondary />;
};
