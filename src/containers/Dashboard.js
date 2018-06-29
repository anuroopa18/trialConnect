import React from 'react'
import { connect } from 'react-redux'
import PatientStats from '../components/Dashboard/PatientStatistics'
import NavContainer from '../components/Navbar/Navbar'
import * as actions from '../actions/PatientDashboardActions'
import * as profileActions from '../actions/ProfileActions'
import TrialListings from "../components/Dashboard/TrialListings";
import { Link } from 'react-router-dom'

const stateToPropsMapper = ({ patientProfileReducer }) => ({
    
    patient: patientProfileReducer.patient,
    medicalRecords: patientProfileReducer.medicalRecords,
    user: patientProfileReducer.user,
    init: patientProfileReducer.init,
    bmi: patientProfileReducer.bmi,
    trials: patientProfileReducer.trials,
    role: patientProfileReducer.role,
    doctors:patientProfileReducer.doctors
});

const dispatchToPropsMapper = dispatch => {
    return {
        findPatientByUsername: (username) => (actions.findPatientByUsername(dispatch, username)),
        findDoctorsForPatient: (patientId) => (actions.findDoctorsForPatient(dispatch, patientId)),
        setUser: (user) => (profileActions.setUser(dispatch, user)),
        findAllTrials: () => (profileActions.findAllTrials(dispatch)),
    }
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props);
        if (this.props.init === true) {
            let user = JSON.parse(localStorage.getItem('user'));
            let role = localStorage.getItem('role');
            this.props.findPatientByUsername(this.props.match.params.username);
            this.props.findAllTrials();
            //this.props.findMedicalRecordsForPatient(this.props.patient.id);
            if (role.includes('Patient')) {
                this.props.findDoctorsForPatient(user.id);
                this.props.setUser(user);
            } else {
                console.log(this.props.match);
                this.props.findAllTrials();
                console.log(this.props);
            }
        } else {
            console.log('trials found');
        }
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <div className='mb-lg-5'>
                    <NavContainer showLogin={false} showHome={false} showRegister={false} showAboutUs={false} />
                </div>

                <div className='container-fluid pt-5'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-tabs border-0" style={{ "marginTop": "6px" }}
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical">
                                <a className="nav-link p-3 active" id="all-patients-tab" data-toggle="pill"
                                    href="#all-patients-view" role="tab" aria-controls="all-patients-view"
                                    aria-selected="true">
                                    <i class="fas fa-tachometer-alt text-secondary"></i><strong
                                        className="text-secondary">&nbsp;Patient Info</strong></a>
                                <a className="nav-link p-3"  hidden={this.props.role.includes('Doctor')} id="my-patients-tab" data-toggle="pill"
                                    href="#my-patients-view"
                                    role="tab" aria-controls="my-patients-view" aria-selected="false"><i class="fas fa-user-md text-secondary"></i>
                                    <strong className="text-secondary">&nbsp;My Doctors</strong>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="all-patients-view" role="tabpanel"
                                    aria-labelledby="all-patients-tab">
                                    <div className="container-fluid">
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
                                                                <div style={{ "color": "grey" }}>

                                                                    <table className="table  table-hover table-responsive-md table-striped"
                                                                        style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Medical
                                                                                    Condition
                                                    </th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Name</th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Cause
                                                    </th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Body
                                                                                    Temperature
                                                    </th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Pulse Rate</th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Blood Pressure
                                                    </th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>BMI</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.props.medicalRecords.map((mr, index) => {
                                                                                return <tr style={{ "color": "grey" }} key={index}>
                                                                                    <td>
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
                                                                </div>

                                                            </div>
                                                            <div className={'card-footer'}>
                                                                <button className='btn btn-sm btn-block m-0'
                                                                    hidden={this.props.role.includes('Patient')}
                                                                    onClick={() => (window.location.href = `/medRecord/create/${this.props.patient.id}`)}>
                                                                    <i
                                                                        className='fa fa-plus fa-2x'></i></button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='container bg-light mt-3 mb-5' hidden={!this.props.role.includes('Patient')}>
                                            <div className='row p-3'>
                                                <div className='col-md-12'>
                                                    <div className="container">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h3 className='text-center font-weight-bold'
                                                                    style={{ "color": "#2994b2" }}>Recommended Trials</h3>
                                                            </div>
                                                            <div class="card-body p-0" style={{ "backgroundColor": "white" }}>
                                                                <ul style={{ "color": "grey" }}>
                                                                    <table
                                                                        className="table  table-hover table-responsive-md table-striped"
                                                                        style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}>Title</th>
                                                                                <th className="th-lg" style={{ "color": "#55b4d4" }}></th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.props.trials.map((trial, i) => (
                                                                                <tr key={i}>
                                                                                    <div className='col-md-12 m-0'>
                                                                                        <td>
                                                                                            <div className='row'>
                                                                                                <div className='col-12'>
                                                                                                    {trial.title}
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </div>
                                                                                    <div className='col-md-4'>
                                                                                        <td>
                                                                                            <Link to={`/viewTrialInfo/${trial.nctId}`}>View</Link>
                                                                                        </td>
                                                                                    </div>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>

                                                                    </table>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {this.props.role.includes('Doctor') &&
                                                <TrialListings trials={this.props.trials} />
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="my-patients-view" role="tabpanel"
                                    aria-labelledby="my-patients-tab">
                                    <div className='container'>
                                        <table className="table  table-hover table-responsive-md table-striped"
                                               style={{"backgroundColor": "white", "borderRadius": "5px"}}>
                                            <thead>
                                            <tr>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>First Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Last Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Specialization</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Email</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Phone</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                               this.props.doctors !== undefined && this.props.doctors.map((d, i) => {
                                                    return (<tr key={i}>
                                                            <td>
                                                                {d.firstName}
                                                            </td>
                                                            <td>
                                                                {d.lastName}
                                                            </td>
                                                            <td>
                                                                {d.specialization}
                                                            </td>
                                                            <td>
                                                                {d.email}
                                                            </td>
                                                            <td>
                                                                {d.phone}
                                                            </td>
                                                           
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
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