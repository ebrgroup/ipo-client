import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ownerIcon from '../../../../../../assets/Icons/owner-icon.png'
// import { logoDetail } from '../../../assets/states/actions/Trademark registration/Trademark-action'

const Work_Details = ({ Progress }) => {

    const [logoDetails, setLogoDetails] = useState({
        title: "",
        location: "",
        completedYear: "",
        logoFile: "",
        imageURL: "",
        // language
    });

    const [title, setTitle] = useState('')
    const location = useLocation('')

    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "logoFile") {
            setLogoDetails((prevDetails) => ({
                ...prevDetails,
                [e.target.name]: e.target.files[0],
                imageURL: URL.createObjectURL(e.target.files[0])
            }));
        } else {
            setLogoDetails((prevDetails) => ({
                ...prevDetails,
                [e.target.name]: e.target.value
            }));
        }
    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty()) {

            if (location.pathname.includes('artistic')){

                navigate("/copyright/artistic/logodetails/services")
            }
            else{
                navigate(`/copyright/${title.toLowerCase()}/reviewApplication`)

            }
        } else {
            handleToastDisplay("Required fields (*) are empty!", "error");
        }
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

    const areRequiredFieldsEmpty = () => {
        for (const key in logoDetails) {
            if (logoDetails.hasOwnProperty(key) && logoDetails[key] === "") {
                return false;
            }
        }
        return true;
    }

    // Logic for previous data
    //When back button is press
    // The previous data is kept safe
    useEffect(() => {
        Progress(100)
        if (location.pathname.includes('artistic')) {
            // navigate("/copyright/artistic/ownerDetails")
            setTitle('Artistic')
        }
        else if (location.pathname.includes('literary')) {
            setTitle('Literary')
        }
        else if (location.pathname.includes('cinema')) {
            setTitle('Cinematographic')
        }
        else if (location.pathname.includes('record')) {
            setTitle('Record')
        }

    }, [])

    return (
        <main className="logoDetails-container">
            <div className="owner-heading">
                <img src={ownerIcon} className="owner-icon" />
                <h4>{title} Work Details</h4>
            </div>
            <section id="logoDetail-section">
                <div className="input">
                    <label htmlFor="title">Work title<strong>*</strong></label>
                    <input type="text"
                        onChange={handleChange}
                        // value={logoDetails.markDesc}
                        placeholder='Work title'
                        id='title'
                        name="title" />
                </div>

                <div className="input">
                    <label htmlFor="location">Location of work (e.g: London)<strong>*</strong></label>
                    <input type="text"
                        onChange={handleChange}
                        // value={logoDetails.domainName}
                        placeholder='Location of work'
                        id='location'
                        name="location" />
                </div>
                {/* </div> */}
                {
                    title == 'Artistic' ? (
                        <div className="input">
                            <label htmlFor="">Completed work (When your is complete) <strong>*</strong></label>
                            <input type="date" onChange={handleChange} name="completedYear" />
                        </div>
                    ) : (<div className="input">
                        <label htmlFor="">Language (Specify Language e.g: Spanish) <strong>*</strong></label>
                        <input type="text" onChange={handleChange} placeholder='Language' name="completedYear" />
                    </div>)
                }



                <div className="input">
                    <label htmlFor="logo">Upload copy of your work <strong>*</strong></label>
                    <input type="file"
                        // value={'logoDetails.logoFile'}
                        onChange={handleChange}
                        id='logo'
                        name="logoFile" />
                </div>
                <div className=" input selected-logo">
                    <img src={logoDetails.imageURL} width="210px" />
                </div>
                {/* </div> */}
            </section>

            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleDataAndNavigation} >Continue</button>
            </div>
        </main>
    )
}

export default Work_Details
