import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumbs } from "../../components/breadcrumbs/PageBreadcrumbs";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHist.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";

const ticket = tickets[0];
export const Ticket = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    alert("Form submitted");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumbs page="Ticket"></PageBreadcrumbs>
          </Col>
        </Row>
        <Row>
          <Col className="font-weight-bolder text-secondary">
            <div className="subject">Subject: {ticket.subject}</div>
            <div className="date">Ticket Opened: {ticket.addedAt}</div>
            <div className="status">Status: {ticket.status}</div>
          </Col>
          <Col>
            <div className="subject"></div>
            <div className="date"></div>
            <div className="status"></div>
          </Col>
          <Col className="text">
            <Button variant="outline-info">Close Ticket</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MessageHistory msg={ticket.history} />
          </Col>
        </Row>
        <Row>
          <Col>
            <UpdateTicket
              msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
