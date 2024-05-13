import React, { useEffect, useState } from 'react';
import './IPGridview.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userName } from '../../../assets/states/middlewares/update-user';
import { getIp } from '../../../assets/states/middlewares/ipTable-data';

const IPGridView = (props) => {
    const [attachments, setAttachments] = useState([]);
    const [header, setHeader] = useState(null);
    // const [filteredRows,setFilterRows] = useState([])
    const [body, setBody] = useState(null);
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {

        (() => {
            setHeader(null);
            setBody(null);
            if (props.rows && props.rows.length > 0) {
                if (location.pathname.includes("assessips")) {

                    const userIds = props.rows.map(data => data.userId);
                    dispatch(userName(userIds))

                    // dispatch(getIp(props.type))

                    let filteredRows;
                    if (props.status == '' || props.status == 'All') {

                        // filteredRows = props.rows;
                        filteredRows = props.rows
                    } else {
                        // If status is not provided, return all data
                        filteredRows = props.rows.filter(data => {
                            return data.status === props.status;
                        })
                    }

                    setHeader(
                        <tr>
                            <td>{props.type.toUpperCase()} ID</td>
                            <td>{props.type.toUpperCase()} TITLE</td>
                            <td>STATUS</td>
                            <td>FILE DATE</td>
                            <td>ACTION</td>
                        </tr>
                    );
                    setBody(
                        filteredRows.map((data, index) => (
                            <tr className='assessRow' key={data.trademarkId}>
                                {
                                    props.type == 'Trademark' ? <td>{data.trademarkId}</td> :
                                        props.type == 'Design' ? <td>{data.designId}</td> :
                                            props.type == 'Copyright' ? <td>{data.copyrightId}</td> :
                                                <td>{data.patentTrackId}</td>

                                }
                                {
                                    props.type == 'Trademark' ? <td>{data.logoDetails.markDesc}</td> :
                                        props.type == 'Design' ? <td>{data.productName}</td> :
                                            props.type == 'Copyright' ? <td>{data.logoDetails.logodetail.title}</td> :
                                                <td>{data.title}</td>

                                }
                                <td>
                                    <span className={
                                        data.status == 'Pending'
                                        ? 'pending'
                                        : data.status == 'Register'
                                        ? 'register'
                                        : 'decline'
                                    }
                                    >{data.status}</span>
                                </td>
                                <td>{data.fileDate}</td>
                                <td>
                                    <button id='viewbtn' onClick={() => handleView(filteredRows[index])}>View</button>
                                </td>
                            </tr>
                        ))
                    )
                }
                else if (props.type === "Trademark") {
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
                        props.rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.trademarkId}</td>
                                <td>{data.logoDetails.markDesc}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.classificationClass}</td>
                                <td>
                                    <span className={
                                        data.status === 'Pending'
                                            ? 'pending'
                                            : data.status === 'Register'
                                                ? 'register'
                                                : 'decline'
                                    }
                                    >{data.status}</span>
                                </td>
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

                else if (props.type === "Copyright") {
                    setHeader(
                        <tr>
                            <td>COPYRIGHT ID</td>
                            <td>COPYRIGHT NAME
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>FILE DATE
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>COPYRIGHT CLASS
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td> STATUS
                                <i className="fa-solid fa-sort"></i>
                            </td>
                            <td>COPYRIGHT LOGO
                                <i className="fa-solid fa-sort"></i>
                            </td>
                        </tr>
                    );
                    setBody(
                        props.rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.copyrightId}</td>
                                <td>{data.logoDetails.logodetail.title}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.classificationClass}</td>
                                <td>
                                    <span className={
                                        data.status === 'Pending'
                                            ? 'pending'
                                            : data.status === 'Register'
                                                ? 'register'
                                                : 'decline'
                                    }
                                    >{data.status}</span>
                                </td>
                                <td>
                                    {/* {attachments.length > 0 && attachments[index] ? (
                                        <img src={require(`../../../assets/uploads/${attachments[index]}`)} alt={`Logo ${index}`} />
                                    ) : ( */}
                                    Loading...
                                    {/* )} */}
                                </td>
                            </tr>
                        ))
                    );
                }

                else if (props.type === "Design") {
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
                    setBody(
                        props.rows.map((data, index) => (
                            <tr key={index}>
                                <td>{data.designId}</td>
                                <td>{data.productName}</td>
                                <td>{data.fileDate}</td>
                                <td>{data.attachmentDetails.isRepeated ? "Yes" : "No"}</td>
                                <td>
                                    <span className={
                                        data.status === 'Pending'
                                            ? 'pending'
                                            : data.status === 'Register'
                                                ? 'register'
                                                : 'decline'
                                    }
                                    >{data.status}</span>
                                </td>
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

                else if (props.type === "Patent") {
                    setHeader(
                        <tr>
                            <td>PATENT ID</td>
                            <td>REFERENCE</td>
                            <td>AVAILABILITY FOR PDAS</td>
                            <td>PERSONS COUNT</td>
                            <td>STATUS</td>
                            <td>COMPANIES COUNT</td>
                        </tr>
                    );
                    setBody(
                        props.rows.map((data, index) => (
                            <tr key={data._id}>
                                <td>{data.patentTrackId}</td>
                                <td>{data.referenceData.reference}</td>
                                <td>{data.referenceData.availabilityForPDAS ? "Yes" : "No"}</td>
                                <td>{data.personDetails.length}</td>
                                <td>
                                    <span className={
                                        data.status === 'Pending'
                                            ? 'pending'
                                            : data.status === 'Register'
                                                ? 'register'
                                                : 'decline'
                                    }
                                    >{data.status}</span>
                                </td>
                                <td>{data.companyDetails.length}</td>
                            </tr>
                        ))
                    );
                }
            }
        })();

        const fetchLogos = async () => {
            const logoData = [];
            for (let i = 0; i < props.rows.length; i++) {
                let imageName;
                if (props.type === "Design")
                    imageName = props.rows[i].attachmentDetails.attachmentFile;
                else if (props.type === "Trademark")
                    imageName = props.rows[i].logoDetails.logoFile;
                logoData.push(imageName);
            }
            setAttachments(logoData);
        };

        if (!location.pathname.includes("examiner")) {
            if (props.rows && props.rows.length > 0) {
                fetchLogos();
            }
        }

    }, [props.rows, props.status]);


    const handleView = ( data) => {
        navigate("/contentScreen",  { state: { viewData: data, type: props.type } });
    }

    return (
        <div className='table'>
            {props.rows && (
                <table>
                    <thead id='table-header'>
                        {header}
                    </thead>
                    <tbody id='table-body'>
                        {body}
                    </tbody >
                </table >)
            }
        </div >
    );
};

export default IPGridView;