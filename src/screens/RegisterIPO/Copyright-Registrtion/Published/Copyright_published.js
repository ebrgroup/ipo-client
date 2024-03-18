import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player';
import { useDispatch } from 'react-redux';
import './published.css'
const CopyrightPublished = ({ Progress }) => {
  const navigate = useNavigate();
  const [publish, setPublish] = useState('Notpublished');
  const [publishedData, setPublishedData] = useState({
    name: '',
    country: '',
    year: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {

    setPublish(event.target.value)

    console.log(publish);
  };

  const handlePublishedData = (e) => {
    const { name, value } = e.target;
    setPublishedData({ ...publishedData, [name]: value });
  };

  const handleDataAndNavigation = () => {
    if (publish == 'published') {
      // Validate published data
      if (!publishedData.name || !publishedData.country || !publishedData.year) {
        handleToastDisplay('Please fill in all required fields', 'error');
        return;
      }
      // Process published data
      console.log('Published Data:', publishedData);
    } else {
      console.log('Not published yet');
    }
    // Navigate to the next step
    navigate('/copyright/self');
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
      <div className="animation" style={{ display: publish == 'published' ? 'none' : 'block' }}>
        <Player src={require('../../../../assets/Icons/self-showcase.json')} autoplay loop className="self-lottie" />
      </div>
      <div className="radioBtns">
        <h4>Whether your work is published or not?</h4>
        <div className="input">
          <input type="radio"
            name="work"
            id="Notpublished"
            value='Notpublished'
            onChange={handleChange}
            checked={publish == 'Notpublished'}
          />
          <label htmlFor="Notpublished">Not published yet</label>
        </div>

        <div className="input">
          <input type="radio"
            name="work"
            id="published"
            value="published"
            onChange={handleChange}
            checked={publish == 'published'} />
          <label htmlFor="published">Published</label>
        </div>
      </div>


      {publish == 'published' && (
        <div className="representativeFields">
          <div className="input">
            <label htmlFor="name">Name of publisher <strong>*</strong></label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handlePublishedData}
            // value={publishedData.name}
            />
          </div>
          <div className="input">
            <label htmlFor="country">Where you published (Country) <strong>*</strong></label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={handlePublishedData}
            // value={publishedData.country}
            />
          </div>
          <div className="input">
            <label htmlFor="year">Published year <strong>*</strong></label>
            <input
              type="date"
              name="year"
              id="year"
              onChange={handlePublishedData}
            // value={publishedData.year}
            />
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

export default CopyrightPublished;
