import React from "react";
import Header from "../header";
import { Container, Row, Col } from "react-bootstrap";
import backgroundskreen from "../homePage/img/image7.png";
import Footer from "../footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./log.scss";

function LoginPage() {
  return (
    <>
      <div className="hader-bg">
        <Header />
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundskreen})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "740px",
          width: "100%",
        }}
      >
        <Container>
          <Row>
            <Col>
              <div className="logo-min">
                <div className="log">
                  <h1 className="text-logo">Login</h1>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                      const errors: any = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="forma-log">
                        <Field type="email" name="email" className="inup-log" />
                        <ErrorMessage name="email" component="div" />
                        <Field
                          type="password"
                          name="password"
                          className="inup-log"
                        />
                        <ErrorMessage name="password" component="div" />
                        <Field
                          type="password"
                          name="password"
                          className="inup-log"
                        />
                        <ErrorMessage name="password" component="div" />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="booton-log"
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="vid"></div>
      <div className="hader-bg">
        <Header />
      </div>
      <div className="hader-bg">
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
