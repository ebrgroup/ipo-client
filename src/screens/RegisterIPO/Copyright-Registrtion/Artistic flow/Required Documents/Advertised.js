import React from 'react'
import './advertised.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ArtisticAdvertise from './Adverisement/ArtisticAdvertise';

const Advertised = () => {

    const handleDownload = () => {
        const element = document.querySelector('.Advertised-container');
        if (!element) {
            console.error('Element with ID "content-container" not found');
            return;
        }

        // Allow capturing of external images (if needed)
        const allowTaint = true;

        html2canvas(element, { allowTaint }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // Dynamically adjust PDF size based on captured content
            const width = canvas.width;
            const height = canvas.height;
            const doc = new jsPDF('p', 'px', [width, height]);

            doc.addImage(imgData, 'PNG', 0, 0);
            doc.save('advertisement.pdf');
        }).catch((error) => {
            console.error('Error while converting to canvas:', error);
        });
    };

    return (
        <div className='Advertised'>
            <div className="Advertised-container">
                <div className="content-wrapper">
                  <ArtisticAdvertise/>
                </div>

            </div>
            <div className="btns">
                <button className='continueBtn' onClick={handleDownload}>Download</button>
            </div>
        </div>
    )
}

export default Advertised
