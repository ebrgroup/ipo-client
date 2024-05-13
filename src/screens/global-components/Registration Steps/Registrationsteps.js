import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './registrationSteps.css'
import { useDispatch } from 'react-redux'
import { loadingBar } from '../../../assets/states/actions/Loading-Action'

const Registrationsteps = () => {
    const [val, setVal] = useState(0)
    const location = useLocation();

    const dispatch = useDispatch()


    useEffect(() => {
        if (location.pathname.toLowerCase().includes("classification")) {
            setVal(0);
        }
        else if (location.pathname.toLowerCase().includes("owner")) {
            setVal(25);
        }
        else if (location.pathname.toLowerCase().includes("logo") || location.pathname.toLowerCase().includes("designdetails")) {
            setVal(50);
        }
        else if (location.pathname.toLowerCase().includes("review")) {
            setVal(75);
        }
        else if (location.pathname.toLowerCase().includes("feesubmission")) {
            setVal(100);
        }

        dispatch(loadingBar(val))

    }, [val, location.pathname])


    return (
        <div id='FlowSteps-container'>
            <div id='flow-title'>
                <i class="fa-solid fa-circle-check"></i>
                <h5>Application Status</h5>
            </div>
            <div className="Steps-section">
                <div className={`step-btn ${location.pathname.toLowerCase().includes("classification") ? ("active") : ""}`}>
                    <span>1.</span>
                    <span>Classification</span>
                </div>
                <div className={`step-btn ${location.pathname.toLowerCase().includes("ownerdetails") ? ("active") : ""}`}>
                    <span>2.</span>
                    <span>Owner Details</span>
                </div>
                <div className={`step-btn ${location.pathname.toLowerCase().includes("logodetails") ||
                    location.pathname.toLowerCase().includes("/designdetails") ? ("active") : ""}`}>
                    <span>3.</span>
                    <span>Attachment Details</span>
                </div>
                <div className={`step-btn ${location.pathname.toLowerCase().includes("review") ? ("active") : ""}`}>
                    <span>4.</span>
                    <span>Review</span>
                </div>
                <div className={`step-btn ${location.pathname.toLowerCase().includes("feesubmission") ? ("active") : ""}`}>
                    <span>5.</span>
                    <span>Payment</span>
                </div>
            </div>
        </div>
    )
}

export default Registrationsteps
