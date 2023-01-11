import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import Woman from "../../Assets/Projects/woman.png";
import slam from "../../Assets/Projects/slam.png";
import bubblex from "../../Assets/Projects/bubblex.png";
import beat from "../../Assets/Projects/beat.png";
import vision from "../../Assets/Projects/vision.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Woman}
              title="Woman's world"
              description="This is a NFT mint site for 'woman's world' NFT"
              ghLink="https://github.com/star0713/woman-s-world-nft-mint-website-ui/"
              demoLink="https://rubmarketplace-ae4a4.web.app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={slam}
              title="Slam NFT marketplace"
              description="This is a NFT Marketplace to to buy, sell, mint & collect content NFTs all in one app powered by Slamcoin."
              demoLink="https://slamcoin.io/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bubblex}
              title="Bubble NFT"
              description="Bubble NFT mint site. Built with React.js and Laravel"
              demoLink="https://bubblex.io/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={vision}
              title="Music Web App"
              description="This is admin dashboard to manage the music mobile app"
              ghLink="https://github.com/star0713/beat_box_admin_frontend_firebase"
              demoLink="https://beatbox-eb2b7.firebaseapp.com/sign-in"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={beat}
              title="Music Mobile App"
              description="Users can listen music and record their song. Built with React Native"
              ghLink="https://github.com/star0713/beat-app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/star0713/E-cart"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/star0713/dev_portFolio"
              demoLink="https://portfolio-62c9b.web.app/"
            />
          </Col>
         

    
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
