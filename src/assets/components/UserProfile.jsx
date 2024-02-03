import React from 'react'
import '../components/UserProfileStyle.css'
import userIcon from '../Icons/image@2x.png'

function UserProfile() {
    return (
        <div className='profile-container'>
            <section className="profile-image">
                <div className='profile-image-container'>
                    <h2>Haider Ali</h2>
                    <div className='profile-image-span'>
                    <img src={userIcon} alt="" />
                    <div className="input-div">
                        <input className='file-input' name="file" type="file" id="file-input" />
                        <label htmlFor="file-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" 
                                stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon">
                                <polyline points="16 16 12 12 8 16"></polyline>
                                <line y2="21" x2="12" y1="12" x1="12"></line>
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                <polyline points="16 16 12 12 8 16"></polyline>
                            </svg>
                        </label>
                    </div>
                    </div>
                </div>
            </section>
            <section className="profile-info">
                <h2>Edit Profile</h2>
                <form className='form' action="">
                    <div className='flex'>
                        <div class="coolinput">
                            <label for="input" class="text">First Name:</label>
                            <input type="text" placeholder="Write here..." name="input" class="input" />
                        </div>
                        <div class="coolinput">
                            <label for="input" class="text">Last Name:</label>
                            <input type="text" placeholder="Write here..." name="input" class="input" />
                        </div>
                    </div>
                    <div class="coolinput">
                        <label for="input" class="text">@Email</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    <div className='flex'>
                    <div class="coolinput">
                        <label for="input" class="text">#Phone Number:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    <span className='gender-container'>
                        <b>Gender: </b>
                        <div class="mydict">
                            <div>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>Male</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>Female</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                        </span>
                    </div>
                    <div className='flex'>
                        <div class="coolinput">
                            <label for="input" class="text">#Landline:</label>
                            <input type="text" placeholder="Write here..." name="input" class="input" />
                        </div>
                        <div class="coolinput">
                        <label for="input" class="text">#Fax:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    </div>
                    <div className='flex'>
                    <div class="coolinput">
                        <label for="input" class="text">Country:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    <div class="coolinput">
                        <label for="input" class="text">City:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    </div>
                    <div class="coolinput">
                        <label for="input" class="text">Address:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    <div className="buttons">
                        <button className='save-button'>
                            <div class="svg-wrapper-1">
                                <div class="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="30"
                                    height="30"
                                    class="icon"
                                >
                                    <path
                                    d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                                    ></path>
                                </svg>
                                </div>
                            </div>
                            <span>Save</span>
                        </button>
                        <button className='cancelBtn'>Cancel</button>
                    </div>

                </form>

            </section>
        </div>
    )
}

export default UserProfile
