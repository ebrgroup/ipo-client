import { useState } from "react";
import "./PriorityClaims.css"
import { useNavigate } from "react-router-dom";

// Must read the comments for this file

const PriorityClaims = () => {

    const [priorityClaimDetails, setPriorityClaimDetails] = useState([]);
    const [isPurchasingCopies, setIsPurchasingCopies] = useState(false);
    const [formData, setFormData] = useState({
        country: "",
        applicationNumber: "",
        filingDate: "",
        pdasAccessCode: "",
        evidenceAttachment: null,
        isRequestingDocumentsFromPDAS: null,
        isLateDeclaration: null,
        isRequestingPreviousApplication: null
    });
    const [copiesData, setCopiesData] = useState({
        amountOfCopies: "",
        countries: ""
    });

    const handleFormChanges = (e) => {
        let value = "";
        if(e.target.name === "evidenceAttachment") {
            value = e.target.files[0];
        } else if(["isRequestingDocumentsFromPDAS", "isLateDeclaration", 
                "isRequestingPreviousApplication"].includes(e.target.name)) {
            value = e.target.value === "true";
        } else {
            value = e.target.value;
        }
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: value
        }));
    }

    const handleCopiesChange = (e) => {
        setCopiesData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const addPriorityClaimDetails = (e) => {
        setPriorityClaimDetails((prevData) => [
            ...prevData,
            formData
        ]);
    }

    const navigate = useNavigate();

    return(
        <div className="priority-screen-background">
            <h4 className="priority-main-heading">Priority Claim Details</h4>
            <div className="priority-screen-parent">
                <div className="priority-heading">
                    <img src={require("../../../../assets/Icons/claims-icon.png")} className="form-icon" />
                    <h4>Details</h4>
                </div>
                <div className="priority-screen-content">
                    <div className="priority-input-container">
                        <div className="priority-input">
                            <label>Country <strong>*</strong></label>
                            <input placeholder="Enter Country" name="country" 
                                onChange={handleFormChanges} />
                        </div>
                        <div className="priority-input">
                            <label>Application Number <strong>*</strong></label>
                            <input placeholder="Enter Application Number" name="applicationNumber" 
                                onChange={handleFormChanges} />
                        </div>
                        <div className="priority-input">
                            <label>Date of filing <strong>*</strong></label>
                            <input type="date" placeholder="Enter Date" name="filingDate" 
                                onChange={handleFormChanges} />
                        </div>
                        <div className="priority-input">
                            <label>PDAS Access Code <strong>*</strong></label>
                            <input placeholder="Enter Code" name="pdasAccessCode" 
                                onChange={handleFormChanges} />
                        </div>
                        <div className="priority-input">
                            <label>Evidence Attachment <strong>*</strong></label>
                            <input type="file" name="evidenceAttachment" 
                                onChange={handleFormChanges} />
                        </div>
                        <button className="priority-add-button" onClick={addPriorityClaimDetails}>Add</button>
                    </div>
                    <div className="selection-container">
                        <div className="priority-radio-input first-selection-priority">  
                            <p>Do you want to request documents from PDAS? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input id="yesRequestPDAS" type="radio" checked={formData.isRequestingDocumentsFromPDAS === true} 
                                    name="isRequestingDocumentsFromPDAS" value="true" onChange={handleFormChanges} />
                                <label htmlFor="yesRequestPDAS">Yes</label>
                                <input id="noRequestPDAS" type="radio" checked={formData.isRequestingDocumentsFromPDAS === false} 
                                    name="isRequestingDocumentsFromPDAS" value="false" onChange={handleFormChanges} />
                                <label htmlFor="noRequestPDAS">No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input">  
                            <p>Is this a late declaration? <strong>*</strong></p>
                            <div className="priority-selection">
                            <input id="yesLateDeclaration" type="radio" checked={formData.isLateDeclaration === true} 
                                    name="isLateDeclaration" value="true" onChange={handleFormChanges} />
                                <label htmlFor="yesLateDeclaration">Yes</label>
                                <input id="noLateDeclaration" type="radio" checked={formData.isLateDeclaration === false} 
                                    name="isLateDeclaration" value="false" onChange={handleFormChanges} />
                                <label htmlFor="noLateDeclaration">No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input last-selection-priority">  
                            <p>Do you want to request Previous Application from PDAS? <strong>*</strong></p>
                            <div className="priority-selection">
                            <input id="yesPrevious" type="radio" checked={formData.isRequestingPreviousApplication === true} 
                                    name="isRequestingPreviousApplication" value="true" onChange={handleFormChanges} />
                                <label htmlFor="yesPrevious">Yes</label>
                                <input id="noPrevious" type="radio" checked={formData.isRequestingPreviousApplication === false} 
                                    name="isRequestingPreviousApplication" value="false" onChange={handleFormChanges} />
                                <label htmlFor="noPrevious">No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input last-selection-priority">
                            {/* This check will decide that do we have to show the copies and certificats div or not */}
                            <p>Do you want to purchase certified copies of current application you are filing? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input id="yesPurchase" type="radio" checked={isPurchasingCopies} 
                                    onChange={() => setIsPurchasingCopies(true)} />
                                <label htmlFor="yesPurchase">Yes</label>
                                <input id="noPurchase" type="radio" checked={!isPurchasingCopies} 
                                    onChange={() => setIsPurchasingCopies(false)} />
                                <label htmlFor="noPurchase">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="priority-dataGrid last-info">
                        <table className="priority-dataTable">
                            <thead>
                                <tr>
                                    <th className="priority-firstHeader">Country</th>
                                    <th>Application #</th>
                                    <th>Date of filing</th>
                                    <th>Acess Code</th>
                                    <th className="priority-lastHeader">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {priorityClaimDetails.length === 0 ? (
                                        <>
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </>
                                    ) :
                                    <>
                                        {priorityClaimDetails.map((data) => {
                                            return(
                                                <tr>
                                                    <td>{data.country}</td>
                                                    <td>{data.applicationNumber}</td>
                                                    <td>{data.filingDate}</td>
                                                    <td>{data.pdasAccessCode}</td>
                                                    <td>-</td>
                                                </tr>
                                            );
                                        })}
                                    </> 
                                    }
                                </tbody>
                        </table>
                    </div>
                    {/* Following content will show only when user will select Yes for purchase certified 
                        copies selection checkbox above */}
                    {isPurchasingCopies ? (
                        <>
                            <hr className="heading-hr"/>
                            <div className="priority-heading">
                                <img src={require("../../../../assets/Icons/certificate-icon.png")} className="form-icon" />
                                <h4>Copies and Certificates</h4>
                            </div>
                            <div className="copies-nd-certificates last-info">
                                <h5>Type of certificate: <span>Certified with a singature and seal</span></h5>
                                <div className="priority-input-container">
                                    <div className="priority-input">
                                        <label>How many copies do you need? <strong>*</strong></label>
                                        <input name="amountOfCopies" placeholder="Enter quantity" onChange={handleCopiesChange}/>
                                    </div>
                                    <div className="priority-input countries-input">
                                        <label>List the concerned countries by comma separation (e.g Pakistan, China)? <strong>*</strong></label>
                                        <input name="countries" placeholder="Enter countries" onChange={handleCopiesChange} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={ () => navigate(-1) }>Back</button>
                <button className='continueBtn' onClick={ () => navigate("/patentflow/documents") }>Continue</button>
            </div>
        </div>
    )
}

export default PriorityClaims;