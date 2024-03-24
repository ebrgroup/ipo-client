import React, { useEffect, useState } from 'react'
import Navbar from '../global-components/IP-Lookup Navbar/Navbar'
import './searchIP.css'
import IPGridveiw from '../global-components/IP-Lookup Table/IPGridveiw.js'
import { useSelector, useDispatch } from 'react-redux'
import { resetIpStates } from '../../assets/states/actions/IP-Lookup-actions/Tabledata-action.js'

const SearchIP = ({ Progress }) => {

  const data = useSelector(state => state.IpLookup?.registeredIp?.response)
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
      <section id='SearchIP-container'>
        <Navbar searchTitle='Search IP...' type={type} setType={setType} />
        <div>
          <IPGridveiw rows={data} type={type} />
        </div>
      </section>
    </>
  )
}

export default SearchIP
