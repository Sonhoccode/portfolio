import DropLanguage from "./items/LanguageDrop.jsx";

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

  // Style chung đồng bộ cho cả 2 khối
  const glassStyle =
    "backdrop-blur-xl border rounded-2xl flex items-center transition-all shadow-[0_12px_30px_rgba(0,0,0,0.12)]";
  const glassColors =
    "bg-white/0 border-white/40 text-[var(--text-primary)]";

  return (
    /* Dùng flex justify-center để cả cụm luôn nằm giữa màn hình */
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center gap-3 px-4 ">
      
      {/* Khối 1: Menu điều hướng */}
      <nav
        data-aos="fade-down"
        className={`${glassStyle} ${glassColors} py-3 px-8 gap-8 w-fit`}
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

      {/* Khối 2: Ngôn ngữ + Theme */}
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        className={`${glassStyle} ${glassColors} px-1 py-2 w-fit gap-2`}
      >
        <DropLanguage />
      </div>

    </div>
  );
}
