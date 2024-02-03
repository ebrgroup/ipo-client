import React from 'react'
import './NotFoundpage.css';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className='Notfound-container'>
            <h1>404 Error Page</h1>
            <p className="zoom-area"><b>Oh no!</b>  This page doesn't exist </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div className="link-container">
                <button onClick={() => navigate(-1)}  className="more-link">GO back Safely</button>
            </div>
        </div>
    )
}

export default NotFoundPage
