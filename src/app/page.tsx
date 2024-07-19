// Components.
import { Intro } from "./features/Intro/Intro";
import { ProjectsSection } from "./features/ProjectsSection";
import { ContactMe } from "./features/ContactMe";
import { Footer } from "./components/Footer/Footer";

// min-h-screen flex-col items-center justify-between mx-[3.5rem]
export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Intro />
        <ProjectsSection />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
