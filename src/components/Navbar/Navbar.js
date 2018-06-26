import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/whatsapp-image-2018-06-24-at-10.26.44-pm-184x184.jpg'

const NavLinks = ({navLinks}) => {
    return (
        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
            {
                navLinks.map((navItem, index) => (
                    <li className='nav-item' key={index}>
                        <Link to={`${navItem.link}`}>
                            <div className="nav-link link text-primary display-4 m-0">
                                <span className={`${navItem.styleClass} mbr-iconfont mbr-iconfont-btn`}></span>
                                {navItem.name}
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
};

const NewNavbar = ({
                       showLogin = true, showRegister = true, showProfile = true,
                       showLogout = true, showHome = true, showAboutUs = true, user = {username: ''}
                   }) => {
    return (
        <div>
            <section className="menu cid-qTkzRZLJNu" once="menu" id="menu1-0">
                <nav
                    className="navbar navbar-expand beta-menu  align-items-center navbar-toggleable-sm">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="menu-logo">
                        <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="/">
                         <img className='mr-2' src={logo} alt="Logo" height={'60px'} width={'60px'}
                              title="Logo"/>
                    </a>
                </span>
                            <span className="navbar-caption-wrap">
                        <a className="navbar-caption text-primary display-5"
                           href="/">Trial Connect</a></span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            {showHome &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4"
                                   href={`/home/${user.username}/dashboard`}>
                                    <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                                    Home
                                </a>
                            </li>
                            }
                            {showLogin &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/login'>
                                    <span className="mbri-login mbr-iconfont mbr-iconfont-btn"></span>
                                    Login
                                </a>
                            </li>
                            }
                            {showRegister &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/register'>
                                    <span className="mbri-users mbr-iconfont mbr-iconfont-btn"></span>
                                    Register
                                </a>
                            </li>}
                            {showAboutUs &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href="/about">
                                    <span className="mbri-smile-face mbr-iconfont mbr-iconfont-btn"></span>
                                    About Us
                                </a>
                            </li>
                            }
                            {showProfile &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href={`/profile/${user.username}`}>
                                    <span className="mbri-user mbr-iconfont mbr-iconfont-btn"></span>
                                    Profile
                                </a>
                            </li>
                            }
                            {showLogout &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href="/login">
                                    <span className="mbri-logout mbr-iconfont mbr-iconfont-btn"></span>
                                    Logout
                                </a>
                            </li>
                            }

                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
};

const NavContainer = connect()(NewNavbar);
export default NavContainer