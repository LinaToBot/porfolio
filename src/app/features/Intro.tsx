// Libraries.
import Image from "next/image";
// Fonts.
import { Space_Grotesk } from "next/font/google";
// Public.
import gif from "../../../public/puzzle-14.gif";

const space = Space_Grotesk({ subsets: ["latin"] });

export const Intro: React.FC = () => {
  return (
    <section className="section-basic-styles1 mt-[1.5rem]">
      <div className="w-full text-justify md:text-left mb-0 w-2/2">
        <h1 className={`${space.className} text-[4rem] font-[700]`}>
          Hi there!!
        </h1>
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
      </div>
    </section>
  );
};
