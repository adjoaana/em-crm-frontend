import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search.."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
