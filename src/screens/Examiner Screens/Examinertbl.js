import React, { useEffect, useState } from 'react'
import './ExaminerTbl.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIp } from '../../assets/states/middlewares/ipTable-data'
import IPGridView from '../global-components/IP-Lookup Table/IPGridveiw'
const Examinertbl = () => {
    const [display, setDisplay] = useState(false)
    const [statusDiv, setStatusDiv] = useState(false)
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')

    const data = useSelector(state => state.IpLookup?.registeredIp)

    const dispatch = useDispatch()

    const handleType = (e) => {
        const type = e.target.innerText;
        setType(type)
        setDisplay(false)
    }

    const handleStatus = (e) => {
        const status = e.target.innerText;
        setStatus(status)
        setStatusDiv(false)
    }

    return (
        <section className='examinerDiv'>

            <div className="Navbar">
                <div className="navbarButtons">
                    <div className="left">
                        <ul>
                            <li>
                                <button className='type btn' onClick={() => setDisplay(!display)
                                }>
                                    {type != '' ? type : " IP Type"}
                                    <i class="fa-sharp fa-light fa-angle-down"></i>
                                </button>
                                <div style={{ 'display': display ? 'block' : 'none' }}>
                                    <li onClick={handleType}
                                    >Trademark</li>
                                    <li onClick={handleType}
                                    >Patent</li>
                                    <li onClick={handleType}
                                    >Design</li>
                                    <li onClick={handleType}
                                    >Copyright</li>

                                </div>
                            </li>
                            <li>
                                <button className='status btn' onClick={() => setStatusDiv(!statusDiv)} >
                                    {status != '' ? status : " Status"}
                                    <i class="fa-sharp fa-light fa-angle-down"></i>
                                </button>
                                <div style={{ 'display': statusDiv ? 'block' : 'none' }}>
                                    <li onClick={handleStatus}
                                    >All</li>
                                    <li onClick={handleStatus}
                                    >Register</li>
                                    <li onClick={handleStatus}
                                    >Pending</li>
                                    <li onClick={handleStatus}
                                    >Decline</li>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="right">
                        <button className='search btn' onClick={() => dispatch(getIp(type))}>Search</button>
                    </div>

                </div>
            </div>
            <div>
                <IPGridView rows={data} type={type} status={status} />
            </div>
        </section>
    )
}

export default Examinertbl
