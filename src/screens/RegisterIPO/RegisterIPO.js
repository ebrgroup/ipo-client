import React, { useEffect } from "react";

const RegisterIPO = (props) => {

    useEffect(() => {
        props.Progress(100);
    }, [])

    return (
        <>
            RegisterIPO
        </>
    )
}

export default RegisterIPO;