import {AppConstants as Constants} from "../constants/AppConstants";

export const searchActions = () => {
    changeSearchText
};

function changeSearchText(text) {
    return {
        type: Constants.actions.NAVBAR_SEARCH,
        text: text
    }
}