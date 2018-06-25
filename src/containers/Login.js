import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions/Actions'
import logo from '../assets/TrialLogo2.jpeg.png'

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
        <div className="row">
        <div className="col-md-4 ">
        </div>
        
        <div className="col-md-4 ">
            <div className="card">
            <div className="card-header">
            <h1 style={{"textAlign":"center","color":"#2994b2","fontWeight":"bold"}}>Login</h1>
            </div>
            <div class="card-body">
            <div style={{"justifyContent": "center","alignItems": "center"}}>
            <img className="center" src={logo} width="60" height="60"/>
            </div>
                <div>
                    <label htmlFor="username" style={{"color":"#2994b2"}}>Username</label>
                    <input type="text" className="form-control" name="username" ref={node => usernameInput = node}
                           onChange={() => {
                            loginUsername(usernameInput.value)
                           }}/>
                </div>
                <div>
                    <label htmlFor="password" style={{"color":"#2994b2"}}>Password</label>
                    <input type="password" className="form-control" name="password" ref={node => passwordInput = node}
                           onChange={() => {
                            loginPassword(passwordInput.value)
                           }}/>
                </div>
                <p></p>
                <label htmlFor="radio" style={{"color":"#2994b2"}}>Login as</label>
                 <div className="flex-row">
                    <div className="input-group">
                        <label  style={{"color":"#2994b2","marginRight":"10px"}}>
                            <input   type="radio" value="Doctor" checked={role === "Doctor"}
                                   ref={node => roleInputDoctor = node} onChange={() => {
                                    loginRole(roleInputDoctor.value)
                            }}/>
                            Doctor
                        </label>
                    
                   
                        <label style={{"color":"#2994b2"}}>
                            <input type="radio"  value="Patient" checked={role === "Patient"}
                                   ref={node => roleInputPatient = node} onChange={() => {
                                    loginRole(roleInputPatient.value)
                            }}/>
                            Patient
                        </label>
                        </div>
                    </div>
                    
                

                <div className="form-group">
                    <button className="btn btn-block btn-lg" style={{"backgroundColor":"#22a7cc","color":"white"}} onClick={() => {
                        login()
                    }}>Login
                    </button>

                </div>
                <div className="card-footer">
                <p>&nbsp;</p>
                </div>
                </div>    
                </div>       
        </div>
        <div className="col-md-4 ">
       
        </div>
        </div>
    )
};
const LoginContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Login);
export default LoginContainer
