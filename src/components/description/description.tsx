import React from "react";
import ImgDescriptionIcon1 from "./img/01.png";
import ImgDescriptionIcon2 from "./img/02.png";
import ImgDescriptionIcon3 from "./img/03.png";

import ImgDescription from "./img/Rectangle287.png";

import { Container, Row, Col } from "react-bootstrap";

import "./description.scss";

function Description() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="block-description">
              <div className="description-info-one">
                <h3 className="description-title">
                  General description of the assignment
                </h3>
                <div className="description">
                  <img
                    src={ImgDescriptionIcon1}
                    alt="ImgSkilssIcon"
                    className="description-info-img-icon"
                  />
                  <p className="info-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <hr />
                <div className="description">
                  <img
                    src={ImgDescriptionIcon2}
                    alt="ImgSkilssIcon"
                    className="description-info-img-icon"
                  />
                  <p className="info-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <hr />
                <div className="description">
                  <img
                    src={ImgDescriptionIcon3}
                    alt="ImgSkilssIcon"
                    className="description-info-img-icon"
                  />
                  <p className="info-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <hr />
              </div>
              <div className="description-big-img">
                <img
                  src={ImgDescription}
                  alt="ImgDescription"
                  className="description-info-img"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Description;
