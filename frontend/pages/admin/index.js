import Link from "next/link";
import TwoColumnCollapse from "../../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../../components/MainContainer";
import MenuSection from "../../components/MenuSection";
import { ListBullets } from "phosphor-react";
import { ListPlus } from "phosphor-react";
import { DashCircle } from "../../components/DashCircle";

const Menu = () => {
    return (
        <MainContainer gutterClass="smallGutter">
            <h1 className="mb3 mt6 tl jumboTitle">Dashboard</h1>
            <hr class="hrMenu mb4"></hr>
            <div className="fl w-100 tl">
                <DashIcon
                    icon={<ListBullets size={35} />}
                    text={"Edit Menu Categories"}
                    url={"/admin/edit-categories"}
                />
                <DashIcon
                    icon={<ListPlus size={35} />}
                    text="Edit Menu Items"
                    url={"/admin/edit-menu"}
                />
            </div>
        </MainContainer>
    );
};

export default Menu;

const DashIcon = ({ icon, text, url }) => {
    const text_ = <h3 className="f4 dash-text">{text}</h3>

    return (
        <Link href={url}>
            <div className="cursor dash-div mr4">
                {[
                    <DashCircle icon={icon} />,
                    text_]}
            </div>
        </Link>
    );
}

