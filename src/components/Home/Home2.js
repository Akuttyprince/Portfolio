import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> SHOW </span> YOU MY VIBE
            </h1>
            <p className="home-about-body">
              I’m obsessed with crafting code that solves real problems, and I’ve
              picked up a trick or two along the way… 😎
              <br />
              <br />
              I’m your go-to guy for
              <i>
                <b className="purple"> JavaScript, Python, and TypeScript </b>
              </i>
              — I make them sing.
              <br />
              <br />
              I’m all about building slick
              <i>
                <b className="purple"> Web Apps </b> and diving deep into{" "}
                <b className="purple"> Web3 and AI </b>
              </i>
              to create the next big thing.
              <br />
              <br />
              When I’m not chilling, I’m cooking up projects with
              <b className="purple"> Node.js</b>,{" "}
              <i>
                <b className="purple"> React.js</b>
              </i>
              , and
              <i>
                <b className="purple"> Next.js</b>
              </i>
              , pushing the limits of what’s possible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET’S LINK UP</h1>
            <p>
              Hit me up and let’s <span className="purple">create </span>
              something dope
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Akuttyprince"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuva-raj-s-005419299/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_yuva_rajj_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;