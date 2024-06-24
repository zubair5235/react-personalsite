import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/HomePage.css";
import developerlogo from "../Assets/Kid.jpg";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  const fullText = "Mohamed Zubair";
  const [name, setName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setName(fullText.substring(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setName(fullText.substring(0, index - 1));
        setIndex(index - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 3000); // Wait 3 seconds before deleting
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 200);
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

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
      <div className="other-contents">
        <div className="image-container">
          <img src={developerlogo} alt="developer logo" loading="lazy"/>
        </div>
        <div className="text-container">
          <div className="row1">I'm</div>
          <div className="row2">{name}</div>
          <div className="row3">--Aspiring Developer--</div>
          <div className="row4">
            Passionate and dedicated 3rd year B.Tech CSE-IOT student aspiring{" "}
            <br /> to be a web developer and software engineer.
          </div>
          <div className="row5"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
