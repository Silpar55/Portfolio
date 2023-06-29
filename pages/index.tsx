import {
  Main,
  SkillSection,
  ProjectSection,
  ContactMe,
} from "./components/home/index.ts";

export default function Home() {
  return (
    <>
      <Main />
      <SkillSection />
      <ProjectSection />
      <ContactMe />
    </>
  );
}
