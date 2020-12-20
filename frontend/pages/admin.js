import Link from "next/link";
import TwoColumnCollapse from "../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../components/MainContainer";
import MenuSection from "../components/MenuSection";
import { ListBullets } from "phosphor-react";
import { ListPlus } from "phosphor-react";

const Menu = () => {
    return (
        <MainContainer gutterClass="smallGutter">
            <h1 className="mb3 mt6 tl jumboTitle">Dashboard</h1>
            <hr class="hrMenu mb4"></hr>
            <div className="fl w-100 tl">
                <DashIcon
                    icon={<ListBullets size={35} />}
                    text="Edit Menu Categories"
                />
                <DashIcon
                    icon={<ListPlus size={35} />}
                    text="Edit Menu Items"
                />
            </div>
        </MainContainer>
    );
};

export default Menu;

const DashIcon = ({ icon, text }) => {
    const circle = <div className="dash-circle"></div>
    const circle_ = <div className="dash-circle2"></div>
    const icon_ = <div className="dash-icon">{icon}</div>
    const text_ = <h3 className="f4 dash-text">{text}</h3>
    return (
        <div className="dash-div mr4">
            {[
                circle,
                circle_,
                icon_,
                text_]}
        </div>
    );
}
