import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  email,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autocomplete="off" onSubmit={handleOnResetSubmit}>
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

              <Button type="submit"> Reset Password</Button>
            </Form>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Resert Password
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
