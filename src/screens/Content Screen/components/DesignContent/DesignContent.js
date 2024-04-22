import React, { useEffect, useState } from "react";
import "./designcontent.css";
import Inputs from "./components/Inputs";

const DesignContent = ({ viewData }) => {

    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");
    const [isPartnershipFirm, setPartnershipFirm] = useState(false);
    const [partnersData, setPartnersData] = useState([]);

    useEffect(() => {
        console.log(viewData)
    }, [])

    return(
        <div className="trademarkContent-parent">
            <div className="trademarkContent-screen-background">
                <h4 className="form1-main-heading">Application Details</h4>
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
                            rows="7" placeholder="Enter details here..." />
                    </div>
                    <hr className="heading-hr" style={{ marginTop: "4vh", marginBottom: "4vh" }} />
                    <div className="owner-heading">
                    <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                    <h4>Owner and Business Details</h4>
                </div>
                <div class="radio-inputs">
                    <label class="radio">
                        <input type="radio" name="soleProprieterShip"
                            checked={selectedOption === "soleProprieterShip"} />
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
                        setPartnershipFirm={setPartnershipFirm} />
                </div>
                </div>
                <div className="patentContent-btns">
                    <button className='approveButton'>Approve</button>
                    <button className='declineButton'>Decline</button>
                </div>
            </div>
        </div>
    );
}

export default DesignContent;