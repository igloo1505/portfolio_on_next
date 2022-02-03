import React from "react";
import "../../css/Resume.css";
import ContactSection from "./ContactSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const ResumeComponent = () => {
  return (
    <div className="resumeOuterWrapper">
      <div className="titleText">Resume</div>
      <ContactSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default ResumeComponent;
