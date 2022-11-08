import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Dashboard"></Breadcrumbs>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "1rem 2rem", margin: "3rem" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col classame="text-center mt-5 mb-2">
          <div>Total Tickets : 50</div>
          <div>Pending Tickets</div>
        </Col>
      </Row>
      <Row>
        <Col classame="mt-2">Recently added tickets</Col>
      </Row>
      <Row>
        <Col classame="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
