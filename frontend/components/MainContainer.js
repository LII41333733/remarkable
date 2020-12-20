import { useEffect, useState } from "react";
import { endpoint, isDev } from "../pages/_app";

const MainContainer = ({ children, gutterClass = "" }) => {
    return (
        <div className={`mainContainer tc ${gutterClass}`}>
            {children}
        </div>
    );
};

export default MainContainer;
