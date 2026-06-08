import HeroSection from "./HeroSection";
import ThisIsMeSection from "./thisIsMeSection";
import SkillsSection from "./skills_section";
import ToolKit from "./ToolKit";
import ProcessSection from "./ProcessSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <ThisIsMeSection />
      <SkillsSection />
      <ToolKit />
      <ProcessSection />
      <Footer />
    </>
  );
}
