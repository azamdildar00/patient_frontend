import './App.css';
import { Button } from 'react-bootstrap';
import React, {useState} from "react";
import PatientRecord from './components/patient_record/patient_record_form';
import TreatmentRecord from './components/treatment_record/treatment_record_form';

function App() {
  const [patient_btn, setPatient_btn] = useState(false)
  const [treat_btn, setTreat_btn] = useState(false)

  const patientBtn = () => {
    setPatient_btn(true);
    setTreat_btn(false)
  }

  const treatBtn = () => {
    setPatient_btn(false);
    setTreat_btn(true)
  }
  return (
    <div className="App">
      <div className='buttonGroup'>
        <Button variant="primary" onClick={patientBtn}>Patient</Button>{' '}
        <Button variant="primary" onClick={treatBtn}>Treatment</Button>
      </div>
      {patient_btn && <PatientRecord/>}
      {treat_btn && <TreatmentRecord/>}
    </div>
  );
}

export default App;
