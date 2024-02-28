import React, { useState, useEffect } from 'react';
import './selfShowcase.css';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { representative } from '../../../assets/states/actions/Trademark registration/Trademark-action';
import { useDispatch } from 'react-redux';

const Selfshowcase = ({ Progress }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('self');
  const [representativeData, setRepresentativeData] = useState({
    lincenseNo: "", nameOfLawPractice: "", licenseFile: ""
  });
  const dispatch = useDispatch();

  const handleRepresentativeData = (e) => {
    setRepresentativeData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

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

  useEffect(() => {
    Progress(100);
  }, [])

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
            <input type="text" name="licenseNo" onChange={ handleRepresentativeData } />
          </div>

          <div className="input">
            <label htmlFor="">Name of Law Practice <strong>*</strong></label>
            <input type="text" name="nameOfLawPractice" onChange={ handleRepresentativeData } />
          </div>

          <div className="input">
            <label htmlFor="">Upload License Scanned File <strong>*</strong></label>
            <input type="file"  name="licenseFile" onChange={ handleRepresentativeData } />
          </div>
          <div className=" input selected-logo">
            {/* <label htmlFor="">Upload License Scanned File <strong>*</strong></label>
            <input type="file" /> */}
            {/* <img src='' alt="Scanned document here" /> */}
            Scanned document here
          </div>

        </div>
      )}

      <button id='continueBtn' onClick={ handleDataAndNavigation } >Continue</button>
    </section>
  );
};

export default Selfshowcase;
