import React, { useEffect } from 'react'
import Navbar from '../global-components/IP-Lookup Navbar/Navbar'

const TrackIIP = ({Progress}) => {
    useEffect(()=>{
        Progress(100);
    },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default TrackIIP
