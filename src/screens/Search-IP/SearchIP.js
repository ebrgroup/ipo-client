import React, { useEffect } from 'react'
import Navbar from '../global-components/IP-Lookup Navbar/Navbar'
import './searchIP.css'

const SearchIP = ({ Progress }) => {

  useEffect(() => {
    Progress(100);
  }, [])
  return (
    <section id='SearchIP-container'>
      <Navbar />
    </section>
  )
}

export default SearchIP
