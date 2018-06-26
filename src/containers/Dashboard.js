import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PatientStats from '../components/Dashboard/PatientStatistics'
import MedicalRecord from '../components/Dashboard/MedicalRecord'
import NavContainer from '../components/Navbar/Navbar'
import * as actions from '../actions/ProfileActions'

const stateToPropsMapper = ({patientProfileReducer}) => {
    console.log(patientProfileReducer);
    return {
        user: patientProfileReducer.user,
        init: patientProfileReducer.init
    }
};

const dispatchToPropsMapper = dispatch => {
    return {
        setUser: (user) => (actions.setUser(dispatch, user))
    }
};

const Dashboard = ({init, setUser, user}) => {
    let patient = {
        name: 'Jonathan Cardiel',
        gender: 'Male',
        age: '25',
        weight: '67.1',
        weightUnit: 'kg',
        bmi: '20.9',
        height: '180',
        heightUnit: 'cm',
        allergies: [{
            name: 'Peanut Allergy',
            allergen: 'Peanut',
            effect: 'anaphylaxis',
            firstLineTreatment: 'Epinephrine auto-injector'
        }, {
            name: 'Lactose Intolerance',
            allergen: 'Dairy Products',
            effect: 'IBS',
            firstLineTreatment: 'Imodium'
        }],
        conditions: [{
            condition: 'arthritis',
            diagnosedDate: '16/03/98',
            medications: 'Naproxen, Aspirin, Paracetamol'
        },
            {
                condition: 'Asthama',
                diagnosedDate: '16/03/98',
                medications: 'Releaved Inhaler'
            },
            {
                condition: 'Glaucoma',
                diagnosedDate: '16/03/98',
                medications: 'Beta Blockers'
            }],
        medications: [{
            name: 'Naproxen'
        }, {
            name: 'Aspirin'
        }, {
            name: 'Paracetamol'
        }, {
            name: 'Releaver Inhaler'
        }],
        contactDetails: [{
            type: 'emergency',
            name: 'Jaida',
            phone: '8888888800'
        }, {
            type: 'cell',
            name: 'Jonathan Cardiel',
            phone: '8988118600'
        }]
    };
    if (init === true) {
        let localUser = JSON.parse(localStorage.getItem('user'));
        console.log(localUser);
        setUser(localUser)
    } else {
        console.log(user);
    }
    return (
        <div>
            <div className='mb-lg-5'>
                <NavContainer showLogin={false} showHome={false} showRegister={false} showAboutUs={false} user={user}/>
            </div>
            <div className='container bg-light'>
                <div className='row p-3'>
                    <div className='col-md-12'>
                        <PatientStats patient={patient}/>
                    </div>
                </div>
                <div className='row p-3'>
                    <div className='col-md-12'>
                        <MedicalRecord patient={patient}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <Link to={`/profile/${user.username}`}>
                            <button className='btn btn-outline-dark btn-block'>
                                Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const DashboardContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Dashboard);

export default DashboardContainer;