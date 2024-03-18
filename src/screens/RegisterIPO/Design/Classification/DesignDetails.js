import React, { useEffect, useState } from 'react'
import './../../Trademark-Registration/logoDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import './../../components/Owner-details/ownerdetails.css'

const DesignDetails = ({ Progress }) => {

    const [designDetails, setDesignDetails] = useState({
        isRepeated: false,
        designFile: "",
        imageURL: null
    });
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleChange = (e) => {
        if (e.target.name === "designFile") {
            setDesignDetails((prevDetails) => ({
                ...prevDetails,
                designFile: e.target.files[0],
                imageURL: URL.createObjectURL(e.target.files[0]),
            }));
        } else {
            setDesignDetails((prevDetails) => ({
                ...prevDetails,
                [e.target.name]: e.target.checked
            }));
        }
    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty()) {
            // dispatch(logoDetail({
            //     designDetails
            // }));
            navigate("/designreview")
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
    const areRequiredFieldsEmpty = () => {
        return designDetails.designFile && designDetails.imageURL;
    }

    return (
        <main className="designDetailContainer">
            <section className="designDetailSection">
                <h3 style={{ marginBottom: "2.5rem", marginTop: "1rem" }}>Design Details</h3>
                <div className="input">
                    <label htmlFor="">Upload picture of design <strong>*</strong></label>
                    <input type="file"
                        onChange={handleChange}
                        name="designFile" />
                </div>
                {/* <div className="input selected-logo"> */}
                    <img src={designDetails.imageURL} alt="No design file selected." style={{ width: "16rem", marginTop: "1rem", fontSize: "0.8rem" }} />
                {/* </div> */}
                <div className="isRepeatedDiv">
                    <input type="checkbox"
                        value={designDetails.isRepeated}
                        style={{ cursor: "pointer" }}
                        onChange={handleChange}
                        name="isRepeated" 
                        id="isRepeated" />
                    <label htmlFor="isRepeated" style={{ cursor: "pointer" }}>Repeated surface pattern design.</label>
                </div>
                {/* </div> */}
            </section>

            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleDataAndNavigation} >Continue</button>
            </div>
        </main>
    )
}

export default DesignDetails;