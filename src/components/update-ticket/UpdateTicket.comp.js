import React from "react";
import { Button, Form } from "react-bootstrap";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text className="mt-3 mb-4">Please reply your message</Form.Text>
      <Form.Control
        name=""
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        row="5"
      />
      <div className="text-right mt-3 mb-4">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};
