import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectItems({ project }) {
  const hasDemo = !!project.demoLink;
  const hasSource = !!project.sourceLink;
  const { t } = useTranslation("Project");

  return (
    <div className="p-8 bg-slate-300 w-[450px] flex flex-col h-full border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
      <div className="relative flex items-center h-[179px] w-full border-2 border-black overflow-hidden shrink-0 bg-white">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="w-full flex flex-wrap mt-4 justify-between items-end">
          <h3 className="text-2xl font-bold w-2/3">{project.title}</h3>
          <p className="w-1/3 flex justify-end">{project.time}</p>
        </div>
        <div className="w-full flex flex-wrap mt-1 justify-between items-end">
          <p className="w-full italic font-semibold text-gray-700">
            {project.role}
          </p>
        </div>
        <div className="mt-2 text-justify text-sm leading-relaxed text-gray-800">
          {t(`${project.i18nKey}.desc`)
            .split("\n")
            .map((line, index) => (
              <p key={index} className="flex items-start gap-2">
                {/* Thêm dấu chấm câu hoặc icon bạn thích ở đây */}
                <span className="shrink-0">•</span>
                <span>{line.trim()}</span>
              </p>
            ))}
        </div>
      </div>
      <div className="mt-6 flex justify-between gap-4 shrink-0">
        {/* Nút Demo */}
        <a
          href={hasDemo ? project.demoLink : "#"}
          target={hasDemo ? "_blank" : "_self"}
          onClick={(e) => !hasDemo && e.preventDefault()}
          className={`btn-project flex-1 text-center transition-all ${
            hasDemo
              ? "opacity-100 cursor-pointer"
              : "opacity-40 cursor-not-allowed pointer-events-none grayscale"
          }`}
        >
          {hasDemo ? "View live" : "No Demo"}
        </a>

        {/* Nút Source Code */}
        <a
          href={hasSource ? project.sourceLink : "#"}
          target={hasSource ? "_blank" : "_self"}
          onClick={(e) => !hasSource && e.preventDefault()}
          className={`btn-project flex-1 text-center transition-all ${
            hasSource
              ? "opacity-100 cursor-pointer"
              : "opacity-40 cursor-not-allowed pointer-events-none grayscale"
          }`}
        >
          {hasSource ? "Source code" : "Private"}
        </a>
      </div>
    </div>
  );
}
