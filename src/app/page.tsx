// Components.
import { Intro } from "./features/Intro";
import { ProjectsSection } from "./features/ProjectsSection";
import { ContactMe } from "./features/ContactMe";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col items-center justify-between mx-[3.5rem]">
        <Intro />
        <ProjectsSection />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
