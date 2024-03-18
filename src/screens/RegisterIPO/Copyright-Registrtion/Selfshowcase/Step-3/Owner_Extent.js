import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch, useSelector } from 'react-redux';
import './extent.css'
const Owner_Extent = ({ Progress }) => {
    const navigate = useNavigate();
    const [anyExtent, setAnyExtent] = useState('no')
    const [extentRights, setExtentRights] = useState({
        Name: '',
        Address: '',
        Nationality: '',
        Rights: ''

    });
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setAnyExtent(event.target.value)
    };

    const handleExtentData = (e) => {
        //
        setExtentRights((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));


    }

    const handleDataAndNavigation = () => {
        if (anyExtent == 'yes') {
            // Validate published data
            if (!extentRights.Name || !extentRights.Address || !extentRights.Nationality || !extentRights.Rights) {
                handleToastDisplay('Please fill in all required fields', 'error');
                return;
            }
            // Process published data
            console.log('Extent Rights Data:', extentRights);
        } else {
            console.log('Not any assignment made yet');
        }
        // Navigate to the next step
        navigate('/copyright/work');
    };

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
            <div className="animation" style={{ display: anyExtent == 'yes' ? 'none' : 'block' }}>
                <Player src={require('../../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
            </div>
            <div className="radioBtns">
                <h4>Is any extent of rights held by each owner regarding the copyrighted work ?</h4>
                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="No"
                        value='no'
                        onChange={handleChange}
                        checked={anyExtent == 'no'}
                    />
                    <label htmlFor="No">No any extent rights</label>
                </div>

                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="Yes"
                        value="yes"
                        onChange={handleChange}
                        checked={anyExtent == 'yes'} />
                    <label htmlFor="Yes">I made some extent rights</label>
                </div>
            </div>

            {anyExtent == 'yes' && (
                <div className="representativeFields">

                    <div className="input">
                        <label htmlFor="Name">Name <strong>*</strong></label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            // value={firstName}
                            onChange={handleExtentData}
                        // value={publishedData.name}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="Address">Address <strong>*</strong></label>
                        <input
                            type="text"
                            name="Address"
                            id="Address"
                            // value={address}
                            onChange={handleExtentData}
                        // value={publishedData.country}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="Nationality">Nationality <strong>*</strong></label>
                        <input
                            type="text"
                            name="Nationality"
                            id="Nationality"
                            onChange={handleExtentData}
                        // value='Pakistani'
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="Rights">Rights on copyright <strong>*</strong></label>
                        <input
                            type="text"
                            name="Rights"
                            id="Rights"
                            onChange={handleExtentData}
                        // value='Pakistani'
                        />
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

export default Owner_Extent;
