import React from 'react'
import { useSelector } from "react-redux";

const ArtisticAdvertise = () => {
    const user = useSelector(state => state.copyrightReducer?.ownerdetail?.data)
    const work = useSelector(state => state.copyrightReducer?.advertised?.data)
    const date = new Date(work.dateOfAdver)
    const year = date.getFullYear()
    const day = date.getDay()
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <>
            <h1>For Artistic WORK Only</h1>
            <h2>FORMAT OF ADVERTISEMENT</h2>
            <h3>ADVERTISEMENT FOR THE REGISTRATION OF COPYRIGHT        </h3>
            <h4>(Under the proviso to sub-Section (2) of section 39 of the Copyrights Ordinance, 1962) read with Rule-4(3.A) of Copyright rules, 1967</h4>

            <p>
                General Public and all concerned persons are hereby informed that we/our client M/s. <b>{user.Name}</b> have applied for registration of Copyrights of above Artistic Work/Label Design/Logo/Calligraphy/under the title of <b>{work.title}</b> in the Copyright Office, Government of Pakistan, Karachi/Lahore/Islamabad on <b>{day} {month} {year}</b>                   </p>
            <p>
                Any Person / Authority having any interest, claim, right, lien, objection or whatsoever should  file objection in writing if any, within one month of the publication of this advertisement to <b> The Registrar of Copyright Office, Government of Pakistan, Intellectual property Organization, Ground Floor, Plot # ST 1 & 2, New Broad Casting House (Ground Floor), Behind KDA Civic Center, Block -14, Gulshan-e-Iqbal, Karachi Ph# 021-99230140-41</b>                    </p>
            <p>ADDRESS OF ADVOCATE/APPLICANT <b>{user.Address}</b>
            </p>
        </>
    )
}

export default ArtisticAdvertise
