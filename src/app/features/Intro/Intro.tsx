// Libraries.
import Image from "next/image";
// Fonts.
import { Space_Grotesk } from "next/font/google";
// Components.
import { ResponsiveTemplate } from "@/app/components/shared/ResponsiveTemplate";
import { TextContent } from "@/app/components/TextContent/TextContent";
// Public.
import gif from "../../../../public/puzzle-14.gif";
// Module style.
import styles from "./Intro.module.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const Intro: React.FC = () => {
  return (
    // <section className="section-basic-styles1 mt-[1.5rem]">
    <section className={styles.container}>
      <ResponsiveTemplate
        childrenA={
          <TextContent
            heading1="Hi there!!"
            paragraph={
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
          // <div className="w-full text-justify md:text-left mb-0 w-2/2">
          //   <h1 className={`${space.className} principal-title`}>Hi there!!</h1>

          // </div>
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
      {/* <div className="w-full text-justify md:text-left mb-0 w-2/2">
        <h1 className={`${space.className} principal-title`}>Hi there!!</h1>
        <p className=" mb-[1rem] text-[1.5rem]">
          I`m a Front-end Developer leveraging my previous career knowledge and
          software skills to improve product quality and user experience.
        </p>
        <p className="mb-[1rem] text-[1.5rem]">
          On this site, you can check out my experience and achievements in
          development and video game design.
        </p>
      </div>
      <div className=" w-full p-4 md: w-1/2 flex justify-center p-4 ">
        <Image
          src={gif}
          alt="saying hello"
          width={400}
          height={400}
          priority={true}
        />
      </div> */}
    </section>
  );
};
