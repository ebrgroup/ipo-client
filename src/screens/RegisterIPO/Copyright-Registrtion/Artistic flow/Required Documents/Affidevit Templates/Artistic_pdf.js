import React from 'react'
import { useSelector } from "react-redux";

const Artistic_pdf = () => {
  const user = useSelector(state => state.copyrightReducer?.ownerdetail?.data)
  const work = useSelector(state => state.copyrightReducer?.logodetail)
  const date = new Date(work.completedYear)
  const classification = useSelector(state => state.copyrightReducer?.classification?.classificationClass)
  const year = date.getFullYear()
  const day = date.getDay()
  const month = date.toLocaleString('default', { month: 'long' });
  return (
    <>
      <h1>UNDERTAKING FOR ARTISTIC WORK</h1>
      <h1>AFFIDAVIT (Self Creation)</h1>
      <p>
        I, <b>{user.Name}</b> S/o <b>John</b>Muslim, adult, Pakistani National resident of <b>{user.Nationality}</b>  state on Oath and declare as under:-
      </p>
      <p>
        1. That I am  <b>{user.Name}</b> of M/s. Microsoft and to confirm that I have created/designed the artistic work <b>Art</b> under the title of<b>{work.title}</b>
      </p>
      <p>
        2. That the Artistic Work <b>{work.title}</b> applied for registration of copyright by <b>{user.Name}</b> is original creation and neither copy nor imitation of work of any other author nor copy or imitation of any design, trademark or service mark.
      </p>
      <p>
        3. That to the best of my knowledge there is no other person who is interested in the Copyright of the Artistic Work/ <b>{work.title}</b>.
      </p>
      <p>
        4. That in case the above declaration is found to be false or incorrect, copyright, if granted, is liable to be cancelled in addition to any other action permissible under law including but not limited to blacklisting the author in future artistic work.
      </p>
      <p>
        5. That the contents in para No.1 to 4 above are true and correct to the best of my knowledge, information and belief.
      </p>
      {
        Number(classification) == 2 ? (<p>Dated this <b>{month} {year}</b> day of <b>{day}</b></p>)
          : ''
      }

    </>
  )
}

export default Artistic_pdf
