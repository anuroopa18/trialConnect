import React from 'react'
import {connect} from 'react-redux'


const recordTable = ({patient}) => {

    return (
        <h1>Test</h1>

    )

};


const MedicalRecord = connect()(recordTable);

export default MedicalRecord