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
                    <SpecialItem
                        title={"Cedar-Planked Smoked Salmon"}
                        description={"Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."}
                        price={"23.99"}
                        calories={"1200"}
                    />
                    <TwoColumnCollapse>
                        <MenuItem
                            title={"Cedar-Planked Smoked Salmon"}
                            description={"Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."}
                            price={"23.99"}
                            calories={"1200"}
                        />
                    </TwoColumnCollapse>
                    <TwoColumnCollapse></TwoColumnCollapse>
                </div>
            </div>
            {!isLast && <hr className={"hrMenu"} />}
        </>
    );
}

const SpecialItem = ({ title, description, price, calories }) =>
    <div className={"section-card-special flex"}>
        <div className={"menu-special-image"}>
            <img src="/static/images/salmon-special.png" />
        </div>
        <div className={"menu-special-context pl4"}>
            <h3 className={"f4 color-a"}>Cedar-Planked Smoked Salmon</h3>
            <p>Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o.</p>
            <h3 className="color-a dib">{priceToString(price)}</h3>
        </div>
    </div>

const MenuItem = ({ title, description, price, calories }) =>
    <div className="fl w-100 w-50-ns tl pa1">
        <h3 className={"f4 color-a"}>{title}</h3>
        <p className={"ma0"}>{description}</p>
        <h3 className={"f5 color-a dib"}>{`${calories} Calories `}</h3>
        <span className="black dib mh2">|</span>
        <h3 className="color-a dib">{priceToString(price)}</h3>
    </div>

export default MenuSection;

export const priceToString = (price) => {
    return `$${price}`;
}