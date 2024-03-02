import React, { useEffect, useState } from 'react';
import { Buffer } from "buffer";
import './IPGridview.css';

const IPGridView = ({ rows }) => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        const fetchLogos = async () => {
            const logoData = [];
            for (let i = 0; i < rows.length; i++) {
                const imageName = rows[i].logoDetails.logoFile;
                logoData.push(imageName);
            }
            setLogos(logoData);
        };

        if (rows && rows.length > 0) {
            fetchLogos();
        }
    }, [rows]);

    return (
        <div className='table'>
            <table>
                <thead id='table-header'>
                    <tr>
                        <td> TRADEMARK ID</td>
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
                </thead>
                <tbody id='table-body'>
                    {rows ? (
                        rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.trademarkId}</td>
                                <td>{data.logoDetails.markDesc}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.classificationClass}</td>
                                <td>{data.status}</td>
                                <td>
                                    {logos.length > 0 && logos[index] ? (
                                        <img src={require(`../../../assets/uploads/${logos[index]}`)} alt={`Logo ${index}`} />
                                    ) : (
                                        "Loading..."
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default IPGridView;