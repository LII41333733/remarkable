import Link from "next/link";
import TwoColumnCollapse from "../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../components/MainContainer";
import MenuSection from "../components/MenuSection";

const Menu = () => {
    return (
        <MainContainer>
            <h1 className="mb3 mt6"><span className="tasteHead">taste </span> <span className="remarkableHead">remarkable</span>.</h1>
            <MenuSection />
            <MenuSection isLast={true} />
        </MainContainer>
    );
};

export default Menu;
