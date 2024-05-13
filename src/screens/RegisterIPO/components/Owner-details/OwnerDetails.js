import { useEffect, useRef, useState } from "react";
import "./ownerdetails.css";
import Inputs from "./components/Inputs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trademarkOwnerDetail } from "../../../../assets/states/actions/Trademark registration/Trademark-action";
import { designOwnerDetail } from "../../../../assets/states/actions/Design/design-action";
import { toast } from "react-toastify";
import Combobox from "../../../global-components/Combobox/Combobox";
import SearchComboBox from "../../../global-components/SearchComboBox/SearchComboBox";

const OwnerDetails = (props) => {
    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");
    const [ownerDetails, setOwnerDetails] = useState({
        businessName: "",
        businessAddress: "",
        province: "Province",
        city: "City",
        companyName: "",
        otherBusinessDescription: "",
        businessOwnerType: "soleProprieterShip"
    });
    const [isOwnerDetailsChanged, setIsOwnerDetailsChanged] = useState(false);
    const [partnersData, setPartnersData] = useState([]);
    const [isPartnershipFirm, setPartnershipFirm] = useState(false);
    const [dropdownSettings, setDropdownSettings] = useState({
        isProvinceMenuActive: false,
        isCityMenuActive: false,
        provinceMenuOptions: [
            "Azad Jammu & Kashmir", "Balochistan", "FATA", "Gilgit Baltistan", "Islamabad Capital", "KPK", "Punjab", "Sindh"
        ]    
    });

    const navigate = useNavigate(null);
    const { state } = useLocation();

    const fullNameRef = useRef(null);
    const nationalityRef = useRef(null);
    const cnicRef = useRef(null);

    const dispatch = useDispatch();

    // Logic for previous data
    //When back button is press
    // The previous data is kept safe
    const trademarkData = useSelector(state => state.trademarkRegistrationReducer.ownerdetail);
    const designData = useSelector(state => state.designRegistrationReducer.ownerdetail);

    useEffect(() => {
        props.Progress(100);
        let data = null;
        if (state && state.type === "trademark") {
            data = trademarkData;
        } 
        else if (state && state.type === "design") {
            data = designData;
        }

        if (data !== null) {
            const owners = data.ownerDetails;

            if (owners) {
                const {
                    businessName,
                    businessAddress,
                    province,
                    city,
                    companyName,
                    otherBusinessDescription,
                    businessOwnerType } = owners;

                setOwnerDetails({
                    businessName: businessName,
                    businessAddress: businessAddress,
                    province: province,
                    city: city,
                    companyName: companyName,
                    otherBusinessDescription: otherBusinessDescription,
                    businessOwnerType: businessOwnerType
                });
                console.log(ownerDetails.businessOwnerType);
                if(!isOwnerDetailsChanged) {
                    setSelectedOption(businessOwnerType);
                }
                if (data.partnersData && partnersData.length === 0) {
                    setPartnersData(data.partnersData);
                }
            }
        }
    }, [trademarkData, designData, partnersData]);

    const toggleMenu = (menuType) => {
        if (menuType === "province") {
            setDropdownSettings(prevState => ({
                ...prevState,
                isProvinceMenuActive: !dropdownSettings.isProvinceMenuActive,
                isCityMenuActive: false
            }));
        }
        else if (menuType == "city") {
            if (dropdownSettings.province === 'Province')
                return;
            else {
                setDropdownSettings(prevState => ({
                    ...prevState,
                    isCityMenuActive: !dropdownSettings.isCityMenuActive,
                    isProvinceMenuActive: false,
                }));
            }
        }
    };

    const handleOptionClick = (optionText, menuType) => {
        if (menuType === "province") {
            setDropdownSettings((prevState) => ({
                ...prevState,
                city: prevState.province === optionText ? prevState.city : "City"
            }));
        }

        toggleMenu(menuType);

        setOwnerDetails((prevState) => ({
            ...prevState,
            [menuType]: optionText
        }));
    };

    const handleAddClick = () => {
        setPartnersData(prevData => [
            ...prevData,
            {
                fullName: fullNameRef.current.value,
                nationality: nationalityRef.current.value,
                cnic: cnicRef.current.value
            }
        ]);
    };


    const handleChange = async (e) => {
        setSelectedOption(e.target.name);
        setIsOwnerDetailsChanged(true);
        setOwnerDetails((prevData) => ({
            ...prevData,
            businessOwnerType: e.target.name
        }));
    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty()) {
            setIsOwnerDetailsChanged(false);
            if(state && state.type === "design") {
                dispatch(designOwnerDetail({
                    ownerDetails,
                    partnersData
                }));
                navigate("/designdetails", { state: { type: "design" } });
            }
            else if (state && state.type === "trademark") {
                dispatch(trademarkOwnerDetail({
                    ownerDetails,
                    partnersData
                }));
                navigate("/logodetails");
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
        if ((ownerDetails.businessName === "" || ownerDetails.businessAddress === "")
            || (checkUncommonFields() === false)) {
            return false;
        }
        return true;
    };

    const checkUncommonFields = () => {
        if (selectedOption === "soleProprieterShip" &&
            (ownerDetails.city === "" || ownerDetails.province === "")) {
            return false;
        } else if (selectedOption === "partnershipFirm" && partnersData.length < 1) {
            return false;
        } else if (["singleMemberCompany", "privateLimitedCompany", "publicLimitedCompany"].includes(selectedOption) &&
            ownerDetails.companyName === "") {
            return false;
        } else if (selectedOption === "other" &&
            (ownerDetails.companyName === "" || ownerDetails.otherBusinessDescription === "")) {
            return false;
        }
        return true;
    }

    return (
        <div className="owner-screen-background">
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
                        <span class="name">Partnership Firm</span>
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
                        setPartnershipFirm={setPartnershipFirm} setOwnerDetails={setOwnerDetails}
                        ownerDetails={ownerDetails} handleOptionClick={handleOptionClick} toggleMenu={toggleMenu}
                        dropdownSettings={dropdownSettings} />
                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleDataAndNavigation}>Continue</button>
            </div>
            {/* <div className="button-div">
            </div> */}
        </div>
    );
}

export default OwnerDetails;