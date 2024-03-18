import { useEffect, useState } from "react";
import "./documents.css";
import { useNavigate } from "react-router-dom";

const Documents = (props) => {

    const [selectedOption, setSelectedOption] = useState("singleDocuments");
    const navigate = useNavigate();

    const handleRadioChanges = (e) => {
        setSelectedOption(e.target.name);
    }

    useEffect(() => {
        props.Progress(100);
    }, []);

    return(
        <div className="documents-screen-background">
            <h4 className="documents-main-heading">Document Details</h4>
            <div className="documentation-screen-parent">
                <div className="documents-heading">
                    <img src={require("../../../../assets/Icons/documents-icon.png")} className="form-icon" />
                    <h4>Documents</h4>
                </div>
                <div className="documents-screen-content">
                    <div className="documents-input">
                        <label>Title of invention <strong>*</strong></label>
                        <input placeholder="Enter Title"/>
                    </div>
                    <hr className="heading-hr" />
                    <div className="documents-heading documents-heading-extra">
                        <img src={require("../../../../assets/Icons/specification-icon.png")} className="form-icon" />
                        <h4>Documents Specifications</h4>
                    </div>
                    <div class="documents-radio-inputs specification-selection">
                        <label class="documents-radio">
                            <input type="radio" name="singleDocuments"
                              checked={selectedOption === "singleDocuments"} onChange={handleRadioChanges}  />
                            <span class="name">Single Document Specification</span>
                        </label>
                        <label class="documents-radio">
                            <input type="radio" name="multipleDocuments"
                              checked={selectedOption === "multipleDocuments"} onChange={handleRadioChanges}  />
                            <span class="name">Multiple Document Specification</span>
                        </label>
                    </div>
                    <div className="documents-specification">
                        {selectedOption === "singleDocuments" ? (
                            <>
                                <div className="documents-input">
                                    <label>Single Specification Document</label>
                                    <input type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Description page range</label>
                                    <span>
                                        <input className="documents-from-input" placeholder="From"/>
                                        <input placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Claims page range</label>
                                    <span>
                                        <input className="documents-from-input" placeholder="From"/>
                                        <input placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Number of claims</label>
                                    <input placeholder="Enter Title"/>
                                </div>
                                <div className="documents-input">
                                    <label>Abstract page range</label>
                                    <span>
                                        <input className="documents-from-input" placeholder="From"/>
                                        <input placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Drawings Document</label>
                                    <input type="file"/>
                                </div>
                            </>
                        ) : (
                            <>
                               <div className="documents-input">
                                    <label>Description Document</label>
                                    <input type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Number of pages of description</label>
                                    <input type="text" placeholder="Enter Quantity"/>
                                </div>
                                <div className="documents-input">
                                    <label>Claims Document</label>
                                    <input type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Number of claims</label>
                                    <input type="text" placeholder="Enter Quantity"/>
                                </div>
                                <div className="documents-input">
                                    <label>Abstract Document</label>
                                    <input type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Drawings Document Document</label>
                                    <input type="file"/>
                                </div> 
                            </>
                        )}
                    </div>
                    <hr className="heading-hr" />
                    <div className="sequence-listing last-info">
                        <div className="documents-heading documents-heading-extra">
                            <img src={require("../../../../assets/Icons/form-icon.png")} className="form-icon" />
                            <h4>Sequence Listing</h4>
                        </div>
                        <div className="documents-input">
                            <label>Attachment <strong>*</strong></label>
                            <input type="file"/>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={ () => navigate(-1) }>Back</button>
                <button className='continueBtn' onClick={ () => navigate("/patentflow/reviewApplication") }>Continue</button>
            </div>
        </div>
    );
}

export default Documents;