/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./header.scss";

import logo from "./img/logo.png";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  const [toggle, toggleClass] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <header className="header">
              <div className="header__row">
                <div className="header__logo">
                  <img src={logo} alt="logo" />
                </div>
                <div
                  className={
                    toggle
                      ? "menu__icon icon-menu"
                      : "menu__icon icon-menu active"
                  }
                  onClick={() => toggleClass(!toggle)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <nav className="header__menu menu">
                  <div className={toggle ? "menu__body" : "menu__body active"}>
                    <ul className="menu__list">
                      <li className="home-ref">
                        <a href="/" className="menu__link">
                          Home
                        </a>
                      </li>
                      <li className="login-ref">
                        <a href="/login" className="menu__link">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Header;
