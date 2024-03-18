import "../../Trademark/ReviewApplication/ReviewApplication.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DesignReview = (props) => {

    const navigate = useNavigate(null);
    // const {
    //     classification,
    //     ownerdetail,
    //     logodetail
    // } = useSelector(state => state.trademarkRegistrationReducer)

    // const {
    //     classificationClass,
    //     classificationDescription
    // } = classification

    // const {
    //     businessName,
    //     businessAddress,
    //     province,
    //     city,
    //     companyName,
    //     otherBusinessDescription
    // } = ownerdetail.ownerDetails

    // const {
    //     markDesc,
    //     colorClaimed,
    //     markSeries,
    //     logoFile,
    //     markType,
    //     imageURL
    // } = logodetail.logoDetails




    return (
        // <div className="reviewAppPage">
        //     <div className="reviewAppDiv">
        <div className="reviewAppBox">
            <h3>Review your application</h3>
            <div className="reviewAppColumnsDiv">
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Product Name</span>
                        <br />
                        {/* <span className="reviewAppData">{classificationClass}</span> */}
                        <span className="reviewAppData">Cup</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Product Details</span>
                        <br />
                        {/* <span className="reviewAppData">{classificationDescription}</span> */}
                        <span className="reviewAppData">To drink.</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Name</span>
                        <br />
                        {/* <span className="reviewAppData">{businessName}</span> */}
                        <span className="reviewAppData">EBR Group</span>
                    </div>
                </div>
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Province</span>
                        <br />
                        {/* <span className="reviewAppData">{province ? province : "-"}</span> */}
                        <span className="reviewAppData">Punjab</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">City</span>
                        <br />
                        {/* <span className="reviewAppData">{city ? city : "-"}</span> */}
                        <span className="reviewAppData">Islamabad</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Address</span>
                        <br />
                        {/* <span className="reviewAppData">{businessAddress}</span> */}
                        <span className="reviewAppData">House no. 2A, Street 4, CS 3</span>
                    </div>
                </div>
                {/* {companyName !== "" ? (
                    <div>
                        <div className="optional-data-column">
                            <span className="reviewAppLabel">Company Name</span>
                            <br />
                            <span className="reviewAppData">{ companyName }</span>
                            <br />
                            {otherBusinessDescription !== "" ? (
                                <>
                                    <span className="reviewAppLabel">Other Business Description</span>
                                    <br />
                                    <span className="reviewAppData">{ otherBusinessDescription }</span>
                                </>
                            ) : null}
                        </div>
                    </div>
                ) : null} */}
            </div>
            {/* {ownerdetail.partnersData.length > 0 ? (
                <div>
                    <table className="review-dataTable">
                        <thead>
                            <tr>
                                <th className="firstHeader">Full name</th>
                                <th>Nationality</th>
                                <th className="lastHeader">CNIC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {ownerdetail.partnersData.map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.fullName}</td>
                                            <td>{data.nationality}</td>
                                            <td>{data.cnic}</td>
                                        </tr>
                                    );
                                })}
                            </>
                        </tbody>
                    </table>
                </div>
            ): null} */}
            <div className="reviewAppBoxFooter">
                {/* <img src={imageURL} alt="Trademark Logo" width="220px" /> */}
                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
                    <div>
                        <b>Repeated Surface Design Pattern: </b> <br />
                    </div>
                    <div>
                        <span>Yes</span><br />
                    </div>
                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={() => navigate("/feesubmission", { state: { type: "design" } })}>Continue</button>
            </div>
        </div>
        //     </div>
        // </div>
    );
};

export default DesignReview;