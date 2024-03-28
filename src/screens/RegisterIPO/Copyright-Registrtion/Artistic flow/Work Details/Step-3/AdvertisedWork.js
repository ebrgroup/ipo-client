import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';

const AdvertisedWork = ({ Progress }) => {
    const navigate = useNavigate();
    const [isAdvertised, setIsAdvertised] = useState('no')
    const [advertisedDetails, setAdvertisedDetails] = useState({
        nameOfAdver: '',
        title: '',
        dateOfAdver: '',
        logoFile: ''

    });
    // const dispatch = useDispatch();
    const handleChange = (event) => {
        const newValue = event.target.value;
        setIsAdvertised(newValue);
    };

    const handleGoodDetails = (e) => {
        //
        setAdvertisedDetails((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));

    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty() && (isAdvertised == 'yes')) {
            handleToastDisplay("Required fields (*) are empty!", "error");
        } else {
            navigate("/copyright/artistic/reviewapplication")
            // console.log('Navigating....');
        }
    }

    const areRequiredFieldsEmpty = () => {
        for (const key in advertisedDetails) {
            if (advertisedDetails.hasOwnProperty(key) && advertisedDetails[key] === '') {
                return true;
            }
        }
        return false;
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
            <div className="animation" style={{ display: isAdvertised == 'yes' ? 'none' : 'block' }}>
                <Player src={require('../../../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
            </div>
            <div className="radioBtns">
                <h4>Is your work advertised ?</h4>
                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="No"
                        value='no'
                        onChange={handleChange}
                        checked={isAdvertised === 'no'}
                    />
                    <label htmlFor="No">My work is not currently advertised.</label>
                </div>

                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="Yes"
                        value='yes'
                        onChange={handleChange}
                        checked={isAdvertised === 'yes'} />
                    <label htmlFor="Yes">My work is indeed advertised.</label>                </div>
            </div>

            {isAdvertised == 'yes' && (
                <div className="representativeFields">
                    <div className="input">
                        <label htmlFor="title">Title of work <strong>*</strong></label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Title of work'
                            onChange={handleGoodDetails}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="nameOfAdver">Name of advertisement <strong>*</strong></label>
                        <input
                            type="text"
                            name="nameOfAdver"
                            id="nameOfAdver"
                            placeholder='Name of advertisement'
                            onChange={handleGoodDetails}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="date">Date of advertisement <strong>*</strong></label>
                        <input
                            type="date"
                            name="dateOfAdver"
                            id="date"
                            onChange={handleGoodDetails}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="file">Upload copy (e.g: Newspaper in which advertised) <strong>*</strong></label>
                        <input type="file"
                            onChange={handleGoodDetails}
                            id='file'
                            name="logoFile" />
                    </div>
                </div>
            )}
            <div className="btns" >
                <button className="backBtn" onClick={() => navigate(-1)}>Back</button>
                <button className="continueBtn" onClick={handleDataAndNavigation}>Continue</button>
            </div>
        </section>
    );
};

export default AdvertisedWork;
