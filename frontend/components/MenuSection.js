import React from "react";
import TwoColumnCollapse from "./LayoutComponents/TwoColumnCollapse";

const MenuSection = () => {
    return (
        <div className={"menu-divs flex flex-row mt5"}>
            <div className={"menu-divs-left"}>
                <h2 className="categoryHead categoryHeadDesktop">Appetizers</h2>
            </div>
            <div className={"menu-divs-right"}>
                <h2 className="categoryHead categoryHeadMobile">Appetizers</h2>
                <div className={"section-card-special flex"}>
                    <div className={"menu-special-image"}>
                        <img src="/static/images/salad.jfif" />
                    </div>
                </div>
                <TwoColumnCollapse />
                <TwoColumnCollapse />
                <TwoColumnCollapse />
                <TwoColumnCollapse />
                <TwoColumnCollapse />
            </div>
        </div>
    );
}

export default MenuSection;