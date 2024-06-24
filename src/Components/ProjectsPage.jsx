import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../CSS/ProjectsPage.css";

import project1 from "../Assets/Project1.png";
import project2 from "../Assets/Project2.png";
import project3 from "../Assets/Kid.jpg";

function ProjectsPage() {
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
      <div className="projects-other-contents">
        <div className="row1">
          <div className="project1 projects">
            <div className="firstHalf">
              <img src={project1} alt="project" />
            </div>
            <div className="secondHalf">
              <p className="project-content">
                StarsForLife is a comprehensive student community platform
                designed to enhance the academic and social experience for
                students, faculty coordinators, administrators, and alumni.
              </p>
              <a href="https://github.com/zubair5235/starsforlifebeta#">
                <button className="view-btn">View ➟</button>
              </a>
            </div>
          </div>
          <div className="project2 projects">
            <div className="firstHalf">
              <img src={project2} alt="project" />
            </div>
            <div className="secondHalf">
              <p className="project-content">
                BookBazaar is an e-commerce website project build with Spring
                Boot backend and React frontend. The backend communicates with
                the Google Books API to fetch book information, while the
                frontend provides user and admin interfaces.
              </p>
              <a href="https://github.com/zubair5235/">
                <button className="view-btn">View ➟</button>
              </a>
            </div>
          </div>
          <div className="project3 projects">
            <div className="firstHalf">
              <img src={project3} alt="project" />
            </div>
            <div className="secondHalf">
              <p className="project-content">
                I developed a portfolio website that serves as a comprehensive
                showcase of my skills, projects, and professional journey.
              </p>
              <a href="https://github.com/zubair5235/">
                <button className="view-btn">View ➟</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
