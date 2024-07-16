// Libraries.
import Image from "next/image";
// Public.
import faceIcon from "../../../public/puzzle-human-head.png";

export const ContactMe: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/paulina-i-5a7174ba/";
  const mediumURL = "https://medium.com/@lina2bot";
  const gitHubURL = "https://github.com/LinaToBot";

  return (
    <section className=" section-basic-styles1">
      <div className="w-full text-justify md:text-left mb-0 w-2/2">
        <h2 className="space-grotesk blinking titles text-[3.5rem] font-[600]">
          Contact me
        </h2>
        <p className="mb-[1rem] text-[1.5rem]">
          If you want to talk to me about development or front-end, I invite you
          to visit my{" "}
          <a
            className="highlight-text"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          .
        </p>
        <p className="mb-[1rem] text-[1.5rem]">
          Additionally, we can read each other on{" "}
          <a
            className="highlight-text"
            href={mediumURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium.
          </a>
        </p>
        <p className="mb-[1rem] text-[1.5rem]">
          Or you can head over to my{" "}
          <a
            className="highlight-text"
            href={gitHubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          to start a joint project.
        </p>
      </div>
      <div className=" w-full p-4 md: w-1/2 flex justify-center p-4 ">
        <Image
          src={faceIcon}
          alt="face icon"
          className="dark:invert cursor-pointer"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};
