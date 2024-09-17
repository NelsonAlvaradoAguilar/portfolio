import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componentes/Header/Header.js";
import AboutMe from "./componentes/AboutMe/AboutMe.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Route for Main page */}

          <Route path="/" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
