import React from "react";

const SkillsSection = () => {
  return (
    <div className="skillsResumeSection">
      <div style={{ width: "100%", display: "flex" }}>
        <div className="subtitleText" style={{ float: "left" }}>
          Skills
        </div>
      </div>
      <div className="skillWrapper">
        <div className="skillCategory">
          <div className="individualSkill">UI & UX</div>
          <ul>
            <li>html5</li>
            <li>css3</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>SwiftUI and UIKit</li>
            <li>Bootstrap, Materialize, and other UI frameworks</li>
            <li>GSAP</li>
            <li>Three.js & react-three-fiber</li>
          </ul>
        </div>
        <div className="skillCategory">
          <div className="individualSkill">Server Side</div>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL & Apollo</li>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>JSON web tokens and OAuth</li>
            <li>Socket.io</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
        <div className="skillCategory">
          <div className="individualSkill">Tools</div>
          <ul>
            <li>NPM, Yarn, Cocoapods, Homebrew and other package managers</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Git & Version Control</li>
            <li>Figma, AdobeXD</li>
            <li>Redux</li>
            <li>Shell Scripting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
