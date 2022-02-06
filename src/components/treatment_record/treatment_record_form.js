import React, {useState} from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const TreatmentRecord = () => {
//   const [patientName, setPatientName] = useState('')
//   const [treatDisease, setTreatName] = useState('')
//   const [check, setCheck] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.patientName.value);
    console.log(e.target.elements.patientDisease.value);
    console.log(e.target.elements.Prescription.value);
  }

    return (
        <Container>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <h3 className="shadow-sm text-success mt-5 text-center rounded">Treatment Record</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId='patientName'>
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Patient Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId='patientDisease'>
                <Form.Label>Patient Disease</Form.Label>
                <Form.Control type="text" placeholder="Disease Name"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Prescription">
                <Form.Label>Prescription</Form.Label>
                <Form.Check type="checkbox" label="Prescription"/>
              </Form.Group>

              <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default TreatmentRecord;