import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions/AdminActions'
import {Link} from 'react-router-dom'
import NavbarContainer from '../components/Navbar/Navbar'


const stateToPropertiesMapper = ({adminReducer}) => {
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
        adminUpdateFirstName: (firstName) => (actions.adminUpdateFirstName(dispatch, firstName)),
        adminUpdateLastName: (lastName) => (actions.adminUpdateLastName(dispatch, lastName)),
        adminUpdateUsername: (username) => (actions.adminUpdateUsername(dispatch, username)),
        adminUpdatePassword: (password) => (actions.adminUpdatePassword(dispatch, password)),
        adminUpdateRole: (role) => (actions.adminUpdateRole(dispatch, role)),
        findAllRecords: () => (actions.findAllRecords(dispatch)),
        add: (role, user) => (actions.add(dispatch, role, user))
    }
};


class Admin extends Component {
    validateFields = ({user, role, add}) => {
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
        this.props.findAllRecords();
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
                <div className='mb-lg-5 pb-lg-5'>
                    <NavbarContainer showLogin={false} showRegister={false} showProfile={false} showAboutUs={false}/>
                </div>
                <div className='container-fluid pb-5 mb-5'>
                    <div className="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-view-user-tab" data-toggle="pill"
                                   href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">View
                                    Users</a>
                                <a class="nav-link" id="v-pills-add-user-tab" data-toggle="pill" href="#v-pills-profile"
                                   role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Users</a>
                                <a class="nav-link" id="v-pills-add-user-tab" data-toggle="pill"
                                   href="#v-pills-medical-record" role="tab" aria-controls="v-pills-record"
                                   aria-selected="false">View Medical Records</a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-view-user-tab">
                                    <div className='container'>
                                        <div>
                                            <div className='card' style={{"marginTop": "1%"}}>
                                                <ul className='nav nav-tabs nav-fill'>
                                                    <li className='nav-item active'>
                                                        <a href='#' className='nav-link active' id='doctors-tab'
                                                           data-toggle="tab"
                                                           href="#doctors"
                                                           role="tab" aria-controls="doctors"
                                                           aria-selected="false"><strong
                                                            className='text-secondary'>Doctors</strong></a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link' href='#' id='patients-tab'
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
                                                            < table className="table  table-hover table-responsive-md">
                                                                <thead>
                                                                <tr>
                                                                    <th className="th-lg">First Name</th>
                                                                    <th className="th-lg">Last Name</th>
                                                                    <th className="th-lg">Email</th>
                                                                    <th className="th-lg">Phone</th>
                                                                    <th className="th-lg">Specialization</th>
                                                                    <th className="th-lg"></th>
                                                                    <th className="th-lg"></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {this.props.doctors.map((doctor, index) => {
                                                                        return <tr key={index}>
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
                                                                                <Link style={{"color": "black"}}
                                                                                      to={`/admin/updateProfile/${doctor.id}`}>
                                                                                    <i class="fa fa-edit"></i>
                                                                                </Link>
                                                                            </td>
                                                                            <td>
                                                                                <i class="fa fa-times" onClick={
                                                                                    () => {
                                                                                        if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteDoctor(doctor.id)
                                                                                    }} style={{"color": "red"}}></i>

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
                                                            < table className="table  table-hover table-responsive-md">
                                                                <thead>
                                                                <tr>
                                                                    <th className="th-lg">First Name</th>
                                                                    <th className="th-lg">Last Name</th>
                                                                    <th className="th-lg">Email</th>
                                                                    <th className="th-lg">Phone</th>
                                                                    <th className="th-lg"></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {this.props.patients.map((patient, index) => {
                                                                        return <tr key={index}>
                                                                            <td>
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
                                                                                <i class="fa fa-times" onClick={() => {
                                                                                    if (window.confirm('Are you sure you wish to delete this item?')) this.props.deletePatient(patient.id)
                                                                                }} style={{"color": "red"}}></i>
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
                                    <div className="col-md-6 col-md-offset-3">
                                        <h1>Add User</h1>

                                        <div>
                                            <label htmlFor="firstName">First Name</label>
                                            <input required type="text" className="form-control" name="firstName"
                                                   ref={node => firstNameInput = node}
                                                   onChange={() => {
                                                       this.props.adminUpdateFirstName(firstNameInput.value)
                                                   }}/>

                                        </div>
                                        <div>
                                            <label htmlFor="lastName">Last Name</label>
                                            <input required type="text" className="form-control" name="lastName"
                                                   ref={node => lastNameInput = node}
                                                   onChange={() => {
                                                       this.props.adminUpdateLastName(lastNameInput.value)
                                                   }}/>
                                        </div>
                                        <div>
                                            <label htmlFor="username">Username</label>
                                            <input required type="text" className="form-control" name="username"
                                                   ref={node => usernameInput = node}
                                                   onChange={() => {
                                                       this.props.adminUpdateUsername(usernameInput.value)
                                                   }}/>
                                        </div>
                                        <div>
                                            <label htmlFor="password">Password</label>
                                            <input required type="password" className="form-control" name="password"
                                                   ref={node => passwordInput = node}
                                                   onChange={() => {
                                                       this.props.adminUpdatePassword(passwordInput.value)
                                                   }}/>
                                        </div>
                                        <p></p>
                                        <label>Role</label>


                                        <div className="radio">
                                            <label>
                                                <input required type="radio" value="Doctor"
                                                       checked={this.props.role === "Doctor"}
                                                       ref={node => roleInputDoctor = node} onChange={() => {
                                                    this.props.adminUpdateRole(roleInputDoctor.value)
                                                }}/>
                                                Doctor
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="Patient"
                                                       checked={this.props.role === "Patient"}
                                                       ref={node => roleInputPatient = node} onChange={() => {
                                                    this.props.adminUpdateRole(roleInputPatient.value)
                                                }}/>
                                                Patient
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary" onClick={() => {
                                                this.validateFields(this.props)
                                            }}>Add
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade " id="v-pills-medical-record" role="tabpanel"
                                     aria-labelledby="v-pills-view-user-tab">
                                    <h2>Medical Records </h2>
                                    <div className='container'>
                                        < table className="table  table-hover table-responsive-md">
                                            <thead>
                                            <tr>
                                                <th className="th-lg">Patient</th>
                                                <th className="th-lg">Gender</th>
                                                <th className="th-lg">Medicine</th>
                                                <th className="th-lg">Problem</th>
                                                <th className="th-lg">Results</th>
                                                <th className="th-lg">Visits</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.records.map((record, index) => {
                                                    return <tr key={index}>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            {record.gender}
                                                        </td>
                                                        <td>
                                                            {record.medicine}
                                                        </td>
                                                        <td>
                                                            {record.problem}
                                                        </td>
                                                        <td>
                                                            {record.results}
                                                        </td>
                                                        <td>
                                                            {record.visits}
                                                        </td>

                                                        <td>
                                                            <i class="fa fa-times" style={{"color": "red"}}></i>
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
        )
    }
};
const AdminContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Admin);
export default AdminContainer