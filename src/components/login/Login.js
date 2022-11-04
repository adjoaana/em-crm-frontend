import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Login = ({
  handleOnChange,
  handleOnSubmit,
  email,
  pass,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autocomplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Email Address"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={pass}
                  onChange={handleOnChange}
                  placeholder="Password"
                  required
                ></Form.Control>
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forget Password
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
