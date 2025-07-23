import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import './App.css';
import Certifications  from "./components/Certifications";

function App() {
  return (
    <main className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Certifications />
    </main>
  );
}

export default App;