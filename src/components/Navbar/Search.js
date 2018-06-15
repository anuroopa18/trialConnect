import React from 'react'
import {connect} from 'react-redux'
import {searchActions} from "../../actions/SearchActions";

const dispatchToPropsMapper = dispatch => {
    return {
        changeSearchText: (text) => (dispatch(searchActions.changeSearchText(text)))
    }
};

const SearchInLine = (changeSearchText) => {
    let inputElem;
    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                   ref={node => inputElem = node} onChange={() => {
                changeSearchText(inputElem.value)
            }}/>

            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>

        </form>
    )
};

const SearchNavBar = connect(null, dispatchToPropsMapper)(SearchInLine);

export default SearchNavBar