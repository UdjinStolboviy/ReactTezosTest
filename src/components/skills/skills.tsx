import React from "react";
import ImgSkllsIcon from "./img/Group272.png";
import ImgSkills from "./img/skills.png";

import { Container, Row, Col } from "react-bootstrap";

import "./skills.scss";

function Skills() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3 className="skills-title">Testing skills</h3>
            <div className="block-skills">
              <div className="sklls-info-one">
                <div className="skills">
                  <img
                    src={ImgSkllsIcon}
                    alt="ImgSkilssIcon"
                    className="skills-info-img-icon"
                  />
                  <p className="info-skills">
                    Applying HTML, CSS/SASS. Markup implementation.
                  </p>
                </div>
                <div className="skills">
                  <img
                    src={ImgSkllsIcon}
                    alt="ImgSkilssIcon"
                    className="skills-info-img-icon"
                  />
                  <p className="info-skills">
                    Applying JS. Transforming and organising data. Interactions.
                  </p>
                </div>
              </div>
              <div className="sklls-info-two">
                <div className="skills">
                  <img
                    src={ImgSkllsIcon}
                    alt="ImgSkilssIcon"
                    className="skills-info-img-icon"
                  />
                  <p className="info-skills">
                    Working with asynchronous code,
                    <br /> HTTP and the REST architecture
                  </p>
                </div>
                <div className="skills">
                  <img
                    src={ImgSkllsIcon}
                    alt="ImgSkilssIcon"
                    className="skills-info-img-icon"
                  />
                  <p className="info-skills">
                    Using one of the modern front-end <br />
                    frameworks either Vue or React. Vue is preferable but React
                    is also viable.
                  </p>
                </div>
              </div>
              <img
                src={ImgSkills}
                alt="ImgSkilss"
                className="skills-info-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;
