import React from 'react'
import patientsListCards from "./patientsListCards"
import fetchPatient from "./fetchPatient"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            patientData: [],
        }
    }

    componentDidMount() {
        fetchPatient()
        .then(data => {
            this.setState({patientData: data})
        })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <h2> Patients </h2>
                {this.state.patientData.map(patientData => (
                <patientsListCards patientData={patientData} />   
                ))}
            </div>
        )
    }

}

export default App;