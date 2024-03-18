import { useEffect, useState } from "react";
import "../../Trademark/Classification/Classification.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const DesignClassification = () => {

    const navigate = useNavigate(null);
    const { state } = useLocation();
    const [productName, setProductName] = useState("");
    const [productDescription, setDescription] = useState("");
    const areRequiredFieldsEmpty = () => {
        return (productName === "");
    };

    const handleDataAndNavigation = () => {
        if (!areRequiredFieldsEmpty()) {
            navigate("/ownerDetails", { state : { type: state.type } });
        } else {
            handleToastDisplay("Required fields (*) are empty!", "error");
        }
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

    return (
        <div className="classificationBox">
            <h3>Design Classification</h3>
            <div>
                <span className="classificationLabel">
                    Product Name <strong>*</strong>
                </span>
                <br />
                <div style={{ width: "100%" }} className="wrapper active">
                    <input
                        className="classificationInput"
                        placeholder="Search here..."
                        onChange={(e) => { setProductName(e.target.value) }}
                        value={productName}
                        type="text"
                        spellCheck="false"
                        autoComplete="false"
                    />
                </div>
            </div>
            <div>
                <span className="classificationLabel">
                    Details of Product
                </span>
                <br />
                <textarea value={productDescription} className="classificationInput classificationTextArea"
                    onChange={(e) => setDescription(e.target.value)} rows="7" placeholder="Enter details here..." />
            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleDataAndNavigation}  >Continue</button>
            </div>
        </div>
    );
};

export default DesignClassification;