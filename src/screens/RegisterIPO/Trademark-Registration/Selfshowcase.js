import React, { useState,useEffect } from 'react';
import './selfShowcase.css';
import { useNavigate } from 'react-router-dom';

const Selfshowcase = ({Progress}) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('self');

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  useEffect(() => {
    Progress(100);
  }, [])

  return (
    <section className='selfShowcaseContainer'>
      <div className="animation">

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
            <input type="text" />
          </div>

          <div className="input">
            <label htmlFor="">Name of Law Practice <strong>*</strong></label>
            <input type="text" />
          </div>

          <div className="input">
            <label htmlFor="">Upload License Scanned File <strong>*</strong></label>
            <input type="file" />
          </div>

        </div>
      )}

      <button id='continueBtn' onClick={()=>navigate('/classification')} >Continue</button>
    </section>
  );
};

export default Selfshowcase;
