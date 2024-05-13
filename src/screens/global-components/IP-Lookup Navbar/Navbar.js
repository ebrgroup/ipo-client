import React, { useEffect, useState } from 'react'
import './Navbar.css'
import patent from '../../../assets/Icons/icons8-patent-32.png'
import design from '../../../assets/Icons/icons8-design-50.png'
import { useDispatch, useSelector } from 'react-redux'
import { searchByName, trackById, getIp } from '../../../assets/states/middlewares/ipTable-data.js';
import { resetIpStates } from '../../../assets/states/actions/IP-Lookup-actions/Tabledata-action.js'
import { useLocation } from 'react-router-dom'


const Navbar = ({ searchTitle, type, setType }) => {
    const [display, setDisplay] = useState(false);
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [search, setSearch] = useState('')
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [status, setStatus] = useState("");
    const userId = useSelector(state => state.userReducer.userData._id);
    const dispatch = useDispatch();
    const location = useLocation()
    const handleChange = (e) => {
        let input = e.target.value
        input = input.replace('#', '')
        setSearch(input);  //Get Search_IP from SearchBox

    }

    useEffect(() => {
        handleOptionClick(type);
    }, []);

    useEffect(() => {
        if(location.pathname === '/trackip')
            dispatch(trackById(search, userId, status, type));
        else if(location.pathname === '/assessips')
            dispatch(getIp(search, status, type));
        setShowStatusDropdown(false);
    }, [status]);

    const showTypes = () => {
        setDisplay(!display);
    }

    const handleSearch = () => {
        if (location.pathname == '/searchip') {
            dispatch(searchByName(search, type))
        }
        else if (location.pathname == '/trackip') {
            dispatch(trackById(search, userId, status, type))
        }
        else if (location.pathname == '/assessips') {
            dispatch(getIp(search, status, type));
        }
    }

    const handleOptionClick = (type) => {
        setType(type);
        setDisplay(false);
        setIsTypeSelected(true);
        dispatch(resetIpStates());
        setStatus("");
        if (location.pathname == '/searchip') {
            dispatch(searchByName("", type))
        }
        else if (location.pathname == '/trackip') {
            dispatch(trackById("", userId, status, type))
        }
        else if (location.pathname == '/assessips') {
            dispatch(getIp(search, status, type));
        }
    }

    return (
        <nav id='Navbar'>
            <div id='Search-Box'>
                <i class="fa-light fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder={searchTitle}
                    onChange={handleChange} />
            </div>
            <div className="navbarButtons">
                {location.pathname !== '/searchip' && <button className='type btn' onClick={() => setShowStatusDropdown(!showStatusDropdown)}>
                    {status ? status : "All"}
                    <i class="fa-sharp fa-light fa-angle-down"></i>
                </button>}
                <button className='type btn' onClick={showTypes}>
                    {isTypeSelected ? type : "Select IP Type"}
                    <i class="fa-sharp fa-light fa-angle-down"></i>
                </button>
                <button className='search btn' onClick={handleSearch} >Search</button>
            </div>
            <div className='IPtypes statusTypes' style={{ 'display': showStatusDropdown ? 'block' : 'none' }}>
                <div onClick={() => setStatus("")}>
                    All
                </div>
                <div onClick={() => setStatus("Pending")}>
                    Pending
                </div>
                <div onClick={() => setStatus("Decline")}>
                    Decline
                </div>
                <div onClick={() => setStatus("Register")}>
                    Register
                </div>
            </div>
            <div className='IPtypes' style={{ 'display': display ? 'block' : 'none' }}>
                <div onClick={() => handleOptionClick("Trademark")}>
                    <i class="fa-regular fa-trademark"></i>
                    Trademark
                </div>
                <div onClick={() => handleOptionClick("Copyright")}>
                    <i class="fa-regular fa-copyright"></i>
                    Copyright
                </div>
                <div onClick={() => handleOptionClick("Patent")}>
                    <img src={patent} />
                    Patent
                </div>
                <div onClick={() => handleOptionClick("Design")}>
                    <img src={design} />
                    Design
                </div>
            </div>
        </nav>
    )
}

export default Navbar
