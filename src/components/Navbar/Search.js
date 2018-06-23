import React from 'react'
import {connect} from 'react-redux'
import * as searchActions from "../../actions/SearchActions";
import {Link} from 'react-router-dom'

const dispatchToPropsMapper = dispatch => {
    return {
        changeSearchText: (text) => (searchActions.changeSearchText(text, dispatch)),
        searchTrials: (searchText) => (searchActions.searchTrials(searchText, dispatch))
    }
};

const stateToPropsMapper = ({trialsReducer}) => {
    console.log({trialsReducer});
    return {
        searchText: trialsReducer.searchText
    }
};

const SearchInLine = ({changeSearchText, searchTrials, searchText}) => {
    let inputElem;
    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                   ref={node => inputElem = node} onChange={() => {
                changeSearchText(inputElem.value)
            }}/>
            <Link to={`/search/${searchText}/results`}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => {
                    searchTrials(searchText)
                }}>Search
                </button>
            </Link>

        </form>
    )
};

const SearchNavBar = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchInLine);

export default SearchNavBar