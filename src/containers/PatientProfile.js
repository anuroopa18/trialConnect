import React, {
    Component
} from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/PatientProfileActions'


const stateToPropertiesMapper = ({ patientProfileReducer }) => ({
        updatedUser: patientProfileReducer.updatedUser,
        init:patientProfileReducer.init

})

const dispatcherToPropsMapper = dispatch => {
    return {
        updateFirstName: (firstName) => (actions.updateFirstName(dispatch, firstName)),
        updateLastName: (lastName) => (actions.updateLastName(dispatch, lastName)),
        updatePassword: (password) => (actions.updatePassword(dispatch, password)),
        updateEmail: (email) => (actions.updateEmail(dispatch, email)),
        updatePhone: (phone) => (actions.updatePhone(dispatch, phone)),
        update: () => (actions.update(dispatch)),
        fetchUserDetails: (patientId) => (actions.fetchUserDetails(dispatch, patientId))

    }
};




class PatientProfile extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if(this.props.init){
        let user = JSON.parse(localStorage.getItem('modifiedState.loginUser'));
        this.props.fetchUserDetails(user.id);
        }

    }



    render() {
        let firstNameInput;
        let lastNameInput;
        let passwordInput;
        let emailInput;
        let phoneInput;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Profile</h1>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input required type="text" className="form-control" name="firstName" ref={node => firstNameInput = node}
                        value={this.props.updatedUser.firstName}
                        onChange={() => {
                            this.props.updateFirstName(firstNameInput.value)
                        }} />

                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input required type="text" className="form-control" name="lastName" ref={node => lastNameInput = node}
                        onChange={() => {
                            this.props.updateLastName(lastNameInput.value)
                        }} />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input disabled type="text" className="form-control" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input required type="password" className="form-control" name="password" ref={node => passwordInput = node}
                        onChange={() => {
                            this.props.updatePassword(passwordInput.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input required className="form-control" name="password" ref={node => emailInput = node}
                        onChange={() => {
                            this.props.updateEmail(emailInput.value)
                        }} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input required className="form-control" name="phone" ref={node => phoneInput = node}
                        onChange={() => {
                            this.props.updatePhone(phoneInput.value)
                        }} />
                </div>
                <p></p>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.update()
                    }}>update
                    </button>

                </div>


            </div>
        )
    }
};
const PatientProfileContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(PatientProfile);
export default PatientProfileContainer
