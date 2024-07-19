// Libraries.
import Link from "next/link";
// Components.
import { GridLayout } from "./GridLayout/GridLayout";
// Utils.
import { space } from "@/app/utils";

export const ProjectsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/coming-soon-page" className="mb-[2.5rem] ">
        <h2 className={`${space.className} secondary-title text-center`}>
          Mini Projects
        </h2>
      </Link>
      <GridLayout />
    </section>
  );
};
