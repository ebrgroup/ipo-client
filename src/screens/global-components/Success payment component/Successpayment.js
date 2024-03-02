import React from 'react'
import './Successpayment.css'
import success from "../../../assets/Icons/success.gif";
import { useNavigate } from 'react-router-dom';
const Successpayment = () => {
    const navigate = useNavigate(null);
    return (
        <div className='Success-container'>
            <img src={success} alt="" />
            <h3>Submit Successfully!</h3>
            <p>Your application has been successfully  submitted.
                <br />Your  <b>Track ID #PKUT01I9</b></p>
            <button className='trackBtn' onClick={() => navigate('/trackip')}>
                Track Trademark
            </button>
        </div>
    )
}

export default Successpayment


