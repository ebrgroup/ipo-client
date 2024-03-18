import "./confirmationScreen.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

const ConfirmationScreen = (props) => {
    const navigate = useNavigate(null);
    const { state } = useLocation();

    const location = useLocation()
    const handleNavigation = () =>{
        if(location.pathname != '/copyright/confirmation'){
            navigate("/confirmProfile", { state: { type: state.type } })
        }
        else{
            navigate('/copyright/profile', { state: { type: state.type } })
        }
    }
    
    return (
        <div className="confirmation-parent-container">
            <div className="confirmation-child-container">
                <div className="heading-content">
                    <Player src={require("../../../assets/Icons/confirmation-lottie.json")}
                        autoplay loop className="confirmation-lottie" />
                    <p className="sure-text">
                        Are you sure you are ready to apply?
                    </p>
                    <h6>
                        Before continuing to apply, you should check if you are eligible for applying.
                    </h6>
                </div>
                <div className="confirmation-text-container">
                    <h6>
                        You should check the following:
                    </h6>
                    <h6 className="confirmation-questions" onClick={() => navigate('/searchIp')}>
                        1. <span>{state.type === "trademark" ? 
                            `If anyone has already registered a ${state.type} similar to yours.` : 
                            `Even if your application is successfull it will take years before ${state.type} is granted`}</span>
                    </h6>
                    <h6 className="confirmation-questions">
                        2. <span>{state.type === "trademark" ? 
                        `If your ${state.type} is against assessment criteria.` : 
                        `You will be responsible for taking any legal action to enforce a granted ${state.type}, including paying any costs incurred`}</span>
                    </h6>
                </div>

            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className="continueBtn" onClick={handleNavigation}>Continue</button>
            </div>
        </div>
    );
}

export default ConfirmationScreen;