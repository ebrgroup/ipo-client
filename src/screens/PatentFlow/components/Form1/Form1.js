import React, { useEffect } from "react";
import  { useNavigate } from "react-router-dom";
import "./Form1.css";

const Form1 = (props) => {

    const navigate = useNavigate();

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
                        <input placeholder="Enter Reference"/>
                    </div>
                    <div className="pdas-input">  
                        <p>Do you want a copy of this application to be made available for PDAS? <strong>*</strong></p>
                        <div className="pdas-selection">
                            <input type="radio" />
                            <label>Yes</label>
                            <input type="radio" />
                            <label>No</label>
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
                            <input placeholder="Enter Tile"/>
                        </div>
                        <div className="person-input">
                            <label>Full Name <strong>*</strong></label>
                            <input placeholder="Enter Full Name"/>
                        </div>
                        <div className="person-input">
                            <label>Address <strong>*</strong></label>
                            <input placeholder="Enter Address"/>
                        </div>
                        <div className="person-input">
                            <label>Provice <strong>*</strong></label>
                            <input placeholder="Enter Province"/>
                        </div>
                        <div className="person-input">
                            <label>Town or City <strong>*</strong></label>
                            <input placeholder="Enter Town or City"/>
                        </div>
                        <div className="person-input">
                            <label>Country <strong>*</strong></label>
                            <input placeholder="Enter Country or Region"/>
                        </div>
                        <div className="person-input">
                            <label>Post Code <strong>*</strong></label>
                            <input placeholder="Enter Post Code"/>
                        </div>
                        <div className="person-input">
                            <label>ADP Number <strong>*</strong></label>
                            <input placeholder="Enter ADP Number"/>
                        </div>
                        <div className="person-input">
                            <label>Email Address <strong>*</strong></label>
                            <input placeholder="Enter Email Address"/>
                        </div>
                        <button className="form1-add-button">Add</button>
                    </div>
                    <div className="extra-info">
                        <div className="pdas-input inventor-container">  
                            <p>Is this applicant also an inventor? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for all correspondence? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for PDAS contact? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
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
                                        <th className="form1-lastHeader">Operations</th>
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
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
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
                            <input placeholder="Enter Name"/>
                        </div>
                        <div className="person-input">
                            <label>Address <strong>*</strong></label>
                            <input placeholder="Enter Address"/>
                        </div>
                        <div className="person-input">
                            <label>Provice <strong>*</strong></label>
                            <input placeholder="Enter Province"/>
                        </div>
                        <div className="person-input">
                            <label>Town or City <strong>*</strong></label>
                            <input placeholder="Enter Town or City"/>
                        </div>
                        <div className="person-input">
                            <label>Country <strong>*</strong></label>
                            <input placeholder="Enter Country or Region"/>
                        </div>
                        <div className="person-input">
                            <label>Post Code <strong>*</strong></label>
                            <input placeholder="Enter Post Code"/>
                        </div>
                        <div className="person-input">
                            <label>ADP Number <strong>*</strong></label>
                            <input placeholder="Enter ADP Number"/>
                        </div>
                        <button className="form1-add-button">Add</button>
                    </div>
                    <div>
                        <div className="pdas-input company-first-selection">  
                            <p>Do you wish to use this information for all correspondence? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you claim priority from one or more earlier filed applications? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="pdas-input">  
                            <p>Do you wish to use this information for PDAS contact? <strong>*</strong></p>
                            <div className="pdas-selection">
                                <input type="radio" />
                                <label>Yes</label>
                                <input type="radio" />
                                <label>No</label>
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