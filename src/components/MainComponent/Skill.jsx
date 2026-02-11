import FrontendSkill from "../skills/FrontendSkill";
import BackendSkill from "../skills/BackendSkill";
import DatabaseSkill from "../skills/DatabaseSkill";
import OtherSkill from "../skills/OrtherSkill";
import ScrollDown from "../items/ScrollDown.jsx";

export default function Skill() {
  return (
    <div className="w-full mx-auto px-4 md:px-24 lg:px-48 py-10 md:py-20">
      {/* <h1
        className="text-4xl font-extrabold mb-12 w-fit text-center p-8 bg-white/10 backdrop-blur-lg border rounded-lg border-white/30 shadow-lg"
        data-aos="zoom-in"
      >
        Technical Skills
      </h1> */}
      <FrontendSkill />
      <div className="w-full flex flex-col md:flex-row gap-10">
        <BackendSkill />
        <DatabaseSkill />
      </div>
      <OtherSkill />
      <ScrollDown />
    </div>
  );
}
