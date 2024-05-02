import React, { useEffect } from "react";
import "./contentScreen.css";
import PatentContent from "./components/PatentContent/PatentContent";
import TrademarkContent from "./components/TrademarkContent/TrademarkContent";
import CopyrightContent from "./components/CopyrightContent/CopyrightContent";
import DesignContent from "./components/DesignContent/DesignContent";
import { useLocation } from "react-router-dom";

const ContentScreen = () => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state.viewData);
    }, []);

    return(
        state.type === "Trademark" ? <TrademarkContent viewData = { state.viewData } /> : state.type === "Copyright" ? 
            <CopyrightContent  viewData = { state.viewData } /> :  state.type === "Patent" ? 
            <PatentContent  viewData = { state.viewData } /> :  <DesignContent  viewData = { state.viewData } />
    );
}

export default ContentScreen;