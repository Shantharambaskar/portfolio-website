import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
          <Link to="/" className="text-xl font-bold">Shantharam Baskaran</Link>
          <div>
            <Link to="/about" className="px-3 hover:text-gray-300">About</Link>
            <Link to="/projects" className="px-3 hover:text-gray-300">Projects</Link>
            <Link to="/resume" className="px-3 hover:text-gray-300">Resume</Link>
            <Link to="/contact" className="px-3 hover:text-gray-300">Contact</Link>
          </div>
        </nav>
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="p-4 bg-blue-600 text-white text-center mt-6">
          &copy; 2025 Shantharam Baskaran. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;