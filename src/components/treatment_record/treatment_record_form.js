import React, {useState} from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const TreatmentRecord = () => {
//   const [patientName, setPatientName] = useState('')
//   const [treatDisease, setTreatName] = useState('')
//   const [check, setCheck] = useState(true);
  const [searchtreat, setSearchTreat] = useState(false)
  const [addtreat, setAddTreat] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  const searchBtn = () => {
    setSearchTreat(true)
    setAddTreat(false)
  }

  const addBtn = () => {
    setSearchTreat(false)
    setAddTreat(true)
  }

  const handleSubmitSearch = (e) => {
      e.preventDefault();
      console.log(e.target.elements.searchDisease.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.patientName.value);
    console.log(e.target.elements.patientDisease.value);
    console.log(e.target.elements.Prescription.value);
  }

    return (
        <>
        <Container>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Button variant="primary" onClick={searchBtn}>Search Treatment</Button>{' '}
                    <Button variant="primary" onClick={addBtn}>Add Treatment</Button>
                </Col>
            </Row>
        </Container>
        {searchtreat && 
            <Container>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form onSubmit={handleSubmitSearch}>
                    <Form.Group className="mb-3" controlId='searchDisease'>
                        <Form.Label>Search Treatment</Form.Label>
                            <Form.Control type="text" placeholder="Disease Name"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Search
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        }
        {addtreat &&
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

              <Form.Select className="mb-3" aria-label="Default select example" onChange={handleChange}>
                <option>Prescription issued?</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </Form.Select>

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

export default TreatmentRecord;