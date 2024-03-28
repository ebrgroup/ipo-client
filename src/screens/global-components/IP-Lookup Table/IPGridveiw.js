import React, { useEffect, useState } from 'react';
import ipologo from '../../../assets/Icons/ipo.png'
import './IPGridview.css';

const IPGridView = ({ rows, type }) => {
    const [attachments, setAttachments] = useState([]);
    const [header, setHeader] = useState(null);
    const [body, setBody] = useState(null);

    useEffect(() => {

        (() => {
            setHeader(null);
            setBody(null);
            if(rows && rows.length > 0) {
                if(type === "Trademark") {
                    setHeader(
                        <tr>
                            <td>TRADEMARK ID</td>
                            <td>TRADEMARK NAME
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>FILE DATE
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>TRADEMARK CLASS
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td> STATUS
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>TRADEMARK LOGO
                                <i className="fa-solid fa-sort"></i>
                            </td>
                        </tr>
                    );
                    setBody(
                        rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.trademarkId}</td>
                                <td>{data.logoDetails.markDesc}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.classificationClass}</td>
                                <td className={
                                    data.status === 'Pending'
                                        ? 'pending'
                                        : data.status === 'Register'
                                            ? 'register'
                                            : 'decline'
                                }
                                >{data.status}</td>
                                <td>
                                    {attachments.length > 0 && attachments[index] ? (
                                        <img src={require(`../../../assets/uploads/${attachments[index]}`)} alt={`Logo ${index}`} />
                                    ) : (
                                        "Loading..."
                                    )}
                                </td>
                            </tr>
                        ))
                    );
                }
                else if(type === "Design") {
                    setHeader(
                        <tr>
                            <td>DESIGN ID</td>
                            <td>PRODUCT NAME
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>FILE DATE
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>REPEATED
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>STATUS
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>ATTACHMENT
                                <i className="fa-solid fa-sort"></i>
                            </td>
                        </tr>
                    );
                    console.log(rows);
                    setBody(
                        rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.designId}</td>
                                <td>{data.productName}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.attachmentDetails.isRepeated ? "Yes" : "No"}</td>
                                <td className={
                                    data.status === 'Pending'
                                        ? 'pending'
                                        : data.status === 'Register'
                                            ? 'register'
                                            : 'decline'
                                }
                                >{data.status}</td>
                                <td>
                                    {attachments.length > 0 && attachments[index] ? (
                                        <img src={require(`../../../assets/uploads/${attachments[index]}`)} alt={`Logo ${index}`} />
                                    ) : (
                                        "Loading..."
                                    )}
                                </td>
                            </tr>
                        ))
                    );
                }
            }
        })();

        const fetchLogos = async () => {
            const logoData = [];
            for (let i = 0; i < rows.length; i++) {
                let imageName;
                if(type === "Design")
                    imageName = rows[i].attachmentDetails.attachmentFile;
                else
                    imageName = rows[i].logoDetails.logoFile;
                logoData.push(imageName);
            }
            setAttachments(logoData);
        };

        if (rows && rows.length > 0) {
            fetchLogos();
        }
    }, [rows, type]);

    return (
        <div className='table'>
            {rows && (
                <table>
                    <thead id='table-header'>
                        {header}
                    </thead>
                    <tbody id='table-body'>
                        {body}
                    </tbody >
                </table >)
            // ) : (
            //     <div className="ipo_img">
            //         <img src={ipologo} />
            //     </div>
            // )
            }
        </div >
    );
};

export default IPGridView;