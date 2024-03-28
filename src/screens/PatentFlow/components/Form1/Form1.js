import React, { useEffect, useState } from "react";
import  { useNavigate } from "react-router-dom";
import "./Form1.css";

const Form1 = (props) => {

    const [referenceData, setReferenceData] = useState({
        reference: "",
        availabilityForPDAS: null,
    });

    const [personDetails, setPersonDetails] = useState({
        title: "",
        fullName: "",
        address: "",
        province: "",
        city: "",
        country: "",
        postCode: "",
        adpNumber: "",
        emailAddress: "",
        isInventor: null,
        isCorrespondence: null,
        isUseAbleForPDAS: null
    });

    const [personCumulativeDetalis, setPersonCumulativeDetails] = useState([]);

    const [companyDetails, setCompanyDetails] = useState({
        organizationName: "",
        companyAddress: "",
        companyProvince: "",
        companyCity: "",
        companyCountry: "",
        companyPostCode: "",
        companyADPNumber: "",
        isCorrespondence: null,
        isClaimingPriority: null,
        isUseAbleForPDASCompany: null
    });
    
    const [companyCumulativeDetalis, setCompanyCumulativeDetails] = useState([]);

    const navigate = useNavigate();

    const handleReferenceChange = (e) => {
        const value = e.target.name === "availabilityForPDAS" ? e.target.value === "true" : e.target.value;
        setReferenceData((prevData) => ({
            ...prevData,
            [e.target.name]: value
        }));
    }

    const handlePersonChange = (e) => {
        let value = "";
        if(["isInventor", "isCorrespondence", "isUseAbleForPDAS"].includes(e.target.name)) {
            value = e.target.value === "true";
        } else {
            value = e.target.value;
        }
        setPersonDetails((prevData) => ({
            ...prevData,
            [e.target.name]: value
        }));
    }

    const handleCompanyChange = (e) => {
        let value = "";
        if(["isCorrespondence", "isClaimingPriority", "isUseAbleForPDASCompany"].includes(e.target.name)) {
            value = e.target.value === "true";
        } else {
            value = e.target.value;
        }
        setCompanyDetails((prevData) => ({
            ...prevData,
            [e.target.name]: value
        }));
    }

    const addPersonDetails = (e) => {
        setPersonCumulativeDetails((prevData) => [
            ...personCumulativeDetalis,
            personDetails
        ]);
    }

    const addCompanyDetails = (e) => {
        setCompanyCumulativeDetails((prevData) => [
            ...companyCumulativeDetalis,
            companyDetails
        ]);
    }

    useEffect(() => {
        props.Progress(100);
    }, []);

    return(
        <div className="form1-screen-background">
            <h4 className="form1-main-heading">Form 1</h4>
            <div className="form1-screen-parent">
                <div className="form1-heading">
                    <img src={require("../../../../assets/Icons/form-icon.png")} className="form-icon" />
                    <h4>Form-1 Details</h4>
                </div>
                <div className="form1-screen-content">
                    <div className="reference-input">
                        <label>Reference</label>
                        <input placeholder="Enter Reference" value={ referenceData.reference } 
                            name="reference" onChange={ handleReferenceChange }/>
                    </div>
                    <div className="pdas-input">  
                        <p>Do you want a copy of this application to be made available for PDAS? <strong>*</strong></p>
                        <div className="pdas-selection">
                            <input id="yesReferenceAvailability" type="radio" checked={ referenceData.availabilityForPDAS === true } 
                                value="true" name="availabilityForPDAS" onChange={ handleReferenceChange } />
                            <label htmlFor="yesReferenceAvailability">Yes</label>
                            <input id="noReferenceAvailability" type="radio" checked={ referenceData.availabilityForPDAS === false } 
                                value="false" name="availabilityForPDAS"  onChange={handleReferenceChange} />
                            <label htmlFor="noReferenceAvailability">No</label>
                        </div>
                    </div>
                    <hr />
                    <div className="person-heading">
                        <img src={require("../../../../assets/Icons/person-icon.png")} />
                        <h5>Add Person Details</h5>
                    </div>
                    <div className="person-inputs-parent">
                        <div className="person-input">
                            <label>Title <strong>*</strong></label>
                            <input placeholder="Enter Tile" name="title" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Full Name <strong>*</strong></label>
                            <input placeholder="Enter Full Name" name="fullName" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Address <strong>*</strong></label>
                            <input placeholder="Enter Address" name="address" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Province <strong>*</strong></label>
                            <input placeholder="Enter Province" name="province" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>City <strong>*</strong></label>
                            <input placeholder="Enter City" name="city" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Country <strong>*</strong></label>
                            <input placeholder="Enter Country or Region" name="country" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Post Code <strong>*</strong></label>
                            <input placeholder="Enter Post Code" name="postCode" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>ADP Number <strong>*</strong></label>
                            <input placeholder="Enter ADP Number" name="adpNumber" onChange={handlePersonChange} />
                        </div>
                        <div className="person-input">
                            <label>Email Address <strong>*</strong></label>
                            <input placeholder="Enter Email Address" name="emailAddress" onChange={handlePersonChange} />
                        </div>
                        <button className="form1-add-button" onClick={ addPersonDetails }>Add</button>
                    </div>
                    <div className="extra-info">
                        <div className="pdas-input inventor-container">  
                            <p>Is this applicant also an inventor? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yesInventor" type="radio" checked={personDetails.isInventor === true} 
                                    name="isInventor" onChange={handlePersonChange} value="true" />
                                <label htmlFor="yesInventor">Yes</label>
                                <input id="noInventor" type="radio"  checked={personDetails.isInventor === false} 
                                   name="isInventor" onChange={handlePersonChange}  value="false"  />
                                <label htmlFor="noInventor">No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for all correspondence? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yesCorrespondence" type="radio" checked={personDetails.isCorrespondence === true}
                                    name="isCorrespondence" onChange={handlePersonChange} value="true" />
                                <label htmlFor="yesCorrespondence">Yes</label>
                                <input id="noCorrespondence" type="radio" checked={personDetails.isCorrespondence === false} 
                                   name="isCorrespondence" onChange={handlePersonChange} value="false"  />
                                <label htmlFor="noCorrespondence">No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for PDAS contact? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yespda" type="radio" checked={personDetails.isUseAbleForPDAS === true}
                                    name="isUseAbleForPDAS" onChange={handlePersonChange} value="true" />
                                <label htmlFor="yespda">Yes</label>
                                <input id="nopda" type="radio" checked={personDetails.isUseAbleForPDAS === false} 
                                    name="isUseAbleForPDAS" onChange={handlePersonChange} value="false"  />
                                <label htmlFor="nopda">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form1-dataGrid">
                            <table className="form1-dataTable">
                                <thead>
                                    <tr>
                                        <th className="form1-firstHeader">Title</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Province</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Post Code</th>
                                        <th>ADP #</th>
                                        <th>Email</th>
                                        <th className="form1-lastHeader">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {personCumulativeDetalis.length === 0 ? (
                                        <>
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </>
                                    ) :
                                    <>
                                        {personCumulativeDetalis.map((data) => {
                                            return(
                                                <tr>
                                                    <td>{data.title}</td>
                                                    <td>{data.fullName}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.province}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                    <td>{data.postCode}</td>
                                                    <td>{data.adpNumber}</td>
                                                    <td>{data.emailAddress}</td>
                                                    <td>-</td>
                                                </tr>
                                            );
                                        })}
                                    </> 
                                    }
                                </tbody>
                            </table>
                        </div>
                    <hr />
                    <div className="person-heading">
                        <img src={require("../../../../assets/Icons/organization-icon.png")} />
                        <h5>Add Company Details</h5>
                    </div>
                    <div className="person-inputs-parent">
                    <div className="person-input">
                        <label>Organization Name <strong>*</strong></label>
                        <input placeholder="Enter Name" name="organizationName" onChange={handleCompanyChange} />
                    </div>
                        <div className="person-input">
                            <label>Address <strong>*</strong></label>
                            <input placeholder="Enter Address" name="companyAddress" onChange={handleCompanyChange} />
                        </div>
                        <div className="person-input">
                            <label>Province <strong>*</strong></label>
                            <input placeholder="Enter Province" name="companyProvince" onChange={handleCompanyChange} />
                        </div>
                        <div className="person-input">
                            <label>City <strong>*</strong></label>
                            <input placeholder="Enter City" name="companyCity" onChange={handleCompanyChange} />
                        </div>
                        <div className="person-input">
                            <label>Country <strong>*</strong></label>
                            <input placeholder="Enter Country or Region" name="companyCountry" onChange={handleCompanyChange} />
                        </div>
                        <div className="person-input">
                            <label>Post Code <strong>*</strong></label>
                            <input placeholder="Enter Post Code" name="companyPostCode" onChange={handleCompanyChange} />
                        </div>
                        <div className="person-input">
                            <label>ADP Number <strong>*</strong></label>
                            <input placeholder="Enter ADP Number" name="companyADPNumber" onChange={handleCompanyChange} />
                        </div>
                        <button className="form1-add-button" onClick={ addCompanyDetails }>Add</button>
                    </div>
                    <div>
                        <div className="pdas-input company-first-selection">  
                            <p>Do you wish to use this information for all correspondence? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yesCompanyCorrespondence" type="radio" checked={companyDetails.isCorrespondence === true}
                                    name="isCorrespondence" onChange={handleCompanyChange} value="true" />
                                <label htmlFor="yesCompanyCorrespondence">Yes</label>
                                <input id="noCompanyCorrespondence" type="radio" checked={companyDetails.isCorrespondence === false}
                                    name="isCorrespondence" onChange={handleCompanyChange}  value="false"  />
                                <label htmlFor="noCompanyCorrespondence">No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you claim priority from one or more earlier filed applications? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yesPriority" type="radio" checked={companyDetails.isClaimingPriority === true}
                                    name="isClaimingPriority" onChange={handleCompanyChange} value="true" />
                                <label htmlFor="yesPriority">Yes</label>
                                <input id="noPriority" type="radio" checked={companyDetails.isClaimingPriority === false}
                                    name="isClaimingPriority" onChange={handleCompanyChange}  value="false"  />
                                <label htmlFor="noPriority">No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for PDAS contact? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input id="yesCompanypda" type="radio" checked={companyDetails.isUseAbleForPDAS === true}
                                    name="isUseAbleForPDASCompany" onChange={handleCompanyChange} value="true" />
                                <label htmlFor="yesCompanypda">Yes</label>
                                <input id="noCompanypda" type="radio" checked={companyDetails.isUseAbleForPDAS === false}
                                    name="isUseAbleForPDASCompany" onChange={handleCompanyChange}  value="false"  />
                                <label htmlFor="noCompanypda">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form1-dataGrid  last-info">
                            <table className="form1-dataTable">
                                <thead>
                                    <tr>
                                        <th className="form1-firstHeader">Name</th>
                                        <th>Address</th>
                                        <th>Province</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Post Code</th>
                                        <th>ADP #</th>
                                        <th className="form1-lastHeader">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companyCumulativeDetalis.length === 0 ? (
                                        <>
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </>
                                    ) :
                                    <>
                                        {companyCumulativeDetalis.map((data) => {
                                            return(
                                                <tr>
                                                    <td>{data.organizationName}</td>
                                                    <td>{data.companyAddress}</td>
                                                    <td>{data.companyProvince}</td>
                                                    <td>{data.companyCity}</td>
                                                    <td>{data.companyCountry}</td>
                                                    <td>{data.companyPostCode}</td>
                                                    <td>{data.companyADPNumber}</td>
                                                    <td>-</td>
                                                </tr>
                                            );
                                        })}
                                    </> 
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <div className="btns">
                <button className='backBtn'  onClick={ () => navigate(-1) }>Back</button>
                <button className='continueBtn' onClick={ () => navigate("/patentflow/priorityClaims") }>Continue</button>
            </div>
        </div>
    )
}

export default Form1;