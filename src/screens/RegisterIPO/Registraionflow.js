import React, { useEffect, useState } from 'react'
import Registrationsteps from '../global-components/Registration Steps/Registrationsteps'
import './registrationflow.css'
import { useSelector } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Registraionflow = ({ screen }) => {

    const [progress, setProgress] = useState(0)
    const progressVal = useSelector(state => state?.loadingReducer?.progress)
    useEffect(() => {
        setProgress(progressVal)
    }, [progressVal])
    return (

        <>
            {/* < LoadingBar
                color='#f11946'
                progress={progress}
                loaderSpeed={500}
                height={4}
            /> */}

            <div className="progressbar">

                <ProgressBar
                    percent={progress}
                    filledBackground="#73A2A2"
                >
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <span
                                style={{ opacity: `(${accomplished ? 1 : 0.7})` }}
                            >1</span>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <span
                                style={{ opacity: `(${accomplished ? 1 : 0.7})` }}
                            >2</span>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <span
                                style={{ opacity: `(${accomplished ? 1 : 0.7})` }}
                            >3</span>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <span
                                style={{ opacity: `(${accomplished ? 1 : 0.7})` }}
                            >4</span>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <span
                                style={{ opacity: `(${accomplished ? 1 : 0.7})` }}
                            >5</span>
                        )}
                    </Step>
                    {/* <Step transition="scale">
                        {({ accomplished }) => (
                            <img
                                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                width="30"
                                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                            />
                        )}
                    </Step> */}
                </ProgressBar>

            </div>

            <main className="Registration-Flow">
                <aside>
                    <Registrationsteps />
                </aside>
                <section>
                    {screen}
                </section>
            </main >
        </>



    )
}

export default Registraionflow
