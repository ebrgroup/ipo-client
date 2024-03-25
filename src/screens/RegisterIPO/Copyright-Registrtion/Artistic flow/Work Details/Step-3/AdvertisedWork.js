import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch, useSelector } from 'react-redux';
import { advertisedWork } from '../../../../../../assets/states/actions/Copyright_Data handle/copyrightData-action';

const AdvertisedWork = ({ Progress }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isAdvertised, setIsAdvertised] = useState('no')
    const [advertisedDetails, setAdvertisedDetails] = useState({
        title: '',
        nameOfAdver: '',
        dateOfAdver: '',
        logoFile: '',
        URL:''


    });
    // const dispatch = useDispatch();
    const handleChange = (event) => {
        const newValue = event.target.value;
        setIsAdvertised(newValue);
    };

    const handleAdvertisedData = (e) => {
        //
        const { name, value, files } = e.target
        if (name == "logoFile") {
            setAdvertisedDetails((prevDetails) => ({
                ...prevDetails,
                [name]: files[0],
                URL: URL.createObjectURL(files[0])
            }));
        } else {
            setAdvertisedDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value
            }));
        }

    }

    const handleDataAndNavigation = () => {
        if (isAdvertised == 'yes') {
            if (areRequiredFieldsEmpty()) {
                handleToastDisplay("Required fields (*) are empty!", "error");
                return;
            }
            dispatch(advertisedWork({
                advertised: true,
                data: advertisedDetails
            }))
        }
        else {
            dispatch(advertisedWork({
                advertised: false,
                data: {}
            }))
        }
        navigate("/copyright/artistic/reviewapplication")
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

    const advertisedData = useSelector(state => state.copyrightReducer?.advertised)
    useEffect(() => {
        Progress(50);
        if (advertisedData.advertised) {
            const {
                title,
                nameOfAdver,
                dateOfAdver,
                logoFile
            } = advertisedData.data

            setAdvertisedDetails({
                title: title,
                nameOfAdver: nameOfAdver,
                dateOfAdver: dateOfAdver,
                logoFile: logoFile
            })
            setIsAdvertised('yes')
        }
        else {
            setIsAdvertised('no')
        }
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
                            value={advertisedDetails.title}
                            placeholder='Title of work'
                            onChange={handleAdvertisedData}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="nameOfAdver">Name of advertisement <strong>*</strong></label>
                        <input
                            type="text"
                            name="nameOfAdver"
                            id="nameOfAdver"
                            value={advertisedDetails.nameOfAdver}
                            placeholder='Name of advertisement'
                            onChange={handleAdvertisedData}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="date">Date of advertisement <strong>*</strong></label>
                        <input
                            type="date"
                            name="dateOfAdver"
                            id="date"
                            value={advertisedDetails.dateOfAdver}
                            onChange={handleAdvertisedData}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="file">Upload copy (e.g: Newspaper in which advertised) <strong>*</strong></label>
                        <input type="file"
                            onChange={handleAdvertisedData}
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
