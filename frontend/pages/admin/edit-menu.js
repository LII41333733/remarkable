import Link from "next/link";
import TwoColumnCollapse from "../../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../../components/MainContainer";
import MenuSection from "../../components/MenuSection";
import { ListBullets } from "phosphor-react";
import { ListPlus } from "phosphor-react";

const Menu = () => {
    return (
        <MainContainer gutterClass="smallGutter">
            <h1 className="mb3 mt6 tl jumboTitle">Edit Categories</h1>
            <hr class="hrMenu mb4"></hr>
            <div className="fl w-100 tl">
            </div>
        </MainContainer>
    );
};

export default Menu;