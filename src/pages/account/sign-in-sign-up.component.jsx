import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";

// Styles
import "./sign-in-sign-up.styles.css";
import GoogleLogo from "../../assets/images/google.png";

class SignIn extends Component {
  render() {
    return (
      <div className="registerForm">
        <Row className="">
          <Col
            sm={12}
            xs={12}
            lg={6}
            className="d-flex justify-content-center align-items-center left-col"
          >
            <Form>
              <h3 className="text-center">Login</h3>
              <hr />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <div className="d-flex justify-content-between">
                  <a href="#">Forgot password?</a>
                  <a href="#">Register</a>
                </div>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
              <Button variant="outline-secondary" type="submit" block>
                <img
                  src={GoogleLogo}
                  alt="Google logo"
                  className="googleLogo"
                />
                Sign In With Google
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="right-col d-none d-lg-block"></Col>
        </Row>
      </div>
    );
  }
}

export default SignIn;
