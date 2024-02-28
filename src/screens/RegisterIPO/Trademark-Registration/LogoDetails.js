import React, { useEffect, useState } from 'react'
import './logoDetails.css'
import Bhivetxt from '../../../assets/Icons/Bhivetxt.png'
import BhiveImg from '../../../assets/Icons/Bhiveimg.png'
import BhiveImgtxt from '../../../assets/Icons/BhiveimgText.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logoDetail } from '../../../assets/states/actions/Trademark registration/Trademark-action'

const LogoDetails = ({ Progress }) => {

    const [activeCard, setActiveCard] = useState('')
    const [logoDetails, setLogoDetails] = useState({
        markDesc: "",
        domainName: "",
        colorClaimed: "",
        markSeries: "",
        logoFile: "",
        markType: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectRadioCard = (cardIdx) => {
        let markType = "";
        if (cardIdx == 1) {
            setActiveCard('card-1')
            markType = "Word Mark";
        }
        else if (cardIdx == 2) {
            setActiveCard('card-2')
            markType = "Design Mark";
        }
        else if (cardIdx == 3) {
            setActiveCard('card-3')
            markType = "Word & Design Mark";
        }

        setLogoDetails((prevData) => ({
            ...prevData,
            markType
        }));
    }

    const handleChange = (e) => {
        setLogoDetails((prevDetails) => ({
            ...prevDetails,
            [e.target.name]: e.target.value
        }));
    }

    const handleDataAndNavigation = () => {
        dispatch(logoDetail({
            logoDetails
        }));
        navigate("/reviewApplication")
    }

    useEffect(() => {
        Progress(100);
    }, [])

    return (
        <main className="logoDetails-container">
            <section id='cards-section'>
                <h4 style={{ padding: "0", margin: "0", marginBottom: "1rem" }}>Which of the following best describes the trademark?</h4>
                <div id="radio-cards-container">
                    <div className={`radio-card radio-card-1 ${activeCard == 'card-1' ? 'selected' : ''}`} onClick={() => selectRadioCard(1)}>
                        <div className="radio-card-check">
                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">
                            <div className="radio-card-label-description">
                                It consists of only words, letters or numbers
                            </div>
                            <div className="radio-card-icon">
                                <img src={Bhivetxt} />
                            </div>
                        </div>
                    </div>
                    <div className={`radio-card radio-card-2 ${activeCard == 'card-2' ? 'selected' : ''}`} onClick={() => selectRadioCard(2)}>
                        <div className="radio-card-check">
                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">

                            <div className="radio-card-label-description">
                                It is a picture without words, letters or numbers
                            </div>
                            <div className="radio-card-icon">
                                <img src={BhiveImg} />
                            </div>
                        </div>
                    </div>
                    <div className={`radio-card radio-card-3 ${activeCard == 'card-3' ? 'selected' : ''}`} onClick={() => selectRadioCard(3)}>
                        <div className="radio-card-check">
                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">

                            <div className="radio-card-label-description">
                                It consists of words, letters or numbers in a particular picture
                            </div>
                            <div className="radio-card-icon">
                                <img src={BhiveImgtxt} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="logoDetail-section">
                {/* <div className="representativeFields"> */}

                {/* <div className='input-container'> */}
                <div className="input">
                    <label htmlFor="">Mark Description<strong>*</strong></label>
                    <input type="text" onChange={handleChange} name="markDesc" />
                </div>

                <div className="input">
                    <label htmlFor="">Domain Name (Indicate Whether it is in respect of goods or services)<strong>*</strong></label>
                    <input type="text" onChange={handleChange} name="domainName" />
                </div>
                {/* </div> */}


                <div className="input">
                    <label htmlFor="">Color Claimed (Indicate here and state the colors) <strong>*</strong></label>
                    <input type="text" onChange={handleChange} name="colorClaimed" />
                </div>
                <div className="input">
                    <label htmlFor="">Marks in series (Write in numbers) <strong>*</strong></label>
                    <input type="number" onChange={handleChange} name="markSeries" />
                </div>

                <div className="input">
                    <label htmlFor="">Upload copy of trademark <strong>*</strong></label>
                    <input type="file" onChange={handleChange} name="logoFile" />
                </div>
                {/* </div> */}
            </section>
            <button id='continueBtn' onClick={handleDataAndNavigation}  >Continue</button>
        </main>
    )
}

export default LogoDetails
