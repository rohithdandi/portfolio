import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Router basename="/portfolio/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
