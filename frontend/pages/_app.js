import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Meta from "../components/Meta";
import "../styles/style.css";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export const isDev = true;
export const endpoint = isDev ? "http://localhost:7777/" : "";

function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Meta />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Page>
    );
}

export default MyApp;
