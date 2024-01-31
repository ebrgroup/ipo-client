import React from 'react'
import '../components/UserProfileStyle.css'
import userIcon from '../Icons/image@2x.png'

function UserProfile() {
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
                        <input className='input-container' type="text" value={'Zain'} />
                        <input className='input-container' type="text" value={'Khan'} />
                    </div>
                    <input className='input-container  full-width' type="text" value={'Zain@123.com'} />
                    <div className='flex'>
                        <input className='input-container' type="text" value={'133-113-313'} />
                        <select className='input-container genderBox' >{'Male'}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <input className='input-container' type="text" value={'014141-141'} />
                        <input className='input-container' type="text" value={'01414'} />
                    </div>
                    <div className='flex'>
                        <input className='input-container' type="text" value={'Pakistan'} />
                        <input className='input-container' type="text" value={'Islamabad'} />
                    </div>
                    <input className='input-container full-width' type="text" value={'Street 7, Lahore'} />
                    <div className="buttons">
                        <button className='saveBtn'>Save</button>
                        <button className='cancelBtn'>Cancel</button>
                    </div>

                </form>

            </section>
        </div>
    )
}

export default UserProfile
