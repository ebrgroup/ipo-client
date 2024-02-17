import "../components/sidebar.css";
import ipoImg from '../Icons/IPO_Img.png';
import { useNavigate } from "react-router-dom";
import "boxicons";
import { logout } from '../states/actions/user-action';
import { useDispatch, useSelector } from 'react-redux';

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate("/signin")
    }

    const toggle_Sidebar = useSelector(state => state.toggleReducer?.val); //Complete user details in {User} object

    return (
        <div className={`sidebar ${!toggle_Sidebar} ? 'close' : 'open' `}>
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
                <hr className='hr-element'></hr>
                <div className='menu-items-container'>
                    <div className="menu-item-dashboard menu-item" onClick={() => navigate("/dashboard")}>
                        <i class="fa-sharp fa-light fa-gauge"></i>
                        <p className="title" >
                            Dashboard
                        </p>
                    </div>
                    <div className="menu-item" onClick={() => navigate("/dashboard")}>
                        <i class="fa-sharp fa-light fa-grid-2"></i>
                        <p className="title">Register IP</p>
                    </div>
                    <div className="menu-item" onClick={() => navigate("/dashboard")}>
                        <i class="fa-sharp fa-light fa-grid-2"></i>
                        <p className="title">Search IP</p>
                    </div>
                    <div className="menu-item" onClick={() => navigate("/dashboard")}>
                        <i class="fa-sharp fa-light fa-grid-2"></i>
                        <p className="title" >
                            Track IP Status
                        </p>
                    </div>
                </div>
            </div>
            <div className='lower-menu-container'>
                <hr className='hr-element'></hr>
                <div className='lower-item' onClick={() => navigate("/changepassword")}>
                    <i class="fa-light fa-gear"></i>
                    <p className="title">Change Password</p>
                </div>
                <div className='lower-item2' onClick={handleLogout}>
                    <i class="fa-light fa-arrow-right-from-bracket"></i>
                    <p className="title">Logout</p>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;