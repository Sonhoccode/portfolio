import DropLanguage from "./items/LanguageDrop.jsx";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";

export default function Header({ active, onProfileClick, onSkillClick, onProjectClick }) {
  const underlineEffect = `
    relative 
    after:content-[''] 
    after:absolute 
    after:bottom-[-4px] 
    after:left-0 
    after:w-0 
    after:h-[2px] 
    after:bg-black 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  `;

  const glassStyle =
    "backdrop-blur-xl border rounded-2xl flex items-center transition-all shadow-[0_12px_30px_rgba(0,0,0,0.12)]";
  const glassColors =
    "bg-white/0 border-white/40 text-[var(--text-primary)]";

  return (
    <>
      {/* Desktop Header - Top */}
      <div className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center items-center gap-3 px-4">
        <nav
          data-aos="fade-down"
          className={`${glassStyle} ${glassColors} py-3 px-8 gap-8 w-fit text-base`}
        >
          <button
            onClick={onProfileClick}
            className={`${underlineEffect} transition-all duration-300 
              ${active === "profile" 
                ? "text-black font-bold scale-105 after:w-full" 
                : "opacity-60 hover:opacity-100"}`}
          >
            Profile
          </button>

          <button
            onClick={onSkillClick}
            className={`${underlineEffect} transition-all duration-300 
              ${active === "skill" 
                ? "text-black font-bold scale-105 after:w-full" 
                : "opacity-60 hover:opacity-100"}`}
          >
            Skills
          </button>
          <button
            onClick={onProjectClick}
            className={`${underlineEffect} transition-all duration-300 
              ${active === "project" 
                ? "text-black font-bold scale-105 after:w-full" 
                : "opacity-60 hover:opacity-100"}`}
          >
            Projects
          </button>
        </nav>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className={`${glassStyle} ${glassColors} px-1 py-2 w-fit gap-2`}
        >
          <DropLanguage />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
        <nav className={`${glassStyle} ${glassColors} py-3 px-4 w-full justify-around`}>
          <button
            onClick={onProfileClick}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              active === "profile" 
                ? "text-black scale-110" 
                : "opacity-60"
            }`}
          >
            <PersonIcon sx={{ fontSize: 24 }} />
            <span className="text-[10px] font-medium">Profile</span>
          </button>

          <button
            onClick={onSkillClick}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              active === "skill" 
                ? "text-black scale-110" 
                : "opacity-60"
            }`}
          >
            <CodeIcon sx={{ fontSize: 24 }} />
            <span className="text-[10px] font-medium">Skills</span>
          </button>

          <button
            onClick={onProjectClick}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              active === "project" 
                ? "text-black scale-110" 
                : "opacity-60"
            }`}
          >
            <WorkIcon sx={{ fontSize: 24 }} />
            <span className="text-[10px] font-medium">Projects</span>
          </button>

          <div className="flex flex-col items-center gap-1">
            <DropLanguage isMobile={true} />
          </div>
        </nav>
      </div>
    </>
  );
}
