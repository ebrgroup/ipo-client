import React, { useState } from 'react';
import "./FeeSubmission.css";
import { Player } from "@lottiefiles/react-lottie-player";
import PaymentModal from '../Payment-modal/PaymentModal';
import { useNavigate } from 'react-router-dom';

const FeeSubmission = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkedIndex, setCheckedIndex] = useState(-1);
    const navigate = useNavigate();

    const openModal = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckboxChange = (index) => {
        setCheckedIndex(index);
    };

    return (
        <>
            <div className="fee-screen-main">
                <h4 className="fee-main-heading">Payment Method</h4>
                <div className="fee-content-parent">
                    <div className="fee-content-heading">
                        <Player src={require("../../../../assets/Icons/fee-lottie.json")} autoplay loop
                            className="fee-lottie" />
                        <p>Select your payment method!</p>
                    </div>
                    <div className="fee-logo-container">
                        {[require("../../../../assets/Icons/easypaisa.png"), require("../../../../assets/Icons/jazzcash.png"), require("../../../../assets/Icons/credit-card.png")].map((src, index) => (
                            <div key={index} class="checkbox-wrapper-16">
                                <label class="checkbox-wrapper">
                                    <input
                                        class="checkbox-input"
                                        type="checkbox"
                                        checked={checkedIndex === index}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <span class="checkbox-tile">
                                        <img src={src} className="fee-logo" />
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btns">
                    <button className='continueBtn' disabled={checkedIndex === -1} onClick={openModal}>Continue</button>
                    <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                </div>
                <PaymentModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </>
    );
}

export default FeeSubmission;
