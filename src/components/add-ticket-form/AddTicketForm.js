import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "../add-ticket-form/addticketform.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  console.log(formData);
  return (
    <div className="jumbotron mt-3 add-new-ticket">
      <h1 className="text-info text-cetner">Add New Ticket</h1>
      <br />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              min-length="6"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            ></Form.Control>
            <Form.Text className="text-danger">
              {!formDataError.subject && "Subject is Required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              placeholder="issueDate"
              required
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="textarea"
            name="details"
            rows="5"
            value={formData.details}
            onChange={handleOnChange}
            placeholder="Details"
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="info" block="true">
          Submit
        </Button>
      </Form>
    </div>
  );
};
