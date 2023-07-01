import Main from "./components/home/Main";
import SkillSection from "./components/home/SkillSection";
import ProjectSection from "./components/home/ProjectSection";
import ContactMe from "./components/home/ContactMe";
import Footer from "./components/global/Footer";

export default function Home() {
  return (
    <>
      <Main />
      <SkillSection />
      <ProjectSection />
      <ContactMe />
      <Footer />
    </>
  );
}
