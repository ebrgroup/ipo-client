import React, { useState } from 'react'
import '../components/ChangePassStyle.css'
import IPO_icon from '../Icons/rectangle-8@2x.png'
import axios from 'axios';

function ChangePass() {
    const [old_pass, setOld_pass] = useState('');
    const [new_pass, setNew_pass] = useState('');
    const [confirm_pass, setConfirm_pass] = useState('');
    const id = '65b784e0337fad906c52bbb5';

    const isEmpty = (str) => str.trim().length === 0;
    const clearFields = () => {
        setOld_pass('');
        setNew_pass('');
        setConfirm_pass('');
    }

    const changePassClick = async (e) => {
        e.preventDefault();
        let response;
        if (!isEmpty(old_pass) && !isEmpty(new_pass) && !isEmpty(confirm_pass)) {
            try {
                response = await axios.put(`http://localhost:5000/ipo/users/changePassword/${id}`, {
                    password: old_pass,
                    newPassword: new_pass
                });

                alert(response.status); // Notify user for updating password
                clearFields(); //Clear fields after updating password

            } catch (error) {
                console.log(response, error);
            }
        }
        else {
            alert("Not set");
        }
    }

    const handleChange_Old = (e) => {
        setOld_pass(e.target.value);
    }
    const handleChange_New = (e) => {
        setNew_pass(e.target.value);

    }
    const handleChange_Confirm = (e) => {
        setConfirm_pass(e.target.value);
    }

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
                <div className="input">
                    <input type="text" onChange={handleChange_Old} placeholder='Old Password' value={old_pass} />
                </div>

                <div className="input">
                    <input type="password" onChange={handleChange_New} placeholder='New Password' value={new_pass} />
                </div>
                <div className="input">
                    <input type="password" onChange={handleChange_Confirm} placeholder='Confirm New Password' value={confirm_pass} />
                </div>

                <div className="btn">
                    <button onClick={changePassClick}>Change Password</button>
                </div>

            </form>
            <footer>Not remembered old password?
                <a href="/forgotpassword">Forgot Password</a></footer>
        </div>
    )
}

export default ChangePass;
