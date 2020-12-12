import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Meta from "../components/Meta";
import "../styles/style.css";
import MainContainer from "../components/MainContainer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Navbar />
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </>
    );
}

export default MyApp;
