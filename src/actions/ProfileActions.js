import * as Constants from '../constants/AppConstants'


export const setUser = (dispatch, user) => (
    dispatch({
        type: 'SET_USER',
        user: user
    })
);

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

export const updateUser = (dispatch, firstName, lastName, phone, email, password,age,gender, patientId) => {
    console.log(firstName);
    if ((firstName !== undefined && firstName !== "") &&
        (lastName !== undefined && lastName !== "") &&
        (password !== undefined && password !== "") &&
        (email !== undefined && email !== "") &&
        (phone !== undefined && phone !== "") &&
        (age !== undefined && age !== "") && 
        (gender !== undefined && gender !== "")

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
                gender
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