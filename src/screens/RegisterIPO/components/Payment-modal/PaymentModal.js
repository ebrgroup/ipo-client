import { useEffect, useRef, useState } from "react";
import "./paymentmodal.css";
import visaSvg from "../../../../assets/Icons/visa-svg.svg";
import paymentHeader from "../../../../assets/Icons/payment-header-svg-2.svg";
import Modal from '@mui/material/Modal';
import Combobox from "../../../global-components/Combobox/Combobox";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { trademarkResetDetails } from "../../../../assets/states/actions/Trademark registration/Trademark-action";
import { designResetDetails } from "../../../../assets/states/actions/Design/design-action";
import { countTrademark } from "../../../../assets/states/middlewares/count-ip";
import { patentResetDetails } from "../../../../assets/states/actions/Patent Registration/patent-action";
import { copyrightResetDetails } from "../../../../assets/states/actions/Copyright_Data handle/copyrightData-action";

const PaymentModal = ({ isOpen, closeModal, Progress, type }) => {
    const navigate = useNavigate();
    const location = useLocation()
    const dispatch = useDispatch();
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        name: "",
        cvv: "",
        month: "Choose Month",
        year: "Choose Year"
    });
    const [menuActivation, setMenuActivation] = useState({
        isMonthMenuActive: false,
        isYearMenuActive: false
    });
    const [disabled, setDisabled] = useState(false);
    const trademarkData = useSelector(state => state.trademarkRegistrationReducer);
    const userData = useSelector(state => state.userReducer);
    const designData = useSelector(state => state.designRegistrationReducer);
    const patentData = useSelector(state => state.patentRegistrationReducer);

    // Copyright data
    const {
        published,
        self,
        extent,
        assignment,
        workType,
        classification,
        ownerdetail,
        advertised,
        goodsServices,
        logodetail
    } = useSelector(state => state.copyrightReducer)


    const divRef = useRef(null);
    const modalRef = useRef(null);

    const monthMenuOptions = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];

    const startYear = new Date().getFullYear();
    const endYear = startYear + 10;
    const years = [];

    const toggleMenu = (menuType) => {
        if (menuType === "month") {
            setMenuActivation((prevMenu) => ({
                ...prevMenu,
                isMonthMenuActive: !menuActivation.isMonthMenuActive
            }));
        } else if (menuType === "year") {
            setMenuActivation((prevMenu) => ({
                ...prevMenu,
                isYearMenuActive: !menuActivation.isYearMenuActive
            }));
        }
    }

    const handleOptionClick = (optionText, menuType) => {
        setCardDetails((prevMenu) => ({
            ...prevMenu,
            [menuType]: optionText
        }));

        toggleMenu(menuType);
    }

    const handleChange = (e) => {
        let value = "";
        const getNumericValue = (input) => input.replace(/\D/g, '');
        const getAlphabets = (input) => input.replace(/[^a-zA-Z]/g, '');
        if (e.target.name === "cardNumber") {
            value = getNumericValue(e.target.value).slice(0, 16);
        } else if (e.target.name === "cvv") {
            value = getNumericValue(e.target.value).slice(0, 4);
        } else {
            value = getAlphabets(e.target.value);
        }
        setCardDetails({
            ...cardDetails,
            [e.target.name]: value
        });
    }

    const generateAlphanumericId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const length = 7;
        let id = '#';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];
        }
        return id;
    };

    const getCurrentDate = (separator = '-') => {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${day}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
    }

    const handlePayment = async () => {
        setDisabled(true);
        Progress(10);

        if(type === "design") {
            submitDesign();
            return;
        } else if (type === "patent") {
            submitPatent();
            return;
        }

        let trackId = generateAlphanumericId();


        // handle navigation for copyright
        if (location.pathname == '/copyright/feesubmission') {
            submitCopyright(trackId);
            return;
        }
        // Create a FormData object to send multipart/form-data
        const formData = new FormData();

        // Append text data to FormData
        formData.append('userId', userData.userData._id);
        formData.append('trademarkId', trackId);
        formData.append('fileDate', getCurrentDate());
        formData.append('applicationOwner', JSON.stringify({
            ownerType: trademarkData.representative.ownerType,
            ...trademarkData.representative.representativeData
        }));
        formData.append('classificationClass', trademarkData.classification.classificationClass);
        formData.append('detailsOfGoods', trademarkData.classification.classificationDescription);
        formData.append('ownerDetails', JSON.stringify({
            businessName: trademarkData.ownerdetail.ownerDetails.businessName,
            businessAddress: trademarkData.ownerdetail.ownerDetails.businessAddress,
            soleProprieterShip: {
                province: trademarkData.ownerdetail.ownerDetails.province,
                city: trademarkData.ownerdetail.ownerDetails.city
            },
            partnerShipFirm: trademarkData.ownerdetail.partnersData,
            companies: {
                companyType: "",
                companyName: trademarkData.ownerdetail.ownerDetails.companyName,
                otherBusinessDescription: trademarkData.ownerdetail.ownerDetails.otherBusinessDescription
            }
        }));
        formData.append('logoDetails', JSON.stringify({
            markDesc: trademarkData.logodetail.logoDetails.markDesc,
            domainName: trademarkData.logodetail.logoDetails.domainName,
            colorClaimed: trademarkData.logodetail.logoDetails.colorClaimed,
            markSeries: trademarkData.logodetail.logoDetails.markSeries,
            markType: trademarkData.logodetail.logoDetails.markType
        }));

        formData.append('licenseFile', trademarkData.representative.representativeData.licenseFile);
        formData.append('logoFile', trademarkData.logodetail.logoDetails.logoFile);

        Progress(50);
        await axios.post("/ipo/trademark", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            Progress(100);
            handleToastDisplay(response.data.message, "success");
            setDisabled(false);
            closeModal();

            navigate(`/successpayment/${trackId.replace('#', '')}`, { state: { type: "design" } })

            dispatch(trademarkResetDetails())
            dispatch(countTrademark(userData.userData._id))
        }).catch(error => {
            Progress(100);
            if (error.response !== undefined) {
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
            setDisabled(false);
        });
    }

    const getExpiryValue = () => {
        const monthIndex = monthMenuOptions.indexOf(cardDetails.month) + 1;
        const month = monthIndex < 10 ? `0${monthIndex}` : monthIndex;

        if (cardDetails.month !== "Choose Month" && cardDetails.year === "Choose Year") {
            return `${month}/YY`;
        } else if (cardDetails.month === "Choose Month" && cardDetails.year !== "Choose Year") {
            return `MM/${cardDetails.year.toString().slice(-2)}`;
        } else {
            return `${month}/${cardDetails.year.toString().slice(-2)}`;
        }
    };

    const scrollDiv = () => {
        divRef.current.className = "payment-lower-parent-active";
    }

    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    const submitDesign = async () => {
        setDisabled(true);
        Progress(10);

        let trackId = generateAlphanumericId();

        // Create a FormData object to send multipart/form-data
        const formData = new FormData();

        // Append text data to FormData
        formData.append('userId', userData.userData._id);
        formData.append('designId', trackId);
        formData.append('fileDate', getCurrentDate());
        formData.append('applicationOwner', JSON.stringify({
            ownerType: designData.representative.ownerType,
            ...designData.representative.representativeData
        }));
        formData.append('productName', designData.classification.productName);
        formData.append('detailsOfProduct', designData.classification.detailsOfProduct);
        formData.append('ownerDetails', JSON.stringify({
            businessName: designData.ownerdetail.ownerDetails.businessName,
            businessAddress: designData.ownerdetail.ownerDetails.businessAddress,
            soleProprieterShip: {
                province: designData.ownerdetail.ownerDetails.province,
                city: designData.ownerdetail.ownerDetails.city
            },
            partnerShipFirm: designData.ownerdetail.partnersData,
            companies: {
                companyType: "",
                companyName: designData.ownerdetail.ownerDetails.companyName,
                otherBusinessDescription: designData.ownerdetail.ownerDetails.otherBusinessDescription
            }
        }));
        formData.append('attachmentDetails', JSON.stringify({
            isRepeated: designData.attachmentdetail.designDetails.isRepeated,
            attachmentFile: designData.attachmentdetail.designDetails.attachmentFile,
        }));

        formData.append('licenseFile', designData.representative.representativeData.licenseFile);
        formData.append('attachmentFile', designData.attachmentdetail.designDetails.attachmentFile);

        Progress(50);
        await axios.post("/ipo/design", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            Progress(100);
            handleToastDisplay(response.data.message, "success");
            setDisabled(false);
            closeModal();
            navigate(`/successpayment/${trackId.replace('#', '')}`, { state: { type: "design" } })
            dispatch(designResetDetails())
            dispatch(countTrademark(userData.userData._id))
        }).catch(error => {
            console.log("aaa", error)
            Progress(100);
            if (error.response !== undefined) {
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
            setDisabled(false);
        });
    };

    const getDocumentsData = () => {
        if (patentData.documentsData.singleDocumentsData !== null) {
            const keysToFilter = ["singleSpecificationDocument", "drawingDocument"];
            
            const filteredData = Object.fromEntries(
                Object.entries(patentData.documentsData.singleDocumentsData)
                    .filter(([key]) => !keysToFilter.includes(key))
            );
            return filteredData;
        } else {
            const keysToFilter = ["descriptionDocument", "claimsDocument", "abstractDocument", "drawingDocument"];
            
            const filteredData = Object.fromEntries(
                Object.entries(patentData.documentsData.multipleDocumentsData)
                    .filter(([key]) => !keysToFilter.includes(key))
            );
            return filteredData;
        }
    }    

    const submitPatent = async () => {
        setDisabled(true);
        Progress(10);

        let trackId = generateAlphanumericId();

        const formData = new FormData();

        formData.append("userId", userData.userData._id);
        formData.append("patentTrackId", trackId);
        formData.append("referenceData", JSON.stringify({...patentData.referenceData}));
        formData.append("personDetails", JSON.stringify({...patentData.personDetails}));
        formData.append("companyDetails", JSON.stringify({...patentData.companyDetails}));

        formData.append("priorityClaimDetails", JSON.stringify(patentData.priorityClaimDetails, (key, value) => {
            if (key === 'evidenceAttachment') {
                return undefined;
            }
            return value;
        }));
        
        formData.append("copiesData", JSON.stringify({...patentData.copiesData}));

        formData.append("documentsData", JSON.stringify({...getDocumentsData()}));
        formData.append("title", patentData.documentsData.title);
        
        patentData.priorityClaimDetails.forEach((claimDetail, index) => {
            formData.append(`evidenceAttachment`, claimDetail.evidenceAttachment);
        });

        if(patentData.documentsData.singleDocumentsData !== null) {
            formData.append("singleSpecificationDocument", patentData.documentsData.singleDocumentsData.singleSpecificationDocument);
            formData.append("drawingDocument", patentData.documentsData.singleDocumentsData.drawingDocument);
        } else {
            formData.append("descriptionDocument", patentData.documentsData.multipleDocumentsData.descriptionDocument);
            formData.append("claimsDocument", patentData.documentsData.multipleDocumentsData.claimsDocument);
            formData.append("abstractDocument", patentData.documentsData.multipleDocumentsData.abstractDocument);
            formData.append("drawingDocument", patentData.documentsData.multipleDocumentsData.drawingDocument);
        }

        Progress(50);
        await axios.post("/ipo/patent", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                Progress(100);
                handleToastDisplay(response.data.message, "success");
                setDisabled(false);
                closeModal();
    
                navigate(`/successpayment/${trackId.replace('#', '')}`, { state: { type: "patent" } })
    
                dispatch(patentResetDetails())
                dispatch(countTrademark(userData.userData._id))
            }).catch(error => {
                Progress(100);
                if (error.response !== undefined) {
                    if (error.response.data) {
                        handleToastDisplay(`${error.response.data.error}`, "error");
                    } else {
                        handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                    }
                } else {
                    handleToastDisplay("Error inserting data", "error");
                }
                setDisabled(false);
            });
    }
    
    const submitCopyright = async (trackId) => {

        // Create a FormData object to send multipart/form-data
        Progress(0);

        const formData = new FormData();

        formData.append('userId', userData.userData._id);
        formData.append('copyrightId', trackId);
        formData.append('fileDate', getCurrentDate());
        formData.append('published', JSON.stringify({
            ...published.data
        }));
        formData.append('applicationOwner', JSON.stringify({
            ownerType: self.type,
            data: self.data,
            extent: extent,
            assignment: assignment

        }));

        Progress(25);

        formData.append('workType', workType);
        formData.append('classificationClass', Number(classification.classificationClass));
        formData.append('applicantDetail', JSON.stringify({
            applicantType: ownerdetail.type,
            data: ownerdetail.data

        }));
        formData.append('logoDetails', JSON.stringify({
            logodetail: logodetail,
            associatedWithGoods: goodsServices.data,
            advertised: advertised.data
        }));

        Progress(50);
        await axios.post("http://localhost:5000/ipo/copyright", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            Progress(100);
            handleToastDisplay(response.data.message, "success");
            setDisabled(false);
            closeModal();
            navigate(`/copyright/successpayment/${trackId.replace('#', '')}`, { state: { type: "design" } })
            dispatch(copyrightResetDetails())
            dispatch(countTrademark(userData.userData._id))
        }).catch(error => {
            Progress(100);
            if (error.response !== undefined) {
                if (error.response.data) {
                    handleToastDisplay(`${error.response.data.error}`, "error");
                } else {
                    handleToastDisplay(`${error.response.status}, ${error.response.statusText}`, "error")
                }
            } else {
                handleToastDisplay("Error inserting data", "error");
            }
            setDisabled(false);
        });

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
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setMenuActivation({
                    isMonthMenuActive: false,
                    isYearMenuActive: false
                });
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-overlay">
                <div className="modal" ref={modalRef}>
                    <div className="payment-header-parent">
                        <div className="payment-header">
                            <div class="visa-card">
                                <div class="logoContainer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 48 48"
                                        className="svgLogo"
                                    >
                                        <path
                                            fill="#ff9800"
                                            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                                        ></path>
                                        <path
                                            fill="#d50000"
                                            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                                        ></path>
                                        <path
                                            fill="#ff3d00"
                                            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="number-container">
                                    <label className="payment-input-label" for="cardNumber">CARD NUMBER</label>
                                    <input
                                        className="payment-input-style"
                                        id="cardNumber"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        name="cardNumber"
                                        type="text"
                                        value={cardDetails.cardNumber}
                                        disabled={true}
                                    />
                                </div>
                                <div className="name-date-cvv-container">
                                    <div className="name-wrapper">
                                        <label className="payment-input-label" for="holderName">CARD HOLDER</label>
                                        <input
                                            className="payment-input-style"
                                            id="holderName"
                                            placeholder="NAME"
                                            type="text"
                                            value={cardDetails.name}
                                            disabled={true}
                                        />
                                    </div>

                                    <div className="expiry-wrapper">
                                        <label className="payment-input-label" for="expiry" disabled={true}>VALID THRU</label>
                                        <input className="payment-input-style" id="expiry" disabled={true}
                                            placeholder="MM/YY" type="text" value={getExpiryValue()} />
                                    </div>
                                    <div className="cvv-wrapper">
                                        <label className="payment-input-label" for="cvv">CVV</label>
                                        <input
                                            className="payment-input-style"
                                            placeholder="***"
                                            maxlength="3"
                                            id="cvv"
                                            type="password"
                                            value={cardDetails.cvv}
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="payment-hr-element" />
                        <div className="payment-lower-parent" ref={divRef}>
                            <div className="payment-lower-header">
                                <img src={paymentHeader} className="payment-header-svg" />
                                <div>
                                    <p>{userData.userData.firstName + " " + userData.userData.lastName}</p>
                                    <h6>Order Id: 125689753556</h6>
                                </div>
                            </div>
                            <div className="payment-inputs-container">
                                <div class="payment-group">
                                    <img src={visaSvg} className="svgIcon" />
                                    <input className="payment-input" type="text" placeholder="Card Number"
                                        value={cardDetails.cardNumber} onChange={handleChange} name="cardNumber" />
                                </div>
                            </div>
                            <div className="payment-inputs-container">
                                <div class="payment-group">
                                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z"
                                            fill="#4A5699" /><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z"
                                                fill="#C45FA0" /><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F" /></svg>
                                    <input className="payment-input" type="text" placeholder="Card Holder"
                                        value={cardDetails.name} onChange={handleChange} name="name" />
                                </div>
                            </div>
                            <div className="payment-inputs-container">
                                <div class="payment-group">
                                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z"
                                            fill="#4A5699" /><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z"
                                                fill="#C45FA0" /><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F" /></svg>
                                    <input className="payment-input" type="text" placeholder="CVV"
                                        value={cardDetails.cvv} onChange={handleChange} name="cvv" />
                                </div>
                            </div>
                            <div className="payment-dates" onClick={scrollDiv} >
                                <Combobox
                                    selectedItem={cardDetails.month}
                                    menuType="month"
                                    isMenuActive={menuActivation.isMonthMenuActive}
                                    toggleMenu={toggleMenu}
                                    options={monthMenuOptions}
                                    handleOptionClick={handleOptionClick}
                                    width="12vw"
                                />
                                <Combobox
                                    selectedItem={cardDetails.year}
                                    menuType="year"
                                    isMenuActive={menuActivation.isYearMenuActive}
                                    toggleMenu={toggleMenu}
                                    options={years}
                                    handleOptionClick={handleOptionClick}
                                    width="12vw"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pay-button-container" onClick={disabled ? null : handlePayment}>
                        <div>
                            <svg viewBox="0 0 24 24" id="cart">
                                <path fill="#ffffff" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                            </svg>
                            <p>
                                PAY Rs. 1500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default PaymentModal;
