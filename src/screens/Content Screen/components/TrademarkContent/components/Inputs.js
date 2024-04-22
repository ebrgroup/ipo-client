import { useEffect, useState } from "react";

const Inputs = (props) => {

    const self = [
        { label: "Trading As (Business Name)", placeholder: "Business Name", name: "businessName" },
        { label: "Business Address", placeholder: "Business Address", name: "businessAddress" },
        { label: "Province", placeholder: "Province", name: "province" },
        { label: "City", placeholder: "City", name: "city" },
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

    const [selectedArray, setSelectedArray] = useState(self);

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
    }, []);

    return (
        <>
            <div className="owner-input-container">
                {selectedArray.map((data) => (
                    <>
                        <label>{data.label}</label>
                        { props.inputData === "self" && (data.label === "Province" || data.label === "City") ? 
                            <input placeholder={data.placeholder} type="text" 
                                name={data.name}
                                value={props.ownerDetails.soleProprieterShip[`${data.name}`]} 
                                disabled={true} /> : 
                            <input placeholder={data.placeholder} type="text" 
                                name={data.name}
                                value={props.ownerDetails[`${data.name}`]}
                                disabled={true} />
                        }
                    </>
                ))}
            </div>
        </>
    );
}

export default Inputs;