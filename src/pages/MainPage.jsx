import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Profile from "../components/MainComponent/Profile";
import Skill from "../components/MainComponent/Skill";
import Project from "../components/MainComponent/Project";

export default function MainPage() {
  const { setActiveSection, setScrollActions } = useOutletContext();
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  // Gửi hàm cuộn lên Layout ngay khi component mount
  useEffect(() => {
    setScrollActions({
      profile: () => profileRef.current?.scrollIntoView({ behavior: "smooth" }),
      skill: () => skillRef.current?.scrollIntoView({ behavior: "smooth" }),
      project: () => projectRef.current?.scrollIntoView({ behavior: "smooth" }),
    });
  }, [setScrollActions]);

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Cập nhật trạng thái lên Layout
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    if (profileRef.current) observer.observe(profileRef.current);
    if (skillRef.current) observer.observe(skillRef.current);
    if (projectRef.current) observer.observe(projectRef.current);

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div className="bg-[var(--bg-primary)] relative "style={{transition: 'background-color 0.3s ease'}}>
      {/* Profile Section */}
      <section ref={profileRef} id="profile" className="relative min-h-screen">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%), 
                              linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />
        <div className="bg-custom relative z-10 w-full">
          <Profile />
        </div>
      </section>

      {/* Skill Section */}
      <section
        ref={skillRef}
        id="skill"
        className="relative w-full h-auto min-h-screen flex flex-col"
        style={{backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s ease'}}
      >
        {/* Thẻ Background: Quan trọng nhất là h-full bám theo section cha */}
        <div
          className="absolute inset-0 z-0 pointer-events-none w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px),
                        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px)`,
            backgroundSize: "40px 40px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10 w-full flex-grow">
          <Skill />
        </div>
      </section>
      {/* Project Section */}
      <section
        ref={projectRef}
        id="project"
        className="relative w-full h-auto min-h-screen flex flex-col"
        style={{backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s ease'}}
      >
        {/* Thẻ Background: Quan trọng nhất là h-full bám theo section cha */}
          <div
            className="absolute inset-0 z-0 pointer-events-none w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
                radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px, 20px 20px, 20px 20px",
              backgroundPosition: "0 0, 0 0, 0 0",
            }}
          />
        <div className="relative z-10 w-full flex-grow">
          <Project />
        </div>
      </section>
    </div>
  );
}
