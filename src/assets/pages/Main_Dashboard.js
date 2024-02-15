import Sidebar from '../components/Sidebar';
import '../pages/Main-Dashboard.css';
import { useNavigate } from 'react-router-dom';
import userIcon from '../Icons/image@2x.png';
import dashboardIcon from '../Icons/bars-sort.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../states/actions/Toggle-Sidebar';
import { useState } from 'react';

function Main_Dashboard(props) {
  const navigate = useNavigate();
  const userFirstName = useSelector(state => state.userReducer.userData?.firstName);
  const [toggleBar, setToggleBar] = useState(false);
  const dispatch = useDispatch()

  const toggle = () => {
    setToggleBar(!toggleBar)
    dispatch(toggleSidebar(toggleBar));
  }


  // const [className,setClassName] = useState('')
  const toggle_Sidebar = useSelector(state => state.toggleReducer?.val); //Complete user details in {User} object
  // console.log(toggle);


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
                onClick={() => {
                  navigate('/profile');
                }}
              />
            </span>
            <div className="user-profile">
              <p>{userFirstName}</p>
              <p>USER</p>
            </div>
          </div>
        </div>
        <div className="screenContent">{props.screen}</div>
      </div>
    </main>
  );
}

export default Main_Dashboard;
