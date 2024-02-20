import React from 'react'
import './helpDesk.css'

import { useSelector } from 'react-redux';


const Helpdesk = () => {
    const helpContent = useSelector(state => state.helpdeskContentReducer?.content);
    const handleToggle = () => {
    }
    return (
        <div className="helpDesk-container">
            <div className="helpDesk-header">
                <span oncClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i>
                </span>
                <h3 id="heading">Help and Support</h3>
            </div>
            <div className="helpDesk-content">
                <ul>
                    {
                        Object.entries(helpContent).map(([key, value]) => (
                            <li className="item">
                                <i class="fa-sharp fa-solid fa-circle"></i>
                                <a key={key} href={value.link}>{value.text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    Our help and support options offer quick resolutions and expert guidance, ensuring your queries are promptly addressed. Maximize your potential by leveraging our resources today.
                </p>
            </div>
        </div>
    )
}


export default Helpdesk
