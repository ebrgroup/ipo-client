import { useState } from "react";
import "./ConfirmProfile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';


const ConfirmProfile = (props) => {

    const [isAnimation, setIsAnimation] = useState(false);
    const navigate = useNavigate();
    const { state } = useLocation();
    let user = useSelector(state => state.userReducer?.userData); //Complete user details in {User} object

    const {
        cnic,
        email,
        firstName,
        lastName,
        phone,
        province,
        city,
        address
    } = user

    // Complete profile before navigation
    const emptyFields = [];
    const completeProfile = () => {
        // if (!cnic) emptyFields.push('CNIC');
        // if (!email) emptyFields.push('Email');
        // if (!phone) emptyFields.push('Phone');

        if (!firstName) emptyFields.push('First Name');
        if (!lastName) emptyFields.push('Last Name');
        if (!province) emptyFields.push('Province');
        if (!city) emptyFields.push('City');
        if (!address) emptyFields.push('Address');

        return (emptyFields.length > 0) ? false : true
    }

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

    const handleNavigation = () => {

        if (completeProfile()) {
            if (state.type === "trademark" || state.type === "design") {
                navigate("/selfshowcase", { state: { type: state.type } })
            } else if (state.type === "copyright") {
                navigate('/copyright/published', { state: { type: state.type } })
            } else {
                navigate("/patentflow");
            }
        }
        else {
            handleToastDisplay(`Complete your profile: ${emptyFields.join(', ')}`, "error");

        }

    }

    return (

        <div className="profileBox">
            <div className="profileBoxHeader">
                <h2>Profile</h2>
                <span className="editProfileButton" style={{ animation: isAnimation ? `popAnimation 0.5s ease-out` : `none` }}>
                    <span>
                        <box-icon name="edit-alt" color="#0652DD" size="0.85rem" />
                    </span>
                    <p onClick={() => navigate("/profile")}>
                        Edit Profile
                    </p>
                </span>
            </div>
            <div className="profileBoxBody">
                <div className="profileInfoInputDiv">
                    <p className="profileLabel">
                        CNIC
                    </p>
                    <input
                        className="profileInfoInputField"
                        type="text"
                        name="cnic"
                        value={cnic}
                        onFocus={(e) => {
                            setIsAnimation(true);
                            setTimeout(() => {
                                e.target.blur();
                            }, 400);
                        }}
                        onBlur={() => setIsAnimation(false)}
                    />
                    <div className="profileInfoLine" />
                </div>
                <div className="profileInfoInputDiv">
                    <p className="profileLabel">
                        Email
                    </p>
                    <input
                        className="profileInfoInputField longerProfileInputField"
                        type="text"
                        name="email"
                        value={email}
                        onFocus={(e) => {
                            setIsAnimation(true);
                            setTimeout(() => {
                                e.target.blur();
                            }, 400);
                        }}
                        onBlur={() => setIsAnimation(false)}
                    />
                    <div className="profileInfoLine" />
                </div>
                <div className="profileInfoNamesDiv">
                    <div className="profileInfoInputDiv">
                        <p className="profileLabel">
                            First Name
                        </p>
                        <input
                            className="profileInfoInputField"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onFocus={(e) => {
                                setIsAnimation(true);
                                setTimeout(() => {
                                    e.target.blur();
                                }, 400);
                            }}
                            onBlur={() => setIsAnimation(false)}
                        />
                        <div className="profileInfoLine" />
                    </div>
                    <div className="profileInfoInputDiv">
                        <p className="profileLabel">
                            Last Name
                        </p>
                        <input
                            className="profileInfoInputField"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onFocus={(e) => {
                                setIsAnimation(true);
                                setTimeout(() => {
                                    e.target.blur();
                                }, 400);
                            }}
                            onBlur={() => setIsAnimation(false)}
                        />
                        <div className="profileInfoLine" />
                    </div>
                </div>
                <div className="profileInfoInputDiv">
                    <p className="profileLabel">
                        Phone Number
                    </p>
                    <input
                        className="profileInfoInputField"
                        type="text"
                        name="phone"
                        value={phone}
                        onFocus={(e) => {
                            setIsAnimation(true);
                            setTimeout(() => {
                                e.target.blur();
                            }, 400);
                        }}
                        onBlur={() => setIsAnimation(false)}
                    />
                    <div className="profileInfoLine" />
                </div>
                <div className="profileInfoNamesDiv">
                    <div className="profileInfoInputDiv">
                        <p className="profileLabel">
                            Province
                        </p>
                        <input
                            className="profileInfoInputField"
                            type="text"
                            name="province"
                            value={province}
                            onFocus={(e) => {
                                setIsAnimation(true);
                                setTimeout(() => {
                                    e.target.blur();
                                }, 400);
                            }}
                            onBlur={() => setIsAnimation(false)}
                        />
                        <div className="profileInfoLine" />
                    </div>
                    <div className="profileInfoInputDiv">
                        <p className="profileLabel">
                            City
                        </p>
                        <input
                            className="profileInfoInputField"
                            type="text"
                            name="city"
                            value={city}
                            onFocus={(e) => {
                                setIsAnimation(true);
                                setTimeout(() => {
                                    e.target.blur();
                                }, 400);
                            }}
                            onBlur={() => setIsAnimation(false)}
                        />
                        <div className="profileInfoLine" />
                    </div>
                </div>
                <div className="profileBoxFooter">
                    <div className="profileInfoInputDiv">
                        <p className="profileLabel">
                            Address
                        </p>
                        <input
                            className="profileInfoInputField longerProfileInputField"
                            type="text"
                            name="address"
                            value={address}
                            onFocus={(e) => {
                                setIsAnimation(true);
                                setTimeout(() => {
                                    e.target.blur();
                                }, 400);
                            }}
                            onBlur={() => setIsAnimation(false)}
                        />
                        <div className="profileInfoLine" />
                    </div>

                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button
                    className="continueBtn"
                    onClick={handleNavigation}>
                    Continue
                </button>
            </div>

        </div>

    );
};

export default ConfirmProfile;