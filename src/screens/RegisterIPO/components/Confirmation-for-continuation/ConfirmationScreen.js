import { useState } from "react";
import "./confirmationScreen.css";
import PaymentModal from "../Payment-modal/PaymentModal";

const ConfirmationScreen = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="confirmation-parent-container">
            <div className="confirmation-child-container">
                <div className="heading-content">
                    <img src={require("../../../../assets/Icons/Frame.png")} className="confirmation-lottie" />
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
                    <h6 className="confirmation-questions">
                        1. <span>If anyone has already registered a trademark similar to yours.</span>
                    </h6>
                    <h6 className="confirmation-questions">
                        2. <span>If your trademark is against assessment criteria.</span>
                    </h6>
                </div>
                <div className="confirmation-button-container">
                    <button onClick={ openModal }>Proceed to apply</button>
                </div>
            </div>
            <PaymentModal isOpen={ isModalOpen } closeModal={ closeModal } />
        </div>
    );
}

export default ConfirmationScreen;