import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import $ from "jquery";

class EmployerRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      mobileNumber: "",
      companyType: "company",
      companyName: "",
      address: "",
      pan: "",
      gstin: "",
      website: "https://",
      logo: []
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
   e.preventDefault();
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
    // const email = this.state.email;
    // Make an API request here to check if the email exists or not.
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

  // Validate Company Name.
  validateCompanyName = () => {
    // const companyName = this.state.companyName;
    // Call an API here.
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center ">
          <Col md={8} sm={10} xs={12}>
            <div>
              <h4 className="text-center">EMPLOYER REGISTRATION</h4>
            </div>
            <br />
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
                          Person Name<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          value={this.state.name}
                          onChange={this.onChange}
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
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Official Email<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                          onBlue={this.validateEmail}
                          required
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
              <Form.Group controlId="mobileNumber">
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Mobile/Landline<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="tel"
                          placeholder="Mobile/Landline"
                          value={this.state.mobileNumber}
                          onChange={this.onChange}
                          onBlur={this.validateMobileNumber}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group
                controlId="companyName"
                className="toggleCompanyTypeFields"
              >
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Company Name<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="Company Name"
                          onChange={this.onChange}
                          value={this.state.companyName}
                          className="toggleRequiredAttribute"
                          onBlur={this.validateCompanyName}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                controlId="website"
                className="toggleCompanyTypeFields"
              >
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Website<span style = {{color: 'red'}}>*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          className="toggleRequiredAttribute"
                          type="url"
                          placeholder="Website"
                          onChange={this.onChange}
                          value={this.state.website}
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="address">
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          Location
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="Location/City"
                          onChange={this.onChange}
                          value={this.state.address}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="pan" className="toggleCompanyTypeFields">
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          PAN
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="PAN"
                          onChange={this.onChange}
                          value={this.state.pan}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="gstin">
                <Row className="justify-content-center">
                  <Col>
                    <Row>
                      <Col sm={12} md={4}>
                        <Form.Label className="float-left float-md-right">
                          GSTIN
                        </Form.Label>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Control
                          type="text"
                          placeholder="GSTIN"
                          onChange={this.onChange}
                          value={this.state.gstin}
                        />
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
                          Logo Upload
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

              <hr />
              
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
                 />
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

export default EmployerRegister;