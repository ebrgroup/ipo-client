import React, { useState } from "react";
import "./patentcontent.css";

const PatentContent = () => {

    const [personCumulativeDetails, setPersonCumulativeDetails] = useState([]);
    const [companyCumulativeDetalis, setCompanyCumulativeDetails] = useState([]);
    const [priorityClaimDetails, setPriorityClaimDetails] = useState([]);

    return(
        <div className="patent-content-parent">
            <div className="patentContent-screen-background">
            <h4 className="form1-main-heading">Application Details</h4>
            <div className="patentContent-screen-parent">
                <div className="patentContent-heading">
                    <img src={require("../../../../assets/Icons/form-icon.png")} className="form-icon" />
                    <h4>Form-1 Details</h4>
                </div>
                <div className="patentContent-screen-content">
                    <div className="patentContent-reference-input">
                        <label>Reference</label>
                        <input placeholder="Enter Reference" value="" 
                            name="reference" />
                    </div>
                    <div className="patent-content-pdas-input">  
                        <p>Do you want a copy of this application to be made available for PDAS? <strong>*</strong></p>
                        <div className="pdas-selection">
                            <input id="yesReferenceAvailability" type="radio" 
                                value="true" name="availabilityForPDAS" />
                            <label htmlFor="yesReferenceAvailability">Yes</label>
                            <input id="noReferenceAvailability" type="radio" 
                                value="false" name="availabilityForPDAS" />
                            <label htmlFor="noReferenceAvailability">No</label>
                        </div>
                    </div>
                    <hr />
                    <div className="patentContent-person-heading">
                        <img src={require("../../../../assets/Icons/person-icon.png")} />
                        <h5>Person Details</h5>
                    </div>
                    <div className="patent-content-dataGrid">
                            <table className="patent-content-dataTable">
                                <thead>
                                    <tr>
                                        <th className="patent-content-firstHeader">Title</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Province</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Post Code</th>
                                        <th>ADP #</th>
                                        <th>Email</th>
                                        <th className="patent-content-lastHeader">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {personCumulativeDetails.length === 0 ? (
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
                                        {personCumulativeDetails.map((data) => {
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
                        <h5>Company Details</h5>
                    </div>
                    <div className="patent-content-dataGrid  last-info">
                            <table className="patent-content-dataTable">
                                <thead>
                                    <tr>
                                        <th className="patent-content-firstHeader">Name</th>
                                        <th>Address</th>
                                        <th>Province</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Post Code</th>
                                        <th>ADP #</th>
                                        <th className="patent-content-lastHeader">Operations</th>
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
                <hr />
                <div className="patentContent-person-heading">
                    <img src={require("../../../../assets/Icons/person-icon.png")} />
                    <h5>Priority Claim Details</h5>
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
            </div>
            <div className="patentContent-btns">
                <button className='approveButton'>Approve</button>
                <button className='resubmitButton'>Resubmit</button>
                <button className='declineButton'>Decline</button>
            </div>
        </div>
        </div>
    );
}

export default PatentContent;