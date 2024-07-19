// Libraries.
import Image from "next/image";
import Link from "next/link";
// Public.
import computerImage from "../../../../../public/images/puzzle-computer.png";

export const GridLayout = () => {
  const linkFormat =
    "flex flex-col items-center justify-center space-y-0 image-hover-effect";
  const href = "/coming-soon-page";
  const project1 = "/projects/responsive-template";

  return (
    <section className="grid h-[100%] section-grid justify-items-center">
      <div className=" grid-content-format">
        <Link href={project1} className={linkFormat}>
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
        <Link href={href} className={linkFormat}>
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
        <Link href={href} className={linkFormat}>
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
        <Link href={href} className={linkFormat}>
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
        <Link href={href} className={linkFormat}>
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
        <Link href={href} className={linkFormat}>
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
