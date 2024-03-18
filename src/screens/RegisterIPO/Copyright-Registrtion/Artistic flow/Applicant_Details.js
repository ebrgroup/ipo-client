import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './style.css'

const Applicant_Details = (props) => {
    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");
    const [ownerDetails, setOwnerDetails] = useState({
        Name: "",
        Address: "",
        Nationality: "",
        bussinessName: "",
        bussinessAddress: "",
        lawOfPractice: "",
        licenceFile: "",
        cnic: ""
        // businessOwnerType: "soleProprieterShip"
    });
    const navigate = useNavigate(null);

    const [isTrademark, setIsTrademark] = useState(false)
    const location = useLocation()


    useEffect(() => {
        props.Progress(100);
        (location.pathname.includes('/artistic')) ? setIsTrademark(true)
            : setIsTrademark(false)
    }, []);



    const handleChange = (e) => {
        setSelectedOption(e.target.name);

    }

    const handleOwnerDetails = (e) => {
        const { name, value } = e.target;
        setOwnerDetails({ ...ownerDetails, [name]: value });
    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty()) {

            if (location.pathname.includes('artistic')) {
                navigate("/copyright/artistic/logodetails")
            }
            else if (location.pathname.includes('literary')) {
                navigate("/copyright/literary/logodetails")
            }
            else if (location.pathname.includes('cinema')) {
                navigate("/copyright/cinema/logodetails")
            }
            else if (location.pathname.includes('record')) {
                navigate("/copyright/record/logodetails")
            }
            // console.log(ownerDetails);
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

    const checkUncommonFields = () => {
        if (location.pathname.includes('artistic')) {
            if (selectedOption === "soleProprieterShip" &&
                (ownerDetails.bussinessName === "" || ownerDetails.bussinessAddress === "")) {
                return false;
            } else if (selectedOption === "attorney" && ownerDetails.lawOfPractice === " ") {
                return false;
            }
        }
        else {
            if (ownerDetails.cnic == "") {
                return false;
            }
        }

        return true;
    }



const areRequiredFieldsEmpty = () => {

    if ((ownerDetails.Name === "" || ownerDetails.Address === "" || ownerDetails.Nationality === "")
        || (checkUncommonFields() === false)) {
        return false;
    }
    return true;
}

return (
    <div className="owner-screen-background">
        <h4 className="owner-main-heading">Application for registration of copyright</h4>
        <div className="owner-screen-parent">
            <div className="owner-heading">
                <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                <h4>Owner and Business Details</h4>
            </div>
            {(isTrademark) ? (<div class="radio-inputs">
                <label class="radio">
                    <input type="radio" name="soleProprieterShip"
                        checked={selectedOption === "soleProprieterShip"} onChange={handleChange} />
                    <span class="name">Sole Proprietorship</span>
                </label>
                <label class="radio">
                    <input type="radio" name="attorney"
                        checked={selectedOption === "attorney"} onChange={handleChange} />
                    <span class="name">Attorney</span>
                </label>

            </div>) : null}
            <div className="partnership-parent-container full ">
                <div className="partnership-input-container">
                    <label>Name <strong>*</strong></label>
                    <input placeholder="Name" type="text" name="Name" onChange={handleOwnerDetails} />
                </div>
                <div className="partnership-input-container">
                    <label>Adress <strong>*</strong></label>
                    <input placeholder="Address" name="Address" type="text" onChange={handleOwnerDetails} />
                </div>

                <div className="partnership-input-container">
                    <label>Nationality <strong>*</strong></label>
                    <input placeholder='Nationality' name='Nationality' type="text" onChange={handleOwnerDetails} />
                </div>
            </div>
            {isTrademark ? ((selectedOption == 'attorney') ? (
                <>

                    <div className="partnership-input-container">
                        <label>Law of practice <strong>*</strong></label>
                        <input placeholder="Law of practice" type="text" name="lawOfPractice" onChange={handleOwnerDetails} />
                    </div>
                    <div className="partnership-input-container">
                        <label>Licence file (Vakaltnama) <strong>*</strong></label>
                        <input placeholder="Choose license file" name="licenceFile" type="file" onChange={handleOwnerDetails} />
                    </div>
                </>
            ) :
                (
                    <>
                        <div className="partnership-input-container">
                            <label>Bussiness Name <strong>*</strong></label>
                            <input placeholder="Bussiness Name" name="bussinessName" type="text" onChange={handleOwnerDetails} />
                        </div>
                        <div className="partnership-input-container">
                            <label>Bussiness Adress <strong>*</strong></label>
                            <input placeholder="Bussiness Address" name="bussinessAddress" type="text" onChange={handleOwnerDetails} />
                        </div>
                    </>
                )) : (
                <div className="partnership-input-container">
                    <label>Cnic <strong>*</strong></label>
                    <input placeholder="Cnic" name="cnic" type="text" onChange={handleOwnerDetails} />
                </div>
            )}
        </div>

        <div className="btns">
            <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
            <button className='continueBtn' onClick={handleDataAndNavigation}>Continue</button>
        </div>
        {/* <div className="button-div">
            </div> */}
    </div>
);
}

export default Applicant_Details;