import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './review.css'
import reviewIcon from "../../../../../assets/Icons/review.png"
import img from '../../../../../assets/Icons/coca-cola.png'
import { useSelector } from "react-redux";
const Review = ({ Progress }) => {

    const location = useLocation()

    //Checking routes for artistic
    const [isArtistic, setIsArtistic] = useState()
    const navigate = useNavigate(null);

    const workType = useSelector(state => state.copyrightReducer?.workType)
    const {
        classification,
        ownerdetail,
        logodetail,
        advertised,
        goodsServices
    } = useSelector(state => state.copyrightReducer)



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
                <div className="left-column">
                    <div className="data-column">
                        <span className="reviewAppLabel">Copyright Class</span>
                        <br />
                        <span className="reviewAppData">{classification.classificationClass}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Applicant Name</span>
                        <br />
                        <span className="reviewAppData">{ownerdetail.data.Name}</span>
                    </div>
                    {
                        isArtistic ? (<div className="data-column">
                            <span className="reviewAppLabel">Bussiness Name</span>
                            <br />
                            <span className="reviewAppData">{ownerdetail.data.bussinessName}</span>
                        </div>) : (<div className="data-column">
                            <span className="reviewAppLabel">Cnic</span>
                            <br />
                            <span className="reviewAppData">{ownerdetail.data.cnic}</span>
                        </div>)
                    }


                </div>
                <div className="right-column">
                    <div className="data-column">
                        <span className="reviewAppLabel">Address</span>
                        <br />
                        <span className="reviewAppData">{ownerdetail.data.Address}</span>
                    </div>
                    <div className="data-column">
                        <span className="reviewAppLabel">Nationality</span>
                        <br />
                        <span className="reviewAppData">{ownerdetail.data.Nationality}</span>
                    </div>
                    {
                        isArtistic ? (<div className="data-column">
                            <span className="reviewAppLabel">Business Address</span>
                            <br />
                            <span className="reviewAppData">{ownerdetail.data.bussinessAddress}</span>
                        </div>) : null
                    }

                </div>
            </div>

            <div className="logoDetails">
                <div className="reviewAppBoxFooter" >
                    <img src={logodetail.imageURL} alt="Work logo" width="220px" />
                    <div>
                        <div>
                            <b>Title of work </b> <br />
                            <b>Location Of work </b><br />

                            {
                                workType == "Artistic" && Number(classification.classificationClass) == 2 ? (
                                    <b> Completed year </b>
                                ) : ""
                            }
                            {
                                workType != "Artistic" ? (
                                    <>
                                        <b> Completed year </b><br />
                                        <b> Language of work </b><br />
                                    </>
                                ) : ""
                            }
                        </div>
                        <div>
                            <span>{logodetail.title}</span><br />
                            <span>{logodetail.country}</span><br />
                            {
                                workType == "Artistic" && Number(classification.classificationClass) == 2 ? (
                                    <span> {logodetail.completedYear} </span>
                                ) : ""
                            }
                            {
                                workType != "Artistic" ? (
                                    <>
                                        <span> {logodetail.completedYear}</span><br />
                                        <span> {logodetail.language} </span><br />
                                    </>
                                ) : ""
                            }
                        </div>
                    </div>

                </div>

                {(workType == 'Artistic' && goodsServices.associated) ? <div className="reviewAppBoxFooter" >
                    <img src={goodsServices.data.URL} alt="Work logo" width="220px" />
                    <div >
                        <div>
                            <b>Link with trademark </b> <br />
                            <b>Domain Name </b><br />
                            <b>Goods/Services Description </b><br />

                        </div>
                        <div>
                            <span>{(goodsServices.data.tradId) ? goodsServices.data.tradId : 'Nill'}</span><br />
                            <span>{goodsServices.data.Name}</span><br />
                            <span>{goodsServices.data.desc}</span><br />

                        </div>
                    </div>

                </div> : ""}

                {(workType == 'Artistic' && advertised.advertised) ? <div className="reviewAppBoxFooter"  >
                    <img src={advertised.data.URL} alt="Work logo" width="220px" />
                    <div>
                        <div>
                            <b>Name of advertisement </b> <br />
                            <b>Date of advertisement </b><br />

                        </div>
                        <div>
                            <span>{advertised.data.nameOfAdver}</span><br />
                            <span>{advertised.data.dateOfAdver}</span><br />

                        </div>
                    </div>

                </div> : ""}

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
                <button className='continueBtn' onClick={() => navigate('/copyright/feesubmission', { state: { type: "copyright" } })}>Continue</button>
            </div>
        </div>

    );
};

export default Review;