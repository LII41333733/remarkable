import { useEffect, useState } from "react";
import { endpoint, isDev } from "../pages/_app";

const MainContainer = ({ children }) => {
    const [isHome, setIsHome] = useState(true);
    useEffect(() => {
        setIsHome(window.location.href === endpoint && isDev);
    }, [])
    return (
        <div className={`mainContainer tc ${isHome ? "" : "addGutters"}`}>
            {children}
        </div>
    );
};

export default MainContainer;
