import React from "react";

const AboutMeSection = () => {
  return (
    <div className="aboutMeSection section">
      <div className="subtitleText" style={{ float: "left" }}>
        About Me
      </div>
      <div className="aboutMeDescription">
        I am a self-taught developer that works most often with React and
        Node.js but have a new found love for Swift. I have always had a strong
        drive to understand how things work underneath. I was able to teach
        myself how to rebuild an internal combustion engine in middle school,
        passed the ASE certified mechanic exam as soon as I turned 18, and
        studied physics "with an emphasis in Astrophysics" in college. It wasn't
        until I was a junior at University of Wisconsin-Milwaukee that I
        discovered web and software development for myself and realized this
        career path was not only something I am passionate about but also
        compliments my strengths.
      </div>
      <div className="signInInfo">
        All of my portfolio projects can use a default admin login of{" "}
        <span>hireme@gmail.com </span>and a password of <span>Password123</span>
      </div>
    </div>
  );
};

export default AboutMeSection;
