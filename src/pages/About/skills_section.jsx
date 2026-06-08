import portrait from "../../assets/ma3rad_picture.png";
import SkillComponant from "../../components/skill_componant";
import { Frame, PenToolIcon, VideoIcon, Wand2 } from "lucide-react";

export default function SkillsSection() {
  return (
    <div className="reverse-portfiolio-hero flex flex-col md:flex-row items-center min-h-screen md:h-screen w-full" style={{ overflow: "visible" }}>
      <div className="w-full md:flex-1 flex justify-center">
        <img className="w-64 md:w-auto mb-8 md:mb-52" src={portrait} alt="picture in front of art work" />
      </div>
      <div className="w-full md:flex-1 px-6 md:px-0">
        <h2 className="text-4xl md:text-7xl bold mb-6">Designing with Intent</h2>
        <p className="mb-6">
          My journey in graphic design is driven by a desire to merge aesthetic
          beauty with functional clarity. I believe that every visual element
          should tell a story and serve a purpose.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <SkillComponant icon={PenToolIcon} name={"Branding"} description={"Creating unique identities that resonate."}></SkillComponant>
          <SkillComponant icon={VideoIcon} name={"Video Editing"} description={"Creative video Editing for brands"}></SkillComponant>
          <SkillComponant icon={Wand2} name={"Visual identity"} description={"Cohesive visual languages for brands."}></SkillComponant>
          <SkillComponant icon={Frame} name={"UI/UX"} description={"User-centered digital experiences."}></SkillComponant>

        </div>
      </div>
    </div>
  );
}
