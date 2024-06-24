import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProjectsPage from "./Components/ProjectsPage";
import SkillsPage from "./Components/SkillsPage";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <div className="permanent-components">
      <Router>
        <div className="temporary-components">
          <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route exact path="/about" element={<AboutPage/>}></Route>
            <Route exact path="/projects" element={<ProjectsPage/>}></Route>
            <Route exact path="/skills" element={<SkillsPage/>}></Route>
            <Route exact path="/contact" element={<ContactPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
