import React from "react";
import ImgSkreen from "./img/Vector.png";

import { Container, Row, Col } from "react-bootstrap";

import Users from "../users";

import "./skreen.scss";

function Skreen() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="block-screen">
              <div className="screen-info">
                <img
                  src={ImgSkreen}
                  alt="ImgSkreen"
                  className="screen-info-img"
                />
                <h1 className="info-title">Tezos Ukraine</h1>
                <h3 className="info-screp">
                  Front-end development <br />
                  test assignment
                </h3>
              </div>
              <div className="screen-table">
                <Users />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skreen;
