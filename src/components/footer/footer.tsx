import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./footer.scss";

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="block-footer">
              <div className="footer-info-one">
                <div className="team1">
                  <a href="#" className="link-footer">
                    Testing skills
                  </a>
                  <a href="#" className="link-footer">
                    General description of the assignment
                  </a>
                  <a href="#" className="link-footer">
                    Our team
                  </a>
                </div>
                <div className="team2">
                  <a href="#" className="link-footer">
                    About us
                  </a>
                  <a href="#" className="link-footer">
                    Carrier
                  </a>
                  <a href="#" className="link-footer">
                    Blog
                  </a>
                </div>
              </div>
              <a href="#" className="link-footer cop">
                (C)Copyrigh
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
