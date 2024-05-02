import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../assets/states/actions/user-action';

const ProfileDropdown = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        dispatch(logout());
        navigate("/signin");
    }

    return (
        <div className="profileDropdownDiv" ref={props.profileRef} >
            <ul className="profileDropdownList">
                <li style={{fontWeight: "normal"}} onClick={() => {
                    navigate("/profile");
                    props.setShowProfileDropdown(false);
                }}>
                    Profile
                </li>
                <li style={{fontWeight: "normal"}} onClick={() => {
                    navigate("/changepassword");
                    props.setShowProfileDropdown(false);
                }}>
                    Change Password
                </li>
                <li style={{fontWeight: "normal"}} onClick={handleLogout}>
                    Logout
                </li>
            </ul>
        </div>
    );
}

export default ProfileDropdown;
