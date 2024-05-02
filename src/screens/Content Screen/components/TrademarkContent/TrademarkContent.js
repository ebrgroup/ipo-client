import React, { useState } from "react";
import "./trademarkcontent.css";
import Inputs from "./components/Inputs";
import Bhivetxt from '../../../../assets/Icons/Bhivetxt.png';
import BhiveImg from '../../../../assets/Icons/Bhiveimg.png'
import BhiveImgtxt from '../../../../assets/Icons/BhiveimgText.png'
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TrademarkContent = ({ viewData }) => {

    const [selectedOption, setSelectedOption] = useState(viewData.applicationOwner.ownerType);
    const [isPartnershipFirm, setPartnershipFirm] = useState(false);
    const [partnersData, setPartnersData] = useState([]);
    const [activeCard, setActiveCard] = useState('')
    const [cardsBorder, setCardsBorder] = useState('rgba(0, 0, 0, 0.1)')

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

        setCardsBorder('rgba(0, 0, 0, 0.1)')
    }

    const updateStatus = async (status) => {
        await axios.put(`http://localhost:5000/ipo/trademark?id=${viewData._id}&status=${status}`).then(response => {
            handleToastDisplay(response.data.message, "success");
            navigate("/examiner");
        }).catch(error => {
            if (error.response !== undefined) {
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
        });
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
        }
    };

    return(
        <div className="trademarkContent-parent">
                <h4 className="form1-main-heading" style={{ textAlign: "center", margin: "0", marginBottom: "1rem" }}>Trademark Application Details</h4>
                <div className="trademarkContent-screen-parent"> 
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
                            value={viewData.classificationClass}
                            type="text"
                        />
                    </div>
                    <div className="classificationDescription">
                        <span className="classificationLabel">
                            Details of Goods/Services
                        </span>
                        <br />
                        <textarea value={viewData.detailsOfGoods} className="trademark-content-classificationInput classificationTextArea"
                            rows="7" placeholder="Enter details here..."  />
                    </div>
                    <hr className="heading-hr" style={{ marginTop: "4vh", marginBottom: "4vh" }} />
                    <div className="owner-heading">
                    <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                    <h4>Owner and Business Details</h4>
                </div>
                <div class="radio-inputs">
                    <label class="radio">
                        <input type="radio" name="soleProprieterShip"
                            checked={selectedOption === "self"} />
                        <span class="name">Sole Proprietorship</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="partnershipFirm"
                            checked={selectedOption === "partnershipFirm"} />
                        <span class="name">Partnership Firm</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="singleMemberCompany"
                            checked={selectedOption === "singleMemberCompany"} />
                        <span class="name">Single Member Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="privateLimitedCompany"
                            checked={selectedOption === "privateLimitedCompany"} />
                        <span class="name">Private Limited Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="publicLimitedCompany"
                            checked={selectedOption === "publicLimitedCompany"} />
                        <span class="name">Public Limited Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="other"
                            checked={selectedOption === "other"} />
                        <span class="name">Other</span>
                    </label>
                </div>
                {isPartnershipFirm ? (
                    <>
                        <div className="partnership-parent-container">
                            <div className="partnership-input-container">
                                <label>Name of partner <strong>*</strong></label>
                                <input placeholder="Name" type="text" />
                            </div>
                            <div className="partnership-input-container">
                                <label>Nationality <strong>*</strong></label>
                                <input placeholder="Nationality" type="text" />
                            </div>
                            <div className="partnership-input-container">
                                <label>CNIC Number <strong>*</strong></label>
                                <input placeholder="CNIC" type="text" />
                            </div>
                        </div>
                        <div className="owner-dataGrid">
                            <table className="owner-dataTable">
                                <thead>
                                    <tr>
                                        <th className="firstHeader">Full name</th>
                                        <th>Nationality</th>
                                        <th>CNIC</th>
                                        <th className="lastHeader">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partnersData.length === 0 ? (
                                        <>
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </>
                                    ) :
                                        <>
                                            {partnersData.map((data) => {
                                                return (
                                                    <tr>
                                                        <td>{data.fullName}</td>
                                                        <td>{data.nationality}</td>
                                                        <td>{data.cnic}</td>
                                                        <td>-</td>
                                                    </tr>
                                                );
                                            })}
                                        </>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : null}
                <div className="owner-screen-inputs">
                    <Inputs inputData={selectedOption} setPartnersData={setPartnersData}
                        setPartnershipFirm={setPartnershipFirm} ownerDetails={viewData.ownerDetails} />
                </div>
                <hr className="heading-hr" style={{ marginTop: "4vh", marginBottom: "4vh" }} />
                <section id='cards-section'>
                    <h4 style={{ padding: "0", margin: "0", marginBottom: "1rem" }}>Which of the following best describes the trademark?</h4>
                    <div id="radio-cards-container">
                        <div className={`radio-card radio-card-1 ${activeCard == 'card-1' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(1)}>
                            <div className="radio-card-check">
                                <i class="fa-regular fa-circle" style={{ color: ` ${cardsBorder}` }}></i>
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
                        <div className={`radio-card radio-card-2 ${activeCard == 'card-2' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(2)}>
                            <div className="radio-card-check">
                                <i class="fa-regular fa-circle" style={{ color: `${cardsBorder}` }}></i>

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
                        <div className={`radio-card radio-card-3 ${activeCard == 'card-3' ? 'selected' : ''}`} style={{ border: `2px solid ${cardsBorder}` }} onClick={() => selectRadioCard(3)}>
                            <div className="radio-card-check">
                                <i class="fa-regular fa-circle" style={{ color: `${cardsBorder}` }}></i>

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
                    <div className="input">
                        <label htmlFor="">Mark title<strong>*</strong> (e.g: coca-cola)</label>
                        <input type="text"
                            value={viewData.logoDetails.markDesc}
                            name="markDesc" />
                    </div>
                    <div className="input">
                        <label htmlFor="">Domain Name (Indicate Whether it is in respect of goods or services)<strong>*</strong></label>
                        <input type="text"
                            value={viewData.logoDetails.domainName}
                            name="domainName" />
                    </div>
                    <div className="input">
                        <label htmlFor="">Color Claimed (Indicate here and state the colors) <strong>*</strong></label>
                        <input type="text" name="colorClaimed" value={viewData.logoDetails.colorClaimed} />

                    </div>
                    <div className="input">
                        <label htmlFor="">Marks in series (How many marks in series) <strong>*</strong></label>
                        <input type="number" name="markSeries" value="" />
                    </div>
                </section>
                </div>
                <div className="patentContent-btns">
                    <button className='approveButton' onClick={() => updateStatus("Register")}>Approve</button>
                    <button className='declineButton' onClick={() => updateStatus("Decline")}>Decline</button>
                </div>
        </div>
    );
}

export default TrademarkContent;