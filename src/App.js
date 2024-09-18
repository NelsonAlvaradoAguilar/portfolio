import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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
