import React from "react";
import "./contentScreen.css";
import PatentContent from "./components/PatentContent/PatentContent";
import TrademarkContent from "./components/TrademarkContent/TrademarkContent";
import CopyrightContent from "./components/CopyrightContent/CopyrightContent";
import DesignContent from "./components/DesignContent/DesignContent";

const ContentScreen = () => {
    return(
        <div className="contentScreen-parent">
            <div className="content-screen-header">
                <h4>IPO Type: <span>Patent</span></h4>
                <h4 className="examining-application">Examining Application</h4>
                <h4>Examiner Name: <span>Haider Ali</span></h4>
            </div>
            <DesignContent />
        </div>
    );
}

export default ContentScreen;