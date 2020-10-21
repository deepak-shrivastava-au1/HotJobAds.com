import React, { Component } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import "./Register.css";
import $ from "jquery";

import ReCAPTCHA from "react-google-recaptcha";


class CandidateRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      mobileNumber: "",
      cv: null,
      isCaptchaResolved: false,
      checkingEmail: false,
      checkingUsername: false,
    };
  }

  onChange = e => {
      this.setState({
          [e.target.id]:[e.target.value],
      })
 
  };

  onSubmit = () => {
    if (this.state.cv === null) {
      alert();
    }
  };

  setUsername = e => {
    // If user checks on the 'same as email?' field, populate the username field with the value of email field & make it readonly.
    // If unchecks, clear the username field and make it editable.
    const cb = $("#checkUsername").is(":checked");
    if (cb === true) {
      this.setState(
        {
          username: this.state.email,
        },
        () => {
          $("#username").prop("readonly", true);
        }
      );
    } else {
      this.setState(
        {
          username: "",
        },
        () => {
          $("#username").prop("readonly", false);
        }
      );
    }
  };

  isUsernameAvailable = available => {
    // Function to show the user if the entered username is available or not.
    /// If yes, show a tick else show a cross near the username field.
    if (available) {
      $("#usernameAvailablity")
        .removeClass()
        .addClass("fas fa-check available px-2");
    } else {
      $("#usernameAvailablity")
        .removeClass()
        .addClass("fas fa-times not-available px-2");
    }
  };

  togglePasswordHandle = () => {
    // Toggle password field, hide/show password.
    let type = $("#password").attr("type");
    if (type === "password") {
      $("#password").attr("type", "text");
      $("#togglePassword").removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      $("#password").attr("type", "password");
      $("#togglePassword").removeClass("fa-eye-slash").addClass("fa-eye");
    }
  };

  fillInformation = value => {
    // value contains which button user clicked: 'google', 'github' or 'twitter']
  };

  executeRecaptcha = e => {
    e.preventDefault();
    this.recaptcha.execute();
  };

  onResolved = () => {
    this.setState({
      isCaptchaResolved: true,
    });
    this.onSubmit();
  };

  onRecaptchaError = () => {
    alert("configure that you aren't a robot");
  };

  // Validate Email. Check if the email already exists or not.
  validateEmail = () => {
    const EMAIL_VALIDATOR = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    if (!EMAIL_VALIDATOR.test(this.state.email)) {
      alert("🙏 Please write a valid Email");
    }
    return EMAIL_VALIDATOR.test(this.state.email);
    // Make an API request here to check if the email exists or not.
  };

  // Valudate Username. Check if the usernames already exists or not.
  validateUsername = () => {
    // const username = this.state.username;
    // Make an API request here to validate username.
    // Pass the result(true/false) to isUserNameAvailable Function.
  };

  // Validate Mobile Number.
  validateMobileNumber = () => {
    // const mobileNumber = this.state.mobileNumber;
    // Call API here.
  };

  /* 
    Validate Password. Check if:
    1. Length is greater than 8.
    2. A Small letter exists.
    3. A Captial letter exists.
    4. A Special Character exists.
    5. A digit exists.
  */
  validatePassword = () => {
    const password = this.state.password;
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValid = re.test(password);
    if (!isValid) {
      // Show an alert here.
    }
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">

          <Col className = "registerHeading" md={8} sm={10} xs={12}>
            <div>
              <h4 className="text-center">Candidate Register</h4>
              <p className="text-center">Fields marked with an asterisk (<span style = {{color: 'red'}}>*</span>) are mandatory</p>
            </div>
            <hr />
            <Form
              onSubmit={this.executeRecaptcha}
              encType="multipart/form-data"
            >
              <Form.Group controlId="name">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Name<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          onChange={this.onChange}
                          value={this.state.name}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="email">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Email<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          onChange={this.onChange}
                          value={this.state.email}
                          onBlur={this.validateEmail}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="username">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Username<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Row>
                          <Col xs={7}>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              onChange={this.onChange}
                              value={this.state.username}
                              onBlur={this.validateUsername}
                              required
                            />
                          </Col>
                          <Col xs={5} className="pl-0">
                            <Row>
                              <Col
                                xs={8}
                                className="p-0 justify-content-around"
                              >
                                <span id="usernameAvailablity"></span>
                                <Form.Label className="small text-center font-italic">
                                  same as email?
                                </Form.Label>
                              </Col>
                              <Col xs={4}>
                                <Form.Group controlId="checkUsername">
                                  <Form.Control
                                    type="checkbox"
                                    onClick={this.setUsername}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="mobileNumber">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Mobile Number
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="tel"
                          placeholder="Mobile Number"
                          onChange={this.onChange}
                          value={this.state.mobileNumber}
                          onBlur={this.validateMobileNumber}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="password">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Password<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <div className="buttonInside">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={this.state.password}
                            onBlur={this.validatePassword}
                            required
                          />
                          <span
                            className="fa fa-eye"
                            id="togglePassword"
                            onClick={this.togglePasswordHandle}
                          ></span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="cv">
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-start">
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          CV/Resume
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="file"
                          onChange={this.onChange}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Row className="justify-content-center">
                <Col  md={12}>
                  <Row>
                    <Col className = "offset-md-5" sm={10}>
                      <Row>
                        <Form.Group id="tandc">
                          <Form.Check
                            type="checkbox"
                            label="Accept our Terms & Conditions"
                            required
                          />
                        </Form.Group>
                        <span style = {{color: 'red'}}>*</span>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="justify-content-center mt-1">
                    <small>
                      Read our privacy policy&nbsp;
                      <a href="/privacy" target="_blank">
                        here.
                      </a>
                    </small>
                  </Row>
                </Col>
              </Row>
              <Row id = "reCaptcha" className = "justify-content-center">
              <ReCAPTCHA
                sitekey="6LfVetAZAAAAAJPu4cBAK-dV_WzEAG-0NT2A0FgS"
                // onChange={onChange}
                onResolved={this.onResolved}
                onError={this.onRecaptchaError}
                 />,
              </Row>
              <Form.Row className="justify-content-center">
                <Col sm={6}>
                  <Button
                    variant="dark"
                    type="submit"
                    size="lg"
                    block
                    className="my-4"
                  >
                    Submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CandidateRegister;