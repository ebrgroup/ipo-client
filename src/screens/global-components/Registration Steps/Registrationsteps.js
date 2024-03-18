import React from 'react'
import { useLocation } from 'react-router-dom'
import './registrationSteps.css'

const Registrationsteps = () => {

    const location = useLocation();

    return (
        <div id='FlowSteps-container'>
            <div id='flow-title'>
                <i class="fa-solid fa-circle-check"></i>
                <h5>Application Status</h5>
            </div>
            <div className="Steps-section">
                <div className={`step-btn ${location.pathname.includes("/classification") ? "active" : ""}`}>
                    <span>1.</span>
                    <span>Classification</span>
                </div>
                <div className={`step-btn ${location.pathname.includes("/ownerDetails") ? "active" : ""}`}>
                    <span>2.</span>
                    <span>Owner Details</span>
                </div>
                <div className={`step-btn ${location.pathname.includes("/logodetails") ? "active" : ""}`}>
                    <span>3.</span>
                    <span>Logo Details</span>
                </div>
                <div className={`step-btn ${location.pathname.includes("/reviewapplication") ? "active" : ""}`}>
                    <span>4.</span>
                    <span>Review</span>
                </div>
                <div className={`step-btn ${location.pathname.includes("/feesubmission") ? "active" : ""}`}>
                    <span>5.</span>
                    <span>Payment</span>
                </div>
            </div>
        </div>
    )
}

export default Registrationsteps
