import React, { useEffect, useState } from 'react'
import './Navbar.css'
import patent from '../../../assets/Icons/icons8-patent-32.png'
import design from '../../../assets/Icons/icons8-design-50.png'
import { useDispatch } from 'react-redux'
import { searchByName, trackById } from '../../../assets/states/middlewares/ipTable-data.js'
import { resetIpStates } from '../../../assets/states/actions/IP-Lookup-actions/Tabledata-action.js'
import { useLocation } from 'react-router-dom'


const Navbar = ({ searchTitle , type, setType }) => {
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState('')
    const [isTypeSelected, setIsTypeSelected] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation()
    const handleChange = (e) => {
        let input = e.target.value
        input = input.replace('#', '')
        setSearch(input);  //Get Search_IP from SearchBox

    }

    useEffect(() => {
        dispatch(resetIpStates());
    }, []);

    const showTypes = () => {
        setDisplay(!display);
    }

    const handleSearch = () => {
        if (search) {
            if (location.pathname == '/searchip') {
                dispatch(searchByName(search, type))
            }
            else if (location.pathname == '/trackip') {
                dispatch(trackById(search, type))
            }
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
                <button className='type btn' onClick={showTypes}>
                    {isTypeSelected ? type : "Select IP Type"}
                    <i class="fa-sharp fa-light fa-angle-down"></i>
                </button>
                <button className='search btn' onClick={handleSearch} >Search</button>
            </div>
            <div className='IPtypes' style={{ 'display': display ? 'block' : 'none' }}>
                <div onClick={() => { setType("Trademark"); setDisplay(false); setIsTypeSelected(true); dispatch(resetIpStates()); }}>
                    <i class="fa-regular fa-trademark"></i>
                    Trademark
                </div>
                <div onClick={() => { setType("Copyright"); setDisplay(false); setIsTypeSelected(true); dispatch(resetIpStates()); }}>
                    <i class="fa-regular fa-copyright"></i>
                    Copyright
                </div>
                <div onClick={() => { setType("Patent"); setDisplay(false); setIsTypeSelected(true); dispatch(resetIpStates()); }}>
                    <img src={patent} />
                    Patent
                </div>
                <div onClick={() => { setType("Design"); setDisplay(false); setIsTypeSelected(true); dispatch(resetIpStates()); }}>
                    <img src={design} />
                    Design
                </div>
            </div>
        </nav>
    )
}

export default Navbar
