import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/ProfileActions'
import NavContainer from '../Navbar/Navbar'
import icon from '../../assets/person.png'
import background from '../../assets/plus.jpg'

const stateToPropsMapper = ({patientProfileReducer}) => {
    console.log(patientProfileReducer);
    return {
        user: patientProfileReducer.user,
        init: patientProfileReducer.init,
        firstName: patientProfileReducer.firstName,
        lastName: patientProfileReducer.lastName,
        phone: patientProfileReducer.phone,
        email: patientProfileReducer.email,
        password: patientProfileReducer.password,
        username: patientProfileReducer.username
    }
};

const dispatchToPropsMapper = dispatch => ({
    updateUserFirstName: (firstName) => (actions.updateUserFirstName(dispatch, firstName)),
    updateLastName: (lastName) => (actions.updateLastName(dispatch, lastName)),
    updatePassword: (password) => (actions.updatePassword(dispatch, password)),
    updatePhone: (phone) => (actions.updatePhone(dispatch, phone)),
    updateEmail: (email) => (actions.updateEmail(dispatch, email)),
    updateUser: (firstName, lastName, phone, email, password, patientId) =>
        (actions.update(dispatch, firstName, lastName, phone, email, password, patientId)),
    setUser: (user) => (actions.setUser(dispatch, user))
});

const PatientProfile = ({
                            firstName, lastName, phone, email, password, user, updateUserFirstName,
                            updateLastName, setUser, updatePassword, updatePhone,username,
                            updateEmail, updateUser, match, init
                        }) => {

    if (init === true) {
        let localUser = JSON.parse(localStorage.getItem('user'));
        console.log(localUser);
        setUser(localUser)
    }
    let firstNameInput;
    let lastNameInput;
    let passwordInput;
    let emailInput;
    let phoneInput;
    console.log('password: ' + password);
    return (
        <div>
            <div>
                <NavContainer showLogin={false} showProfile={false} showRegister={false} showAboutUs={false} user={user}/>
            </div>
            <div className='container-fluid pt-5' style={{"backgroundImage":`url(${background})`}}>
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-header">
                                <h1 className='text-center font-weight-bold'
                                    style={{"color": "#2994b2"}}>
                                    Profile</h1>
                            </div>
                            <div className="card-body p-0">
                                <div className='card-img-top text-center mt-3'>
                                    <img className="center" src={icon} width="60" height="60"/>
                                </div>
                                <div>
                                    <label htmlFor="firstName" style={{"color": "#2994b2"}}><span className="font-weight-bold">First Name</span></label>
                                    <input required type="text" className="form-control" name="firstName"
                                           ref={node => firstNameInput = node}
                                           value={firstName}
                                           onChange={() => {
                                               updateUserFirstName(firstNameInput.value)
                                           }}/>

                                </div>
                                <div>
                                    <label htmlFor="lastName" style={{"color": "#2994b2"}}><span className="font-weight-bold">Last Name</span></label>
                                    <input required type="text" className="form-control" name="lastName"
                                           value={lastName}
                                           ref={node => lastNameInput = node}
                                           onChange={() => {
                                               updateLastName(lastNameInput.value)
                                           }}/>
                                </div>
                                <div>
                                    <label htmlFor="username" style={{"color": "#2994b2"}}><span className="font-weight-bold">Username</span></label>
                                    <input disabled type="text" className="form-control" name="username" value={username}/>
                                </div>
                                <div>
                                    <label htmlFor="password" style={{"color": "#2994b2"}}><span className="font-weight-bold">Password</span></label>
                                    <input required type="password" className="form-control" name="password"
                                           value={password}
                                           ref={node => passwordInput = node}
                                           onChange={() => {
                                               updatePassword(passwordInput.value)
                                           }}/>
                                </div>

                                <div>
                                    <label htmlFor="email" style={{"color": "#2994b2"}}><span className="font-weight-bold">Email</span></label>
                                    <input required className="form-control" name="email" value={email}
                                           ref={node => emailInput = node}
                                           onChange={() => {
                                               updateEmail(emailInput.value)
                                           }}/>
                                </div>
                                <div>
                                    <label htmlFor="phone" style={{"color": "#2994b2"}}><span className="font-weight-bold">Phone</span></label>
                                    <input required className="form-control" name="phone" value={phone}
                                           ref={node => phoneInput = node}
                                           onChange={() => {
                                               updatePhone(phoneInput.value)
                                           }}/>
                                </div>
                                <p></p>

                                <div className="form-group">
                                    <button className="btn btn-block m-0"
                                            style={{"backgroundColor": "#22a7cc", "color": "white"}} onClick={() => {
                                        updateUser(firstName, lastName, phone, email, password, user.id)
                                    }}>UPDATE
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
};

const PatientProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(PatientProfile);

export default PatientProfileContainer