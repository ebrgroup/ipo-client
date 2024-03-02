// import React, { useEffect, useState } from 'react'
import './IPGridview.css'

const IPGridveiw = ({ rows }) => {
    // const binary = rows[0].logoDetails.logoFile.data;
    // const [logo, setLogo] = useState('');

    // const encodeBase64 = (binary) => {
    //     let bytes = new Uint8Array(binary);
    //     let encodedString = '';
    //     for (let i = 0; i < bytes.byteLength; i++) {
    //         encodedString += String.fromCharCode(bytes[i]);
    //     }
    //     return btoa(encodedString);
    // };

    // function fetch() {
    //     // const blob = new Blob([binary]);
    //     // const img = URL.createObjectURL(blob);

    //     // setLogo(img);

    //     const base64String = encodeBase64(binary);
    //     console.log(base64String);
    //     setLogo(base64String);
    // }

    // useEffect(() => {
    //     fetch();
    // }, [])

    return (
        <div className='table'>
            <table>
                <thead id='table-header'>
                    <tr  >
                        <td> TRADEMARK ID</td>
                        <td>TRADEMARK NAME
                            <i class="fa-solid fa-sort"></i>
                        </td>
                        <td>FILE DATE
                            <i class="fa-solid fa-sort"></i>
                        </td>
                        <td>TRADEMARK CLASS
                            <i class="fa-solid fa-sort"></i>
                        </td>
                        <td> STATUS
                            <i class="fa-solid fa-sort"></i>
                        </td>
                        <td>TRADEMARK LOGO
                            <i class="fa-solid fa-sort"></i>
                        </td>
                    </tr>
                </thead>
                <tbody id='table-body'>
                    {(rows) ? (rows.map(data =>
                        <tr>
                            <td>{data.trademarkId}</td>
                            <td>{data.logoDetails.markDesc}</td>
                            <td>{data.fileDate}</td>
                            <td>{data.classificationClass}</td>
                            <td>{data.status}</td>
                            <td>
                                <img src={'logo'} alt="Logo" />
                                {/* <img src={`data:image/png;base64,${logo}`} /> */}
                            </td>
                        </tr>
                    )) : (<tr></tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default IPGridveiw
