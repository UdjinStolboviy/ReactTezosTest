import React from "react";
import ImgTeam1 from "./img/Rectangle288.png";
import ImgTeam2 from "./img/Rectangle289.png";
import ImgHr from "./img/Rectangle5.png";

import { Container, Row, Col } from "react-bootstrap";

import "./team.scss";

function Team() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="block-team">
              <h3 className="team-title">Our team</h3>
              <div className="team-info-one">
                <div className="team">
                  <img
                    src={ImgTeam1}
                    alt="Imgteam"
                    className="team-info-img-icon"
                  />
                  <p className="info-team">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue molestie pretium, dictum nunc ac pellentesque. Semper
                    imperdiet elit, nec faucibus varius dui. Lorem non sed
                    tincidunt pharetra tempor. Amet proin sapien consequat orci,
                    mauris.Lorem ipsu elit.\amet, porttitor.
                  </p>
                  <div className="src-team">
                    <a href="#" className="link">
                      Learn More
                    </a>
                    <img src={ImgHr} alt="hr" className="img-link" />
                  </div>
                </div>
                <div className="team">
                  <img
                    src={ImgTeam2}
                    alt="Imgteam"
                    className="team-info-img-icon"
                  />
                  <p className="info-team">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue molestie pretium, dictum nunc ac pellentesque. Semper
                    imperdiet elit, nec faucibus varius dui. Lorem non sed
                    tincidunt psapien consequat orci, mauris.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.\amet, porttitor.
                  </p>
                  <div className="src-team">
                    <a href="#" className="link">
                      Learn More
                    </a>
                    <img src={ImgHr} alt="hr" className="img-link" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;
