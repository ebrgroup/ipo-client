import React, { useEffect } from 'react';
import './affidevit.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Artistic_pdf from '../Required Documents/Affidevit Templates/Artistic_pdf'
import Record_pdf from '../Required Documents/Affidevit Templates/Record_pdf'
import Cinematographic_pdf from '../Required Documents/Affidevit Templates/Cinematographic_pdf'
import Literary_pdf from '../Required Documents/Affidevit Templates/Literary_pdf'
import { useLocation } from 'react-router-dom';
const Affidevit = () => {
    
    const location = useLocation();
    const handleDownload = () => {
        const element = document.querySelector('.Affidevit-container');
        if (!element) {
            console.error('Element with ID "content-container" not found');
            return;
        }

        const allowTaint = true;

        html2canvas(element, { allowTaint }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const width = canvas.width;
            const height = canvas.height;
            const doc = new jsPDF('p', 'px', [width, height]);

            doc.addImage(imgData, 'PNG', 0, 0);
            doc.save('affidevit.pdf');
        }).catch((error) => {
            console.error('Error while converting to canvas:', error);
        });
    };


    useEffect(() => {
        //
    }, []);

    return (
        <div className="Affidevit">
            <div className='Affidevit-container'>
                <div className="content-container">
                    {
                        location.pathname.includes('/artistic') ? <Artistic_pdf /> :
                            location.pathname.includes('/literary') ? <Literary_pdf /> :
                                location.pathname.includes('/record') ? <Record_pdf /> :
                                    <Cinematographic_pdf />
                    }

                </div>
                <footer>
                    DEPONENT
                </footer>
            </div>
            <div className="btns">
                <button className='continueBtn' onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
};

export default Affidevit;
