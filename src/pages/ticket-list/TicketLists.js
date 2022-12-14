import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumbs } from "../../components/breadcrumbs/PageBreadcrumbs";
import { SearchForm } from "../../components/search-form/SearchForm";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayT, setDisplayT] = useState(tickets);

  useEffect(() => {}, [str, displayT]);

  const handleOnChange = (e) => {
    const { value } = e.target;

    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    console.log(displayTickets);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumbs page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <TicketTable tickets={displayT} />
        </Col>
      </Row>
    </Container>
  );
};
