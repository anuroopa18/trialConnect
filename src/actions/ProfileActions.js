import * as Constants from '../constants/AppConstants'
import {AppConstants} from '../constants/AppConstants'


export const setUser = (dispatch, user) => (
    dispatch({
        type: 'SET_USER',
        user: user
    })
);

export const findPatient = (dispatch, username) => {
    return fetch('http://localhost:8080/api/findPatient/' + username)
        .then(response => (response.json()))
        .then(patient => {
            (dispatch({
                type: Constants.AppConstants.actions.FIND_PATIENT_BY_ID,
                patient: patient
            }))
        })
};

export const updateUserFirstName = (dispatch, firstName) => {
    console.log(firstName);
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_FIRSTNAME,
        firstName: firstName
    })
};

export const updateLastName = (dispatch, lastName) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_LASTNAME,
        lastName: lastName
    })
);

export const updatePassword = (dispatch, password) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_PW,
        password: password
    })
);

export const updateEmail = (dispatch, email) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_EMAIL,
        email: email
    })
);
export const updatePhone = (dispatch, phone) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_PHONE,
        phone: phone
    })
);


export const updateAge = (dispatch, age) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_AGE,
        age: age
    })
);

export const updateGender = (dispatch, gender) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_GENDER,
        gender: gender
    })
);

export const updateHeight = (dispatch, height) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_HEIGHT,
        height: height
    })
);

export const updateWeight = (dispatch, weight) => (
    dispatch({
        type: Constants.AppConstants.actions.PROFILE_WEIGHT,
        weight: weight
    })
);
export const updateUser = (dispatch, firstName, lastName, phone, email, password, age, gender, height, weight, patientId) => {
    console.log(firstName);
    if ((firstName !== undefined && firstName !== "") &&
        (lastName !== undefined && lastName !== "") &&
        (password !== undefined && password !== "") &&
        (email !== undefined && email !== "") &&
        (phone !== undefined && phone !== "") &&
        (age !== undefined && age !== "") &&
        (gender !== undefined && gender !== "") &&
        (height !== undefined && height !== "") &&
        (weight !== undefined && weight !== "")

    ) {
        fetch('http://localhost:8080/api/patient/' + patientId, {
            method: 'put',
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                password,
                age,
                gender,
                height,
                weight
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => (response.json()))
            .then(patient => {
                localStorage.setItem('user', JSON.stringify(patient));
                alert('Updated successfully!');
                return dispatch({
                    type: Constants.AppConstants.actions.PROFILE_UPDATE,
                    user: patient
                })
            })
    } else {
        alert('The fields down there need to be filled with correct info. Is that too hard for you?');
    }

};
export const recommendTrial = (dispatch, id) => {
    console.log(id);
    dispatch({
        type: AppConstants.actions.RECOMMEND_TRIAL,
        trialId: id
    })
};

export const findAllTrials = (dispatch) => {
    console.log('finding all trials');
    let role = localStorage.getItem('role');
    console.log(role);
    if (role.includes("Doctor")) {
        console.log('fetching results');
        fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials')
            .then(response => response.json())
            .then(jsonObject => (dispatch({
                type: AppConstants.actions.GET_ALL_TRIALS_DOCTOR,
                trials: jsonObject.trials,
            })))
    } else if (role.includes("Patient")) {
        console.log("Fetching for patient");
        let localUser = JSON.parse(localStorage.getItem('user'));
        fetch('http://localhost:8080/api/patient/' + localUser.id + '/recommendedtrials')
            .then(response => response.json())
            .then(trials => {
                console.log(trials);
                dispatch({
                    type: AppConstants.actions.RECOMMENDED_TRIALS,
                    trials: trials
                })
            })
    }
};