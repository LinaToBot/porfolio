// Libraries.
import Link from "next/link";
// Components.
import { GridLayout } from "../components/Grid/Grid";

export const ProjectsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/coming-soon-page" className="mb-[2.5rem] ">
        <h2 className="space-grotesk text-[2.5rem] font-[600] text-center">
          Coming soon...
        </h2>
      </Link>
      <GridLayout />
    </section>
  );
};
