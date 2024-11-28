import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivankit Agarwal </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br />
            I am currently MERN Stack developer Trainee at {" "}
            <span className="purple">JSpider, Noida.</span>
            <br />
            <br/>
            I recently graduated with a Bachelor's degree in Computer Science and Engineering from Uttarakhand Technical University and am currently looking for opportunities as a front-end developer.
            <br />
            <br />
            When I’m not coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Discussing Trending Tech Topics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by curiosity, powered by code" {" "}
          </p>
          <footer className="blockquote-footer">Shivankit Agarwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
