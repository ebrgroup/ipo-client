import "./AuthHome.css";
import ipoLogo from "../assets/Icons/ipologo.png";
import { ToastContainer } from "react-toastify";

const AuthHome = (props) => {

    return (
        <main className="authHome">
            <div className="formHolderDiv">
                <div className="formHolderDivContent">
                    <img src={ipoLogo} alt="IPO Logo" className="ipoLogoImg" />
                    {props.screen}
                </div>
            </div>
            <div className="sideContentDiv">
                <div className="authContentDiv">
                    <h1 className="authHeading">
                        Intellectual Property Excellence
                    </h1>
                    <p>
                        We are the forefront guardians of intellectual property rights. Committed to excellence, we provide tailored 
                        solutions for individuals and businesses.
                    </p>
                    <p className="joinedUsText">
                        3k+ people joined us, now it’s your turn
                    </p>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{marginTop: "5vh"}}
            />
        </main>
    );
};

export default AuthHome;