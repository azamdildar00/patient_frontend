import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Spinner,
  Table,
} from "react-bootstrap";

const PatientRecord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchPatient, setSearchPatient] = useState(false);
  const [addPatient, setAddPatient] = useState(false);
  const [patRecord, setPatRecord] = useState();

  const searchBtn = () => {
    setSearchPatient(true);
    setAddPatient(false);
  };

  const addBtn = () => {
    setSearchPatient(false);
    setAddPatient(true);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://patient-backend111.herokuapp.com/patient?name=${e.target.elements.searchPatient.value}`
      )
      .then((res) => setPatRecord(res.data));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const patient = {
      name: e.target.elements.patientName.value,
      disease: e.target.elements.patientDisease.value,
    };

    axios
      .post("https://patient-backend111.herokuapp.com/patient", { patient })
      .then((res) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Button variant="primary" onClick={searchBtn}>
              Search Search
            </Button>{" "}
            <Button variant="primary" onClick={addBtn}>
              Add Patient
            </Button>
          </Col>
        </Row>
      </Container>
      {searchPatient && (
        <Container>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form onSubmit={handleSubmitSearch}>
                <Form.Group className="mb-3" controlId="searchPatient">
                  <Form.Label>Search Patient</Form.Label>
                  <Form.Control type="text" placeholder="Patient Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
      {addPatient && (
        <Container>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <h3 className="shadow-sm text-success mt-5 text-center rounded">
                Patient Record
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="patientName">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control type="text" placeholder="Patient Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="patientDisease">
                  <Form.Label>Patient Disease</Form.Label>
                  <Form.Control type="text" placeholder="Disease Name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {isLoading ? <Spinner animation="border" /> : "Submit"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
      {patRecord && !addPatient && (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Treatment Name</th>
              </tr>
            </thead>
            <tbody>
              {patRecord.map((r) => {
                return (
                  <tr>
                    <td>{r.id}</td>
                    <td>{r.name}</td>
                    <td
                      style={{
                        color: r.disease === "Allergie" ? "red" : "blue",
                        fontSize: "bold",
                      }}
                    >
                      {r.disease}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default PatientRecord;
