import React, { Component } from 'react';
import { connect } from "react-redux";
import icon from '../assets/person.png'
import * as actions from '../actions/AdminUpdatePatientProfileActions'
import NavContainer from '../components/Navbar/Navbar'
import background from '../assets/plus.jpg'




const stateToPropertiesMapper = ({ adminUpdatePatientProfileReducer }) => ({
    firstName: adminUpdatePatientProfileReducer.firstName,
    lastName: adminUpdatePatientProfileReducer.lastName,
    password: adminUpdatePatientProfileReducer.password,
    email: adminUpdatePatientProfileReducer.email,
    phone: adminUpdatePatientProfileReducer.phone,
    username: adminUpdatePatientProfileReducer.username,
    age:adminUpdatePatientProfileReducer.age,
    gender: adminUpdatePatientProfileReducer.gender,
    height: adminUpdatePatientProfileReducer.height,
    weight: adminUpdatePatientProfileReducer.weight
})

const dispatcherToPropsMapper = dispatch => {
    return {
        firstNameUpdateAdminPat: (firstName) => (actions.firstNameUpdateAdminPat(dispatch, firstName)),
        lastNameUpdateAdminPat: (lastName) => (actions.lastNameUpdateAdminPat(dispatch, lastName)),
        passwordUpdateAdminPat: (password) => (actions.passwordUpdateAdminPat(dispatch, password)),
        emailUpdateAdminPat: (email) => (actions.emailUpdateAdminPat(dispatch, email)),
        phoneUpdateAdminPat: (phone) => (actions.phoneUpdateAdminPat(dispatch, phone)),
        ageUpdateAdminPat: (age) => (actions.ageUpdateAdminPat(dispatch, age)),
        genderUpdateAdminPat: (gender) => (actions.genderUpdateAdminPat(dispatch, gender)),
        heightUpdateAdminPat: (height) => (actions.heightUpdateAdminPat(dispatch, height)),
        weightUpdateAdminPat: (weight) => (actions.weightUpdateAdminPat(dispatch, weight)),
        updatePatientAdmin: (userId) => (actions.updatePatientAdmin(dispatch, userId)),
        fetchPatientDetails: (patId) => (actions.fetchPatientDetails(dispatch, patId))
    }
};


class AdminUpdateProfilePatient extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPatientDetails(this.props.match.params.patId);
    }

    render() {
        let firstNameInput;
        let lastNameInput;
        let passwordInput;
        let emailInput;
        let phoneInput;
        let ageInput;
        let genderInput;
        let heightInput;
        let weightInput;
        return (
            <div>
                <div>
                    <NavContainer showLogin={false} showProfile={false} showAboutUs={false} showRegister={false} />
                </div>
                <div className='container-fluid pt-5' >
                    <div className="row">
                    <div className="col-md-4 offset-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="text-center font-weight-bold" style={{"color": "#2994b2"}}>Profile</h1>
                                </div>
                                <div class="card-body p-0">
                                    <div className='text-center card-img-top mt-3'>
                                        <img className="center" src={icon} width="60" height="60"/>
                                    </div>
                                    <div>
                                        <label htmlFor="firstName" style={{ "color": "#2994b2" }}><span className="font-weight-bold">First Name</span></label>
                                        <input required type="text" className="form-control" name="firstName" ref={node => firstNameInput = node}
                                            onChange={() => { this.props.firstNameUpdateAdminPat(firstNameInput.value) }} value={this.props.firstName} />

                                    </div>
                                    <div>
                                        <label htmlFor="lastName" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Last Name</span></label>
                                        <input required type="text" className="form-control" name="lastName" ref={node => lastNameInput = node}
                                            onChange={() => {
                                                this.props.lastNameUpdateAdminPat(lastNameInput.value)
                                            }} value={this.props.lastName} />
                                    </div>
                                    <div>
                                        <label htmlFor="username" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Username</span></label>
                                        <input disabled type="text" className="form-control" name="username" value={this.props.username} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Password</span></label>
                                        <input required type="password" className="form-control" name="password" ref={node => passwordInput = node}
                                            onChange={() => {
                                                this.props.passwordUpdateAdminPat(passwordInput.value)
                                            }} value={this.props.password} />
                                    </div>

                                    <div>
                                        <label htmlFor="email" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Email</span></label>
                                        <input required className="form-control" name="password" ref={node => emailInput = node}
                                            onChange={() => {
                                                this.props.emailUpdateAdminPat(emailInput.value)
                                            }} value={this.props.email} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Phone</span></label>
                                        <input required className="form-control" name="phone" ref={node => phoneInput = node}
                                            onChange={() => {
                                                this.props.phoneUpdateAdminPat(phoneInput.value)
                                            }} value={this.props.phone} />
                                    </div>
                                    <div>
                                        <label htmlFor="age" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Age</span></label>
                                        <input required className="form-control" name="age" ref={node => ageInput = node}
                                            onChange={() => {
                                                this.props.ageUpdateAdminPat(ageInput.value)
                                            }} value={this.props.age} />
                                    </div>
                                    <div>
                                        <label htmlFor="gender" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Gender</span></label>
                                        <input required className="form-control" name="gender" ref={node => genderInput = node}
                                            onChange={() => {
                                                this.props.genderUpdateAdminPat(genderInput.value)
                                            }} value={this.props.gender} />
                                    </div>
                                    <div>
                                        <label htmlFor="height" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Height</span></label>
                                        <input required className="form-control" name="height" ref={node => heightInput = node}
                                            onChange={() => {
                                                this.props.heightUpdateAdminPat(heightInput.value)
                                            }} value={this.props.height} />
                                    </div>
                                    <div>
                                        <label htmlFor="weight" style={{ "color": "#2994b2" }}><span className="font-weight-bold">Weight</span></label>
                                        <input required className="form-control" name="weight" ref={node => weightInput = node}
                                            onChange={() => {
                                                this.props.weightUpdateAdminPat(weightInput.value)
                                            }} value={this.props.weight} />
                                    </div>
                                    <p></p>

                                    <div className="form-group">
                                        <button className="btn btn-block m-0" style={{ "backgroundColor": "#22a7cc", "color": "white" }} onClick={() => {
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
                </div>
            </div>
        )
    }
}

const AdminUpdatePatientProfileContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(AdminUpdateProfilePatient)
export default AdminUpdatePatientProfileContainer