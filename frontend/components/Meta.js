import Head from "next/head";

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4/css/tachyons.min.css"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>remarkable</title>
    </Head>
);

export default Meta;
