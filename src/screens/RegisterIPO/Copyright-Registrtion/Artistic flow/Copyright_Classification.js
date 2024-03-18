import React from 'react'
import { useEffect, useRef, useState } from "react";
import "../../../global-components/SearchComboBox/SearchComboBox.css";
import { artistic, literary, cinematographic, record } from '../Copyright_Classifications'
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Copyright_Classification = ({ Progress }) => {
    const navigate = useNavigate(null);
    const searchInputRef = useRef(null);

    let classifications = null;
    const location = useLocation()

    if (location.pathname.includes('artistic')) {
        classifications = artistic();
    }
    else if (location.pathname.includes('literary')) {
        classifications = literary();
    }
    else if (location.pathname.includes('cinema')) {
        classifications = cinematographic();
    }
    else if (location.pathname.includes('record')) {
        classifications = record();
    }

    const [searchText, setSearchText] = useState("");
    const [isSearchOnFocus, setSearchOnFocus] = useState(false);
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const [classificationDescription, setDescription] = useState("");
    const filteredClassifications = classifications.filter((classification) =>
        classification.description.toLowerCase().includes(searchText.toLowerCase())
    );

    const areRequiredFieldsEmpty = () => {
        return (searchText === "" && classificationDescription === "");
    };

    const handleDataAndNavigation = () => {
        if (!areRequiredFieldsEmpty()) {
            const classificationData = {
                classificationClass: searchText,
                classificationDescription
            };


            if (location.pathname.includes('artistic')) {
                navigate("/copyright/artistic/ownerDetails")
            }
            else if (location.pathname.includes('literary')) {
                navigate("/copyright/literary/ownerDetails")
            }
            else if (location.pathname.includes('cinema')) {
                navigate("/copyright/cinema/ownerDetails")
            }
            else if (location.pathname.includes('record')) {
                navigate("/copyright/record/ownerDetails")
            }
            
        } else {
            handleToastDisplay("Required fields (*) are empty!", "error");
        }
    }

    const handleKeyDown = (e) => {
        if (isSearchOnFocus && filteredClassifications.length > 0) {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveOptionIndex((activeOptionIndex - 1 + filteredClassifications.length) % filteredClassifications.length)
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveOptionIndex((activeOptionIndex + 1) % filteredClassifications.length);
            } else if (e.key === "Enter") {
                setSearchText(filteredClassifications[activeOptionIndex].id.toString());
            }
        }
    };


    useEffect(() => {

        Progress(100)

    }, []);


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
            <h3>Copyright Classification</h3>
            <div>
                <span className="classificationLabel">
                    Classification Type <strong>*</strong>
                </span>
                <br />
                <div style={{ width: "100%" }} className="wrapper active">
                    <input
                        ref={searchInputRef}
                        className="classificationInput"
                        placeholder="Search here..."
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onClick={() => setSearchOnFocus(true)}
                        onBlur={() => {
                            setTimeout(() => {
                                setSearchOnFocus(false)
                            }, 300);
                        }}
                        value={searchText}
                        type="text"
                        spellCheck="false"
                        autoComplete="false"
                        onKeyDown={handleKeyDown}
                    />
                    {isSearchOnFocus && filteredClassifications.length > 0 && <div style={{ width: "88%" }} className="searchDropdownContent">
                        <ul className="searchDropdownOptions" style={{ maxHeight: "50vh" }}>
                            {filteredClassifications.map((item, index) => (
                                <li key={index} className={`classificationItem ${activeOptionIndex === index ? "active" : ""}`} onClick={() => {
                                    setSearchText(item.id.toString());
                                }}>
                                    <span>
                                        <b>{item.id} -</b> {`${item.description}`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>
            <div>
                <span className="classificationLabel">
                    Details of classification
                </span>
                <br />
                <textarea value={classificationDescription} className="classificationInput classificationTextArea"
                    onChange={(e) => setDescription(e.target.value)} rows="7" placeholder="Enter details here..." />
            </div>
            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={handleDataAndNavigation}  >Continue</button>
            </div>
        </div>
    )
}

export default Copyright_Classification
