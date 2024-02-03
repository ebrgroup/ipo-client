import React from 'react';
import "../components/sidebar.css";
import ipoImg from '../Icons/IPO_Img.png';
import settingIcon from '../Icons/settingIcon.png';
import logoutIcon from '../Icons/user-logout.png';
import menuIcon from '../Icons/menu-bar.png';
import { Link, useNavigate } from "react-router-dom";

import { logout } from '../states/actions/user-action';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {

        dispatch(logout())
        navigate("/signin")
    }

    const handleMenuClick = (route) => {
        // Please sync the route to the project
        navigate(route);
    };

    const handleTitleTextClick = () => {
        // Please sync "Track IP Status (Main)" to the project
    };

    const handleProductsTextClick = () => {
        // Please sync "Create New Password" to the project
    };

    const handleGroupContainerClick = () => {
        // Please sync "Sign in" to the project
    };



    return (
        <div className="sidebar">
            <section className="background" />
            <div className="menu" />
            <section className="main-frame">
                <div className="child-frame">
                    <div className="intellectual-property-text">
                        <div className="menu-frame">
                            <div className="wrapper-menu-item-rectangle">
                                <img
                                    className="menu-item-rectangle"
                                    loading="eager"
                                    alt=""
                                    src={ipoImg}
                                />
                            </div>
                            <div className="intellectual-property">
                                <b>
                                    <span>{`Intellectual `}</span>
                                    <span className="property">Property</span>
                                </b>
                            </div>
                        </div>
                        <div className="menu-wrapper">
                            <div className="menu1">Menu</div>
                        </div>
                    </div>
                </div>
                <div className="active-line-frame">
                    <div className="active-line" />
                    <div className="objects-column-frame">
                        <div className="menu-active" onClick={() => handleMenuClick("/dashboard")}>
                            <div className="objects-column">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">
                                <Link to="/dashboard">Dashboard</Link>
                            </div>
                        </div>
                        <div className="menu-active" onClick={() => handleMenuClick("/register-ip")}>
                            <div className="objects-column">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">Register IP</div>
                        </div>
                        <div className="menu-active" onClick={() => handleMenuClick("/search-ip")}>
                            <div className="objects-column">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">Search IP</div>
                        </div>
                        <div className="menu-active" onClick={handleTitleTextClick}>
                            <div className="objects-column">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title" onClick={handleTitleTextClick}>
                                Track IP Status
                            </div>
                        </div>
                            <div className='lower-container'>
                                <hr className='hr-element'></hr>
                                <div className='lower-item'>
                                    <Link to="/changepassword">
                                        <div>
                                            <img src={settingIcon} alt="" />
                                            <p>Change Password</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='lower-item2'>
                                    <img className='logout-icon' src={logoutIcon} alt="" />
                                    <p>Logout</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Sidebar;