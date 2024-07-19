// Libraries.
import Image from "next/image";
// Components.
import { ResponsiveTemplate } from "@/app/components/shared/ResponsiveTemplate";
import { TextContent } from "@/app/components/TextContent/TextContent";
// Public.
import gif from "../../../../public/puzzle-14.gif";
// Module style.
import styles from "./Intro.module.css";

export const Intro: React.FC = () => {
  return (
    <section className={styles.container}>
      <ResponsiveTemplate
        childrenA={
          <TextContent
            headingWhite="Hi there!!"
            paragraphs={
              <>
                <p className=" mb-[1rem]">
                  I`m a Front-end Developer leveraging my software skills to
                  improve product quality and user experience.
                </p>
                <p className="mb-[1rem]">
                  On this site, you can check out my experience in development
                  and video game design.
                </p>
              </>
            }
          />
        }
        childrenB={
          <Image
            src={gif}
            alt="saying hello"
            width={400}
            height={400}
            priority={true}
          />
        }
      />
    </section>
  );
};
