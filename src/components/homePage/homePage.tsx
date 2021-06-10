import React from "react";
import Header from "../header";
import backgroundskreen from "./img/image7.png";
import Screen from "../skreen";
import Skills from "../skills";
import Description from "../description";
import Team from "../team";
import Footer from "../footer";

import "./home-page.scss";

function HomePage() {
  return (
    <>
      <div className="hader-bg">
        <Header />
      </div>

      <div className="home-page">
        <div
          style={{
            backgroundImage: `url(${backgroundskreen})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "740px",
            width: "100%",
          }}
        >
          <Screen />
        </div>
        <Skills />
        <Description />
        <Team />
      </div>
      <div className="hader-bg">
        <Header />
      </div>
      <div className="hader-bg">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
