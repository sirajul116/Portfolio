import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Portfolio/" element={<Home />} />
          <Route exact path="/Portfolio/about" element={<About />} />
          <Route exact path="/Portfolio/contact" element={<Contact />} />
          <Route exact path="/Portfolio/experience" element={<Experience />} />
          <Route exact path="/Portfolio/project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
