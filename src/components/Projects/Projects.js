import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import craveCorner from "../../Assets/Projects/craveCorner.png";
import mapNavigator from "../../Assets/Projects/mapNavigator.png";
import whisperWire from "../../Assets/Projects/whisperWire.png";
import oakwood from "../../Assets/Projects/oakwood.png";
import eventManagement from "../../Assets/Projects/eventManagement.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whisperWire}
              isBlog={false}
              title="The Whisper-Wire"
              description="Developed a real-time chat application with seamless user authentication using Firebase Authentication. Implemented Firestore as the database to store and retrieve messages in real time. Designed a responsive and intuitive user interface with ReactJS and Tailwind CSS. Ensured secure communication and efficient state management using React hooks."
              ghLink="https://github.com/shivankit1210/The-WhisperWire"
              demoLink="https://the-whisper-wire.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={craveCorner}
              isBlog={false}
              title="The Restaurant Website"
              description="Created an online restaurant platform inspired by Zomato, built from scratch using ReactJS. Designed an intuitive user interface for browsing restaurants, viewing menus, and placing orders. Integrated real-time search and filtering functionality for enhanced user experience. Implemented state management with Redux and styled the platform using material UI."
              ghLink="https://github.com/shivankit1210/Crave-Corner/"
              demoLink="https://crave-corner-online-restaurant.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oakwood}
              isBlog={false}
              title="The OakWood Resort"
              description="Developed a freelance project for an online resort booking platform using ReactJS. Implemented features for browsing resorts, checking availability, and booking accommodations. Integrated client-specific requirements, ensuring seamless functionality and user satisfaction. Utilized material-UI for modern and efficient styling."
              ghLink="#"
              demoLink="https://theoakwoodresort.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventManagement}
              isBlog={false}
              title="Event Management platform"
              description="Developed the frontend for an online event management platform using ReactJS. Designed interactive user interfaces for event browsing, registration, and management. Ensured responsive and user-friendly layouts with Tailwind CSS for seamless accessibility across devices. Incorporated React Router for smooth navigation and enhanced the user experience with dynamic UI components. Focused on creating a scalable and visually appealing frontend solution."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapNavigator}
              isBlog={false}
              title="LIVE Map Navigator"
              description="  Built a ReactJS-based Map Navigator to display routes between two locations with a moving vehicle marker. Integrated Leaflet for dynamic map rendering and custom markers for start and end points. Implemented components for inputting locations, fetching coordinates, and real-time vehicle movement updates every 3 seconds. Styled the application with Tailwind CSS, focusing on usability and responsiveness. This project enhanced mapping knowledge and reinforced concepts of React hooks."
              ghLink="#"
              demoLink="https://vehicle-map-navigation-app.netlify.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
