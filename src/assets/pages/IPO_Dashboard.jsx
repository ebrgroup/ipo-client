import React from 'react'
import '../pages/IPO-Dashboard.css'
import userIcon from '../Icons/image@2x.png'
import dashboardIcon from '../Icons/bars-sort.png'
import trademarkIcon from '../Icons/icons8trademark641-1@2x.png'
import patentIcon from '../Icons/icons8patent64-1@2x.png'
import designIcon from '../Icons/icons8design64-1@2x.png'
import copyrightIcon from '../Icons/icons8copyright64-1@2x.png'
import { useNavigate } from 'react-router-dom'
function IPO_Dashboard() {
    const navigate = useNavigate();
    return (

            <section className='right-Subsection'>
                <div className="header">
                    <div className="title">
                        <img src={dashboardIcon} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className="profile">
                        <span>
                            <img 
                            src={userIcon} 
                            onClick={()=>{navigate('/profile')}}
                            />
                            </span>
                        <div className="user-profile">
                            <p>User1</p>
                            <p>USER</p>
                        </div>
                    </div>
                </div>

                <div className="IP-Section">
                    <div className="Registered-IP">
                        <p className>Registered</p>
                        <div className="IPMenus">
                            <div className='Trademark menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">TRADEMARK</p>
                                <img src={trademarkIcon} alt="" />
                            </div>

                            <div className='Copyright menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">COPYRIGHT</p>
                                <img src={copyrightIcon} alt="" />
                            </div>

                            <div className='Patent menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">PATENT</p>
                                <img src={patentIcon} alt="" />
                            </div>

                            <div className='Design menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">DESIGN</p>
                                <img src={designIcon} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="Applied-IP">
                        <p className>Applied</p>
                        <div className="IPMenus">
                            <div className='Trademark menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">TRADEMARK</p>
                                <img src={trademarkIcon} alt="" />
                            </div>

                            <div className='Copyright menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">COPYRIGHT</p>
                                <img src={copyrightIcon} alt="" />
                            </div>

                            <div className='Patent menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">PATENT</p>
                                <img src={patentIcon} alt="" />
                            </div>

                            <div className='Design menu'>
                                <p className="IPNo">8</p>
                                <p className="IP-title">DESIGN</p>
                                <img src={designIcon} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

    )
}

export default IPO_Dashboard;
