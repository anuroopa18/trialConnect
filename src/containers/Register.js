import React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/Actions'

const stateToPropertiesMapper = (state) => {
    
    return {
       role: state.role
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
        updateFirstName: (firstName) => (actions.updateFirstName( dispatch,firstName)),
        updateLastName: (lastName) => (actions.updateLastName(dispatch,lastName)),
        updateUsername: (username) => (actions.updateUsername(dispatch,username)),
        updatePassword: (password) => (actions.updatePassword(dispatch,password)),
        updateRole: (role) => (actions.updateRole(dispatch,role)),
        register:() => (actions.register(dispatch))

    }
}


const Register = ({ updateFirstName, updateLastName, updateUsername, updatePassword, updateRole,register,role }) => {
    let firstNameInput;
    let lastNameInput;
    let usernameInput;
    let passwordInput;
    let roleInputPatient;
    let roleInputDoctor;

    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>Register</h1>
            <form >
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" ref={node => firstNameInput = node} onChange={() => { updateFirstName(firstNameInput.value) }} />

                </div>
                <div >
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" ref={node => lastNameInput = node} onChange={() => { updateLastName(lastNameInput.value) }} />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" ref={node => usernameInput = node} onChange={() => { updateUsername(usernameInput.value) }} />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" ref={node => passwordInput = node} onChange={() => { updatePassword(passwordInput.value) }} />
                </div>
                <p></p>
                <label >Role</label>

                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Doctor" checked={role==="Doctor"} ref={node => roleInputDoctor = node} onChange={() => { updateRole(roleInputDoctor.value) }} />
                            Doctor
          </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Patient" checked={role==="Patient"} ref={node => roleInputPatient = node} onChange={() => { updateRole(roleInputPatient.value) }} />
                            Patient
          </label>
                    </div>
                </form>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => {register()}}>Register</button>

                </div>

            </form>
        </div>
    )
}
const RegisterContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Register);
export default RegisterContainer
