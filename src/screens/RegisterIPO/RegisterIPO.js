import React, { useEffect } from "react";
import Helpdesk from "../global-components/HelpAndSupport/Helpdesk";
import './registeripo.css'

const RegisterIPO = (props) => {

    useEffect(() => {
        props.Progress(100);
    }, [])

    return (
        <>
            <main className="IP-Registration">
                <section>
                    {props.screen}
                </section>
                <aside>
                    <Helpdesk />
                </aside>
            </main>

        </>
    )
}

export default RegisterIPO;