import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Modal } from "react-bootstrap";
import $ from "jquery";
import { useEffect } from "react";


function SignIn(props) {
  const [state, setState] = useState({
    showOptions: false,
    username: "",
    password: "",
  });

  useEffect(() => {
  //authentication logic goes here
  });

  const onChange = e => {
    setState({
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = e => {
    //********** Need Changes ********************/
    e.preventDefault();
  };


  return (
    <Container fluid className="my-2">
      <Row className="justify-content-center">
        <Col md={8} sm={10} xs={12}>
          <div style={{ marginBottom: "20px" }}>
            <h4 className="text-center">Login</h4>
          </div>

          <Form onSubmit={onSubmit}>
            <Form.Group controlId="username">
              <Row className="justify-content-center">
                <Col>
                  <Row className="justify-content-start">
                    <Col xs={0} md={4}></Col>
                    <Col xs={10} md={5}>
                      <p className="my-1">
                        Not Signed up yet?{" "}
                        <button
                          style={{
                            border: "none",
                            color: "#007bff",
                            background: "none",
                          }}
                          className="m-0 p-0"
                          onClick={() =>
                            setState({ ...state, showOptions: true })
                          }
                        >
                          Register here.
                        </button>
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-start">
                    <Col sm={10} md={4}>
                      <Form.Label className="float-left float-md-right">
                        Username or Email*
                      </Form.Label>
                    </Col>
                    <Col sm={10} md={5}>
                      <Form.Control
                        type="text"
                        placeholder="Username or Email"
                        onChange={onChange}
                        value={state.username}
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
                    <Col sm={10} md={4}>
                      <Form.Label className="float-left float-md-right">
                        Password*
                      </Form.Label>
                    </Col>
                    <Col sm={10} md={5}>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={onChange}
                        value={state.Password}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col sm={0} md={4}></Col>
                    <Col sm={10} md={5}>
                      <a href="/forgot">Forgot Password?</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>
            <Form.Row className="justify-content-center">
              <Col sm={6} className="text-center">
                <Button variant="dark" type="submit" size="md">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>

      <Modal
        show={state.showOptions}
        onHide={() => {
          setState({ ...state, showOptions: false });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Type?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>
            If you are a Candiate, <a href="/candidateRegister">click here.</a>
          </li>
          <li>
            If you are an Employer, <a href="/employerRegister">click here.</a>
          </li>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="dark"
            onClick={() => {
              setState({ ...state, showOptions: false });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default SignIn;