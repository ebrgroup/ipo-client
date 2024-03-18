import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
const SelectWork = () => {
    const [activeCard, setActiveCard] = useState('')
    const [cardsBorder, setCardsBorder] = useState('rgba(0, 0, 0, 0.1)')
    const navigate = useNavigate()
    const selectRadioCard = (cardIdx) => {
        if (cardIdx == 1) {
            setActiveCard('card-1')
        }
        else if (cardIdx == 2) {
            setActiveCard('card-2')
        }
        else if (cardIdx == 3) {
            setActiveCard('card-3')
        }
        else if (cardIdx == 4) {
            setActiveCard('card-4')
        }
        setCardsBorder('rgba(0, 0, 0, 0.1)')
    }

    const handleNavigation = () => {
        if (activeCard == 'card-1') {
            navigate('/copyright/artistic/classification')
        }
        else if (activeCard == 'card-2') {
            navigate('/copyright/literary/classification')
        }
        else if (activeCard == 'card-3') {
            navigate('/copyright/cinema/classification')
        }
        else if (activeCard == 'card-4') {
            navigate('/copyright/record/classification')
        }
    }
    return (
        <div className='Role-container'>
            {/* Role */}
            <section id='cards-section'>
                <h4 style={{ padding: "0", margin: "0", marginBottom: "1rem" }}>Which of the following best describes your work?</h4>
                <div id="radio-cards-container">
                    <div className={`radio-card radio-card-1 ${activeCard == 'card-1' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(1)}>
                        <div className="radio-card-check">
                            <i class="fa-regular fa-circle" style={{ color: ` ${cardsBorder}` }}></i>
                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">
                            <div className="radio-card-icon">
                                {/* <img src={Bhivetxt} /> */}
                                <i class="fa-solid fa-palette"></i>
                            </div>
                            <div className="radio-card-label-description">
                                Artistic Work
                            </div>

                        </div>
                    </div>
                    <div className={`radio-card radio-card-2 ${activeCard == 'card-2' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(2)}>
                        <div className="radio-card-check">
                            <i class="fa-regular fa-circle" style={{ color: `${cardsBorder}` }}></i>

                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">
                            <div className="radio-card-icon">
                                <i class="fa-duotone fa-books"></i>
                            </div>
                            <div className="radio-card-label-description">
                                Literary Work
                            </div>

                        </div>
                    </div>
                    <div className={`radio-card radio-card-3 ${activeCard == 'card-3' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(3)}>
                        <div className="radio-card-check">
                            <i class="fa-regular fa-circle" style={{ color: `${cardsBorder}` }}></i>

                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">
                            <div className="radio-card-icon">
                                <i class="fa-duotone fa-camera-movie"></i>
                            </div>
                            <div className="radio-card-label-description">
                                Cinematographic Work
                            </div>

                        </div>
                    </div>
                    <div className={`radio-card radio-card-4 ${activeCard == 'card-4' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(4)}>
                        <div className="radio-card-check">
                            <i class="fa-regular fa-circle" style={{ color: `${cardsBorder}` }}></i>

                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <div className="text-center">
                            <div className="radio-card-icon">

                                <i class="fa-duotone fa-record-vinyl"></i>
                            </div>
                            <div className="radio-card-label-description">
                                Record Work
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleNavigation}>Continue</button>
            </div>
        </div>
    )
}

export default SelectWork
