import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/Actions'
import logo from '../assets/TrialLogo2.jpeg.png'
import NavContainer from '../components/Navbar/Navbar'

const stateToPropertiesMapper = ({registerReducer}) => {

    return {
        role: registerReducer.role
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
        updateFirstName: (firstName) => (actions.updateFirstName(dispatch, firstName)),
        updateLastName: (lastName) => (actions.updateLastName(dispatch, lastName)),
        updateUsername: (username) => (actions.updateUsername(dispatch, username)),
        updatePassword: (password) => (actions.updatePassword(dispatch, password)),
        updateRole: (role) => (actions.updateRole(dispatch, role)),
        register: () => (actions.register(dispatch))

    }
};


const Register = ({updateFirstName, updateLastName, updateUsername, updatePassword, updateRole, register, role}) => {
    let firstNameInput;
    let lastNameInput;
    let usernameInput;
    let passwordInput;
    let roleInputPatient;
    let roleInputDoctor;

    return (
        <div>
            <div className='mb-lg-5'>
                <NavContainer showRegister={false} showProfile={false} showLogout={false}/>
            </div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-header">
                                <h1 style={{
                                    "textAlign": "center",
                                    "color": "#2994b2",
                                    "fontWeight": "bold"
                                }}>Register</h1>
                            </div>

                            <div class="card-body p-0">
                                <div className='card-img-top mt-3'>
                                    <img className="center" src={logo} width="60" height="60"/>
                                </div>
                                <div>
                                    <label htmlFor="firstName" style={{"color": "#2994b2"}}>First Name</label>
                                    <input required type="text" className="form-control" name="firstName"
                                           ref={node => firstNameInput = node}
                                           onChange={() => {
                                               updateFirstName(firstNameInput.value)
                                           }}/>

                                </div>
                                <div>
                                    <label htmlFor="lastName" style={{"color": "#2994b2"}}>Last Name</label>
                                    <input required type="text" className="form-control" name="lastName"
                                           ref={node => lastNameInput = node}
                                           onChange={() => {
                                               updateLastName(lastNameInput.value)
                                           }}/>
                                </div>
                                <div>
                                    <label htmlFor="username" style={{"color": "#2994b2"}}>Username</label>
                                    <input required type="text" className="form-control" name="username"
                                           ref={node => usernameInput = node}
                                           onChange={() => {
                                               updateUsername(usernameInput.value)
                                           }}/>
                                </div>
                                <div>
                                    <label htmlFor="password" style={{"color": "#2994b2"}}>Password</label>
                                    <input required type="password" className="form-control" name="password"
                                           ref={node => passwordInput = node}
                                           onChange={() => {
                                               updatePassword(passwordInput.value)
                                           }}/>
                                </div>
                                <p></p>
                                <label style={{"color": "#2994b2"}}>Role</label>


                                <div className="flex-row">
                                    <label style={{"color": "#2994b2", "marginRight": "10px"}}>
                                        <input required type="radio" value="Doctor" checked={role === "Doctor"}
                                               ref={node => roleInputDoctor = node} onChange={() => {
                                            updateRole(roleInputDoctor.value)
                                        }}/>
                                        Doctor
                                    </label>
                                    <label style={{"color": "#2994b2"}}>
                                        <input type="radio" value="Patient" checked={role === "Patient"}
                                               ref={node => roleInputPatient = node} onChange={() => {
                                            updateRole(roleInputPatient.value)
                                        }}/>
                                        Patient
                                    </label>
                                </div>


                                <div className="form-group">
                                    <button className="btn btn-block m-0"
                                            style={{"backgroundColor": "#22a7cc", "color": "white"}} onClick={() => {
                                        register()
                                    }}>Register
                                    </button>

                                </div>
                                <div className="card-footer mb-5">
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
const RegisterContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Register);
export default RegisterContainer
