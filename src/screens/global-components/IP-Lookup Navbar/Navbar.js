import React from 'react'
import './Navbar.css'

const Navbar = () => {

    //Get Search_IP from SearchBox
    const handleChange = (e) => {
        let Search_IP = e.target.value;
        // console.log(Search_IP);
    }
    return (
        <nav id='Navbar'>
            <div id='Search-Box'>
                <i class="fa-light fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder='Search IP...'
                    onChange={handleChange} />
            </div>
            <div className="navbarButtons">
                <button className='type btn'>
                    Select IP Type
                    <i class="fa-sharp fa-light fa-angle-down"></i>
                </button>
                <button className='search btn'>Search</button>
            </div>
        </nav>
    )
}

export default Navbar
