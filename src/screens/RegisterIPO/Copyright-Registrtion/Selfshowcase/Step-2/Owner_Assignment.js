import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch, useSelector } from 'react-redux';
import './assignment.css'
const Owner_Assignment = ({ Progress }) => {
    const navigate = useNavigate();
    const [assignment, setAssignments] = useState('no')
    const [asignmentDetails, setAssignmentDetails] = useState({
        Assignor: '',
        Assignee: '',
        Assignment_Date: '',
        Rights: ''

    });
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setAssignments(event.target.value)
    };


    const handleAssignmentData = (e) => {
        setAssignmentDetails((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));

    }

    const areRequiredFieldsEmpty = () => {
        for (const key in asignmentDetails) {
            if (asignmentDetails.hasOwnProperty(key) && asignmentDetails[key] === '') {

                return true;
            }
        }
        return false;
    }


    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty() && (assignment == 'yes')) {
            
            handleToastDisplay("Required fields are empty!", "error");
        } else {
            navigate("/copyright/owner/extent")
        }

        console.log(asignmentDetails);
    }

    const handleToastDisplay = (message, type) => {
        const toastConfig = {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        };

        switch (type) {
            case 'success':
                toast.success(message, toastConfig);
                break;
            case 'error':
                toast.error(message, toastConfig);
                break;
            default:
                toast(message, toastConfig);
                break;
        }
    };

    useEffect(() => {
        Progress(100);
    }, []);

    return (
        <section className="selfShowcaseContainer">
            <div className="animation" style={{ display: assignment == 'yes' ? 'none' : 'block' }}>
                <Player src={require('../../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
            </div>
            <div className="radioBtns">
                <h4>Is any agreements regarding the assignment of ownership of the copyright rights have been made?</h4>
                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="No"
                        value='no'
                        onChange={handleChange}
                        checked={assignment == 'no'}
                    />
                    <label htmlFor="No">Don't made any assignment for this copyright</label>
                </div>

                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="Yes"
                        value='yes'
                        onChange={handleChange}
                        checked={assignment == 'yes'} />
                    <label htmlFor="Yes">I made some assignment for this copyright</label>
                </div>
            </div>


            {assignment == 'yes' && (
                <div className="representativeFields">

                    <div className="input">
                        <label htmlFor="Assignor">Who is assignor <strong>*</strong></label>
                        <input
                            type="text"
                            name="Assignor"
                            id="Assignor"
                            // value={firstName}
                            onChange={handleAssignmentData}
                        // value={publishedData.name}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="assignee">Who is assignee <strong>*</strong></label>
                        <input
                            type="text"
                            name="Assignee"
                            id="assignee"
                            // value={address}
                            onChange={handleAssignmentData}
                        // value={publishedData.country}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="date">Assignment date <strong>*</strong></label>
                        <input
                            type="date"
                            name="Assignment_Date"
                            id="date"
                            onChange={handleAssignmentData}
                        // value='Pakistani'
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="Rights">Assignment description </label>

                        <textarea className="classificationInput classificationTextArea"
                            onChange={handleAssignmentData} style={{ 'width': '98%' }} rows="7" placeholder="Enter details here..." name='Rights' />
                    </div>
                
                </div>
            )}

            <div className="btns">
                <button className="backBtn" onClick={() => navigate(-1)}>Back</button>
                <button className="continueBtn" onClick={handleDataAndNavigation}>Continue</button>
            </div>
        </section>
    );
};

export default Owner_Assignment;
