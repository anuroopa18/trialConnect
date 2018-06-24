import React from 'react'
import {connect} from 'react-redux'

const MedicationRecord = ({meds}) => {
    return (
        <ul className='list-group pb-3'>
            {
                meds.map((med, i) => (
                    <li className='list-group-item' key={i}><h6 className='text-trial m-0'><i
                        className='fas fa-pills'></i><span className='pl-2'>{med.name}</span></h6></li>
                ))
            }
        </ul>
    )
};

const ConditionRecord = ({stats}) => {
    return (
        <table className='table table-bordered table-striped'>
            <thead>
            <tr>
                <th scope='col'>Condition</th>
                <th scope='col'>Diagnosed</th>
                <th scope='col'>Medications</th>
            </tr>
            </thead>
            <tbody>
            {
                stats.map((stat, i) => (
                    <tr key={i}>
                        <td>{stat.condition}</td>
                        <td>{stat.diagnosedDate}</td>
                        <td>{stat.medications}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};

const AllergyRecord = ({stats}) => {
    return (
        <table className='table table-bordered table-striped'>
            <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Allergen</th>
                <th scope='col'>Effect</th>
                <th scope='col'>Treatment</th>
            </tr>
            </thead>
            <tbody>
            {
                stats.map((stat, i) => (
                    <tr key={i}>
                        <td>{stat.name}</td>
                        <td>{stat.allergen}</td>
                        <td>{stat.effect}</td>
                        <td>{stat.firstLineTreatment}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};

const recordTable = ({patient}) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 p-0'>
                    <div className='card'>
                        <ul className='nav nav-tabs nav-fill'>
                            <li className='nav-item active'>
                                <a href='#' className='nav-link active' id='allergies-tab' data-toggle="tab"
                                   href="#allergies"
                                   role="tab" aria-controls="allergies" aria-selected="false"><strong
                                    className='text-secondary'>Allergies</strong></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' id='conditions-tab' data-toggle="tab"
                                   href="#conditions"
                                   role="tab" aria-controls="conditions" aria-selected="true"><strong
                                    className='text-secondary'>Conditions</strong></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' id='medications-tab' data-toggle="tab"
                                   href="#medications"
                                   role="tab" aria-controls="medications" aria-selected="false"><strong
                                    className='text-secondary'>Medications</strong></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' id='contact-tab' data-toggle="tab" href="#contact"
                                   role="tab" aria-controls="contact" aria-selected="false"><strong
                                    className='text-secondary'>Contact
                                    Details</strong></a>
                            </li>
                        </ul>
                        <div className='tab-content pt-3'>
                            <div className='tab-pane fade show active' id='allergies' role="tabpanel"
                                 aria-labelledby="allergies-tab">
                                <div className='container'>
                                    <AllergyRecord stats={patient.allergies}/>
                                </div>
                            </div>
                            <div className='tab-pane fade' id='conditions' role="tabpanel"
                                 aria-labelledby="conditions-tab">
                                <div className='container'>
                                    <ConditionRecord stats={patient.conditions}/>
                                </div>
                            </div>
                            <div className='tab-pane fade' role="tabpanel" id='medications'
                                 aria-labelledby="medications-tab">
                                <div className='container'>
                                    <MedicationRecord meds={patient.medications}/>
                                </div>
                            </div>
                            <div className='tab-pane fade' role="tabpanel" id='contact' aria-labelledby="contact-tab">
                                <div className='container'>
                                    <ConditionRecord stats={patient.contactDetails}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};


const MedicalRecord = connect()(recordTable);

export default MedicalRecord