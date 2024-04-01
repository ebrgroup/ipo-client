import React, { useEffect, useState } from 'react'
import Navbar from '../global-components/IP-Lookup Navbar/Navbar'
import IPGridveiw from '../global-components/IP-Lookup Table/IPGridveiw';
import './trackIP.css'
import { useSelector, useDispatch } from 'react-redux';
import { resetIpStates } from '../../assets/states/actions/IP-Lookup-actions/Tabledata-action.js'

const TrackIIP = ({ Progress }) => {
  const data = useSelector(state => state.IpLookup?.userIp?.response)
  const dispatch = useDispatch();

  useEffect(() => {
    Progress(100);
  }, [])
  const [type, setType] = useState("Trademark");

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      dispatch(resetIpStates());
      return (event.returnValue = '');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, []);

  return (
    <>
      <section id='TrackIP-container'>
        <Navbar searchTitle='Enter IP number to track status...'  type={type} setType={setType} />
        <div>
          <IPGridveiw rows={data} type={type} setType={setType} />
        </div>
      </section>
    </>
  )
}

export default TrackIIP
