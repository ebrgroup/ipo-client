import React from "react";
import "./patentcontent.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PatentContent = ({ viewData }) => {

    const navigate = useNavigate();

    const updateStatus = async (status) => {
        await axios.put(`http://localhost:5000/ipo/patent?id=${viewData._id}&status=${status}`).then(response => {
            handleToastDisplay(response.data.message, "success");
            navigate("/examiner");
        }).catch(error => {
            if (error.response !== undefined) {
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
        });
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
        }
    };

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
                        <input placeholder="Enter Reference" value={viewData.referenceData.reference} 
                            name="reference" />
                    </div>
                    <div className="patent-content-pdas-input">  
                        <p>Do you want a copy of this application to be made available for PDAS? <strong>*</strong></p>
                        <div className="pdas-selection">
                            <input id="yesReferenceAvailability" type="radio" 
                                checked={viewData.referenceData.availabilityForPDAS === true} 
                                value="true" name="availabilityForPDAS" />
                            <label htmlFor="yesReferenceAvailability">Yes</label>
                            <input id="noReferenceAvailability" type="radio" 
                                checked={viewData.referenceData.availabilityForPDAS === false} 
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewData.personDetails.length === 0 ? (
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
                                            </tr>
                                        </>
                                    ) :
                                    <>
                                        {viewData.personDetails.map((data) => {
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewData.companyDetails.length === 0 ? (
                                        <>
                                            <tr>
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
                                        {viewData.companyDetails.map((companyDetails, index) => {
                                            return (
                                                Object.keys(companyDetails).map((nestedKey) => {
                                                    const data = companyDetails[nestedKey];
                                                    return (
                                                        <tr key={index}>
                                                            <td>{data.organizationName}</td>
                                                            <td>{data.companyAddress}</td>
                                                            <td>{data.companyProvince}</td>
                                                            <td>{data.companyCity}</td>
                                                            <td>{data.companyCountry}</td>
                                                            <td>{data.companyPostCode}</td>
                                                            <td>{data.companyADPNumber}</td>
                                                        </tr>
                                                    );
                                                })
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
                            </tr>
                        </thead>
                        <tbody>
                                {viewData.priorityClaimDetails.length === 0 ? (
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
                                        {viewData.priorityClaimDetails.map((priorityClaim, index) => {
                                            return (
                                                Object.keys(priorityClaim).map((nestedKey) => {
                                                    const data = priorityClaim[nestedKey];
                                                    return (
                                                        <tr key={index}>
                                                            <td>{data.country}</td>
                                                            <td>{data.applicationNumber}</td>
                                                            <td>{data.filingDate}</td>
                                                            <td>{data.pdasAccessCode}</td>
                                                        </tr>
                                                    );
                                                })
                                            );
                                        })}
                                    </>
                                }
                            </tbody>
                    </table>
                </div>
            </div>
            <div className="patentContent-btns">
                <button className='approveButton' onClick={() => updateStatus("Register")}>Approve</button>
                <button className='declineButton' onClick={() => updateStatus("Decline")}>Decline</button>
            </div>
        </div>
        </div>
    );
}

export default PatentContent;