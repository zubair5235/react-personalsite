import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import LinkedIn from "../Assets/Linked In.png";
import Gmail from "../Assets/Gmail.png";
import Github from "../Assets/Github.png";

import "../CSS/ContactPage.css";

function ContactPage() {
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
      <div className="contact-other-contents">
        <div className="row1">
          <div className="card">
            <img src={LinkedIn} alt="Linked in" />
            <div className="bottom-contents">
              <h3 className="header">LinkedIn Profile</h3>
              <p className="text-content">
                Let's Connect to stay updated and expand our professional
                network.
              </p>
              <a href="https://www.linkedin.com/in/mohamed-zubair-m5235/"><button className="action-btn">Connect ➟</button></a>
            </div>
          </div>
          <div className="card">
            <img src={Gmail} alt="Gmail" />
            <div className="bottom-contents">
              <h3 className="header">Gmail</h3>
              <p className="text-content">
              Feel free to mail me for anything. I'm looking forward to connecting with you!
              </p>
              <a href="mailto:mohamedzubair235@gmail.com"><button className="action-btn">Mail Me ➟</button></a>
            </div>
          </div>
          <div className="card">
            <img src={Github} alt="Github" />
            <div className="bottom-contents">
              <h3 className="header">Github</h3>
              <p className="text-content">
              Stay updated about my coding journey & source codes of the projects that I'm working on.
              </p>
              <a href="https://github.com/zubair5235/"><button className="action-btn">Click ➟</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
