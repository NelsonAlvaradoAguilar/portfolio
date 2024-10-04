import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./componentes/AboutMe/AboutMe.js";
import Education from "./componentes/Education/Education.js";
import WorkExperience from "./componentes/Experience/Experience.js";
import Project from "./componentes/Projects/Projects.js";
import Header from "./componentes/Header/Header.js";

import Main from "./pages/Main/Main.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Route for Main page */}

          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
