import "../AuthHome.css";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const Verification = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const newAccount = state && state.newAccount;
    const [formData, setFormData] = useState({
        emailCode: '',
        mobileCode: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const getNumericValue = (input) => input.replace(/\D/g, '');
        let processedValue = getNumericValue(value).slice(0, 6);

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: processedValue,
        }));
    };

    const clearFields = () => {
        setFormData({
            mobileCode: '',
            emailCode: ''
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.mobileCode.length !== 6 || formData.emailCode.length !== 6) {
            handleToastDisplay("OTP should be of 6 digits!", "error");
            return;
        }
        if(formData.mobileCode !== "111111" || formData.emailCode !== "222222") {
            handleToastDisplay("Invalid OTP code!", "error");
            clearFields();
            return;
        }

        await axios.post(`/ipo/users/`, newAccount)
        .then(response => {
            handleToastDisplay("You have successfully created your account!", "success");
            navigate("/signin");
        }).catch(error => {
            clearFields();
            if(error.response !== undefined){
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
        });
    };

    const handleToastDisplay = (message, type) => {
        const toastConfig = {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        };
    
        switch (type) {
            case "success":
                toast.success(message, toastConfig);
                break;
            case "error":
                toast.error(message, toastConfig);
                break;
            default:
                toast(message, toastConfig);
                break;
        }
    }; 

    const areRequiredFieldsEmpty = () => {
        return !(
            formData.emailCode && formData.mobileCode
        );
    };

    return (
        <div className="forgotPasswordDiv">
            <h2 className="formTypeHeading">
                Verification
            </h2>
            <p className="forgotPasswordText">
                You must have received an OTP code on your phone number and email, please enter the OTP codes to proceed.
            </p>
            <form className="createAccountForm" onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input
                        className="inputField"
                        placeholder="Mobile Verification Code"
                        type="text"
                        name="mobileCode"
                        value={formData.mobileCode}
                        onChange={handleInputChange}
                    />
                <div className="line" />
                </div>
                <div className="inputDiv">
                    <input
                        className="inputField"
                        placeholder="Email Verification Code"
                        type="text"
                        name="emailCode"
                        value={formData.emailCode}
                        onChange={handleInputChange}
                    />
                <div className="line" />
                </div>
                <button className="submitButton sendRecoveryEmailButton" type="Submit" disabled={areRequiredFieldsEmpty()}>
                    Proceed
                </button>
            </form>
        </div>
    );
};

export default Verification;