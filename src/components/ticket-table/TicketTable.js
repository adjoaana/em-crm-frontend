import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  if (tickets.length)
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr colSpan="4" className="text-center">
              <td>No ticket to show</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
};
