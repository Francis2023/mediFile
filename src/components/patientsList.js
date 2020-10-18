import React from 'react';
import PatientsListCards from "./PatientsListCards"
import useGetData from "./useGetData"
import {CardDeck} from 'react-bootstrap'


export default function PatientsList() {

    

    const apiUrl = ` `;
    const [data, loading, anError] = useGetData(apiUrl)
    
    // Test dataß
    const patientsData = [
        {id: 1, name: 'Trix', image:"#", roomNumber: 2},
        {id: 2, name: 'Dave', image:"#", roomNumber: 3},
        {id: 3, name: 'James',image:"#", roomNumber: 4},
        {id: 4, name: 'Kelv', image:"#", roomNumber: 1}
    ]
    // const[patientData, setPatientData] = useState([])
    // setPatientData(data)


    return (
        
        <div>
            <h2> Patients </h2>
            <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                { loading? <div> Loading data </div> : (anError ? <div> Error occured</div> : 
                    patientsData.map(patientData => (<PatientsListCards key = {patientData.id} patientData={patientData} />))
                )
                    // {patientData.map(patientData => (
                    // <patientsListCards patientData={patientData} />   
                    // ))}
                } 
            </CardDeck>
        </div>
    ); 
    

}

