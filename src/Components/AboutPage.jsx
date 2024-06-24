import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../CSS/AboutPage.css";

import Myphoto from "../Assets/Mohamed Zubair.jpg";
import Resume from "../Assets/Mohamed Zubair Resume.pdf";

function AboutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActiveNav(path);
    navigate(path);
  };

  return (
    <div className="content-container">
      <div className="top-contents">
        <div className="left">
          <p className="name">Mohamed Zubair</p>
        </div>
        <div className="right">
          <div className="nav-bar">
            <button
              className={`home-btn btn ${activeNav === "/" ? "active" : ""}`}
              onClick={() => handleNavClick("/")}
            >
              Home
            </button>
            <button
              className={`about-btn btn ${
                activeNav === "/about" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/about")}
            >
              About
            </button>
            <button
              className={`projects-btn btn ${
                activeNav === "/projects" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/projects")}
            >
              Projects
            </button>
            <button
              className={`skill-btn btn ${
                activeNav === "/skills" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/skills")}
            >
              Skills
            </button>
            <button
              className={`contact-btn btn ${
                activeNav === "/contact" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="about-other-contents">
        <div className="top-contents">
          <h1>About Me</h1>
        </div>
        <div className="bottom-contents">
          <div className="text-container">
            <div className="achievements-container">
              <div className="box1 box">District Topper</div>
              <div className="box2 box">Stars Student</div>
              <div className="box3 box">CGPA : 8.61</div>
            </div>
            <div className="text">
              <p>
                I'm Mohamed Zubair, a Computer Science Engineering student at
                VIT, admitted through the VIT Stars Scheme for top-performing
                students. My passion for computers and technology began early,
                leading me to pursue a career in Computer Science Engineering.
                At VIT, I've immersed myself in algorithms, programming
                languages, and technology. I enjoy problem-solving and
                developing with React and Java, and I stay updated with the
                latest tech advancements. Balancing work with humor, I believe
                tech and laughter are life's greatest treasures. Explore my
                website to learn more about my dreams, passions, and
                experiences. Thank you for joining me on this journey through
                the tech universe.
              </p>
            </div>
            <button className="download-btn"><a href={Resume} download={"resume-Mohamed Zubair"}>Download CV</a></button>
          </div>
          <div className="photo-container">
            <img src={Myphoto} alt="Myphoto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
