// Libraries.
import Link from "next/link";
// Fonts.
import { Space_Grotesk } from "next/font/google";
// Components.
import { GridLayout } from "../components/Grid/Grid";

const space = Space_Grotesk({ subsets: ["latin"] });

export const ProjectsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/coming-soon-page" className="mb-[2.5rem] ">
        <h2 className={`${space.className} secondary-title text-center`}>
          Coming soon...
        </h2>
      </Link>
      <GridLayout />
    </section>
  );
};
