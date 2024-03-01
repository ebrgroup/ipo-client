import { useEffect, useRef, useState } from "react";
import "./ownerdetails.css";
import Inputs from "./components/Inputs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ownerDetail } from "../../../../assets/states/actions/Trademark registration/Trademark-action";
import { toast } from "react-toastify";

const OwnerDetails = (props) => {
    const [ownerDetails, setOwnerDetails] = useState({
        businessName: "", businessAddress: "",
        province: "", city: "",
        companyName: "",
        otherBusinessDescription: ""
    });
    const [partnersData, setPartnersData] = useState([]);
    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");
    const [isPartnershipFirm, setPartnershipFirm] = useState(false);

    const navigate = useNavigate(null);

    const fullNameRef = useRef(null);
    const nationalityRef = useRef(null);
    const cnicRef = useRef(null);

    const dispatch = useDispatch();

    const handleAddClick = () => {
        setPartnersData([
            ...partnersData,
            {
                fullName: fullNameRef.current.value,
                nationality: nationalityRef.current.value,
                cnic: cnicRef.current.value
            }
        ]);
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.name);
    }

    const handleDataAndNavigation = () => {
        if(areRequiredFieldsEmpty()) {
            dispatch(ownerDetail({
                ownerDetails,
                partnersData
            }));
            navigate("/logodetails");
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
        console.log(ownerDetails.businessName);
        if((ownerDetails.businessName === "" || ownerDetails.businessAddress === "") 
            || (checkUncommonFields() === false)) {
            return false;
        }
        return true;
    };

    const checkUncommonFields = () => {
        if(selectedOption === "soleProprieterShip" && 
            (ownerDetails.city === "" || ownerDetails.province === "")) {
                return false;
        } else if (selectedOption === "partnershipFirm" && partnersData.length < 1) {
            return false;
        } else if (["singleMemberCompany", "privateLimitedCompany", "publicLimitedCompany"].includes(selectedOption) &&
            ownerDetails.companyName === "") {
                return false;
        } else if(selectedOption === "other" && 
            (ownerDetails.companyName === "" || ownerDetails.otherBusinessDescription === "" )) {
                return false;
        }
        return true;
    }

    return (
        <div className="owner-screen-background">
            <h4 className="owner-main-heading">Application for registration of trademark</h4>
            <div className="owner-screen-parent">
                <div className="owner-heading">
                    <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                    <h4>Owner and Business Details</h4>
                </div>
                <div class="radio-inputs">
                    <label class="radio">
                        <input type="radio" name="soleProprieterShip"
                            checked={selectedOption === "soleProprieterShip"} onChange={handleChange} />
                        <span class="name">Sole Proprietorship</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="partnershipFirm"
                            checked={selectedOption === "partnershipFirm"} onChange={handleChange} />
                        <span class="name">Parntership Firm</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="singleMemberCompany"
                            checked={selectedOption === "singleMemberCompany"} onChange={handleChange} />
                        <span class="name">Single Member Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="privateLimitedCompany"
                            checked={selectedOption === "privateLimitedCompany"} onChange={handleChange} />
                        <span class="name">Private Limited Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="publicLimitedCompany"
                            checked={selectedOption === "publicLimitedCompany"} onChange={handleChange} />
                        <span class="name">Public Limited Company</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="other"
                            checked={selectedOption === "other"} onChange={handleChange} />
                        <span class="name">Other</span>
                    </label>
                </div>
                {isPartnershipFirm ? (
                    <>
                        <div className="partnership-parent-container">
                            <div className="partnership-input-container">
                                <label>Name of partner <strong>*</strong></label>
                                <input placeholder="Name" type="text" ref={fullNameRef} />
                            </div>
                            <div className="partnership-input-container">
                                <label>Nationality <strong>*</strong></label>
                                <input placeholder="Nationality" type="text" ref={nationalityRef} />
                            </div>
                            <div className="partnership-input-container">
                                <label>CNIC Number <strong>*</strong></label>
                                <input placeholder="CNIC" type="text" ref={cnicRef} />
                            </div>
                            <button className="partnership-add-button" onClick={handleAddClick}>Add</button>
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
                        setPartnershipFirm={setPartnershipFirm} setOwnerDetails={setOwnerDetails} />
                </div>
            </div>
            <div className="button-div">
                <button id='continueBtn' onClick={handleDataAndNavigation}>Continue</button>
            </div>
        </div>
    );
}

export default OwnerDetails;