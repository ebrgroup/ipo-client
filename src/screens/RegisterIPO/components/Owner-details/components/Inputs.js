import { useEffect, useState } from "react";
import "./inputs.css";
import Combobox from "../../../../global-components/Combobox/Combobox";
import CitySearchComboBox from "../../../../global-components/SearchComboBox/CitySearchComboBox";

const Inputs = (props) => {

    const soleProprieterShip = [
        { label: "Trading As (Business Name)", placeholder: "Business Name", name: "businessName" },
        { label: "Province", placeholder: "Province", name: "province" },
        { label: "City", placeholder: "City", name: "city" },
        { label: "Business Address", placeholder: "Business Address", name: "businessAddress" },
    ]

    const partnershipFirm = [
        { label: "Trading As (Business Name)", placeholder: "Business Name", name: "businessName" },
        { label: "Business Address", placeholder: "Business Address", name: "businessAddress" }
    ]

    const singleMemberCompany = [
        { label: "Company Name", placeholder: "Company Name", name: "companyName" },
        { label: "Trading As (Business Name)", placeholder: "Business Name", name: "businessName" },
        { label: "Business Address", placeholder: "Business Address", name: "businessAddress" },
    ]

    const other = [
        { label: "Other (Business Type Description)", placeholder: "Description", name: "otherBusinessDescription" },
        { label: "Company Name", placeholder: "Company Name", name: "companyName" },
        { label: "Trading As (Business Name)", placeholder: "Business Name", name: "businessName" },
        { label: "Business Address", placeholder: "Business Address", name: "businessAddress" },
    ]

    const [selectedArray, setSelectedArray] = useState(soleProprieterShip);

    const handleChange = (e) => {
        props.setOwnerDetails((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(() => {
        let selectedItem = null;
        if (props.inputData === "singleMemberCompany" || props.inputData === "privateLimitedCompany"
            || props.inputData === "publicLimitedCompany") {
            selectedItem = singleMemberCompany;
            props.setPartnershipFirm(false);
        } else if (props.inputData === "partnershipFirm") {
            selectedItem = partnershipFirm;
            props.setPartnershipFirm(true);
            props.setPartnersData([]);
        } else {
            selectedItem = eval(props.inputData);
            props.setPartnershipFirm(false);
        }
        setSelectedArray(selectedItem);
    }, [props.inputData]);

    return (
        <>
            <div className="owner-input-container">
                {selectedArray.map((data) => {
                    let inputField;

                    if(data.name === "province") {
                        inputField = <Combobox
                            selectedItem={props.ownerDetails.province}
                            menuType="province"
                            isMenuActive={props.dropdownSettings.isProvinceMenuActive}
                            toggleMenu={props.toggleMenu}
                            options={props.dropdownSettings.provinceMenuOptions}
                            handleOptionClick={props.handleOptionClick}
                            width="20vw"
                        />;
                    } else if(data.name === "city") {
                        inputField = <CitySearchComboBox
                            selectedItem={props.ownerDetails.city}
                            province={props.ownerDetails.province}
                            menuType="city"
                            isMenuActive={props.dropdownSettings.isCityMenuActive}
                            toggleMenu={props.toggleMenu}
                            handleOptionClick={props.handleOptionClick}
                            width="20vw"
                        />;
                    } else {
                        inputField = <input 
                            placeholder={data.placeholder} 
                            type="text" 
                            name={data.name} 
                            className="owner-input"
                            onChange={handleChange}
                            value={props.ownerDetails[`${data.name}`]} 
                        />;
                    }

                    return <>
                        <label>{data.label} <strong>*</strong></label>
                        <div style={{marginTop: data.name === "city" || data.name === "province" ? "0.4rem" : "",
                            marginBottom: data.name === "city" || data.name === "province" ? "1rem" : ""}}>
                            {inputField}
                        </div>
                    </>
                })}
            </div>
        </>
    );
}

export default Inputs;