import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions/Actions'
import logo from '../assets/TrialLogo2.jpeg.png'
import NavContainer from '../components/Navbar/Navbar'
import background from '../assets/plus.jpg'

const stateToPropertiesMapper = ({loginReducer}) => {

    return {
        role: loginReducer.role,
        username: loginReducer.loginUser.username,
        password: loginReducer.loginUser.password
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
        loginUsername: (lUsername) => (actions.loginUsername(dispatch, lUsername)),
        loginPassword: (lPassword) => (actions.loginPassword(dispatch, lPassword)),
        loginRole: (lRole) => (actions.loginRole(dispatch, lRole)),
        login: (username, password, role) => (actions.login(dispatch, username, password, role))
    }
};


const Login = ({loginUsername, loginPassword, loginRole, login, role, username, password}) => {
    let usernameInput;
    let passwordInput;
    let roleInputPatient;
    let roleInputDoctor;


    return (
        <div>
            <div>
                <NavContainer showLogin={false} showHome={false} showProfile={false} showLogout={false}/>
            </div>
            <div className='container-fluid pt-5 adminContent' style={{"backgroundImage":`url(${background})`}}>
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center font-weight-bold" style={{"color": "#2994b2"}}>Login</h1>
                            </div>
                            <div className="card-body p-0">
                                <div className='text-center mt-3 mb-0'>
                                    <img className="center" src={logo} width="60" height="60"/>
                                </div>
                                <div>
                                    <label htmlFor="username" style={{"color": "#2994b2"}}><span
                                        className='font-weight-bold'>Username</span></label>
                                    <input type="text" className="form-control" name="username"
                                           ref={node => usernameInput = node}
                                           onChange={() => {
                                               loginUsername(usernameInput.value)
                                           }}/>
                                </div>
                                <div>
                                    <label className='font-weight-bold' htmlFor="password"
                                           style={{"color": "#2994b2"}}>Password</label>
                                    <input type="password" className="form-control" name="password"
                                           ref={node => passwordInput = node}
                                           onChange={() => {
                                               loginPassword(passwordInput.value)
                                           }}/>
                                </div>
                                <p></p>
                                <label htmlFor="radio" className="font-weight-bold" style={{"color": "#2994b2"}}>Login
                                    as</label>
                                <div className="flex-row">
                                    <div className="input-group">
                                        <label style={{"color": "#2994b2", "marginRight": "10px"}}>
                                            <input className="mx-0 p-1" type="radio" value="Doctor"
                                                   checked={role === "Doctor"}
                                                   ref={node => roleInputDoctor = node} onChange={() => {
                                                loginRole(roleInputDoctor.value)
                                            }}/>
                                            <span className='p-2 font-weight-bold'>Doctor</span>
                                        </label>
                                        <label style={{"color": "#2994b2"}}>
                                            <input type="radio" value="Patient" checked={role === "Patient"}
                                                   ref={node => roleInputPatient = node} onChange={() => {
                                                loginRole(roleInputPatient.value)
                                            }}/>
                                            <span className='p-2 font-weight-bold'>Patient</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block m-0 font-weight-bold"
                                            style={{"backgroundColor": "#22a7cc", "color": "white"}} onClick={() => {
                                        login(username, password, role);
                                    }}>Login
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
const LoginContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Login);
export default LoginContainer
