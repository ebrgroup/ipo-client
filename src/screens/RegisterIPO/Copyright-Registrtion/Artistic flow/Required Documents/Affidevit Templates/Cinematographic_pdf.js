import React from 'react'
import { useSelector } from "react-redux";

const Cinematographic_pdf = () => {
    const user = useSelector(state => state.copyrightReducer?.ownerdetail?.data)
    const work = useSelector(state => state.copyrightReducer?.logodetail)
    const date = new Date(work.completedYear)
    const year = date.getFullYear()
    const day = date.getDay()
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <>
            <h1>For Cinematographic Work only</h1>
            <h1 className='cinema'>AFFIDAVIT/UNDERTAKING FROM PRODUCER/AUTHOR/CREATOR</h1>
            <p>
                I, <b>{user.Name}</b> S/o <b>John</b>Muslim, adult, Pakistani National resident of <b>{user.Nationality}</b> holding CNIC # <b>{user.cnic}</b> state on Oath and declare as under:-
            </p>
            <p>
                1.	2.	That I am Applicant/Sole Proprietor/Director/Chief Executive Officer of M/s.  <b>{user.Name}</b> having address as <b>{user.Address} </b>and producer/author of the applied Cinematographic work and to confirm that I have create/written/compiled/arranged the cinematographic work in the year  <b>{year}</b> under the title of <b>{work.title}</b> in <b>{work.language}</b> language.
            </p>
            <p>
                2.	That to the best of my knowledge there is no other person who is interested in the Copyright of the above said cinematographic work entitled above.       </p>
            <p>
                3.	That I undertake that the said cinematographic work is created/ written/compiled/arranged by me and not copied from any other cinematographic work etc.      </p>
            <p>
                4. That in case above declaration is found to be false or incorrect, copyright, if granted, is liable to be cancelled in addition to any other action permissible under law including but not limited to black listing the author in future for cinematographic work.

            </p>
            <p>
                5. That the contents in para No.1 to 4 above are true and correct to the best of my knowledge, information and belief.
            </p>
            <p>Dated this <b>{month} {year}</b> day of <b>{day}</b>
            </p>
        </>
    )
}

export default Cinematographic_pdf
