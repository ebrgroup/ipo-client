import "../AuthHome.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../../../assets/states/actions/user-action";
import "boxicons";

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const clearFields = () => {
        setFormData({
            email: '',
            password: ''
        });
    }

    //dispatch for calling actions in redux-store
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            handleToastDisplay("Invalid email format!", "error");
            return;
        }

        await axios.post(`/ipo/login`, formData)
            .then(response => {
                dispatch(loginSuccess(response.data.user));  //Store user data into redux store
                navigate("/dashboard");

            }).catch(error => {
                clearFields();
                if (error.response !== undefined) {
                    if (error.response.data) {
                        handleToastDisplay(`${error.response.data.message}`, "error");
                    }
                } else {
                    handleToastDisplay("Error signing in!", "error");
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
        }
    };

    const isFormValid = () => {
        return (
            formData.email && formData.password
        );
    }

    return (
        <div className="signUpDiv">
            <h2 className="formTypeHeading">
                Sign in
            </h2>
            <form className="createAccountForm" onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input
                        className="inputField"
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className="line" />
                </div>
                <div className="inputDiv">
                    <input
                        className="inputField passwordField"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <span className="passwordIcon" onClick={() => setShowPassword(!showPassword)}>
                        <box-icon name={showPassword ? "hide" : "show"} color="grey" size="sm" />
                    </span>
                    <div className="line" />
                </div>
                <div className="buttonDiv">
                    <div className="cantSignIn" onClick={() => navigate("/forgotpassword")}>
                        Can’t sign in?
                    </div>
                    <button className="submitButton" type="Submit" disabled={!isFormValid()}>
                        Sign In
                    </button>
                </div>
                <p className="newUserText">New user? <span className="newAccountText" onClick={() => navigate("/signup")}>Create an account</span></p>
            </form>
        </div>
    );
};

export default SignIn;