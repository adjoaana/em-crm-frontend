import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { PageBreadcrumbs } from "../../components/breadcrumbs/PageBreadcrumbs";
import { shortText } from "../../utils/validation";

const initialState = {
  subject: "",
  issueDate: "",
  details: "",
};
const initialStateError = {
  subject: false,
  issueDate: false,
  details: false,
};
export const AddNewTicket = () => {
  const [formData, setFormData] = useState(initialState);

  const [formDataError, setFormDataError] = useState(initialStateError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handleOnSubmit
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isSubjectValid = await shortText(formData.subject);

    // !isSubjectValid &&
    setFormDataError({
      ...initialStateError,
      subject: !isSubjectValid,
    });
    console.log("Form Submit request received", formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumbs page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
