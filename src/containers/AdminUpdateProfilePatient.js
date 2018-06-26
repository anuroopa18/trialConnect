import React, { Component } from 'react';
import { connect } from "react-redux";
import icon from '../assets/person.png'
import * as actions from '../actions/AdminUpdatePatientProfileActions'




const stateToPropertiesMapper = ({adminUpdatePatientProfileReducer}) => ({
    firstName: adminUpdatePatientProfileReducer.firstName,
    lastName:adminUpdatePatientProfileReducer.lastName,
    password:adminUpdatePatientProfileReducer.password,
    email:adminUpdatePatientProfileReducer.email,
    phone:adminUpdatePatientProfileReducer.phone,
    username:adminUpdatePatientProfileReducer.username
})

const dispatcherToPropsMapper = dispatch => {
    return {
        firstNameUpdateAdminPat: (firstName) => (actions.firstNameUpdateAdminPat(dispatch, firstName)),
        lastNameUpdateAdminPat: (lastName) => (actions.lastNameUpdateAdminPat(dispatch, lastName)),
        passwordUpdateAdminPat: (password) => (actions.passwordUpdateAdminPat(dispatch, password)),
        emailUpdateAdminPat: (email) => (actions.emailUpdateAdminPat(dispatch, email)),
        phoneUpdateAdminPat: (phone) => (actions.phoneUpdateAdminPat(dispatch, phone)),
        updatePatientAdmin:(userId) => (actions.updatePatientAdmin(dispatch,userId)),
        fetchPatientDetails:(patId) => (actions.fetchPatientDetails(dispatch,patId))
    }
};


class AdminUpdateProfilePatient extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       this.props.fetchPatientDetails(this.props.match.params.patId);
    }

    render() {
        let firstNameInput;
        let lastNameInput;
        let passwordInput;
        let emailInput;
        let phoneInput;
        return (
            <div className="row">
                <div className="col-md-4 ">
                </div>
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="card-header">
                            <h1 style={{ "textAlign": "center", "color": "#2994b2", "fontWeight": "bold" }}>Profile</h1>
                        </div>
                        <div class="card-body">
                            <div style={{ "justifyContent": "center", "alignItems": "center" }}>
                                <img className="center" src={icon} width="60" height="60" />
                            </div>
                            <div>
                                <label htmlFor="firstName" style={{ "color": "#2994b2" }}>First Name</label>
                                <input required type="text" className="form-control" name="firstName" ref={node => firstNameInput = node}
                                    onChange={() => { this.props.firstNameUpdateAdminPat(firstNameInput.value) }} value={this.props.firstName}/>

                            </div>
                            <div>
                                <label htmlFor="lastName" style={{ "color": "#2994b2" }}>Last Name</label>
                                <input required type="text" className="form-control" name="lastName" ref={node => lastNameInput = node}
                                    onChange={() => {
                                        this.props.lastNameUpdateAdminPat(lastNameInput.value)
                                    }}  value={this.props.lastName} />
                            </div>
                            <div>
                                <label htmlFor="username" style={{ "color": "#2994b2" }}>Username</label>
                                <input disabled type="text" className="form-control" name="username"  value={this.props.username}/>
                            </div>
                            <div>
                                <label htmlFor="password" style={{ "color": "#2994b2" }}>Password</label>
                                <input required type="password" className="form-control" name="password" ref={node => passwordInput = node}
                                    onChange={() => {
                                        this.props.passwordUpdateAdminPat(passwordInput.value)
                                    }} value={this.props.password} />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ "color": "#2994b2" }}>Email</label>
                                <input required className="form-control" name="password" ref={node => emailInput = node}
                                    onChange={() => {
                                        this.props.emailUpdateAdminPat(emailInput.value)
                                    }} value={this.props.email} />
                            </div>
                            <div>
                                <label htmlFor="phone" style={{ "color": "#2994b2" }}>Phone</label>
                                <input required className="form-control" name="phone" ref={node => phoneInput = node}
                                    onChange={() => {
                                        this.props.phoneUpdateAdminPat(phoneInput.value)
                                    }} value={this.props.phone} />
                            </div>
                            <p></p>

                            <div className="form-group">
                                <button className="btn btn-block btn-lg" style={{ "backgroundColor": "#22a7cc", "color": "white" }} onClick={() => {
                                    this.props.updatePatientAdmin(this.props.match.params.patId)
                                }}>Update
                </button>

                            </div>
                            <div className="card-footer">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

const AdminUpdatePatientProfileContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(AdminUpdateProfilePatient)
export default AdminUpdatePatientProfileContainer