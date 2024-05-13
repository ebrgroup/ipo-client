import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../global-components/Sidebar/Sidebar';
import './Main-Dashboard.css';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../assets/Icons/image@2x.png';
import dashboardIcon from '../../assets/Icons/bars-sort.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../assets/states/actions/Toggle-Sidebar';
import ProfileDropdown from '../global-components/ProfileDropDown/ProfileDropdown';

function Main_Dashboard(props) {
  const navigate = useNavigate();
  const userData = useSelector(state => state.userReducer.userData);
  const [toggleBar, setToggleBar] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setToggleBar(!toggleBar);
    dispatch(toggleSidebar(toggleBar));
  };

  const toggle_Sidebar = useSelector(state => state.toggleReducer?.val); //Complete user details in {User} object

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const profileRef = useRef(null);
  const firstNameRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target) && firstNameRef.current && !firstNameRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
        setIsClickedOutside(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    console.log(isClickedOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="Dashboard-Section">
      <div className={`left-Subsection ${!toggle_Sidebar ? 'close' : 'open'}`} >
        <Sidebar />
      </div>
      <div className="right-Subsection">
        <div className="header">
          <div className="title">
            <img src={dashboardIcon} onClick={toggle} alt="" />
            <p>{props.title}</p>
          </div>
          <div className="profile">
            <span>
              <img
                src={userIcon}
                ref={profileRef}
                onClick={() => {
                  if(!isClickedOutside)
                    setShowProfileDropdown(!showProfileDropdown);
                  else 
                    setIsClickedOutside(false);
                }}
              />
            </span>
            <div className="user-profile">
              <p className='firstName' ref={firstNameRef} onClick={() => {
                if(!isClickedOutside)
                  setShowProfileDropdown(!showProfileDropdown);
                else 
                  setIsClickedOutside(false);
              }}>{userData.firstName}</p>
              {userData.firstName && (userData.role === "examiner" ? <p>Examiner</p> : <p>USER</p>)}
            </div>
          </div>
          {showProfileDropdown && <ProfileDropdown profileRef={profileRef} setShowProfileDropdown={setShowProfileDropdown} />}
        </div>
        <div className="screenContent">{props.screen}</div>
      </div>
    </main>
  );
}

export default Main_Dashboard;