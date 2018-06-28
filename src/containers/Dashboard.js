import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PatientStats from '../components/Dashboard/PatientStatistics'
import MedicalRecord from '../components/Dashboard/MedicalRecord'
import NavContainer from '../components/Navbar/Navbar'
import * as actions from '../actions/PatientDashboardActions'

const stateToPropsMapper = ({ patientDashBoardReducer }) => ({

    patient: patientDashBoardReducer.patient,
    medicalRecords: patientDashBoardReducer.medicalRecords,
    bmi: patientDashBoardReducer.bmi

});

const dispatchToPropsMapper = dispatch => {
    return {
        findPatientByUsername: (username) => (actions.findPatientByUsername(dispatch, username)),
        findMedicalRecordsForPatient: (patientId) => (actions.findMedicalRecordsForPatient(dispatch, patientId)),
        findDoctorsForPatient:(patientId) => (actions.findDoctorsForPatient(dispatch,patientId))


    }
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props.match);
        this.props.findPatientByUsername(this.props.match.params.username);
        let user = JSON.parse(localStorage.getItem('user'))
        this.props.findMedicalRecordsForPatient(user.id);
        this.props.findDoctorsForPatient(user.id);

    }


    render() {
        console.log(this.props)
        return (
            <div>
                <div className='mb-lg-5'>
                    <NavContainer showLogin={false} showHome={false} showRegister={false} showAboutUs={false} />
                </div>
                <div className='container bg-light'>
                    <div className='row p-3'>
                        <div className='col-md-12'>
                            <PatientStats patient={this.props.patient} bmi={this.props.bmi} />
                        </div>
                    </div>
                </div>
                <div className='container bg-light mt-3'>
                    <div className='row p-3'>
                        <div className='col-md-12'>
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className='text-center font-weight-bold'
                                            style={{ "color": "#2994b2" }}>Medical Records For Patients</h3>
                                    </div>
                                    <div class="card-body p-0" style={{ "backgroundColor": "white" }}>
                                        <ul style={{ "color": "grey" }}>

                                            < table className="table  table-hover table-responsive-md table-striped" style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                                <thead>
                                                    <tr>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Medical Condition</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Name</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Cause</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Body Temperature</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Pulse Rate</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Blood Pressure</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>BMI</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.medicalRecords.map((mr, index) => {
                                                        return <tr style={{ "color": "grey" }} key={index} >
                                                            <td >
                                                                {mr.medicalCondition}
                                                            </td>
                                                            <td>
                                                                {mr.allergyName}
                                                            </td>
                                                            <td>
                                                                {mr.allergyCause}
                                                            </td>
                                                            <td>
                                                                {mr.bodyTemperature}
                                                            </td>
                                                            <td>
                                                                {mr.pulseRate}
                                                            </td>
                                                            <td>
                                                                {mr.bloodPressure}
                                                            </td>
                                                            <td>
                                                                {mr.bmi}
                                                            </td>

                                                        </tr>

                                                    })}
                                                </tbody>

                                            </table>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container bg-light mt-3'>
                    <div className='row p-3'>
                        <div className='col-md-12'>
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className='text-center font-weight-bold'
                                            style={{ "color": "#2994b2" }}>Trials</h3>
                                    </div>
                                    <div class="card-body p-0" style={{ "backgroundColor": "white" }}>
                                        <ul style={{ "color": "grey" }}>

                                            < table className="table  table-hover table-responsive-md table-striped" style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                                <thead>
                                                    <tr>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Title</th>
                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>More</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>

                                            </table>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        )
    }
};

const DashboardContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Dashboard);

export default DashboardContainer;