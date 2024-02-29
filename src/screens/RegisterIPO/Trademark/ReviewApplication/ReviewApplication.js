import "./ReviewApplication.css";
import logo from '../../../../assets/Icons/coca-cola.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewApplication = () => {

    const trademarkData = useSelector(state => state.trademarkRegistrationReducer);

    const navigate = useNavigate(null);

    return (
        // <div className="reviewAppPage">
        //     <div className="reviewAppDiv">
                <div className="reviewAppBox">
                    <h3>Review your application</h3>
                    <div className="reviewAppColumnsDiv">
                        <div>
                            <div>
                                <span className="reviewAppLabel">Trademark Class</span>
                                <br />
                                <span className="reviewAppData">{ trademarkData.classification.classificationClass }</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Services</span>
                                <br />
                                <span className="reviewAppData">1</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Name</span>
                                <br />
                                <span className="reviewAppData">{ trademarkData.ownerdetail.ownerDetails.businessName }</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Used Since</span>
                                <br />
                                <span className="reviewAppData">Proposed to Be Used or since a date</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="reviewAppLabel">Province</span>
                                <br />
                                <span className="reviewAppData">{ trademarkData.ownerdetail.ownerDetails.province }</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">City</span>
                                <br />
                                <span className="reviewAppData">{ trademarkData.ownerdetail.ownerDetails.city }</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Address</span>
                                <br />
                                <span className="reviewAppData">{ trademarkData.ownerdetail.ownerDetails.businessAddress }</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Address</span>
                                <br />
                                <span className="reviewAppData">{  trademarkData.ownerdetail.ownerDetails.businessAddress }</span>
                            </div>
                        </div>
                    </div>
                    <div className="reviewAppBoxFooter">
                        <img src={logo} alt="Trademark Logo" height="140" />
                        <div style={{display: "flex", flexDirection: "row", gap: "1.5rem"}}>
                            <div>
                                <b>Name of Signature: </b> <br />
                                <b>Color Claimed: </b><br />
                                <b>Word & Design Mark: </b><br />
                                <b>Series of Marks: </b>
                            </div>
                            <div>
                                <span>Coca Cola</span><br />
                                <span>Coca Cola</span><br />
                                <span>Coca Cola</span><br />
                                <span>Coca Cola</span>
                            </div>
                        </div>
                    </div>
                    <button id='continueBtn' onClick={ () => navigate("/feesubmission") }>Continue</button>
                </div>
        //     </div>
        // </div>
    );
};

export default ReviewApplication;