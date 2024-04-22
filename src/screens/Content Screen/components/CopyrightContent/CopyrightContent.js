import React, { useState } from "react";
import ownerIcon from '../../../../assets/Icons/owner-icon.png';
import { useSelector } from "react-redux";

const CopyrightContent = () => {

    const [activeCard, setActiveCard] = useState('');
    const [cardsBorder, setCardsBorder] = useState('rgba(0, 0, 0, 0.1)');
    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");
    const [type, setType] = useState('');
    const selectRadioCard = (cardIdx) => {

        if (cardIdx == 1) {
            setActiveCard('card-1')
            setType('Artistic')
        }
        else if (cardIdx == 2) {
            setActiveCard('card-2')
            setType('Literary')
        }
        else if (cardIdx == 3) {
            setActiveCard('card-3')
            setType('Cinema')
        }
        else if (cardIdx == 4) {
            setActiveCard('card-4')
            setType('Record')
        }
        setCardsBorder('rgba(0, 0, 0, 0.1)')
    }
    const work = useSelector(state => state.copyrightReducer?.workType);
    const classification = useSelector(state => state.copyrightReducer?.classification?.classificationClass);

    return(
        <div className="trademarkContent-parent">
            <div className="trademarkContent-screen-background">
                <h4 className="form1-main-heading">Application Details</h4>
                <div className="trademarkContent-screen-parent"> 
                <div className="trademarkContent-heading">
                    <img src={require("../../../../assets/Icons/form-icon.png")} className="form-icon" />
                    <h4>Work Details</h4>
                </div>
                <section id='cards-section' style={{ marginTop: "5vh" }}>
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
                <hr className="heading-hr" style={{ marginTop: "4vh", marginBottom: "4vh" }} />
                <div className="trademarkContent-heading">
                    <img src={require("../../../../assets/Icons/form-icon.png")} className="form-icon" />
                    <h4>Classification Details</h4>
                </div>
                <div className="trademark-content-inputs">
                        <span className="classificationLabel">
                            Classification
                        </span>
                        <input
                            className="trademark-content-classificationInput"
                            placeholder="Search here..."
                            value=""
                            type="text"
                        />
                    </div>
                    <div className="classificationDescription">
                        <span className="classificationLabel">
                            Details of Goods/Services
                        </span>
                        <br />
                        <textarea value="" className="trademark-content-classificationInput classificationTextArea"
                            rows="7" placeholder="Enter details here..." />
                    </div>
                    <hr className="heading-hr" style={{ marginTop: "4vh", marginBottom: "4vh" }} />
                    <div>
                        <div className="owner-heading">
                            <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                            <h4>Owner and Business Details</h4>
                        </div>
                        {(type == 'Artistic') ? (<div class="radio-inputs">
                            <label class="radio">
                                <input type="radio" name="soleProprieterShip"
                                    checked={selectedOption === "soleProprieterShip"} />
                                <span class="name">Sole Proprietorship</span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="attorney"
                                    checked={selectedOption === "attorney"} />
                                <span class="name">Attorney</span>
                            </label>

                        </div>) : null}
                        <div className="partnership-parent-container full ">
                            <div className="partnership-input-container">
                                <label>Name <strong>*</strong></label>
                                <input placeholder="Name" type="text" name="Name" value=""/>
                            </div>
                            <div className="partnership-input-container">
                                <label>Adress <strong>*</strong></label>
                                <input placeholder="Address" name="Address" type="text" value=""/>
                            </div>

                            <div className="partnership-input-container">
                                <label>Nationality <strong>*</strong></label>
                                <input placeholder='Nationality' name='Nationality' type="text" value=""/>
                            </div>
                        </div>
                        {(type == 'Artistic') ? ((selectedOption == 'attorney') ? (
                            <>

                                <div className="partnership-input-container">
                                    <label>Law of practice <strong>*</strong></label>
                                    <input placeholder="Law of practice" type="text" name="lawOfPractice" value="" />
                                </div>
                                <div className="partnership-input-container">
                                    <label>Licence file (Vakaltnama) <strong>*</strong></label>
                                    <input placeholder="Choose license file" name="licenceFile" type="file" value="" />
                                </div>
                            </>
                        ) :
                            (
                                <>
                                    <div className="partnership-input-container">
                                        <label>Bussiness Name <strong>*</strong></label>
                                        <input placeholder="Bussiness Name" name="bussinessName" type="text" value="" />
                                    </div>
                                    <div className="partnership-input-container">
                                        <label>Bussiness Adress <strong>*</strong></label>
                                        <input placeholder="Bussiness Address" name="bussinessAddress" type="text" value="" />
                                    </div>
                                </>
                            )) : (
                            <div className="partnership-input-container">
                                <label>Cnic <strong>*</strong></label>
                                <input placeholder="Cnic" name="cnic" type="text" value="" />
                            </div>
                        )}
                    </div>
                    <div className="owner-heading">
                        <img src={ownerIcon} className="owner-icon" />
                        <h4>Work Details</h4>
                    </div>
                    <section id="logoDetail-section">
                        <div className="input">
                            <label htmlFor="title">Work title<strong>*</strong></label>
                            <input type="text"
                                value=""
                                placeholder='Work title'
                                id='title'
                                name="title" />
                        </div>

                        <div className="input">
                            <label htmlFor="location">Location of work (e.g: London)<strong>*</strong></label>
                            <input type="text"
                                value=""
                                placeholder='Location of work'
                                id='location'
                                name="country" />
                        </div>
                        {/* </div> */}
                        {(work == 'Artistic' && Number(classification) === 2) || (work != 'Artistic') ? (
                            <div className="input">
                                <label htmlFor="">Completed year (When your work is complete) <strong>*</strong></label>
                                <input type="date" name="completedYear" value="" />
                            </div>
                        ) : ""}

                        {work != 'Artistic' ? <div className="input">
                            <label htmlFor="">Language (Specify Language e.g: Arabic) <strong>*</strong></label>
                            <input type="text" placeholder='Language' value="" name="completedYear" />

                        </div> : ""}
                </section>
                </div>
                <div className="patentContent-btns">
                    <button className='approveButton'>Approve</button>
                    <button className='resubmitButton'>Resubmit</button>
                    <button className='declineButton'>Decline</button>
                </div>
            </div>
        </div>
    );
}

export default CopyrightContent;