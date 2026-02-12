// src/components/MainComponent/Project.jsx
import { projects } from "../items/ProjectData";
import ProjectItems from "../items/ProjectItems";
import ScrollContainer from "react-indiana-drag-scroll";
// import { useTranslation } from "react-i18next";

export default function Project() {
  // const { t } = useTranslation("Profile");

  return (
    <div className="w-full mx-auto px-4 md:px-18 lg:px-36 py-10 md:py-20 " >
      {/* <div className="py-4 px-12 ml-4 bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-fit mb-10 transition-transform hover:-translate-y-1">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-center">
          {t("projects")}
        </h2>
      </div> */}

      <div data-aos="fade-left" data-aos-duration="1000">
        <ScrollContainer
          className="flex gap-8 pb-10 px-4 cursor-grab active:cursor-grabbing no-scrollbar lg:rounded-2xl"
          hideScrollbars={true}
        >
          {projects.map((item) => (
            <div key={item.id} className="shrink-0">
              <ProjectItems project={item} />
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}
