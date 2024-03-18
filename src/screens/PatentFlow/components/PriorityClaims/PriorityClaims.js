import "./PriorityClaims.css"
import { useNavigate } from "react-router-dom";

// Must read the comments for this file

const PriorityClaims = () => {

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
                            <input placeholder="Enter Country"/>
                        </div>
                        <div className="priority-input">
                            <label>Application Number <strong>*</strong></label>
                            <input placeholder="Enter Application Number"/>
                        </div>
                        <div className="priority-input">
                            <label>Date of filing <strong>*</strong></label>
                            <input type="date" placeholder="Enter Date"/>
                        </div>
                        <div className="priority-input">
                            <label>PDAS Access Code <strong>*</strong></label>
                            <input placeholder="Enter Code"/>
                        </div>
                        <div className="priority-input">
                            <label>Evidence Attachment <strong>*</strong></label>
                            <input type="file"/>
                        </div>
                        <button className="priority-add-button">Add</button>
                    </div>
                    <div className="selection-container">
                        <div className="priority-radio-input first-selection-priority">  
                            <p>Do you want to request documents from PDAS? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input">  
                            <p>Is this a late declaration? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input last-selection-priority">  
                            <p>Do you want to request Previous Application from PDAS? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="priority-radio-input last-selection-priority">
                            {/* This check will decide that do we have to show the copies and certificats div or not */}
                            <p>Do you want to purchase certified copies of current application you are filing? <strong>*</strong></p>
                            <div className="priority-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
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
                                    <th>File Name</th>
                                    <th className="priority-lastHeader">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Following content will show only when user will select Yes for purchase certified 
                        copies selection checkbox above */}
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
                                <input type="text" placeholder="Enter quantity"/>
                            </div>
                            <div className="priority-input countries-input">
                                <label>List the concerned countries by comma separation (e.g Pakistan, China)? <strong>*</strong></label>
                                <input type="text" placeholder="Enter quantity"/>
                            </div>
                        </div>
                    </div>
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