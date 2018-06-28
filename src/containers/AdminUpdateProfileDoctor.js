import React, {Component} from 'react';
import {connect} from "react-redux";
import icon from '../assets/stethoscope-icon.png'
import * as actions from '../actions/AdminUpdateProfileActions'
import NavContainer from '../components/Navbar/Navbar'
import background from '../assets/plus.jpg'

const stateToPropertiesMapper = ({adminUpdateProfileDoctorReducer}) => ({
    firstName: adminUpdateProfileDoctorReducer.firstName,
    lastName: adminUpdateProfileDoctorReducer.lastName,
    password: adminUpdateProfileDoctorReducer.password,
    email: adminUpdateProfileDoctorReducer.email,
    phone: adminUpdateProfileDoctorReducer.phone,
    username: adminUpdateProfileDoctorReducer.username
})

const dispatcherToPropsMapper = dispatch => {
    return {
        firstNameUpdateAdmin: (firstName) => (actions.firstNameUpdateAdmin(dispatch, firstName)),
        lastNameUpdateAdmin: (lastName) => (actions.lastNameUpdateAdmin(dispatch, lastName)),
        passwordUpdateAdmin: (password) => (actions.passwordUpdateAdmin(dispatch, password)),
        emailUpdateAdmin: (email) => (actions.emailUpdateAdmin(dispatch, email)),
        phoneUpdateAdmin: (phone) => (actions.phoneUpdateAdmin(dispatch, phone)),
        updateDoctorAdmin: (userId) => (actions.updateDoctorAdmin(dispatch, userId)),
        fetchDoctorDetails: (docId) => (actions.fetchDoctorDetails(dispatch, docId))
    }
};


class AdminUpdateProfileDoctor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDoctorDetails(this.props.match.params.userId);
    }

    render() {
        let firstNameInput;
        let lastNameInput;
        let passwordInput;
        let emailInput;
        let phoneInput;
        return (
            <div>
                <div>
                    <NavContainer showLogin={false} showProfile={false} showAboutUs={false} showRegister={false}/>
                </div>
                <div className='container-fluid pt-5' style={{"backgroundImage": `url(${background})`}}>
                    <div className="row">
                        <div className="col-md-4 offset-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className='text-center font-weight-bold'
                                        style={{"color": "#2994b2"}}>Profile</h1>
                                </div>
                                <div class="card-body p-0">
                                    <div className='text-center card-img-top mt-3'>
                                        <img className="center" src={icon} width="60" height="60"/>
                                    </div>
                                    <div>
                                        <label htmlFor="firstName" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">First Name</span></label>
                                        <input required type="text" className="form-control" name="firstName"
                                               ref={node => firstNameInput = node}
                                               onChange={() => {
                                                   this.props.firstNameUpdateAdmin(firstNameInput.value)
                                               }} value={this.props.firstName}/>

                                    </div>
                                    <div>
                                        <label htmlFor="lastName" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">Last Name</span></label>
                                        <input required type="text" className="form-control" name="lastName"
                                               ref={node => lastNameInput = node}
                                               onChange={() => {
                                                   this.props.lastNameUpdateAdmin(lastNameInput.value)
                                               }} value={this.props.lastName}/>
                                    </div>
                                    <div>
                                        <label htmlFor="username" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">Username</span></label>
                                        <input disabled type="text" className="form-control" name="username"
                                               value={this.props.username}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">Password</span></label>
                                        <input required type="password" className="form-control" name="password"
                                               ref={node => passwordInput = node}
                                               onChange={() => {
                                                   this.props.passwordUpdateAdmin(passwordInput.value)
                                               }} value={this.props.password}/>
                                    </div>

                                    <div>
                                        <label htmlFor="email" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">Email</span></label>
                                        <input required className="form-control" name="password"
                                               ref={node => emailInput = node}
                                               onChange={() => {
                                                   this.props.emailUpdateAdmin(emailInput.value)
                                               }} value={this.props.email}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" style={{"color": "#2994b2"}}><span
                                            className="font-weight-bold">Phone</span></label>
                                        <input required className="form-control" name="phone"
                                               ref={node => phoneInput = node}
                                               onChange={() => {
                                                   this.props.phoneUpdateAdmin(phoneInput.value)
                                               }} value={this.props.phone}/>
                                    </div>
                                    <p></p>

                                    <div className="form-group">
                                        <button className="btn btn-block m-0"
                                                style={{"backgroundColor": "#22a7cc", "color": "white"}}
                                                onClick={() => {
                                                    this.props.updateDoctorAdmin(this.props.match.params.userId)
                                                }}>Update
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
    }
}

const AdminUpdateProfileContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(AdminUpdateProfileDoctor)
export default AdminUpdateProfileContainer