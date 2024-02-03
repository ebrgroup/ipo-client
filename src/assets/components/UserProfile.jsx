import React, { useState, useEffect } from 'react'
import '../components/UserProfileStyle.css'
import userIcon from '../Icons/image@2x.png'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../states/middlewares/update-user'

function UserProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let User = useSelector(state => state.userReducer?.userData); //Complete user details in {User} object
    const userID = User._id;

    const removeObjectEntries = (object, keysToRemove) => {
        const newObj = { ...object };
        keysToRemove.forEach(key => delete newObj[key]);
        return newObj;
    };

    const [user_profile, setUser_profile] = useState({
        cnic: '',
        email: '',
        phone: '',
        password: '',
        firstName: '',
        lastName: '',
        gender: '',
        landlineNum: '',
        faxNum: '',
        address: '',
        province: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser_profile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const keysToRemove = ['_id', '__v', 'password'];
        User = removeObjectEntries(User, keysToRemove);         //Remove extra entry from data object

        setUser_profile(
            User
        );
    }, [User]);

    const handleCancelbtn = (e) => {
        e.preventDefault();
        navigate('/dashboard')
    }

    const handleSavebtn = (e) => {
        e.preventDefault();
        dispatch(updateUser(userID, user_profile))
    }
    return (
        <div className='profile-container'>
            <section className="profile-image">
                <img src={userIcon} alt="" />
                <button>Change picture</button>
            </section>
            <section className="profile-info">
                <h2>Edit Profile</h2>
                <form className='form' action="">
                    <div className='flex'>
                        <input className='input-container' name='firstName' type="text" onChange={handleChange} value={user_profile.firstName} />
                        <input className='input-container' type="text" name='lastName' onChange={handleChange} value={user_profile.lastName} />
                    </div>
                    <input className='input-container  full-width' type="text" name='email' onChange={handleChange} value={user_profile.email} />
                    <div className='flex'>
                        <input className='input-container' type="text" name='cnic' onChange={handleChange} value={user_profile.cnic} />
                        <select className='input-container genderBox' name='gender' onChange={handleChange} >{user_profile.gender}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <input className='input-container' type="text" name='phone' onChange={handleChange} value={user_profile.phone} />
                        <input className='input-container' type="text" name='landlineNum' placeholder='Landline number' onChange={handleChange} value={user_profile.landlineNum} />
                    </div>
                    <div className='flex'>
                        <input className='input-container' type="text" name='province' onChange={handleChange} value={user_profile.province} />
                        <input className='input-container' type="text" name='city' onChange={handleChange} value={user_profile.city} />
                    </div>
                    <input className='input-container full-width' type="text" name='address' onChange={handleChange} value={user_profile.address} />
                    <div className="buttons">
                        <button className='saveBtn' onClick={handleSavebtn}>Save</button>
                        <button className='cancelBtn' onClick={handleCancelbtn}>Cancel</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default UserProfile
