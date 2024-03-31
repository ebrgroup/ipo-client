import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import ownerIcon from '../../../../../../assets/Icons/owner-icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { logoDetail } from '../../../../../../assets/states/actions/Copyright_Data handle/copyrightData-action';

const Work_Details = ({ Progress }) => {

    //Common Fields
    const [commonFields, setCommonFields] = useState({
        title: "",
        country: "",
        logoFile: "",
        imageURL: ""
    })
    //Uncommon Fields
    const [completedYear, setCompletedYear] = useState("") //For artistic work
    const [language, setLanguage] = useState("") //For Cinema/Literary/Record work

    //Combine fields into single object
    const [logoDetails, setLogoDetails] = useState({});

    const location = useLocation('')

    const classification = useSelector(state => state.copyrightReducer?.classification?.classificationClass)
    const work = useSelector(state => state.copyrightReducer?.workType)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name == "logoFile") {
            setCommonFields((prevDetails) => ({
                ...prevDetails,
                [name]: files[0],
                imageURL: URL.createObjectURL(files[0])
            }));
        } else {
            setCommonFields((prevDetails) => ({
                ...prevDetails,
                [name]: value
            }));
        }

        setLogoDetails(
            {
                ...commonFields,
                ...(work === "Artistic" && Number(classification) === 2 ? { completedYear } : null),
                ...(work !== "Artistic" ? { completedYear, language } : null)
            }
        )
    }

    const handleDataAndNavigation = () => {
        if (areRequiredFieldsEmpty()) {

            handleToastDisplay("Required fields (*) are empty!", "error");
        } else {

            dispatch(logoDetail({
                ...commonFields,
                ...(work === "Artistic" && Number(classification) === 2 ? { completedYear } : {}),
                ...(work !== "Artistic" ? { completedYear, language } : {})
            }));


            if (location.pathname.includes('artistic')) {

                navigate("/copyright/artistic/logodetails/services")
            }
            else {
                navigate(`/copyright/${work.toLowerCase()}/reviewapplication`)

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

    const areRequiredFieldsEmpty = () => {
        for (const key in logoDetails) {
            if (logoDetails.hasOwnProperty(key) && logoDetails[key] === "") {
                return true;
            }
        }
        return false;
    }

    // Logic for previous data
    //When back button is press
    // The previous data is kept safe
    const workDetails = useSelector(state => state.copyrightReducer?.logodetail)
    useEffect(() => {
        Progress(100)
        if (workDetails) {
            const {
                title,
                country,
                logoFile,
                imageURL,
            } = workDetails;

            setCommonFields({
                title: title,
                country: country,
                logoFile: logoFile,
                imageURL: imageURL,
            })
            if ((work == 'Artistic' && Number(classification) === 2)) {

                setCompletedYear(workDetails.completedYear)

            } else if (work != 'Artistic') {

                setLanguage(workDetails.language)
                setCompletedYear(workDetails.completedYear)
            }

        }
    }, [])

    return (
        <main className="logoDetails-container">
            <div className="owner-heading">
                <img src={ownerIcon} className="owner-icon" />
                <h4>{work} Work Details</h4>
            </div>
            <section id="logoDetail-section">
                <div className="input">
                    <label htmlFor="title">Work title<strong>*</strong></label>
                    <input type="text"
                        onChange={handleChange}
                        value={commonFields.title}
                        placeholder='Work title'
                        id='title'
                        name="title" />
                </div>

                <div className="input">
                    <label htmlFor="location">Location of work (e.g: London)<strong>*</strong></label>
                    <input type="text"
                        onChange={handleChange}
                        value={commonFields.country}
                        placeholder='Location of work'
                        id='location'
                        name="country" />
                </div>
                {/* </div> */}
                {(work == 'Artistic' && Number(classification) === 2) || (work != 'Artistic') ? (
                    <div className="input">
                        <label htmlFor="">Completed year (When your work is complete) <strong>*</strong></label>
                        <input type="date" onChange={(e) => setCompletedYear(e.target.value)} name="completedYear" value={completedYear} />
                    </div>
                ) : ""}

                {work != 'Artistic' ? <div className="input">
                    <label htmlFor="">Language (Specify Language e.g: Arabic) <strong>*</strong></label>
                    <input type="text" onChange={(e) => setLanguage(e.target.value)} placeholder='Language'
                        value={language}
                        name="completedYear" />

                </div> : ""}

                <div className="input">
                    <label htmlFor="logo">Upload copy of your work <strong>*</strong></label>
                    <input type="file"
                        // value={commonFields.logoFile}
                        onChange={handleChange}
                        id='logo'
                        name="logoFile" />
                </div>
                <div className=" input selected-logo">
                    <img src={commonFields.imageURL} width="210px" />
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

export default Work_Details
