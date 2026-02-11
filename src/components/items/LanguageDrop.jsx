import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function DropLanguage({ isMobile = false }) {
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation("common");

  const currentLang = (i18n.resolvedLanguage || i18n.language || "vi").split("-")[0];

  useEffect(() => {
    const onDocClick = (e) => {
      if (!e.target.closest("[data-lang-menu]")) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const languages = [
    { code: "en", label: t("language.en"), short: "EN" },
    { code: "vi", label: t("language.vi"), short: "VI" },
  ];

  return (
    <div className={`flex items-center relative ${isMobile ? '' : 'ml-auto'}`} data-lang-menu>
      {/* Button kích hoạt */}
      <button
        onClick={() => setLangOpen((v) => !v)}
        type="button"
        className={`flex items-center gap-1 ${isMobile ? 'flex-col' : ''} px-3 py-1 rounded-lg transition-all duration-300
          ${langOpen ? "bg-white/20" : "hover:bg-white/10"} 
          text-gray-900 font-semibold text-sm`}
      >
        <LanguageIcon sx={{ fontSize: isMobile ? 24 : 18 }} className="opacity-70" />
        {isMobile ? (
          <span className="text-[10px] font-medium uppercase">{currentLang}</span>
        ) : (
          <>
            <span className="uppercase">{currentLang}</span>
            <ArrowDropDownIcon
              className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>

      {/* Menu thả xuống */}
      {langOpen && (
        <aside
          className={`
            absolute ${isMobile ? 'bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2' : 'top-[calc(100%+12px)] right-0'} z-[60]
            min-w-[160px] p-1.5
            rounded-xl border border-white/30
            bg-white/80 backdrop-blur-xl
            shadow-[0_10px_30px_rgba(0,0,0,0.1)]
            animate-in fade-in zoom-in-95 duration-200
          `}
        >
          <div className="flex flex-col gap-1">
            {languages.map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setLangOpen(false);
                  }}
                  className={`
                    group w-full px-3 py-2.5 rounded-xl
                    flex items-center justify-between gap-3
                    text-sm font-medium
                    ring-1 ring-black/5
                    transition-all duration-200
                    ${isActive
                      ? "bg-black text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] ring-black/20"
                      : "text-gray-700 hover:bg-black/5 hover:text-black hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"}
                  `}
                >
                  <span className="text-sm font-medium">{lang.label}</span>
                  <span
                    className={`
                      text-[10px] px-2 py-0.5 rounded-md font-bold tracking-wide
                      ${isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-black/10 group-hover:text-black"}
                    `}
                  >
                    {lang.short}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      )}
    </div>
  );
}
