import "./ReviewApplication.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewApplication = () => {

    const navigate = useNavigate(null);
    const {
        classification,
        ownerdetail,
        logodetail
    } = useSelector(state => state.trademarkRegistrationReducer)

    const {
        classificationClass,
        classificationDescription
    } = classification

    const {
        businessName,
        businessAddress,
        province,
        city
    } = ownerdetail.ownerDetails

    const {
        markDesc,
        colorClaimed,
        markSeries,
        logoFile,
        markType
    } = logodetail.logoDetails




    return (
        // <div className="reviewAppPage">
        //     <div className="reviewAppDiv">
        <div className="reviewAppBox">
            <h3>Review your application</h3>
            <div className="reviewAppColumnsDiv">
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Trademark Class</span>
                        <br />
                        <span className="reviewAppData">{classificationClass}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Services</span>
                        <br />
                        <span className="reviewAppData">{classificationDescription}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Name</span>
                        <br />
                        <span className="reviewAppData">{businessName}</span>
                    </div>
                    {/* <div>
                                <span className="reviewAppLabel">Used Since</span>
                                <br />
                                <span className="reviewAppData">Proposed to Be Used or since a date</span>
                            </div> */}

                </div>
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Province</span>
                        <br />
                        <span className="reviewAppData">{province}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">City</span>
                        <br />
                        <span className="reviewAppData">{city}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Address</span>
                        <br />
                        <span className="reviewAppData">{businessAddress}</span>
                    </div>
                    {/* <div>
                        <span className="reviewAppLabel">Business Address</span>
                        <br />
                        <span className="reviewAppData">House no. 7/c, Lane 3, GC</span>
                    </div> */}
                </div>
            </div>
            <div className="reviewAppBoxFooter">
                <img src={logoFile} alt="Trademark Logo" height="140" />
                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
                    <div>
                        <b>Name of Signature: </b> <br />
                        <b>Color Claimed: </b><br />
                        <b>Mark Type: </b><br />
                        <b>Marks in series: </b>
                    </div>
                    <div>
                        <span>{markDesc}</span><br />
                        <span>{colorClaimed}</span><br />
                        <span>{markType}</span><br />
                        <span>{markSeries}</span>
                    </div>
                </div>
            </div>
            <div className="btns">
                <button className='continueBtn' onClick={() => navigate("/feesubmission")}>Continue</button>
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
            </div>
        </div>
        //     </div>
        // </div>
    );
};

export default ReviewApplication;