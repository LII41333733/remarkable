import { useRouter } from "next/router";
import TwoColumnCollapse from "../../components/LayoutComponents/TwoColumnCollapse";
import MainContainer from "../../components/MainContainer";
import MenuSection from "../../components/MenuSection";
import { CaretLeft, ListBullets } from "phosphor-react";
import { ListPlus } from "phosphor-react";
import { DashCircle } from "../../components/DashCircle";

const Menu = () => {
    const router = useRouter();

    return (
        <>
            <MainContainer gutterClass="smallGutter">
                <h1 className="mb3 mt6 tl jumboTitle">Edit Categories</h1>
                <hr class="hrMenu mb4"></hr>
                <div className="fl w-100 tl">
                </div>
            </MainContainer>
            <DashCircle
                onClick={() => router.back()}
                styles={{
                    position: "fixed",
                    top: "140px",
                    left: "10%",
                }}
                icon={<CaretLeft size={35} />}
            />
        </>
    );
};

export default Menu;