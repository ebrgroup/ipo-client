import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { applicantDetail } from "../../../../assets/states/actions/Copyright_Data handle/copyrightData-action";

const Applicant_Details = (props) => {
    const [selectedOption, setSelectedOption] = useState("soleProprieterShip");

    const type = useSelector(state => state.copyrightReducer?.workType) //Artistic/Cinematographic/Record/Literary
    const dispatch = useDispatch()

    const [commonFields, setCommonFields] = useState({
        Name: "",
        Address: "",
        Nationality: "",
    })

    // Uncommon Fields
    const [bussinessDetails, setBussinessDetails] = useState({
        bussinessName: "",
        bussinessAddress: ""
    })

    const [attorney, setAttorney] = useState({
        lawOfPractice: "",
        licenceFile: "",
        URL: ""
    })
    const [cnic, setCnic] = useState({
        cnic: ""
    })

    const navigate = useNavigate(null);

    const location = useLocation()

    const applicantData = useSelector(state => state.copyrightReducer?.ownerdetail)
    useEffect(() => {
        props.Progress(100);

        if (applicantData.data) {
            const {
                Name,
                Address,
                Nationality
            } = applicantData.data

            setCommonFields({
                Name: Name,
                Address: Address,
                Nationality: Nationality
            })

            if (type == 'Artistic') {

                if (applicantData.type == 'attorney') {
                    const {
                        lawOfPractice,
                        // licenceFile,
                    } = applicantData.data

                    setAttorney({
                        lawOfPractice: lawOfPractice,
                        // licenceFile,
                    })

                    setSelectedOption('attorney')
                } else {
                    const {
                        bussinessName,
                        bussinessAddress,
                    } = applicantData.data

                    setBussinessDetails({
                        bussinessName: bussinessName,
                        bussinessAddress: bussinessAddress
                    })

                    setSelectedOption('soleProprieterShip')
                }
            }
            else {
                const {
                    cnic
                } = applicantData.data
                setCnic({
                    cnic: cnic
                })
            }

        }

    }, []);

    //For active radio button
    const handleChange = (e) => {
        setSelectedOption(e.target.name);
    }

    const handleOwnerDetails = (e) => {
        const { name, value, files } = e.target;
        switch (name) {
            case "Name":
            case "Address":
            case "Nationality":
                setCommonFields(prevState => ({ ...prevState, [name]: value }));
                break;
            case "bussinessName":
            case "bussinessAddress":
                setBussinessDetails(prevState => ({ ...prevState, [name]: value }));
                break;
            case "lawOfPractice":
                setAttorney(prevState => ({ ...prevState, [name]: value }));
                break;
            case "licenceFile":
                setAttorney((prevDetails) => ({
                    ...prevDetails,
                    [name]: files[0],
                    URL: URL.createObjectURL(files[0])
                }));
            case "cnic":
                setCnic(prevState => ({ ...prevState, [name]: value }));
                break;
            default:
                break;
        }
    };


    const handleDataAndNavigation = () => {

        if (areCommonFieldsEmpty() || areUncommonFieldsEmpty()) {
            handleToastDisplay("Required fields (*) are empty!", "error");
        } else {

            let additionalFields = {};

            if (type == 'Artistic') {
                if (selectedOption == 'attorney') {
                    additionalFields = { ...attorney };
                } else {
                    // console.log('I am hit');
                    additionalFields = { ...bussinessDetails };
                }
            } else {
                additionalFields = { ...cnic };
            }
            dispatch(applicantDetail({
                type: selectedOption,
                data: {
                    ...commonFields,
                    ...additionalFields
                }

            }));


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

    const checkFields = (fields) => {
        for (const key in fields) {
            if (fields.hasOwnProperty(key) && fields[key] == '') {
                return true;
            }
        }
        return false;
    }

    const areUncommonFieldsEmpty = () => {
        if (type === 'Artistic') {
            return selectedOption == 'soleProprieterShip' ? checkFields(bussinessDetails) : checkFields(attorney);
        } else {
            return cnic == "";
        }
    };

    const areCommonFieldsEmpty = () => {
        return checkFields(commonFields)
    }

    return (
        <div className="owner-screen-background">
            <h4 className="owner-main-heading">Application for registration of copyright</h4>
            <div className="owner-screen-parent">
                <div className="owner-heading">
                    <img src={require("../../../../assets/Icons/owner-icon.png")} className="owner-icon" />
                    <h4>Owner and Business Details</h4>
                </div>
                {(type == 'Artistic') ? (<div class="radio-inputs">
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
                        <input placeholder="Name" type="text" name="Name" onChange={handleOwnerDetails}
                            value={commonFields.Name} />
                    </div>
                    <div className="partnership-input-container">
                        <label>Adress <strong>*</strong></label>
                        <input placeholder="Address" name="Address" type="text" onChange={handleOwnerDetails}
                            value={commonFields.Address} />
                    </div>

                    <div className="partnership-input-container">
                        <label>Nationality <strong>*</strong></label>
                        <input placeholder='Nationality' name='Nationality' type="text" onChange={handleOwnerDetails}
                            value={commonFields.Nationality} />
                    </div>
                </div>
                {(type == 'Artistic') ? ((selectedOption == 'attorney') ? (
                    <>

                        <div className="partnership-input-container">
                            <label>Law of practice <strong>*</strong></label>
                            <input placeholder="Law of practice" type="text" name="lawOfPractice" onChange={handleOwnerDetails}
                                value={attorney.lawOfPractice} />
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
                                <input placeholder="Bussiness Name" name="bussinessName" type="text" onChange={handleOwnerDetails}
                                    value={bussinessDetails.bussinessName} />
                            </div>
                            <div className="partnership-input-container">
                                <label>Bussiness Adress <strong>*</strong></label>
                                <input placeholder="Bussiness Address" name="bussinessAddress" type="text" onChange={handleOwnerDetails}
                                    value={bussinessDetails.bussinessAddress} />
                            </div>
                        </>
                    )) : (
                    <div className="partnership-input-container">
                        <label>Cnic <strong>*</strong></label>
                        <input placeholder="Cnic" name="cnic" type="text" onChange={handleOwnerDetails}
                            value={cnic.cnic} />
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