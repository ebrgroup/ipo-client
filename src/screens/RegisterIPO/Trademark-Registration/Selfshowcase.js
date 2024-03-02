import React, { useState, useEffect } from 'react';
import './selfShowcase.css';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { representative } from '../../../assets/states/actions/Trademark registration/Trademark-action';
import { useDispatch, useSelector } from 'react-redux';

const Selfshowcase = ({ Progress }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('self');
  const [representativeData, setRepresentativeData] = useState({
    lincenseNo: "",
    nameOfLawPractice: "",
    licenseFile: ""
  });
  const [licenseFileURL, setLicenseFileURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const dispatch = useDispatch();

  const handleRepresentativeData = (e) => {
    if (e.target.name === "licenseFile") {
      setRepresentativeData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0]
      }));
      setLicenseFileURL(URL.createObjectURL(e.target.files[0]));
    } else {
      setRepresentativeData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
    }
  }

  const handleFileInputChange = (file) => {
    console.log(file);
    console.log('file');
    if (file) {
      try {
        const reader = new FileReader(); // Create a new FileReader object

        reader.onload = () => {
          const imageUrl = reader.result; // Get the data URL of the image
          setImageSrc(imageUrl); // Set the image source
        };

        reader.readAsDataURL(file); // Read the file as a Data URL
        setSelectedFile(file); // Set the selected file in state
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleDataAndNavigation = () => {
    dispatch(representative({
      ownerType: selectedRole,
      representativeData
    }));
    navigate("/classification");
  }

  // Logic for previous data
  //When back button is press
  // The previous data is kept safe
  const data = useSelector(state => state.trademarkRegistrationReducer?.representative);


  useEffect(() => {
    Progress(100);

    if (data && data.ownerType === 'representative') {
      const { ownerType } = data;
      const { lincenseNo, nameOfLawPractice } = data.representativeData;

      setRepresentativeData({
        lincenseNo: lincenseNo,
        nameOfLawPractice: nameOfLawPractice
      });
      setSelectedRole(ownerType)
    }
    
    return () => {
      if (licenseFileURL) {
        URL.revokeObjectURL(licenseFileURL);
      }
    }
  }, []);

  return (
    <section className='selfShowcaseContainer'>
      <div className="animation" style={{ display: selectedRole == 'representative' ? 'none' : 'block' }}>
        <Player src={require("../../../assets/Icons/self-showcase.json")} autoplay loop className='self-lottie' />
      </div>
      <div className="radioBtns">
        <h4>Who is completing this application?</h4>

        <div className="input">
          <input type="radio" name="role" id="self" value="self" onChange={handleChange} checked={selectedRole === 'self'} />
          <label htmlFor="self">Trademark owner or authorized person</label>
        </div>

        <div className="input">
          <input type="radio" name="role" id="representative" value="representative" onChange={handleChange} checked={selectedRole === 'representative'} />
          <label htmlFor="representative">Representative</label>
        </div>
      </div>

      {selectedRole === 'representative' && (
        <div className="representativeFields">

          <div className="input">
            <label htmlFor="">License No <strong>*</strong></label>
            <input type="text" name="lincenseNo" value={representativeData.lincenseNo} onChange={handleRepresentativeData} />
          </div>

          <div className="input">
            <label htmlFor="">Name of Law Practice <strong>*</strong></label>
            <input type="text" name="nameOfLawPractice" value={representativeData.nameOfLawPractice} onChange={handleRepresentativeData} />
          </div>

          <div className="input">
            <label htmlFor="">Upload License Scanned File <strong>*</strong></label>
            <input type="file" name="licenseFile" onChange={handleRepresentativeData} />
          </div>
          <div className=" input selected-logo">
            {selectedFile && <img src={imageSrc} alt="Selected" />}
          </div>

        </div>
      )}

      <div className="btns">
        <button className='continueBtn' onClick={handleDataAndNavigation} >Continue</button>
        <button className='backBtn' onClick={() => navigate(-1)} >Back</button>
      </div>
    </section>
  );
};

export default Selfshowcase;
