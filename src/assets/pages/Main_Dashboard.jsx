import React from 'react'
import Sidebar from '../components/Sidebar'
import '../pages/Main-Dashboard.css'

function Main_Dashboard(props) {
    return (
            <main className="Dashboard-Section">
                <div className="left-Subsection">
                    <Sidebar />
                </div>
                <div className="right-Subsection">
                    {props.screen}
                </div>
            </main>
    )
}

export default Main_Dashboard
