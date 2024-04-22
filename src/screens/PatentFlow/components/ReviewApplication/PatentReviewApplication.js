import { useSelector } from "react-redux";
import "./PatentReviewApplication.css";
import { useNavigate } from "react-router-dom";

const PatentReviewApplication = (props) => {

    const navigate = useNavigate(null);
    const {
        referenceData,
        personDetails,
        companyDetails,
        priorityClaimDetails,
        copiesData,
        documentsData
    } = useSelector(state => state.patentRegistrationReducer);

    return (
        <div className="reviewAppBox">
            <h3>Review your application</h3>
            <div className="reviewAppColumnsDiv">
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Reference</span>
                        <br />
                        <span className="reviewAppData">{referenceData.reference}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Availability For PDAS</span>
                        <br />
                        <span className="reviewAppData">{referenceData.availabilityForPDAS ? "Yes" : "No"}</span>
                    </div>
                </div>
            </div>
            <div className="tables-container">
                {/* <div className="form1-dataGrid">
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
                            </tr>
                        </thead>
                        <tbody>
                            {personDetails.length === 0 ? (
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
                                {personDetails.map((data) => {
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
                </div> */}

                <div>
                    <h4>Company Details</h4>
                    <div className="form1-dataGrid">
                        <table className="form1-dataTable">
                            <thead>
                                <tr>
                                    <th className="form1-firstHeader">Name</th>
                                    <th>Address</th>
                                    <th>Province</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Post Code</th>
                                    <th className="form1-lastHeader">ADP #</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companyDetails.length === 0 ? (
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
                                    {companyDetails.map((data) => {
                                        return(
                                            <tr>
                                                <td>{data.organizationName}</td>
                                                <td>{data.companyAddress}</td>
                                                <td>{data.companyProvince}</td>
                                                <td>{data.companyCity}</td>
                                                <td>{data.companyCountry}</td>
                                                <td>{data.companyPostCode}</td>
                                                <td>{data.companyADPNumber}</td>
                                            </tr>
                                        );
                                    })}
                                </> 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h4>Priority Details</h4>
                    <div className="form1-dataGrid">
                        <table className="form1-dataTable">
                            <thead>
                                <tr>
                                    <th className="form1-firstHeader">Country</th>
                                    <th>Application #</th>
                                    <th>Date of filing</th>
                                    <th className="form1-lastHeader">Acess Code</th>
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
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={() => navigate("/feesubmission", {state: { type: "patent" }})}>Continue</button>
            </div>
        </div>
    );
};

export default PatentReviewApplication;