import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../../global-components/Registration Steps/registrationSteps.css'

const RegistrationSteps = () => {

    const location = useLocation();

    return (
        <div id='FlowSteps-container'>
            <div id='flow-title'>
                <i class="fa-solid fa-circle-check"></i>
                <h5>Application Status</h5>
            </div>
            <div className="Steps-section">
                <div className={`step-btn ${location.pathname === "/patentflow" ? "active" : ""}`}>
                    <span>1.</span>
                    <span>Form 1</span>
                </div>
                <div className={`step-btn ${location.pathname === "/patentflow/priorityClaims" ? "active" : ""}`}>
                    <span>2.</span>
                    <span>Priority Claim Details</span>
                </div>
                <div className={`step-btn ${location.pathname === "/patentflow/documents" ? "active" : ""}`}>
                    <span>3.</span>
                    <span>Document Details</span>
                </div>
                <div className={`step-btn ${location.pathname === "/patentflow/reviewApplication" ? "active" : ""}`}>
                    <span>4.</span>
                    <span>Review</span>
                </div>
                <div className={`step-btn ${location.pathname === "/feesubmission" ? "active" : ""}`}>
                    <span>5.</span>
                    <span>Fee submission</span>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSteps
