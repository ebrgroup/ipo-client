import React from 'react'
import { useSelector } from "react-redux";
// import AffidevitDetails from './AffidevitDetails'


const Literary_pdf = () => {

    const user = useSelector(state => state.copyrightReducer?.ownerdetail?.data)
    const work = useSelector(state => state.copyrightReducer?.logodetail)
    const date = new Date(work.completedYear)
    const year = date.getFullYear()
    const day = date.getDay()
    const month = date.toLocaleString('default', { month: 'long' });


    return (
        <div>
            <>
                <h1>UNDERTAKING FOR LITERARY WORK</h1>
                <h1>AFFIDAVIT/UNDERTAKING</h1>
                <p>
                    I, <b>{user.Name}</b> S/o <b>John</b>Muslim, adult, Pakistani National resident of <b>{user.Nationality}</b> holding CNIC # <b>{user.cnic}</b> state on Oath and declare as under:-
                </p>
                <p>
                    1.	That I am author and to confirm that I have written/compiled/ arranged the literary work/book the year <b>{year}</b> under the title of <b>{work.title}</b>
                </p>
                <p>
                    2.	That I am writer of the literary work/ book entitled above in <b>{work.language}</b> Language.       </p>
                <p>
                    3.	That to the best of my knowledge there is no other person who is interested in the Copyright of the above said literary work/ book entitled above.        </p>
                <p>
                    4. That I undertake that the said literary work/ book written/compiled/arranged by me and not copied by any other.

                </p>
                <p>
                    5. That in case above declaration is found to be false or incorrect, copyright, if granted, is liable to be cancelled in addition to any other action permissible under law including but not limited to black listing the author in future literary work.
                </p>
                <p>
                    6. That the contents in para No.1 to 6 above are true and correct to the best of my knowledge, information and belief.
                </p>
                <p>Dated this <b>{month} {year}</b> day of <b>{day}</b>
                </p>
            </>
        </div>
    )
}

export default Literary_pdf
