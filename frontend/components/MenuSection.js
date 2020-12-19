import React from "react";
import TwoColumnCollapse from "./LayoutComponents/TwoColumnCollapse";

const MenuSection = ({ isLast = false }) => {
    return (
        <>
            <div className={"menu-divs flex flex-row mt4 mb4"}>
                <div className={"menu-divs-left"}>
                    <h2 className="categoryHead categoryHeadDesktop">Appetizers</h2>
                </div>
                <div className={"menu-divs-right"}>
                    <h2 className="categoryHead categoryHeadMobile">Appetizers</h2>
                    <SpecialsSection />
                    <TwoColumnCollapse />
                    <TwoColumnCollapse />
                </div>
            </div>
            {!isLast && <hr className={"hrMenu"} />}
        </>
    );
}

const SpecialsSection = () =>
    <div className={"section-card-special flex"}>
        <div className={"menu-special-image"}>
            <img src="/static/images/salmon-special.png" />
        </div>
        <div className={"menu-special-context pl4"}>
            <h3 className={"f4"}>Cedar-Planked Smoked Salmon</h3>
            <p>Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese on toast cottage cheese fromage stilton babybel swiss taleggio cheesy feet. Swiss.</p>
            <h3 className={"f5"}>1500 Calories | $23.99</h3>
        </div>
    </div>

export default MenuSection;