// Components.
import { Intro } from "./components/IntroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactMe } from "./components/ContactMeSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <ProjectsSection />
      <ContactMe />
    </main>
  );
}
