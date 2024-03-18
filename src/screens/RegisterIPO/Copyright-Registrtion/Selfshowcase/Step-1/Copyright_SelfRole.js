import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch } from 'react-redux';
import './self.css'
const Copyright_SelfRole = ({ Progress }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('owner');
  const [authorizedData, setAuthorizedData] = useState({
    desc: '',
    licenseFile: ''
  });
  const dispatch = useDispatch();
  // const {firstName,address} = useSelector(state=>state.userReducer?.userData)
  const handleChange = (event) => {

    setRole(event.target.value)
  };


  const [licenseFileURL, setLicenseFileURL] = useState(null);

  const handleAuthorizedData = (e) => {
    if (e.target.name === "licenseFile") {
      setAuthorizedData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0]
      }));
      setLicenseFileURL(URL.createObjectURL(e.target.files[0]));
    } else {
      setAuthorizedData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
    }
  }
  const areRequiredFieldsEmpty = () => {
    for (const key in authorizedData) {
      if (authorizedData.hasOwnProperty(key) && authorizedData[key] === '') {
        return true;
      }
    }
    return false;
  }

  const handleDataAndNavigation = () => {
    if (role == 'owner') {
      navigate('/copyright/owner/assignment')
    }

    else {
      (areRequiredFieldsEmpty() && (role == 'authorized')) ?
        handleToastDisplay("Required fields (*) are empty!", "error") :
        navigate('/copyright/work');

    }

  };

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

  useEffect(() => {
    Progress(100);
  }, []);

  return (
    <section className="selfShowcaseContainer">
      <div className="animation" style={{ display: role == 'authorized' ? 'none' : 'block' }}>
        <Player src={require('../../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
      </div>
      <div className="radioBtns">
        <h4>Who is completing this application?</h4>
        <div className="input">
          <input type="radio"
            name="role"
            id="Owner"
            value='owner'
            onChange={handleChange}
            checked={role == 'owner'}
          />
          <label htmlFor="Owner">Owner of the copyright</label>
        </div>

        <div className="input">
          <input type="radio"
            name="role"
            id="Authorized"
            value="authorized"
            onChange={handleChange}
            checked={role == 'authorized'} />
          <label htmlFor="Authorized">Authorized person of copyright</label>
        </div>
      </div>

      {role == 'authorized' && (
        <div className="representativeFields">

          <div className="input">
            <label htmlFor="year">Rights of authorized on a copyright <strong>*</strong> </label>

            <textarea className="classificationInput classificationTextArea"
              onChange={handleAuthorizedData} name='desc' style={{ 'width': '98%' }} rows="7" placeholder="Enter details here..." />
          </div>
          <div className="input">
            <label htmlFor="">Upload License Scanned File <strong>*</strong></label>
            <input type="file" name="licenseFile" onChange={handleAuthorizedData} />
          </div>
          <div className=" input selected-logo">
            <img src={licenseFileURL} alt="No License file selected yet!" style={{ width: "210px" }} />
          </div>

        </div>
      )}

      <div className="btns">
        <button className="backBtn" onClick={() => navigate(-1)}>Back</button>
        <button className="continueBtn" onClick={handleDataAndNavigation}>Continue</button>
      </div>
    </section>
  );
};

export default Copyright_SelfRole;
