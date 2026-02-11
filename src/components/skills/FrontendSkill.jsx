import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

const skillData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TailwindCSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
];

export default function FrontendSkill() {
  const { t } = useTranslation("Profile");

  const data = useMemo(
    () => skillData.find((cat) => cat.category === "Frontend"),
    [],
  );

  if (!data) return null;

  return (
    <div
      className="mb-10 px-6 pt-6 bg-white backdrop-blur-md border border-cyan-200/20 rounded-[2rem] shadow-xl"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800 border-l-4 border-blue-500 pl-4">
        {t("FrontendSkill")}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {data.skills.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md 
                         hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-white p-4 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <span className="mt-3 font-bold text-gray-700">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
