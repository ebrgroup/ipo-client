import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './review.css'
import reviewIcon from "../../../../../assets/Icons/review.png"
import img from '../../../../../assets/Icons/coca-cola.png'
const Review = ({ Progress }) => {

    const location = useLocation()

    //Checking routes for artistic
    const [isArtistic, setIsArtistic] = useState()
    const navigate = useNavigate(null);

    useEffect(() => {

        Progress(100)
        location.pathname.includes('artistic') ?
            setIsArtistic(true) : setIsArtistic(false)
    }, [])

    const handleLink = () => {

        if (location.pathname.includes('/artistic')) {
            console.log('I am artistic');
            return "/copyright/artistic/affidevit"
        }
        else if (location.pathname.includes('/literary')) {
            console.log('I am literary');
            return "/copyright/literary/affidevit"
        }
        else if (location.pathname.includes('/cinema')) {
            return "/copyright/cinema/affidevit"
        }
        else if (location.pathname.includes('/record')) {
            return "/copyright/record/affidevit"
        }
    }

    return (

        <div className="reviewAppBox">
            <div className="review-header">
                <img src={reviewIcon} alt="" />
                <h3>Review your application</h3>
            </div>
            <div className="reviewAppColumnsDiv">
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Copyright Class</span>
                        <br />
                        <span className="reviewAppData">1</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Applicant Name</span>
                        <br />
                        <span className="reviewAppData">EBR</span>
                    </div>
                    {
                        isArtistic ? (<div className="data-column">
                            <span className="reviewAppLabel">Business Name</span>
                            <br />
                            <span className="reviewAppData">EBR</span>
                        </div>) : (<div className="data-column">
                            <span className="reviewAppLabel">Cnic</span>
                            <br />
                            <span className="reviewAppData">13014-991199-0</span>
                        </div>)
                    }


                </div>
                <div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Address</span>
                        <br />
                        <span className="reviewAppData">G-11</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Nationality</span>
                        <br />
                        <span className="reviewAppData">Pakistani</span>
                    </div>
                    {
                        isArtistic ? (<div className="data-column">
                            <span className="reviewAppLabel">Business Address</span>
                            <br />
                            <span className="reviewAppData">H-11</span>
                        </div>) : null
                    }

                </div>
            </div>

            <div className="reviewAppBoxFooter">
                <img src={img} alt="Work logo" width="220px" />
                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
                    <div>
                        <b>Title of work </b> <br />
                        <b>Location Of work </b><br />
                        <b>Completed year </b><br />
                        {
                            !isArtistic ? (<b> Language of work </b>) : null
                        }
                    </div>
                    <div>
                        <span>Paint</span><br />
                        <span>Pakistan</span><br />
                        <span>29-8-2022</span><br />
                        {
                            !isArtistic ? (<span> Urdu </span>) : null
                        }
                    </div>
                </div>

            </div>
            <div className=" links" id="Affidevit">
                <i class="fa-duotone fa-file-pdf"></i>
                <Link to={handleLink()} target="_blank"> Check Undertaking Affidevit </Link>
            </div>

            {
                isArtistic ? (
                    <div className="Advertisement links">
                        <i class="fa-duotone fa-file-pdf"></i>
                        <Link to="/copyright/artistic/advertised" target="_blank"> Check Work Advertisement </Link>
                    </div>
                ) : null
            }

            <div className="btns">
                <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
                <button className='continueBtn' onClick={() => navigate('/copyright/feesubmission')}>Continue</button>
            </div>
        </div>

    );
};

export default Review;