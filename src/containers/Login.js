import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions/Actions'

const stateToPropertiesMapper = ({loginReducer}) => {

    return {
        role: loginReducer.role
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
      loginUsername: (lUsername) => (actions.loginUsername(dispatch, lUsername)),
      loginPassword: (lPassword) => (actions.loginPassword(dispatch, lPassword)),
      loginRole: (lRole) => (actions.loginRole(dispatch, lRole)),
      login: () => (actions.login(dispatch))

    }
};


const Login = ({loginUsername,loginPassword,loginRole,login,role}) => {
    let usernameInput;
    let passwordInput;
    let roleInputPatient;
    let roleInputDoctor;

    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>Login</h1>
            
               
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" ref={node => usernameInput = node}
                           onChange={() => {
                            loginUsername(usernameInput.value)
                           }}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" ref={node => passwordInput = node}
                           onChange={() => {
                            loginPassword(passwordInput.value)
                           }}/>
                </div>
                <p></p>
                <label>Login as</label>

                    <div className="radio">
                        <label>
                            <input type="radio" value="Doctor" checked={role === "Doctor"}
                                   ref={node => roleInputDoctor = node} onChange={() => {
                                    loginRole(roleInputDoctor.value)
                            }}/>
                            Doctor
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Patient" checked={role === "Patient"}
                                   ref={node => roleInputPatient = node} onChange={() => {
                                    loginRole(roleInputPatient.value)
                            }}/>
                            Patient
                        </label>
                    </div>
                

                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => {
                        login()
                    }}>Login
                    </button>

                </div>           
        </div>
    )
};
const LoginContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Login);
export default LoginContainer
