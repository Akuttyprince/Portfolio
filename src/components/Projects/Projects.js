import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Creations </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dive into my latest projects! From web apps to games, these are the ideas I’ve brought to life with code, showcasing my passion for building cool tech that solves problems and sparks joy.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Swetha Login"
              description="A sleek login system built with HTML, CSS, and JavaScript, designed for secure and user-friendly authentication. Perfect for web apps needing a simple yet effective user access solution."
              ghLink="https://github.com/Akuttyprince/SWETHA-LOGIN.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Manoj Windows"
              description="A creative web-based simulation of a Windows-like interface, crafted with HTML, CSS, and JavaScript. It mimics desktop functionality for a nostalgic and interactive user experience."
              ghLink="https://github.com/Akuttyprince/manoj_windows.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Simple Style"
              description="A stylish web design project using HTML and CSS, focusing on clean aesthetics and responsive layouts. Ideal for creating visually appealing landing pages or portfolios."
              ghLink="https://github.com/Akuttyprince/SIMPLE_STYLE.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Simple Game"
              description="A fun, lightweight browser-based game built with JavaScript and HTML5 Canvas. Designed for quick play sessions with engaging mechanics and smooth performance."
              ghLink="https://github.com/Akuttyprince/simple_game.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Poster"
              description="A dynamic poster generator web app using HTML, CSS, and JavaScript. Create stunning visual designs for events or promotions with customizable templates."
              ghLink="https://github.com/Akuttyprince/poster_.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Attendance Login 1.0"
              description="A web-based attendance tracking system with a login interface, built using HTML, CSS, and JavaScript. Simplifies user management and record-keeping for organizations."
              ghLink="https://github.com/Akuttyprince/Attendence_login_1.o.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Simple Gaming Web"
              description="An interactive gaming website powered by JavaScript, HTML, and CSS. Features multiple mini-games with vibrant graphics and responsive controls for a fun user experience."
              ghLink="https://github.com/Akuttyprince/simple_gamming_web.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-Do Form"
              description="A minimalist to-do list app built with React and styled with CSS. Allows users to add, edit, and delete tasks, with local storage for persistent data."
              ghLink="https://github.com/Akuttyprince/TO--DO--FORM.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Credit 2.0"
              description="A credit management web app using React and JavaScript, designed to track transactions and balances. Features a clean UI and local storage for data persistence."
              ghLink="https://github.com/Akuttyprince/credit2.o.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shop Tracking"
              description="A shop management system built with React and JavaScript, enabling inventory tracking and sales monitoring. Includes a user-friendly dashboard for small businesses."
              ghLink="https://github.com/Akuttyprince/shop-tracking.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chat Bot Bro 2.0"
              description="An AI-powered chatbot built with JavaScript and Node.js, designed for interactive conversations. Supports basic NLP for answering queries and engaging users."
              ghLink="https://github.com/Akuttyprince/chat_bot_bro_2.0.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Attend Us"
              description="An advanced attendance management web app using React and JavaScript. Features user authentication, real-time tracking, and exportable reports for institutions."
              ghLink="https://github.com/Akuttyprince/Attend-us.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="A responsive web-based calculator built with HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean, intuitive interface."
              ghLink="https://github.com/Akuttyprince/calculator.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;