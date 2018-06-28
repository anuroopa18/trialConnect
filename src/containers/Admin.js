import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/AdminActions'
import { Link } from 'react-router-dom'
import icon from '../assets/person.png'
import NavbarContainer from '../components/Navbar/Navbar'
import background from '../assets/plus.jpg'


const stateToPropertiesMapper = ({ adminReducer }) => {
    console.log(adminReducer);
    return {
        doctors: adminReducer.doctors,
        patients: adminReducer.patients,
        role: adminReducer.role,
        user: adminReducer.user,
        records: adminReducer.records,
    }
};


const dispatcherToPropsMapper = dispatch => {
    return {
        findAllDoctors: () => (actions.findAllDoctors(dispatch)),
        findAllPatients: () => (actions.findAllPatients(dispatch)),
        deleteDoctor: (doctorId) => (actions.deleteDoctor(dispatch, doctorId)),
        deletePatient: (patientId) => (actions.deletePatient(dispatch, patientId)),
        deleteRecord: (recordId) => (actions.deleteRecord(dispatch, recordId)),
        adminUpdateFirstName: (firstName) => (actions.adminUpdateFirstName(dispatch, firstName)),
        adminUpdateLastName: (lastName) => (actions.adminUpdateLastName(dispatch, lastName)),
        adminUpdateUsername: (username) => (actions.adminUpdateUsername(dispatch, username)),
        adminUpdatePassword: (password) => (actions.adminUpdatePassword(dispatch, password)),
        adminUpdateRole: (role) => (actions.adminUpdateRole(dispatch, role)),
        //findAllRecords: () => (actions.findAllRecords(dispatch)),
        add: (role, user) => (actions.add(dispatch, role, user))
    }
};


class Admin extends Component {
    validateFields = ({ user, role, add }) => {
        console.log(user);
        if ((user.firstName !== undefined && user.firstName !== "") &&
            (user.lastName !== undefined && user.lastName !== "") &&
            (user.username !== undefined && user.username !== "") &&
            (user.password !== undefined && user.password !== "")
        ) {
            add(role, user);
        }
        else {
            alert("Please fill all the fields!!");
        }

    }

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.findAllDoctors();
        this.props.findAllPatients();

    }

    render() {

        let firstNameInput;
        let lastNameInput;
        let usernameInput;
        let passwordInput;
        let roleInputPatient;
        let roleInputDoctor;

        return (
            <div>
                <div className="pb-lg-1">
                    <NavbarContainer showLogin={false} showHome={false} showRegister={false} showProfile={false} showAboutUs={false} />
                </div>
                <div className="container-fluid pt-5 adminContent" style={{ "backgroundImage": `url(${background})` }}>
                    <div className="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-tabs border-0" style={{ "marginTop": "6px" }} id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                <a className="nav-link p-3 active" id="v-pills-view-user-tab" data-toggle="pill"
                                    href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i class="fa fa-eye text-secondary"></i><strong className="text-secondary">&nbsp;View Users</strong></a>
                                <a class="nav-link p-3" id="v-pills-add-user-tab" data-toggle="pill" href="#v-pills-profile"
                                    role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-user-plus text-secondary"></i>
                                    <strong className="text-secondary">&nbsp;Add Users</strong></a>
                                <a class="nav-link p-3" id="v-pills-add-user-tab" data-toggle="pill"
                                    href="#v-pills-medical-record" role="tab" aria-controls="v-pills-record"
                                    aria-selected="false" ><i class="fas fa-notes-medical text-secondary"></i><strong className="text-secondary">&nbsp;View Medical Records</strong></a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                    aria-labelledby="v-pills-view-user-tab">
                                    <div className='container'>
                                        <div>
                                            <div className='card' style={{ "marginTop": "1%" }}>
                                                <ul className='nav nav-tabs nav-fill border-0 '>
                                                    <li className='nav-item active'>
                                                        <a href='#' className='nav-link p-3 active' id='doctors-tab'
                                                            data-toggle="tab"
                                                            href="#doctors"
                                                            role="tab" aria-controls="doctors"
                                                            aria-selected="false"><strong
                                                                className='text-secondary'>Doctors</strong></a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link p-3' href='#' id='patients-tab'
                                                            data-toggle="tab"
                                                            href="#patients"
                                                            role="tab" aria-controls="patients"
                                                            aria-selected="true"><strong
                                                                className='text-secondary'>Patients</strong></a>
                                                    </li>

                                                </ul>
                                                <div className='tab-content pt-3'>
                                                    <div className='tab-pane fade show active' id='doctors'
                                                        role="tabpanel"
                                                        aria-labelledby="doctors-tab">
                                                        <div className='container'>

                                                            < table className="table  table-hover table-responsive-md table-striped" style={{ "backgroundColor": "white" }}>
                                                                <thead>
                                                                    <tr >
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>First Name</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Last Name</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Email</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Phone</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Specialization</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}></th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.props.doctors.map((doctor, index) => {
                                                                        return <tr style={{ "color": "grey" }} key={index}>
                                                                            <td>

                                                                                {doctor.firstName}

                                                                            </td>
                                                                            <td>
                                                                                {doctor.lastName}
                                                                            </td>
                                                                            <td>
                                                                                {doctor.email}
                                                                            </td>
                                                                            <td>
                                                                                {doctor.phone}
                                                                            </td>
                                                                            <td>
                                                                                {doctor.specialization}
                                                                            </td>
                                                                            <td>
                                                                                <Link style={{ "color": "#55b4d4" }}
                                                                                    to={`/admin/updateProfile/${doctor.id}`}>
                                                                                    <i class="fa fa-edit"></i>
                                                                                </Link>
                                                                            </td>
                                                                            <td>
                                                                                <i class="fa fa-times" onClick={
                                                                                    () => {
                                                                                        if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteDoctor(doctor.id)
                                                                                    }} style={{ "color": "red" }}></i>

                                                                            </td>
                                                                        </tr>
                                                                    }
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                    <div className='tab-pane fade' id='patients' role="tabpanel"
                                                        aria-labelledby="patients-tab">
                                                        <div className='container'>

                                                            < table className="table  table-hover table-responsive-md table-striped" style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>First Name</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Last Name</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Email</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Phone</th>
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}></th>
                                                                        <th className="th-lg"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.props.patients.map((patient, index) => {
                                                                        return <tr style={{ "color": "grey" }} key={index}>
                                                                            <td >
                                                                                {patient.firstName}
                                                                            </td>
                                                                            <td>
                                                                                {patient.lastName}
                                                                            </td>
                                                                            <td>
                                                                                {patient.email}
                                                                            </td>
                                                                            <td>
                                                                                {patient.phone}
                                                                            </td>
                                                                            <td>
                                                                                <Link style={{ "color": "#55b4d4" }} to={`/admin/updatePatientProfile/${patient.id}`}>
                                                                                    <i class="fa fa-edit"></i>
                                                                                </Link>
                                                                            </td>
                                                                            <td>
                                                                                <i class="fa fa-times" onClick={() => {
                                                                                    if (window.confirm('Are you sure you wish to delete this item?')) this.props.deletePatient(patient.id)
                                                                                }} style={{ "color": "red" }}></i>
                                                                            </td>

                                                                        </tr>
                                                                    }
                                                                    )}
                                                                </tbody>
                                                            </table>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-add-user-tab">
                                    <div className='container-fluid'>
                                        <div className="row">
                                            <div className="col-md-6 offset-2">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h1 className='text-center font-weight-bold'
                                                            style={{ "color": "#2994b2" }}>Add User</h1>
                                                    </div>
                                                    <div class="card-body p-0">
                                                        <div className='text-center card-img-top mt-3'>
                                                            <img className="center" src={icon} width="60" height="60" />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="firstName" style={{ "color": "#2994b2" }}><span className="font-weight-bold">First Name</span></label>
                                                            <input required type="text" className="form-control" name="firstName"
                                                                ref={node => firstNameInput = node}
                                                                onChange={() => {
                                                                    this.props.adminUpdateFirstName(firstNameInput.value)
                                                                }} />

                                                        </div>
                                                        <div>
                                                            <label htmlFor="lastName" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Last Name</span></label>
                                                            <input required type="text" className="form-control" name="lastName"
                                                                ref={node => lastNameInput = node}
                                                                onChange={() => {
                                                                    this.props.adminUpdateLastName(lastNameInput.value)
                                                                }} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="username" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Username</span></label>
                                                            <input required type="text" className="form-control" name="username"
                                                                ref={node => usernameInput = node}
                                                                onChange={() => {
                                                                    this.props.adminUpdateUsername(usernameInput.value)
                                                                }} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="password" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Password</span></label>
                                                            <input required type="password" className="form-control" name="password"
                                                                ref={node => passwordInput = node}
                                                                onChange={() => {
                                                                    this.props.adminUpdatePassword(passwordInput.value)
                                                                }} />
                                                        </div>
                                                        <p></p>
                                                        <label style={{ "color": "#2994b2" }}><span className="font-weight-bold">Role</span></label>


                                                        <div className="flex-row">
                                                            <label style={{ "color": "#2994b2", "marginRight": "10px" }}>
                                                                <input required type="radio" value="Doctor"
                                                                    checked={this.props.role === "Doctor"}
                                                                    ref={node => roleInputDoctor = node} onChange={() => {
                                                                        this.props.adminUpdateRole(roleInputDoctor.value)
                                                                    }} />
                                                                <span className="font-weight-bold p-2">Doctor</span>
                                                            </label>

                                                            <label style={{ "color": "#2994b2" }}>
                                                                <input type="radio" value="Patient"
                                                                    checked={this.props.role === "Patient"}
                                                                    ref={node => roleInputPatient = node} onChange={() => {
                                                                        this.props.adminUpdateRole(roleInputPatient.value)
                                                                    }} />
                                                                <span className="font-weight-bold p-2">Patient</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="btn btn-block m-0" style={{ "backgroundColor": "#22a7cc", "color": "white" }}
                                                                onClick={() => {
                                                                    this.validateFields(this.props)
                                                                }}>Add
                                                            </button>
                                                            <div className="card-footer mb-5">
                                                                <p>&nbsp;</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="tab-pane fade " id="v-pills-medical-record" role="tabpanel"
                                    aria-labelledby="v-pills-view-user-tab">
                                    <div className="container-fluid">
                                        <div className="card">
                                            <div className="card-header">
                                                <h1 className='text-center font-weight-bold'
                                                    style={{ "color": "#2994b2" }}>Medical Records For Patients</h1>
                                            </div>
                                            <div class="card-body p-0" style={{ "backgroundColor": "white" }}>
                                                <ul style={{ "color": "grey" }}>
                                                    {this.props.patients.map((patient, index) => {
                                                        return <li style={{ "color": "grey" }} key={index}>
                                                            <h6> <strong style={{ "color": "#55b4d4" }}>Patient Name:</strong> {patient.firstName} </h6>

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
                                                                        <th className="th-lg" style={{ "color": "#55b4d4" }}></th>
                                                                        <th className="th-lg"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {patient.medicalRecord.map((mr, index) => {
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
                                                                            <td>
                                                                                <i class="fa fa-times" style={{ "color": "red" }} onClick={() => {
                                                                                    if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteRecord(mr.id)
                                                                                }}></i>
                                                                            </td>
                                                                        </tr>

                                                                    })}
                                                                </tbody>
                                                            </table>



                                                        </li>
                                                    }

                                                    )}

                                                </ul>
                                            </div>
                                        </div>
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
const AdminContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Admin);
export default AdminContainer
