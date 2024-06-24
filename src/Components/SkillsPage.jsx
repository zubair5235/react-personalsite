import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/SkillsPage.css";

function SkillsPage() {
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
      <div className="skills-other-contents">
        <div className="row1">
          <div className="card1">
            <h3 className="header">FrontEnd Skills</h3>
            <ol>
              <li className="skills">
                <abbr title="Intermediate">HTML</abbr>
              </li>
              <li className="skills">
                <abbr title="Intermediate">CSS</abbr>
              </li>
              <li className="skills">
                <abbr title="Basic">JavaScript</abbr>
              </li>
              <li className="skills">
                <abbr title="Basic">React</abbr>
              </li>
            </ol>
          </div>
          <div className="card2">
            <h3 className="header">BackEnd & Programming Languages</h3>
            <ol>
              <li className="skills">
                <abbr title="basic">Spring Boot</abbr>
              </li>
              <li className="skills">
                <abbr title="basic">MongoDB</abbr>
              </li>
              <li className="skills">
                <abbr title="Intermediate">Java</abbr>
              </li>
            </ol>
          </div>
          <div className="card3">
            <h3 className="header">Other Skills</h3>
            <ol>
              <li className="skills">
                <abbr title="Basic">Git & Github</abbr>
              </li>
              <li className="skills">
                <abbr title="Basic">Network</abbr>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
