import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/PatientProfileActions'
import icon from '../assets/person.png'


const stateToPropertiesMapper = ({ patientProfileReducer }) => ({
    updatedUser: patientProfileReducer.updatedUser

})

const dispatcherToPropsMapper = dispatch => {
    return {
        profileUpdateFirstName: (profileFirstName) => {
            return actions.profileUpdateFirstName(dispatch, profileFirstName)
        },
        profileUpdateLastName: (profileLastName) => (actions.profileUpdateLastName(dispatch, profileLastName)),
        profileUpdatePassword: (profilePassword) => (actions.profileUpdatePassword(dispatch, profilePassword)),
        profileUpdateEmail: (profileEmail) => (actions.profileUpdateEmail(dispatch, profileEmail)),
        profileUpdatePhone: (profilePhone) => (actions.profileUpdatePhone(dispatch, profilePhone)),
        update: () => (actions.update(dispatch)),
        fetchUserDetails: (patientId) => (actions.fetchUserDetails(dispatch, patientId))

    }
};




class PatientProfile extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
            let user = JSON.parse(localStorage.getItem('modifiedState.loginUser'));
            this.props.fetchUserDetails(user.id);

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
                                    value={this.props.updatedUser.firstName}
                                    onChange={() => {
                                        this.props.profileUpdateFirstName(firstNameInput.value)
                                    }} />

                            </div>
                            <div>
                                <label htmlFor="lastName" style={{ "color": "#2994b2" }}>Last Name</label>
                                <input required type="text" className="form-control" name="lastName" ref={node => lastNameInput = node}
                                    onChange={() => {
                                        this.props.profileUpdateLastName(lastNameInput.value)
                                    }} />
                            </div>
                            <div>
                                <label htmlFor="username" style={{ "color": "#2994b2" }}>Username</label>
                                <input disabled type="text" className="form-control" name="username" />
                            </div>
                            <div>
                                <label htmlFor="password" style={{ "color": "#2994b2" }}>Password</label>
                                <input required type="password" className="form-control" name="password" ref={node => passwordInput = node}
                                    onChange={() => {
                                        this.props.profileUpdatePassword(passwordInput.value)
                                    }} />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ "color": "#2994b2" }}>Email</label>
                                <input required className="form-control" name="password" ref={node => emailInput = node}
                                    onChange={() => {
                                        this.props.profileUpdateEmail(emailInput.value)
                                    }} />
                            </div>
                            <div>
                                <label htmlFor="phone" style={{ "color": "#2994b2" }}>Phone</label>
                                <input required className="form-control" name="phone" ref={node => phoneInput = node}
                                    onChange={() => {
                                        this.props.profileUpdatePhone(phoneInput.value)
                                    }} />
                            </div>
                            <p></p>

                            <div className="form-group">
                                <button className="btn btn-block btn-lg" style={{ "backgroundColor": "#22a7cc", "color": "white" }} onClick={() => {
                                    this.props.update()
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
};
const PatientProfileContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(PatientProfile);
export default PatientProfileContainer
