// Libraries.
import Link from "next/link";
// Fonts.
import { Space_Grotesk } from "next/font/google";
// Components.
import { AnimatedGrid } from "../components/AnimatedGrid/AnimatedGrid";

const space = Space_Grotesk({ subsets: ["latin"] });

export const AnimationsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/animation-page">
        <h2 className={`${space.className} mt-[2rem] text-[2.5rem] font-[600]`}>
          Some animations
        </h2>
      </Link>
      <section className="grid h-[100%] section-grid p-[2rem] justify-items-center">
        <AnimatedGrid />
      </section>
    </section>
  );
};
