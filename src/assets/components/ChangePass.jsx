import React, { useEffect, useState } from 'react'
import '../components/ChangePassStyle.css'
import IPO_icon from '../Icons/rectangle-8@2x.png'
import axios from 'axios';
import { useSelector } from 'react-redux'


function ChangePass(props) {
    const User_ID = useSelector(state => state.userReducer.userData?._id);


    const [password, setPassword] = useState({
        Old_Pass: '',
        Confirm_Pass: '',
        New_Pass: ''

    })

    const isEmpty = (str) => str.trim().length === 0; //Check any field IsEmpty

    const clearFields = () => {
        setPassword({
            Old_Pass: '',
            Confirm_Pass: '',
            New_Pass: ''
        });
    }

    useEffect( () => {
        props.Progress(100);
    },[])

    const changePassClick = async (e) => {
        e.preventDefault();
        props.Progress(20);

        let response;
        if (!isEmpty(password.Old_Pass) && !isEmpty(password.New_Pass) && !isEmpty(password.Confirm_Pass)) {
            props.Progress(40);

            try {
                props.Progress(60);

                response = await axios.put(`http://localhost:5000/ipo/users/changePassword/${User_ID}`, {
                    password: password.Old_Pass,
                    newPassword: password.New_Pass
                });

                props.Progress(100);

                clearFields(); //Clear fields after updating password

            } catch (error) {
                console.log(response, error);
            }
        }
        else {
            alert("Not set");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setPassword(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='container'>
            <div className="header">
                <img src={IPO_icon} alt="" />
                <div className="header-content">
                    <h2>Change Password</h2>
                    <p>Please create a new password that you don’t use on any other site.</p>
                </div>
            </div>
            <form className='form' action="">
                <div className="change-password-container">
                    <input placeholder="Old Password" className="input-field" name="Old_Pass" type="password" 
                        onChange={handleChange} value={password.Old_Pass}/>
                </div>

                <div className="change-password-container">
                    <input placeholder="New Password" className="input-field" name="New_Pass" type="password" 
                        onChange={handleChange} value={password.New_Pass}/>
                </div>
                <div className="change-password-container">
                    <input placeholder="Confirm New Password" className="input-field" name="Confirm_Pass" type="password" 
                            onChange={handleChange} value={password.Confirm_Pass}/>
                </div>

                <div className="btn">
                    <button onClick={changePassClick}>Change Password</button>
                </div>

            </form>
            <footer className='change-password-footer'>Not remembered old password?
                <a href="/forgotpassword">Forgot Password</a></footer>
        </div>
    )
}

export default ChangePass;
