import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import ScrollToTop from '../components/items/ScrollToTop';

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("profile");
  const [scrollActions, setScrollActions] = useState({});

  return (
    <div className="min-h-screen relative flex flex-col">
      <Header 
        active={activeSection} 
        onProfileClick={scrollActions.profile} 
        onSkillClick={scrollActions.skill}
        onProjectClick={scrollActions.project}
      />
      
      <main className="w-full">
        <ScrollToTop />
        {/* Truyền context xuống cho MainPage sử dụng */}
        <Outlet context={{ setActiveSection, setScrollActions }} />
      </main>
    </div>
  );
}