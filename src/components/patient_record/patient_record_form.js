import React, {useState} from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const PatientRecord = () => {
    
  // const [patientName, setPatientName] = useState('')
  // const [patientDisease, setDiseaseName] = useState('')
  const [searchPatient, setSearchPatient] = useState(false)
  const [addPatient, setAddPatient] = useState(false)

  const searchBtn = () => {
    setSearchPatient(true)
    setAddPatient(false)
  }

  const addBtn = () => {
    setSearchPatient(false)
    setAddPatient(true)
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(e.target.elements.searchPatient.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.patientName.value);
    console.log(e.target.elements.patientDisease.value);
    // console.log(patientName);
    // console.log(patientDisease);
  }

    return (
      <>
        <Container>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Button variant="primary" onClick={searchBtn}>Search Search</Button>{' '}
                    <Button variant="primary" onClick={addBtn}>Add Patient</Button>
                </Col>
            </Row>
        </Container>
        {searchPatient && 
            <Container>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form onSubmit={handleSubmitSearch}>
                    <Form.Group className="mb-3" controlId='searchPatient'>
                        <Form.Label>Search Patient</Form.Label>
                            <Form.Control type="text" placeholder="Patient Name"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Search
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        }
        {addPatient && 
        <Container>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <h3 className="shadow-sm text-success mt-5 text-center rounded">Patient Record</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId='patientName'>
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Patient Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId='patientDisease'>
                <Form.Label>Patient Disease</Form.Label>
                <Form.Control type="text" placeholder="Disease Name"/>
              </Form.Group>

              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
        }
      </>
    )
}

export default PatientRecord;