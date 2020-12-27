import MainContainer from "../components/MainContainer";

const HomeImageComponent = ({ url = '', title = '', description = '' }) => (
    <div className="square-box fl w-50 w-third-m w-25-ns">
        <div style={{ backgroundImage: `url(${url})` }} className="scale90 bg-center cover square-content aspect-ratio aspect-ratio--1x1">
            {/* <img
                className="db scale90 bg-center cover aspect-ratio--object" /> */}
            <div className={`hoverDiv bg-f db scale90 bg-center cover aspect-ratio--object`}>
                <div className={"captionDiv w-100 h-100"}>
                    <div className={"centerDiv"}>
                        <p className="f4">{title}</p>
                    </div>
                    <hr className={"hrCaption1"} />
                    <div className={"captionDescription"}>{description}</div>
                </div>
            </div>
        </div>
    </div>
);

const Home = () => {
    return (
        <MainContainer>
            <main className="cf w-100">
                {urls.map(({ url, title, description }) =>
                    <HomeImageComponent
                        url={url}
                        title={title}
                        description={description}
                    />)}
            </main>
        </MainContainer>
    );
};

const urls = [
    {
        url: "/static/images/salad.jfif",
        //70 char limit
        title: "Jack Daniels Glazed Whiskey Burger Jack Daniels Glazed Whiskey Burgers",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/seafood.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/drinks.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/scallops.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/tira.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/chicken.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/salmon.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/pasta.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/steak.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
    {
        url: "/static/images/soup.jfif",
        title: "Jack Daniels Glazed Whiskey Burger",
        description: "Brie bavarian bergkase stinking bishop. Squirty cheese everyone loves queso paneer cauliflower cheese gouda taleggio manchego. Cheese o."
    },
]

export default Home;
