import { useEffect, useState } from "react";
import "./documents.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { patentDocumentsData } from "../../../../assets/states/actions/Patent Registration/patent-action";

const Documents = (props) => {

    const data = useSelector(state => state.patentRegistrationReducer);
    const [selectedOption, setSelectedOption] = useState("singleDocuments");
    const [title, setTitle] = useState(null);
    const [sequenceListingDocument, setSequenceListingDocument] = useState(null);
    const [multipleDocumentsData, setMultipleDocumentsData] = useState({
        descriptionDocument: null,
        numberOfDescriptionPages: null,
        claimsDocument: null,
        numberOfClaims: null,
        abstractDocument: null,
        drawingDocument: null
    });
    const [singleDocumentsData, setSingleDocumentsData] = useState({
        singleSpecificationDocument: null,
        descriptionPageRangeTo: null,
        descriptionPageRangeFrom: null,
        claimsPageRangeTo: null,
        claimsPageRangeFrom: null,
        numberOfClaims: null,
        abstractPageRangeTo: null,
        abstractPageRangeFrom: null,
        drawingDocument: null
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRadioChanges = (e) => {
        setSelectedOption(e.target.name);
    }

    const handleSingleDocumentsChange = (e) => {
        let value = "";
        if(e.target.name.match("Document"))
            value = e.target.files[0];
        else
            value = e.target.value;
        setSingleDocumentsData((prevDate) => ({
            ...prevDate,
            [e.target.name]: value
        }));
    }

    const handleMultipleDocumentsChange = (e) => {
        let value = "";
        if (["singleSpecificationDocument", "drawingDocument"].includes(e.target.name)) {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }
        setMultipleDocumentsData((prevData) => ({
            ...prevData,
            [e.target.name]: value
        }));
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
                break;
        }
    };
    
    const checkIfAnyValueIsNull = (documentsData) => {
        for (const key in documentsData) {
            if (documentsData[key] === null) {
                console.log(key)
                return true;
            }
        }
        return false;
    };

    const handleDataAndNavigation = () => {
        let flag = false;
        if(selectedOption === "singleDocuments") {
            if(checkIfAnyValueIsNull(singleDocumentsData) || title === null || sequenceListingDocument === null)
                flag = true;
        } else if (selectedOption === "multipleDocuments") {
            if(checkIfAnyValueIsNull(singleDocumentsData) || title === null || sequenceListingDocument === null)
                flag = true;
        }
        if(flag) {
            handleToastDisplay("Please fill out all details and try again!", "error");
        } else {
            if(selectedOption === "singleDocuments") {
                dispatch(patentDocumentsData({
                    singleDocumentsData,
                    title,
                    sequenceListingDocument
                }));
            } else {
                dispatch(patentDocumentsData({
                    multipleDocumentsData,
                    title,
                    sequenceListingDocument
                }));
            }
            navigate("/patentflow/reviewApplication");
        }
    }

    useEffect(() => {
        if(data.documentsData.singleDocumentsData) {
            setSingleDocumentsData({...data.documentsData.singleDocumentsData});
        } else if (data.documentsData.multipleDocumentsData) {
            setMultipleDocumentsData({...data.documentsData.multipleDocumentsData});
        }
        if(data.documentsData.title) {
            setTitle(data.documentsData.title);
        }
        if(data.documentsData.sequenceListingDocument) {
            setSequenceListingDocument(data.documentsData.sequenceListingDocument);
        }
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
                        <input name="title" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter Title"/>
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
                                    <input name="singleSpecificationDocument" onChange={handleSingleDocumentsChange} type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Description page range</label>
                                    <span>
                                        <input name="descriptionPageRangeFrom" onChange={handleSingleDocumentsChange} className="documents-from-input"
                                            placeholder="From"/>
                                        <input name="descriptionPageRangeTo" onChange={handleSingleDocumentsChange} placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Claims page range</label>
                                    <span>
                                        <input name="claimsPageRangeFrom" onChange={handleSingleDocumentsChange} className="documents-from-input" 
                                            placeholder="From"/>
                                        <input name="claimsPageRangeTo" onChange={handleSingleDocumentsChange} placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Number of claims</label>
                                    <input name="numberOfClaims" onChange={handleSingleDocumentsChange} placeholder="Enter Quantity"/>
                                </div>
                                <div className="documents-input">
                                    <label>Abstract page range</label>
                                    <span>
                                        <input name="abstractPageRangeFrom" onChange={handleSingleDocumentsChange} 
                                            className="documents-from-input" placeholder="From"/>
                                        <input name="abstractPageRangeTo" onChange={handleSingleDocumentsChange} placeholder="To"/>
                                    </span>
                                </div>
                                <div className="documents-input">
                                    <label>Drawings Document</label>
                                    <input name="drawingDocument" onChange={handleSingleDocumentsChange} type="file"/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="documents-input">
                                    <label>Description Document</label>
                                    <input name="descriptionDocument" onChange={handleMultipleDocumentsChange} type="file" />
                                </div>
                                <div className="documents-input">
                                    <label>Number of pages of description</label>
                                    <input name="numberOfDescriptionPages" onChange={handleMultipleDocumentsChange} 
                                        type="text" placeholder="Enter Quantity"/>
                                </div>
                                <div className="documents-input">
                                    <label>Claims Document</label>
                                    <input name="claimsDocument" onChange={handleMultipleDocumentsChange} type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Number of claims</label>
                                    <input name="numberOfClaims" onChange={handleMultipleDocumentsChange} 
                                        type="text" placeholder="Enter Quantity"/>
                                </div>
                                <div className="documents-input">
                                    <label>Abstract Document</label>
                                    <input name="abstractDocument" onChange={handleMultipleDocumentsChange} type="file"/>
                                </div>
                                <div className="documents-input">
                                    <label>Drawings Document Document</label>
                                    <input name="drawingDocument" onChange={handleMultipleDocumentsChange} type="file"/>
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
                            <input type="file" onChange={(e) => setSequenceListingDocument(e.target.files[0])} />
                        </div> 
                    </div>
                </div>
            </div>
            <div className="btns">
                <button className='backBtn' onClick={ () => navigate(-1) }>Back</button>
                <button className='continueBtn' onClick={ handleDataAndNavigation }>Continue</button>
            </div>
        </div>
    );
}

export default Documents;