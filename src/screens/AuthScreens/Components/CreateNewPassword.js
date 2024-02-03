import "../AuthHome.css";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const CreateNewPassword = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const user = state && state.user;
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.newPassword !== formData.confirmPassword) {
            clearFields();
            handleToastDisplay("Passwords do not match!", "error");
            return;
        }
        const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
        if(!passwordRegex.test(formData.newPassword))
        {
            clearFields();
            handleToastDisplay("Password must have atleast eight characters with atleast one special character, uppercase letter, and number.", "error");
            return;
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            isNew: true,
        }));

        await axios.put(`/ipo/users/changePassword/${user._id}`, formData)
        .then(response => {
            handleToastDisplay("You have successfully updated your password!", "success");
            navigate("/signin");
        }).catch(error => {
            // clearFields();
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

    const clearFields = () => {
        setFormData({
            newPassword: '',
            confirmPassword: ''
        });
    }

    const areRequiredFieldsEmpty = () => {
        return !(
            formData.newPassword && formData.confirmPassword
        );
    };

    return (
        <div className="forgotPasswordDiv">
            <h2 className="formTypeHeading">
                Create new password
            </h2>
            <p className="forgotPasswordText">
                Please create a new password that you don't use on any other site.
            </p>
            <form className="createAccountForm" onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input
                        className="inputField passwordField"
                        placeholder="New password"
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                    />
                    <span className="passwordIcon" onClick={() => setShowNewPassword(!showNewPassword)}>
                        <box-icon name={showNewPassword ? "hide" : "show"} color="grey" size="sm" />
                    </span>
                    <div className="line" />
                </div>
                <div className="inputDiv">
                    <input
                        className="inputField passwordField"
                        placeholder="Confirm new password"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <span className="passwordIcon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <box-icon name={showConfirmPassword ? "hide" : "show"} color="grey" size="sm" />
                    </span>
                    <div className="line" />
                </div>
                <button className="submitButton sendRecoveryEmailButton" type="Submit" disabled={areRequiredFieldsEmpty()}>
                    Change password
                </button>
            </form>
        </div>
    );
};

export default CreateNewPassword;