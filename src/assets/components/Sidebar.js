import React from 'react';
import "../components/sidebar.css";
import ipoImg from '../Icons/IPO_Img.png';
import settingIcon from '../Icons/settingIcon.png';
import logoutIcon from '../Icons/user-logout.png';
import menuIcon from '../Icons/menu-bar.png';
import { Link, useNavigate } from "react-router-dom";
import "boxicons";
import { logout } from '../states/actions/user-action';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate("/signin")
    }

    return (
        <div className="sidebar">
           <div className='upper-menu-container'>
                <div className='sidebar-header'>
                    <img
                        loading="eager"
                        alt="IPO Pakistan"
                        src={ipoImg}
                    />
                    <b>Intellectual Property Organization</b>
                </div>
                <div className='menu-heading'>Menu</div>
                <div className='menu-items-container'>
                <div className="menu-item-dashboard" onClick={() => navigate("/dashboard")}>
                            <div className="menu-icon">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">
                                <Link to="/dashboard">Dashboard</Link>
                            </div>
                        </div>
                        <div className="menu-item" onClick={() => navigate("/dashboard")}>
                            <div className="menu-icon">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">Register IP</div>
                        </div>
                        <div className="menu-item" onClick={() => navigate("/dashboard")}>
                            <div className="menu-icon">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title">Search IP</div>
                        </div>
                        <div className="menu-item" onClick={() => navigate("/dashboard")}>
                            <div className="menu-icon">
                                <img src={menuIcon} alt="" />
                            </div>
                            <div className="title" onClick={() => navigate("/dashboard")}>
                                Track IP Status
                            </div>
                        </div>
                </div>
            </div> 
            <div className='lower-menu-container'>
                <hr className='hr-element'></hr>
                    <span className='lower-item' onClick={() => navigate("/profile")}>
                        <span className="settingsSpan">
                            <box-icon name="user-circle" color="white" size="1.2rem" />
                        </span>
                        <p>Profile</p>
                    </span>
                    <span className='lower-item' onClick={() => navigate("/changepassword")}>
                        <span className="settingsSpan">
                            <box-icon name="cog" color="white" size="1.2rem" />
                        </span>
                        <p>Change Password</p>
                    </span>
                    <span className='lower-item' onClick={handleLogout}>
                        <span className="logoutSpan">
                            <box-icon name="log-out" color="white" size="1.2rem" />
                        </span>
                        <p>Logout</p>
                    </span>
            </div>
        </div>
    );
}

export default Sidebar;