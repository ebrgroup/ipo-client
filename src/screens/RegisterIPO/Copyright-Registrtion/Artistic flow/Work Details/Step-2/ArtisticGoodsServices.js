import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch, useSelector } from 'react-redux';
import { goodsAssociate } from '../../../../../../assets/states/actions/Copyright_Data handle/copyrightData-action';

const ArtisticGoodsServices = ({ Progress }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isAssociated, setIsAssociated] = useState('no')
    const [goodsDetails, setGoodsDetails] = useState({
        tradId: '',
        Name: '',
        desc: '',
        logoFile: '',
        URL: ''

    });
    // const dispatch = useDispatch();
    const handleChange = (event) => {
        const newValue = event.target.value;
        setIsAssociated(newValue);
    };

    const handleGoodDetails = (e) => {
        //
        const { name, value, files } = e.target
        if (name == "logoFile") {
            setGoodsDetails((prevDetails) => ({
                ...prevDetails,
                [name]: files[0],
                URL: URL.createObjectURL(files[0])
            }));
        } else {
            setGoodsDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value
            }));
        }

    }

    const handleDataAndNavigation = () => {
        if (isAssociated == 'yes') {
            if (areRequiredFieldsEmpty()) {
                handleToastDisplay("Required fields (*) are empty!", "error");
                return;
            }
            dispatch(goodsAssociate({
                associated: true,
                data: goodsDetails
            }))
        }
        else {
            dispatch(goodsAssociate({
                associated: false,
                data: {}
            }))
        }
        navigate("/copyright/artistic/logodetails/advertised")

    }

    const areRequiredFieldsEmpty = () => {
        for (const key in goodsDetails) {
            if (key === 'tradId') {
                continue;
            }
            if (goodsDetails.hasOwnProperty(key) && goodsDetails[key] === '') {
                return true;
            }
        }
        return false;
    }

    const handleToastDisplay = (message, type) => {
        const toastConfig = {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        };

        switch (type) {
            case 'success':
                toast.success(message, toastConfig);
                break;
            case 'error':
                toast.error(message, toastConfig);
                break;
            default:
                toast(message, toastConfig);
                break;
        }
    };

    const goods = useSelector(state => state.copyrightReducer?.goodsServices)
    useEffect(() => {
        console.log(goods);
        Progress(50);
        if (goods.associated) {
            const {
                tradId,
                Name,
                desc,
                logoFile
            } = goods.data

            setGoodsDetails({
                tradId: tradId,
                Name: Name,
                desc: desc,
                logoFile: logoFile
            })
            setIsAssociated('yes')
        }
        else {
            setIsAssociated('no')
        }
        Progress(100);
    }, []);

    return (
        <section className="selfShowcaseContainer">
            <div className="animation" style={{ display: isAssociated == 'yes' ? 'none' : 'block' }}>
                <Player src={require('../../../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
            </div>
            <div className="radioBtns">
                <h4>Is your artistic work is associated with goods and services ?</h4>

                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="No"
                        value='no'
                        onChange={handleChange}
                        checked={isAssociated === 'no'}
                    />

                    <label htmlFor="No">My artistic work is not directly linked to the goods and services.</label>


                </div>

                <div className="input">
                    <input type="radio"
                        // name="assignment"
                        id="Yes"
                        value='yes'
                        onChange={handleChange}
                        checked={isAssociated === 'yes'} />

                    <label htmlFor="Yes">My artistic work is connected to the goods and services.</label>


                </div>
            </div>

            {isAssociated == 'yes' && (
                <div className="representativeFields">

                    <div className="input">
                        <label htmlFor="tradId">Trademark Id (If your work is registerd as trademark) </label>
                        <input
                            type="text"
                            name="tradId"
                            id="tradId"
                            value={goodsDetails.tradId}
                            placeholder='Trademark Id'
                            onChange={handleGoodDetails}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="Name">Domain Name (In respect of goods or services)<strong>*</strong></label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            value={goodsDetails.Name}
                            placeholder='Domain Name'
                            onChange={handleGoodDetails}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="desc">Details of Goods/Services <strong>*</strong></label>
                        <textarea style={{ width: '97%' }} className="classificationInput classificationTextArea"
                            onChange={handleGoodDetails} rows="4" name='desc' id='desc' placeholder="Enter details here..."
                            value={goodsDetails.desc} />
                    </div>
                    <div className="input">
                        <label htmlFor="file">Upload copy of your Goods/Services <strong>*</strong></label>
                        <input type="file"
                            onChange={handleGoodDetails}
                            id='file'
                            name="logoFile" />
                    </div>

                </div>
            )}


            <div className="btns" >
                <button className="backBtn" onClick={() => navigate(-1)}>Back</button>
                <button className="continueBtn" onClick={handleDataAndNavigation}>Continue</button>
            </div>
        </section>
    );
};

export default ArtisticGoodsServices;
