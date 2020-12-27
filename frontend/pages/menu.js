import Link from "next/link";
import TwoColumnCollapse from "../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../components/MainContainer";
import MenuSection from "../components/MenuSection";

const Menu = () => {
    return (
        <MainContainer gutterClass={"largeGutter"}>
            <h1 className="mb3 mt6"><span className="jumboTitle">taste </span> <span className="remarkableHead">remarkable</span></h1>
            <MenuSection />
            <MenuSection isLast={true} />
        </MainContainer>
    );
};

export default Menu;
