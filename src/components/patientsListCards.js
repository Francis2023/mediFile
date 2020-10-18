import React from "react";


const patientsListCards = props => {

    console.log(props)

    return (
        <div>
            <img src=" " alt="Patient's" />
            <p>{props.patientData.name}</p>
            <p>{props.patientData.roomNumber}</p>

        </div>

    )
}

export default patientsListCards;