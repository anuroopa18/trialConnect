import React from 'react'
import {connect} from 'react-redux'
import SearchNavBar from '../components/Navbar/Search'


const FixedNavbar = () => {
    return (
        <header className='navbar navbar-dark bd-navbar'>
            <a className='navbar-brand' href='#'>
                <i className="fa fa-american-sign-language-interpreting mr-1"></i>
                <strong>Trial Connect</strong>
            </a>
            <SearchNavBar/>
        </header>
    )
};
const NavbarContainer = connect()(FixedNavbar);

export default NavbarContainer

