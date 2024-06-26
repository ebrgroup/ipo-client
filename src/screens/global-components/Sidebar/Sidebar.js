import "./sidebar.css";
import ipoImg from "../../../assets/Icons/IPO_Img.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../assets/states/actions/user-action';
import { registerIPHelp } from "../../../assets/states/actions/Helpdesk-Content";

function Sidebar() {
    const navigate = useNavigate();
    let userRole = useSelector(state => state.userReducer?.userData.role);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogout = () => {
        navigate("/signin");
    };

    const toggle_Sidebar = useSelector(state => state.toggleReducer?.val);

    const handleRegerterIP = () => {
        navigate("/registeripo")
    }
    return (
        <div className={`sidebar ${!toggle_Sidebar ? 'close' : 'open'}`} style={{ backgroundColor: userRole === "examiner" ? "#001F3B" : "" }}>
            <div className='upper-menu-container'>
                <div className='sidebar-header'>
                    <img
                        loading="eager"
                        alt="IPO Pakistan"
                        src={ipoImg}
                    />
                    <b>Intellectual Property Organization</b>
                </div>
                <div className='menu-heading'>{userRole === "examiner" && toggle_Sidebar ? "Examiner's " : ""}Menu</div>
                <hr className='hr-element' />
                <div className='menu-items-container'>
                    {userRole === "examiner" ? 
                    <div className={`${location.pathname.includes("assessips") ? "menu-item-active" : ""} menu-item`} onClick={() => navigate("/assessips")}>
                        <i className="fa-sharp fa-dark fa-grid-2"></i>
                        <p className="title">Assess IPs</p>
                    </div>
                    : <>
                        <div className={`${location.pathname.includes("dashboard") ? "menu-item-active" : ""} menu-item`} onClick={() => navigate("/dashboard")}>
                            <i className="fa-sharp fa-dark fa-grid-2"></i>
                            <p className="title">Dashboard</p>
                        </div>
                        <div className={`${location.pathname.includes("register") ? "menu-item-active" : ""} menu-item`} onClick={handleRegerterIP}>
                            <i className="fa-sharp fa-dark fa-registered"></i>
                            <p className="title">Register IP</p>
                        </div>
                        <div className={`${location.pathname.includes("search") ? "menu-item-active" : ""} menu-item`} onClick={() => navigate("/searchip")}>
                            <i className="fa-sharp fa-dark fa-search"></i>
                            <p className="title">Search IP</p>
                        </div>
                        <div className={`${location.pathname.includes("track") ? "menu-item-active" : ""} menu-item`} onClick={() => navigate("/trackip")}>
                            <i className="fa-sharp fa-dark fa-list"></i>
                            <p className="title">Track My IP</p>
                        </div>
                    </>}
                </div>
            </div>
            <div className='lower-menu-container'>
                <hr className='hr-element' />
                <div className='lower-item2'>
                    <span className='lower-item' onClick={() => navigate("/profile")}>
                        {/* <span className="settingsSpan">
                            <box-icon name="user-circle" color="white" size="1.2rem" />
                        </span> */}
                        <i className="fa-sharp fa-dark fa-user-circle"></i>
                        <p style={{ marginLeft: "0.02rem" }}>Profile</p>
                    </span>
                    <span className='lower-item' onClick={() => navigate("/changepassword")}>
                        {/* <span className="settingsSpan">
                            <box-icon name="cog" color="white" size="1.2rem" />
                        </span> */}
                        <i className="fa-sharp fa-dark fa-cog"></i>
                        <p style={{ marginLeft: "0.02rem" }}>Change Password</p>
                    </span>
                    <span className='lower-item' onClick={handleLogout}>
                        {/* <span className="logoutSpan">
                            <box-icon name="log-out" color="white" size="1.2rem" />
                        </span> */}
                        <i className="fa-sharp fa-dark fa-sign-out"></i>
                        <p style={{ marginLeft: "0.02rem" }}>Logout</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
