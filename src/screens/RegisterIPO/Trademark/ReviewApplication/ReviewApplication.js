import "./ReviewApplication.css";
import logo from '../../../../assets/Icons/coca-cola.png';

const ReviewApplication = () => {

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
                                <span className="reviewAppData">1</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Services</span>
                                <br />
                                <span className="reviewAppData">1</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Name</span>
                                <br />
                                <span className="reviewAppData">AW Group</span>
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
                                <span className="reviewAppData">Punjab</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">City</span>
                                <br />
                                <span className="reviewAppData">Rawalpindi</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Address</span>
                                <br />
                                <span className="reviewAppData">House no. 7/c, Lane 3, GC</span>
                            </div>
                            <div>
                                <span className="reviewAppLabel">Business Address</span>
                                <br />
                                <span className="reviewAppData">House no. 7/c, Lane 3, GC</span>
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
                </div>
        //     </div>
        // </div>
    );
};

export default ReviewApplication;