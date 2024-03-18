import React from 'react'
import RegistrationSteps from './components/RegistrationSteps/RegistrationSteps';
import '../RegisterIPO/registrationflow.css';

const PatentFlow = ({ screen }) => {
    return (

        <main className="Registration-Flow">
            <aside>
                <RegistrationSteps />
            </aside>
            <section>
                {screen}
            </section>
        </main>

    )
}

export default PatentFlow;