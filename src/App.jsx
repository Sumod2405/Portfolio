import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "./App.css";

import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/Sociallinks";
import Resume from "./Components/Resume";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Home = () => (
  <>
    <div className="welcome-note text-center mt-4">
      <h2>Welcome to My Portfolio!</h2>
      <p>
        I'm <strong>Sumod Metre</strong> – passionate about learning, building, and growing every day.
        Explore my work, skills, and journey as a developer.
      </p>
    </div>

    <Carousel className="mt-4">
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </>
);

const App = () => {
  return (
    <>
      <header>
        <Navbar expand="md" sticky="top" className="custom-navbar">
          <Container>
            <Navbar.Brand>
              <div className="brand-text">
                <h1 className="navbar-name">Sumod Metre</h1>
                <p className="navbar-slogan">Learning, Building, and Growing Every Day</p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" end>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/skills">
                  Skills
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={NavLink} to="/resume">
                  Resume
                </Nav.Link>
                <Nav.Link as={NavLink} to="/social-links">
                  Connect Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/social-links" element={<SocialLinks />} />
        </Routes>
      </main>

      <footer>
        <div className="social-icons" style={{ textAlign: "center", margin: "20px 0" }}>
          <a
            href="https://github.com/Sumod2405/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            style={{ margin: "0 10px" }}
          >
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumod-metre-354317216/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            style={{ margin: "0 10px" }}
          >
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://instagram.com/sumo_the_metre/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
            style={{ margin: "0 10px" }}
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>
        <p style={{ textAlign: "center" }}>&copy; 2025 Sumod. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
