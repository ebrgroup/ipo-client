import "./PatentReviewApplication.css";
import { useNavigate } from "react-router-dom";

const PatentReviewApplication = (props) => {

    const navigate = useNavigate(null);

    return (
        <div className="reviewAppBox">
            <h3>Review your application</h3>
            <div className="reviewAppColumnsDiv">
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Reference</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Services</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Name</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                </div>
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Province</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">City</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Business Address</span>
                        <br />
                        <span className="reviewAppData">-</span>
                    </div>
                </div>
            </div>
            <div className="reviewAppBoxFooter">
                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
                    <div>
                        <b>Name of Signature: </b> <br />
                        <b>Color Claimed: </b><br />
                        <b>Mark Type: </b><br />
                        <b>Marks in series: </b>
                    </div>
                    <div>
                        <span>-</span><br />
                        <span>-</span><br />
                        <span>-</span><br />
                        <span>-</span>
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