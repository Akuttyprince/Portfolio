import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvaraj</span> from{" "}
            <span className="purple">Tamil Nadu, India</span>.
            <br />
            I’m a passionate engineering student and a full-stack developer in progress.
            <br />
            I love building real-world apps with <strong>MERN Stack</strong> and learning new tech every day.
            <br />
            I’ve created tools like a <strong>Credit Tracker</strong> app, an <strong>Attendance System</strong>, and participated in multiple <strong>Hackathons</strong>.
            <br />
            <br />
            Beyond coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on personal projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching & helping my friends learn tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn fast. Build fast. Grow constantly."
          </p>
          <footer className="blockquote-footer">Yuvaraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
