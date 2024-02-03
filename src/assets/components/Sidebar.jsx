import React from 'react'
import "../components/sidebar.css";
import ipoImg from '../Icons/IPO_Img.png'
import settingIcon from '../Icons/settingIcon.png';
import logoutIcon from '../Icons/user-logout.png';
import menuIcon from '../Icons/menu-bar.png'
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

    const onMenuActiveContainerClick = () => {
        // Please sync "Dashboard" to the project
    };

    const onMenuActiveContainer2Click = () => {
        // Please sync "Register" to the project
    };

    const onMenuActiveContainer1Click = () => {
        // Please sync "Register" to the project
    };

    const onMenuActiveContainer3Click = () => {
        // Please sync "Search IP (Main)" to the project
    };

    const onMenuActiveContainer12Click = () => {
        // Please sync "Track IP Status (Main)" to the project
    };

    const onTitleTextClick = () => {
        // Please sync "Track IP Status (Main)" to the project
    };

    const onProductsTextClick = () => {
        // Please sync "Create New Password" to the project
    };

    const onGroupContainer1Click = () => {
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
                                    src={ipoImg} />
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
                        <div className="menu-active-parent">
                            <div className="menu-active" onClick={onMenuActiveContainerClick}>
                                <div className="objects-column">
                                    <img
                                        src={menuIcon}
                                        alt="" />
                                </div>
                                <div className="title">
                                    <Link to="/dashboard">Dashboard</Link>
                                </div>
                            </div>
                            <div className="group-frame">
                                <div
                                    className="menu-active1"
                                    onClick={onMenuActiveContainer2Click}
                                >
                                    <div className="objects-column1">
                                        <img
                                            src={menuIcon}
                                            alt="" />
                                    </div>
                                    <div className="title1">Register IP</div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-active3" onClick={onMenuActiveContainer3Click}>
                            <div className="objects-column3">
                                <img
                                    src={menuIcon}
                                    alt="" />
                            </div>
                            <div className="title3">Search IP</div>
                        </div>
                        <div
                            className="menu-active4"
                            onClick={onMenuActiveContainer12Click}
                        >
                            <div className="objects-column4">
                                <img
                                    src={menuIcon}
                                    alt="" />
                            </div>
                            <div className="title4" onClick={onTitleTextClick}>
                                Track IP Status
                            </div>
                            <div className="chevron-down">
                                <div className="chevron-down1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="menu2">
                <div className="bag-shopping"></div>
                <div className="products">Reviews</div>
            </div>
            <section className="other-text">
                <div className="first-frame">
                    <div className="line">
                        <div className="rectangle" />
                    </div>
                    <div className="second-frame">
                        <div className="menu3">
                            <div className="other">Other</div>
                            <div className="menu-container">
                                <div className="menu4">
                                    <div className="bag-shopping-wrapper">
                                        <div className="bag-shopping1">
                                            <img
                                                src={settingIcon}
                                                alt="" /></div>
                                    </div>
                                    <div className="products1" onClick={onProductsTextClick}>
                                        <Link to="/changepassword">Change Password</Link>                                    </div>
                                </div>
                            </div>
                            <div className="group-div" onClick={onGroupContainer1Click}>
                                <div className="menu5">
                                    <div className="bag-shopping-container">
                                        <div className="bag-shopping2">
                                            <img
                                                src={logoutIcon}
                                                alt="" /></div>
                                    </div>
                                    <div className="products2" onClick={handleLogout}>Logout</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sidebar;